import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Titulo*/}
      <div className="Título">
        <p className="texto-título">Rick and Morty Characters</p>
      </div>

      {/* Foto*/}
      <div className="Foto">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="foto do rick" className="fotoDoRick" />
      </div>

      {/* Campos */}
      <div className="box-campos">
        <div className="campos">
          <div className="nome">
            <p>Nome: Rick Sanchez</p>
          </div>
          <div className="status">
            <p>Status: Vivo</p>
          </div>
          <div className="especie">
            <p>Espécie: Humano</p>
          </div>
          <div className="genero">
            <p>Gênero: Masculino</p>
          </div>
          <div className="ultimo-epsodio">
            <p>Último episódio que ele aparece: <a href="https://rickandmortyapi.com/api/episode/51">Rickmurai Jack</a></p>
          </div>
        </div>
      </div>
      {/* Botão*/}
      <div className="botão">
        <button><p>Mudar o personagem</p></button>
      </div>
    </>
  )
}

export default App
