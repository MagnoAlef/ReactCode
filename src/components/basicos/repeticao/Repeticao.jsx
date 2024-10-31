import React from "react";
export function Repeticao() {
  const alunos = [
    { id: 1, nome: 'Alice', nota: 9.0 },
    { id: 2, nome: 'Bruno', nota: 8.5 },
    { id: 3, nome: 'Carla', nota: 7.0 },
    { id: 4, nome: 'David', nota: 6.5 },
    { id: 5, nome: 'Eva', nota: 10.0 },
    { id: 6, nome: 'Fernando', nota: 8.0 },
    { id: 7, nome: 'Gina', nota: 9.5 },
    { id: 8, nome: 'Henrique', nota: 7.5 },
    { id: 9, nome: 'Isabela', nota: 8.2 },
    { id: 10, nome: 'João', nota: 6.0 },
  ];
  return (
    <div>
      <ul key={alunos.id}>
        {alunos.map((alunos) => {
          return (
            <li>{alunos.nome} - {alunos.nota}</li>
          )
        })}
      </ul>
    </div>
  );
}
