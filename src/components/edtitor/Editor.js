// components/TextEditor.js
"use client";

import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const TextEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      theme="snow" // Use the "snow" theme, which matches the Tailwind CSS styling
      modules={{
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          ["link"],
          ["clean"],
        ],
      }}
    />
  );
};

export default TextEditor;
