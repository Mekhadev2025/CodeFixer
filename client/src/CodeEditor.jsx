import React, { useState, useEffect } from "react";
import "./styles/CodeEditor.css";

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
      <div className="editor-wrap">
        <div className="code-bar">
          <div className="lang-dropdown">
            <select name="language" id="language" className="dropdown">
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="c">C</option>
              <option value="cpp">C++</option>
            </select>
          </div>
          <div className="btn-group">
          <button className="run-btn" onClick={handleSubmit}>
            Run
          </button>
          <button className="submit-btn">Submit Code</button>
        </div>
        </div>
        <textarea
          name="code"
          className="editor"
          rows="10"
          cols="50"
          value={currentCode}
          onChange={(e) => setCurrentCode(e.target.value)}
        ></textarea>
      </div>
    
      </div>
  );
}

export default CodeEditor;
