import React from 'react';
import axios from 'axios';
import "./styles/CodeLoader.css"

function CodeLoader({ onCodeLoad, questions }) {
  const loadCode = async (url, titleText, descriptionHTML) => {
    try {
      const response = url;
      onCodeLoad(response, titleText, descriptionHTML);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  return (
    <div className="btn-grp">
      {questions.map(question => (
        <button
          key={question.id}
          className='codeloader-btn'
          onClick={() => loadCode(
            question.fields.CodeURL,  // Ensure URL is passed correctly
            question.fields.Title,
            generateDescription(
              question.fields.GeneralDescription,
              question.fields.Examples,
              question.fields.Constraint
            )
          )}
        >
          {question.fields.Title}
        </button>
      ))}
    </div>
  );
}

const generateDescription = (generalDescription, examples, constraints) => {
  const constraintsList = constraints.split('\n').filter(Boolean).map(constraint => `<li>${constraint}</li>`).join('');
  
  return `
    <h2>General Description</h2>
    <p>${generalDescription}</p>
    <h2>Examples</h2>
    <pre><code>${examples}</code></pre>
    <h2>Constraints</h2>
    <ul>${constraintsList}</ul>
  `;
};

export default CodeLoader;
