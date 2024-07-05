import React from 'react';
import axios from 'axios';
import "./styles/CodeLoader.css"
function CodeLoader({ onCodeLoad }) {
  const loadCode = async (url, titleText, descriptionHTML) => {
    try {
      const response = await axios.get(url);
      onCodeLoad(response.data, titleText, descriptionHTML);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  return (
    <div className="btn-grp">
      <button className='codeloader-btn' onClick={() => loadCode('../static/twosum.py', 'TWO SUM', 'Your description here')}>Two Sum</button>
      <button  className='codeloader-btn' onClick={() => loadCode('../static/container.py', 'Container with Most Water', 'Your description here')}>Container with Most Water</button>
      <button  className='codeloader-btn' onClick={() => loadCode('../static/fibonacci.py', 'Fibonacci', 'Your description here')}>Fibonacci</button>
      <button  className='codeloader-btn' onClick={() => loadCode('../static/reverse.py', 'Reverse a String', 'Your description here')}>Reverse a String</button>
    </div>
  );
}

export default CodeLoader;
