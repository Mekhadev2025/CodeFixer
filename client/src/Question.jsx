import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CodeLoader from './CodeLoader';
import CodeEditor from './CodeEditor';
import OutputArea from './OutputArea';
import './App.css';
import axios from 'axios';

function Question() {
  const [selectedCode, setSelectedCode] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [output, setOutput] = useState("");

  const handleCodeLoad = (code, title, description) => {
    setSelectedCode(code);
    setTitle(title);
    setDescription(description);
    setOutput("");
  };

  const handleCodeRun = async (code) => {
    try {
      console.log("Trying to send data...");
      const response = await axios.post('http://localhost:3000/run-code', { code });
      console.log("Response received:", response.data);
      setOutput(response.data.output);
    } catch (error) {
      setOutput("Error: " + error.message);
    }
  };

  // Log the output state whenever it changes
  useEffect(() => {
    console.log("Output state updated:", output);
  }, [output]);

  return (
    <div className="App">
      <Navbar />
      <h1>Debugging</h1>
      <CodeLoader onCodeLoad={handleCodeLoad} />
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="partition">
        <CodeEditor code={selectedCode} onRunCode={handleCodeRun} />
        <OutputArea output={output} />
      </div>
    </div>
  );
}

export default Question;