import React from 'react'
import './Foto.css'

function Foto({ id }) {
  return (
    <>
      <div className="Foto">
        <img 
        src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
        alt="Personagem de Rick and Morty"
        className="fotoPersonagem" />
      </div>
    </>
  )
}
export default Foto
