import React,{useEffect} from 'react';
import "./styles/Output.css"
function OutputArea({ output }) {
  useEffect(() => {
    console.log("OutputArea received output:", output);
  }, [output]);

  return (
    <div className="opContainer">
      <div className="opArea">
       
        <pre className="area">{output}</pre>
      </div>
    </div>
  );
}

export default OutputArea;
