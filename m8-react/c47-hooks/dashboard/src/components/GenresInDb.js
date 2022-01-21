import React, { useState, useEffect, useRef } from "react";


const GenresInDb = () => {
  const [categories, setCategories] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/api/categories')
      .then(res => res.json())
      .then(categories => {
        setCategories(categories.data)
      })
  }, [contador])

  const fondo = useRef();
  const titulo = useRef();
  console.log(fondo.current);


  const actualizar = () => {
    setContador(contador + 1);
    fondo.current.classList.toggle('bg-dark')
    titulo.current.classList.toggle('text-gray-800')
  }

    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3" ref={fondo}>
            <h5 className="m-0 font-weight-bold text-gray-800" ref={titulo}>
              Categorias en la base de datos {contador}
            </h5>
            <button onClick={actualizar}>Actualizar</button>
          </div>
          <div className="card-body">
            <div className="row">
              {
                categories.map((category, i) => (
                  <div className="col-lg-6 mb-4" key={category.name + i}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{category.name}</div>
                    </div>
                  </div>
                ))
              }
              
            </div>
          </div>
        </div>
      </div>
    );
}

export default GenresInDb;
