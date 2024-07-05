import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CodeLoader from "./CodeLoader";
import CodeEditor from "./CodeEditor";
import OutputArea from "./OutputArea";
import "./styles/Question.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Airtable from 'airtable';



function Question() {
    const airtableApiKey = "patYSF5UnpkwAeWpK.e196c2788dd2e5d327ea4e9d52d5624147fed9e1a9abcbec3855206915c77f5b";
const airtableBaseId = "app8ei1ffPYtMRh1M";
console.log('Airtable API Key:', airtableApiKey);
console.log('Airtable Base ID:', airtableBaseId);

const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);
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

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    base('Questions')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setQuestions(records);
        fetchNextPage();
      }, (err) => {
        if (err) { console.error(err); return; }
      });
  }, []);

  const handleCodeRun = async (code) => {
    try {
      const response = await axios.post("http://localhost:3000/run-code", { code });
      setOutput(response.data.output);
    } catch (error) {
      setOutput("Error: " + error.message);
    }
  };

  useEffect(() => {
    console.log("Output state updated:", output);
  }, [output]);

  return (
    <div className="qn-wrap">
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
                <CodeLoader onCodeLoad={handleCodeLoad} questions={questions} />
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <div className="qn-section2">
        <CodeEditor code={selectedCode} onRunCode={handleCodeRun} />
        <OutputArea output={output} />
      </div>
    </div>
  );
}

export default Question;
