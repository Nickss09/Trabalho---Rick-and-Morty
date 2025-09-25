import './App.css'
import React, { useState } from 'react';
import Titulo from './components/Titulo'
import Foto from './components/Foto';
import Campos from './components/Campos';
import Botao from './components/Botao';

function App() {
  const [id, setId] = useState(1);

  function mudarPersonagem() {
    console.log(id);
    setId((id % 826) + 1);
  }

  return (
    <div>
      <Titulo />
      <Foto id={id} />
      <Campos id={id} />
      <Botao quandoClicar={mudarPersonagem} />
    </div>
  );
}

export default App;
