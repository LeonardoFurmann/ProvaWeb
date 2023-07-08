import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detalhes() {
    const { isbn } = useParams();
    const [livro, setLiivro] = useState([]);

    const options = {
        method: 'GET'
    };

    useEffect(() => {

        fetch(`http://localhost:3000/livros/${isbn}`, options)
            .then(response => response.json())          
            .then(data => {setLiivro(data);})
            .catch(err => console.error(err))
    }, []);

    return (
        <div>
            <div className="container text-center">
            <h1 className='text-center'>Detalhes</h1>
            </div>
            <div className="container text-center">
                <p>Livro: {livro.nome}</p>
                <div>
                    <p>{livro.ano}</p>
                    <p>{livro.tema}</p>
                    <p>{livro.autor}</p>
                </div>
            </div>
        </div>
    )
}

export default Detalhes;