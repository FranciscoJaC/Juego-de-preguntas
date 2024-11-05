import React from 'react';

function Question({ questionData, handleAnswer }) {
  return (
    <div>
      <h2>{questionData.question}</h2>
      {questionData.options.map((option) => (
        <button key={option} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;
