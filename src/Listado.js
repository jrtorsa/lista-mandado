import React from "react";
import Articulo from "./Articulos";

const Listado = ({ listado, setListado }) => {
  return (
    <div className="container">
      <h3> Listado de Compras</h3>
      <hr />
      {listado.length === 0 ? (
        <p>No hay elementos</p>
      ) : (
        listado.map((articulo) => (
          <div className="row">
            <div className="one-half column">
              <Articulo
                key={articulo.id}
                articulo={articulo}
                listado={listado}
                setListado={setListado}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Listado;
