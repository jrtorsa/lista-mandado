import React, { useState } from "react";

const Articulo = ({ articulo, listado, setListado, articulos }) => {
  const [radio, setRadio] = useState(false);

  const { id, nombre } = articulo;

  const hideButton = () => {
    setRadio(!radio);
  };

  const agregar = (id) => {
    const articulo = articulos.filter((articulo) => articulo.id === id)[0];
    setListado([...listado, articulo]);
  };

  const onDelete = (id) => {
    const articulos = listado.filter((articulo) => articulo.id !== id);
    setListado(articulos);
  };

  return (
    <div className="container">
      {articulos ? (
        <label className="label-body">
          <input
            disabled={radio}
            type="radio"
            onClick={() => agregar(id)}
            onChange={() => hideButton()}
          />
          {nombre}
        </label>
      ) : (
        <div>
          <label onClick={() => onDelete(id)}>{nombre}</label>
        </div>
      )}
    </div>
  );
};

export default Articulo;
