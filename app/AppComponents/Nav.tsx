const LINKS = [
  { href: "#about", label: "About" },
  { href: "#current", label: "Current" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="logo">
          RG<span className="logo-dot">.</span>
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:grajdeep2000@gmail.com"
          className="btn btn-sm btn-ghost"
        >
          Say hello
        </a>
      </div>
    </nav>
  );
}
