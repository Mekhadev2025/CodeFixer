import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CodeLoader from './CodeLoader';
import CodeEditor from './CodeEditor';
import OutputArea from './OutputArea';
import './App.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Code from './Code';

function Question() {
  const [selectedCode, setSelectedCode] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [output, setOutput] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
    <div >
        {/* <Code/> */}
     {/* <h1>Debugging</h1> */}

     <Button variant="primary" onClick={handleShow}>
        Question List
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <CodeLoader onCodeLoad={handleCodeLoad} />     
           </Offcanvas.Body>
      </Offcanvas>
      {/* <CodeLoader onCodeLoad={handleCodeLoad} /> */}
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="patition">
        <CodeEditor code={selectedCode} onRunCode={handleCodeRun} />
        <OutputArea output={output} />
      </div>
    </div>
  );
}

export default Question;