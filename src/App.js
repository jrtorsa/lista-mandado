import React, { useState } from "react";
import Header from "./Header";
import Articulo from "./Articulos";
import Listado from "./Listado";
import Api from "./components/Api";

export default function App() {
  //listado de articulos
  const [articulos, setArticulos] = useState([
    { id: 1, nombre: "espinacas" },
    { id: 2, nombre: "tomates" },
    { id: 3, nombre: "cebolla" },
    { id: 4, nombre: "mangos" },
    { id: 5, nombre: "aguacates" },
  ]);

  //listado del mandado

  const [listado, setListado] = useState([]);

  return (
    <>
      <Header />
      <h3 className="container">Escoge los articulos: </h3>
      <hr />
      {articulos.map((articulo) => (
        <Articulo
          articulo={articulo}
          key={articulo.id}
          listado={listado}
          setListado={setListado}
          articulos={articulos}
        />
      ))}
      <hr />
      <Listado listado={listado} setListado={setListado} />
      <Api />
    </>
  );
}
