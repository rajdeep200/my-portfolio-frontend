"use client"; // Ensure this runs only on the client side

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Dynamically import Editor to prevent SSR issues
const Editor = dynamic(() => import("react-draft-wysiwyg").then(mod => mod.Editor), { ssr: false });

export default function BlogEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle editor changes
  const onEditorStateChange = (newState: EditorState) => {
    setEditorState(newState);
  };

  // Save content as HTML
  const handleSave = () => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log("Saved Blog Content:", content);
    alert("Blog saved successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Write Your Blog</h1>

      {isMounted && (
        <div className="bg-white border rounded">
          <Editor
            editorState={editorState}
            toolbarClassName="border-b bg-gray-200"
            wrapperClassName="p-2"
            editorClassName="p-3 min-h-[200px]"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
      )}

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save Blog
      </button>
    </div>
  );
}
