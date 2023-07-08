import Card from '../components/card';
import React, { useState, useEffect } from 'react';

export default function Home(){ 
const [livros, setLivros] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/livros/todos')
      .then(response => response.json())
      .then(data => setLivros(data))
      .catch(err => console.error(err))
  }, []);

  console.log(livros)

    return(
        <><><div className="container text-center">
            <h1 className='text-center'>Livraria</h1>
        </div></><div className="container text-center">
                <div className="row">
                    {livros.map((livro, i) => (
                        <div className="col" key={i}>
                            <div className="card">
                                <h5 className="card-title">{livro.titulo} ({livro.ano}) </h5>
                                <p>{livro.tema}</p>
                                <div className="btn btn-primary">
                                    Detalhes
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div></>
    )
        
        
  
}