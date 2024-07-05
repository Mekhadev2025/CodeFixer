import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CodeLoader from "./CodeLoader";
import CodeEditor from "./CodeEditor";
import OutputArea from "./OutputArea";
import "./styles/Question.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
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
      const response = await axios.post("http://localhost:3000/run-code", {
        code,
      });
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
    <div className='qn-wrap'
    >
        <div className="qn-section1">
                  <div className="title-wrap">
        <div className="title">{title}</div>
        <button className="qn-btn" onClick={handleShow}>
        Question List
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Question List</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body style={{ padding: 0 }}>
          <div
            className="offcanvas-wrap"
            style={{ width: "100%", height: "100%" }}
          >
            <CodeLoader onCodeLoad={handleCodeLoad} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
      

      <div className="description">{description}</div>
        </div>

      <div className="qn-section2">
        <CodeEditor code={selectedCode} onRunCode={handleCodeRun} />
        <OutputArea output={output} />
      </div>
      


    </div>
  );
}

export default Question;
