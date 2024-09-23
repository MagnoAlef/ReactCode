import React from "react";

export function NumeroAleatorio({ min, max }) {
  const gerador = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <>
      <p> Valor Aleatorio :{gerador}</p>
    </>
  );
}
