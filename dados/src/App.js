import React, { useState } from 'react';
import './App.css';

function App() {
  // Usando o state para armazenar os valores dos dados e o resultado
  const [dado1, setDado1] = useState(0);
  const [dado2, setDado2] = useState(0);
  const [resultado, setResultado] = useState('');

  // Função que rola os dados
  const rolarDados = () => {
    const resultado1 = Math.floor(Math.random() * 6) + 1;
    const resultado2 = Math.floor(Math.random() * 6) + 1;

    setDado1(resultado1);
    setDado2(resultado2);

    if (resultado1 + resultado2 === 11 || resultado1 + resultado2 === 9) {
      setResultado('Você ganhou!');
    } else {
      setResultado('Perdeu!');
    }
  };

  return (
    <div className="App">
      <div id="conteinar">
        <p id="dado1">{dado1}</p>
        <p id="dado2">{dado2}</p>
        <p id="resultado">{resultado}</p>
        <br />
        <input type="button" value="jogar" onClick={rolarDados} />
      </div>
    </div>
  );
}

export default App;
