import React from "react";

const consultarApi = async () => {
  const token = "5d1272a9-16e1-f85a-85e0-20d38475abb6";
  const url = `https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/5300000002/es/08/true/BISE/2.0/${token}?type=json`;
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  console.log(resultado);
};

const Api = () => {
  return (
    <div>
      <h1>desde Api</h1>
      <button onClick={consultarApi}>Presioname</button>
    </div>
  );
};

export default Api;
