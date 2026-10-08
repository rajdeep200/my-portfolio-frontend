"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";

// Backend base URL, set per environment (see .env.example). Inlined at build time.
const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL;
const MAX_CHARS = 500; // must match the backend limit
const REQUEST_TIMEOUT_MS = 70_000; // free Render instances can take ~50s to wake
const SLOW_NOTICE_MS = 6_000;

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  error?: boolean;
  retry?: string; // the question to resend, for error bubbles
  animate?: boolean; // reveal text gradually (only for fresh bot replies)
};

const GREETING: Message = {
  id: 0,
  role: "bot",
  text: "Hi! I'm trained on Rajdeep's resume, work history, and project docs. Ask me anything: what he's shipped, his stack, or how to reach him.",
};

const CHIPS = [
  "What's his tech stack?",
  "Is he available for freelance work?",
  "What's his RAG experience?",
];

// Minimal markdown: **bold**, "- " bullets, and blank-line paragraphs.
function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

function RichText({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/);
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split("\n").filter(Boolean);
        if (lines.length && lines.every((l) => /^\s*[-*•]\s+/.test(l))) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{renderInline(l.replace(/^\s*[-*•]\s+/, ""))}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{renderInline(lines.join(" "))}</p>;
      })}
    </>
  );
}

// Reveals a reply a few characters at a time so it feels like it is being typed.
function TypedText({ text, onProgress }: { text: string; onProgress: () => void }) {
  const [shown, setShown] = useState(0);
  const done = shown >= text.length;

  useEffect(() => {
    if (done) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(text.length);
      return;
    }
    // ~600 chars/sec, so a typical reply takes about a second
    const id = window.setInterval(() => {
      setShown((n) => Math.min(text.length, n + 6));
      onProgress();
    }, 10);
    return () => window.clearInterval(id);
  }, [done, text, onProgress]);

  return <RichText text={done ? text : text.slice(0, shown)} />;
}

function friendlyError(status: number | "network" | "timeout"): string {
  if (status === 429)
    return "You're sending messages a little fast, or today's limit has been reached. Please try again in a bit, or email grajdeep2000@gmail.com.";
  if (status === 422)
    return `Please keep your message between 1 and ${MAX_CHARS} characters.`;
  if (status === "timeout")
    return "The server is taking too long to wake up. Please try again in a moment.";
  if (status === "network")
    return "I couldn't reach the server. Check your connection and try again.";
  return "Something went wrong on my side. Please try again, or email grajdeep2000@gmail.com.";
}

export default function AskWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [sending, setSending] = useState(false);
  const [slow, setSlow] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, sending, slow, scrollToBottom]);

  // Focus the input when the panel opens; Escape closes it.
  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 220);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const ask = useCallback(
    async (question: string, isRetry = false) => {
      const text = question.trim();
      if (!text || sending) return;

      // On retry, drop the error bubble instead of repeating the user's message.
      setMessages((prev) =>
        isRetry
          ? prev.filter((m) => !m.error)
          : [...prev, { id: nextId.current++, role: "user", text }]
      );
      setDraft("");
      setSending(true);
      setSlow(false);

      const controller = new AbortController();
      abortRef.current = controller;
      const slowTimer = window.setTimeout(() => setSlow(true), SLOW_NOTICE_MS);
      const timeoutTimer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

      const fail = (status: number | "network" | "timeout") =>
        setMessages((prev) => [
          ...prev,
          {
            id: nextId.current++,
            role: "bot",
            text: friendlyError(status),
            error: true,
            retry: status === 429 || status === 422 ? undefined : text,
          },
        ]);

      try {
        if (!API_URL) {
          console.error("NEXT_PUBLIC_CHAT_API_URL is not set");
          fail(500);
          return;
        }
        const res = await fetch(`${API_URL}/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text }),
          signal: controller.signal,
        });
        if (!res.ok) {
          fail(res.status);
        } else {
          const data: { reply?: string } = await res.json();
          setMessages((prev) => [
            ...prev,
            {
              id: nextId.current++,
              role: "bot",
              text: data.reply?.trim() || "Sorry, I didn't get an answer. Please try again.",
              animate: true,
            },
          ]);
        }
      } catch (err) {
        if ((err as Error).name === "AbortError") fail("timeout");
        else fail("network");
      } finally {
        window.clearTimeout(slowTimer);
        window.clearTimeout(timeoutTimer);
        setSending(false);
        setSlow(false);
        inputRef.current?.focus();
      }
    },
    [sending]
  );

  const hasUserMessage = messages.some((m) => m.role === "user");
  const canSend = draft.trim().length > 0 && !sending;

  return (
    <>
      <button
        type="button"
        className={`ask-launcher${open ? " ask-launcher-hidden" : ""}`}
        aria-label="Open chat assistant"
        aria-hidden={open}
        tabIndex={open ? -1 : 0}
        onClick={() => setOpen(true)}
      >
        <span className="ask-launcher-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </span>
        Ask me anything
      </button>

      <div
        className={`ask-panel${open ? " ask-panel-open" : ""}`}
        role="dialog"
        aria-label="Ask Rajdeep chat"
        aria-hidden={!open}
      >
        <div className="ask-head">
          <div className="ask-head-id">
            <div className="ask-avatar" aria-hidden="true">
              RG
              <span className="ask-status" />
            </div>
            <div>
              <div className="ask-title">Ask Rajdeep</div>
              <div className="ask-sub">Answers from his real project docs</div>
            </div>
          </div>
          <button type="button" className="ask-close" aria-label="Close chat" onClick={() => setOpen(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="ask-messages" ref={listRef} aria-live="polite">
          {messages.map((m) => (
            <div key={m.id} className={`ask-row ask-row-${m.role}`}>
              <div className={`ask-bubble ask-bubble-${m.role}${m.error ? " ask-bubble-error" : ""}`}>
                {m.role === "bot" && m.animate ? (
                  <TypedText text={m.text} onProgress={scrollToBottom} />
                ) : (
                  <RichText text={m.text} />
                )}
                {m.retry && (
                  <button type="button" className="ask-retry" onClick={() => ask(m.retry!, true)} disabled={sending}>
                    Try again
                  </button>
                )}
              </div>
            </div>
          ))}

          {sending && (
            <div className="ask-row ask-row-bot">
              <div className="ask-bubble ask-bubble-bot ask-typing" aria-label="The assistant is typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          {sending && slow && (
            <div className="ask-slow">Waking the server up. The first reply can take up to a minute.</div>
          )}
        </div>

        {!hasUserMessage && (
          <div className="ask-chips">
            {CHIPS.map((chip) => (
              <button key={chip} type="button" className="ask-chip" disabled={sending} onClick={() => ask(chip)}>
                {chip}
              </button>
            ))}
          </div>
        )}

        <form
          className="ask-input-row"
          onSubmit={(e) => {
            e.preventDefault();
            ask(draft);
          }}
        >
          <input
            ref={inputRef}
            type="text"
            className="ask-input"
            value={draft}
            maxLength={MAX_CHARS}
            placeholder="Ask about his experience..."
            aria-label="Message"
            disabled={sending}
            onChange={(e) => setDraft(e.target.value)}
          />
          <button type="submit" className="ask-send" aria-label="Send message" disabled={!canSend}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22l-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>

        <div className="ask-foot">
          {draft.length > MAX_CHARS - 80
            ? `${draft.length}/${MAX_CHARS}`
            : "AI answers from Rajdeep's docs. It can make mistakes."}
        </div>
      </div>
    </>
  );
}
