import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import { Primeiro } from "./components/basicos/Primeiro";

ReactDOM.render(
  <div>
    Olá React!!
    <br />
    <Primeiro />
  </div>,
  document.getElementById("root")
);
