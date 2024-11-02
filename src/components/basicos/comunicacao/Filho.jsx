import React from "react";
export function Filho({usuarioPai}) {
  return (
    <div> 
        <p>
    filho
        </p>
    <button onClick={() =>usuarioPai('MAgno' , 30 , true)}>Passando dados indiretamente</button>
    </div>
  );
}
