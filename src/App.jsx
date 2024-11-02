import React from "react";
import { Primeiro } from "./components/basicos/Primeiro";
import { ComParametro } from "./components/basicos/ComParametro";
import { NumeroAleatorio } from "./components/basicos/NumeroAleatorio";
import {  Repeticao } from "./components/basicos/repeticao/Repeticao";
import { Produtos } from "./components/basicos/repeticao/Produtos";
import { ParImpar } from "./components/basicos/condicional/ParImpar";
import { PaI } from "./components/basicos/comunicacao/Pai";
import { Contador } from "./components/basicos/contador/Contador";

export default function App() {
  return (
    <>
      <h1>Fundamentos React </h1>
      <Primeiro />
      <ComParametro titulo="Segundo Componente" subtitulo="Muito legal" />
      <NumeroAleatorio min={1} max={10} />
      <Repeticao/>
      <Produtos/>
      <ParImpar num = {2} />
      <ParImpar num = {1} />
      <PaI/>
      <Contador numeroInicial = {20}/>

    </>
  );
}
