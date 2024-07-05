import React,{useEffect} from 'react';

function OutputArea({ output }) {
  useEffect(() => {
    console.log("OutputArea received output:", output);
  }, [output]);

  return (
    <div className="opContainer">
      <div className="opArea">
        <h2>Your Output:</h2>
        <pre className="area">{output}</pre>
      </div>
    </div>
  );
}

export default OutputArea;
