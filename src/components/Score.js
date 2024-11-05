import React from 'react';

function Score({ score }) {
  return (
    <div>
      <h2>Juego terminado</h2>
      <p>Tu puntaje es: {score}</p>
    </div>
  );
}

export default Score;
