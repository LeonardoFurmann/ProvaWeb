import React, { useState, useEffect } from 'react';

export default function Card() {
const [livros, setLivros] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/livros/todos')
      .then(response => response.json())
      .then(data => setLivros(data))
      .catch(err => console.error(err))
  }, []);


    return (
      <div className="container text-center">
        <div className="row">
          {livros.map((livro, i) => (
            <div className="col" key={i}>
              <div className="card">
                  <h5 className="card-title">{livro.titulo} ({livro.ano}) </h5>
                  <p>{livro.tema}</p>
                  <a
                  href={`/detalhes/${livro.nome}`}            >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
                </div>
              </div>
          ))}
        </div>
      </div>
    )
  }