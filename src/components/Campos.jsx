import React from 'react'
import './Campos.css'

function Campos() {
    return (
        <>
            <div className="box-campos">
                <div className="campos">
                    <div className="letra">
                        <p>Nome: Rick Sanchez</p>
                    </div>
                    <div className="letra">
                        <p>Status: Vivo</p>
                    </div>
                    <div className="letra">
                        <p>Espécie: Humano</p>
                    </div>
                    <div className="letra">
                        <p>Gênero: Masculino</p>
                    </div>
                    <div className="letra">
                        <p>Último episódio que ele aparece: <a href="https://rickandmortyapi.com/api/episode/51">Rickmurai Jack</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Campos