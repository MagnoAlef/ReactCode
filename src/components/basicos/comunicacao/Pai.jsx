import React, { useState } from "react";
import { Filho } from "./Filho";
export function PaI() {
    const [usuario, setUsuario] = useState({
        nome : '',
        idade:0,
        bool:false
    })
    console.log('usuario' , usuario.nome)
   
    function usuarioPai(nome,idade,bool) {
        setUsuario({
            nome , idade , bool
        })
        console.log({nome,idade,bool})
    }
  return (
    <div> 
        <p>
    Pai
    <p>
    {usuario.nome}
    </p>
    <Filho usuarioPai={usuarioPai}/>
        </p>
    </div>
  );
}
