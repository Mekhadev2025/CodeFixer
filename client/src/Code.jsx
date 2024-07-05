// import { useState,useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import CodeLoader from './CodeLoader';
// function Code() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


//   const [selectedCode, setSelectedCode] = useState("");
//   const [description, setDescription] = useState("");
//   const [title, setTitle] = useState("");
//   const [output, setOutput] = useState("");

//   const handleCodeLoad = (code, title, description) => {
//     setSelectedCode(code);
//     setTitle(title);
//     setDescription(description);
//     setOutput("");
//   };

// //   const handleCodeRun = async (code) => {
// //     try {
// //       console.log("Trying to send data...");
// //       const response = await axios.post('http://localhost:3000/run-code', { code });
// //       console.log("Response received:", response.data);
// //       setOutput(response.data.output);
// //     } catch (error) {
// //       setOutput("Error: " + error.message);
// //     }
// //   };

//   // Log the output state whenever it changes
//   useEffect(() => {
//     console.log("Output state updated:", output);
//   }, [output]);


//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Question List
//       </Button>

//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//         <CodeLoader onCodeLoad={handleCodeLoad} />     
//            </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default Code;