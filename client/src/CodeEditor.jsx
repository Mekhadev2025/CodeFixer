import React, { useState, useEffect } from 'react';

function CodeEditor({ code, onRunCode }) {
  const [currentCode, setCurrentCode] = useState(code);

  useEffect(() => {
    setCurrentCode(code);
  }, [code]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRunCode(currentCode);
  };

  return (
    <div className="edit">
      <textarea
        name="code"
        className="editor"
        rows="10"
        cols="50"
        value={currentCode}
        onChange={(e) => setCurrentCode(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Run Code</button>
    </div>
  );
}

export default CodeEditor;
