import React, { useEffect, useState } from 'react';
import './Campos.css';

function Campos({ id }) {
    const [personagem, setPersonagem] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => setPersonagem(data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <div className="box-campos">
            {personagem && (
                <div className="campos">
                    <p> Name: {personagem.name}</p>
                    <p> Status: {personagem.status}</p>
                    <p> Species: {personagem.species}</p>
                    <p> Gender: {personagem.gender}</p>
                    <p> Last Location: {personagem.location.name}</p>
                </div>
            )}
        </div>
    );
}

export default Campos;