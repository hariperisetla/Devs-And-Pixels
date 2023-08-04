"use client";

// components/CodeEditor.js
import React, { useState, useEffect } from "react";
import MonacoEditor from "react-monaco-editor";

const CodeEditor = () => {
  const [code, setCode] = useState("");

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  // Initialize Monaco Editor with an empty string once the component mounts
  useEffect(() => {
    setCode("");
  }, []);

  return (
    <MonacoEditor
      width="100%" // Set the width of the editor
      height="500" // Set the height of the editor (adjust as needed)
      language="javascript" // Set the programming language mode
      theme="vs-dark" // Choose a theme ('vs' for light theme, 'vs-dark' for dark theme)
      value={code}
      onChange={handleCodeChange}
    />
  );
};

export default CodeEditor;
