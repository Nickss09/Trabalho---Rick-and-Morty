import React from 'react';
import './Botao.css'

function Botao({ quandoClicar }) {
  return (
    <div className="botão">
      <button onClick={quandoClicar}>
        <p>Change Character</p>
      </button>
    </div>
  );
}

export default Botao;