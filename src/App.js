import React, { useState, useEffect } from 'react';
import questionsData from './questions';
import Menu from './components/Menu';
import Question from './components/Question';
import Score from './components/Score';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [categorySelected, setCategorySelected] = useState(false); // Nuevo estado para el menú

  const handleStartGame = (category) => {
    setCategorySelected(true);
    const filteredQuestions = questionsData.filter(q => q.category === category);
    const shuffledQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setGameOver(true);
      }
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="App">
      {categorySelected ? (
        gameOver ? (
          <Score score={score} />
        ) : (
          questions.length > 0 && (
            <Question
              questionData={questions[currentQuestion]}
              handleAnswer={handleAnswer}
            />
          )
        )
      ) : (
        <Menu onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;
