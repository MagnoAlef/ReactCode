import React from "react";
import { Primeiro } from "./components/basicos/Primeiro";
import { ComParametro } from "./components/basicos/ComParametro";
import { NumeroAleatorio } from "./components/basicos/NumeroAleatorio";

export default function App() {
  return (
    <>
      <h1>Fundamentos React </h1>
      <Primeiro />
      <ComParametro titulo="Segundo Componente" subtitulo="Muito legal" />
      <NumeroAleatorio min={1} max={10} />
    </>
  );
}
