// src/components/Menu.js
import React from 'react';

function Menu({ onStartGame }) {
  const categories = ["Historia", "Ciencia", "Geografia", "Deportes"]; // Ejemplo de categorías

  return (
    <div className="menu">
      <h1>Juego de Trivia</h1>
      <h2>Elige una categoría</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => onStartGame(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
