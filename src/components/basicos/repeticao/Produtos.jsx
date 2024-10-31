import React from "react";
export function Produtos() {
  const produtos = [
    { id: 1, nome: 'Camiseta', preco: 29.90 },
    { id: 2, nome: 'Calça Jeans', preco: 79.90 },
    { id: 3, nome: 'Tênis', preco: 199.90 },
    { id: 4, nome: 'Jaqueta', preco: 129.90 },
    { id: 5, nome: 'Boné', preco: 39.90 },
    { id: 6, nome: 'Relógio', preco: 249.90 },
    { id: 7, nome: 'Mochila', preco: 89.90 },
    { id: 8, nome: 'Chinelo', preco: 19.90 },
    { id: 9, nome: 'Camisa', preco: 49.90 },
    { id: 10, nome: 'Sunga', preco: 34.90 },
  ];
  return (
    <div> 
      <table border={1}>
      <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>

            {produtos.map((produtos) =>{
                return(
                    <>
                    <tr key={produtos.id}>
                    <th>{produtos.id}</th>
                    <th>{produtos.nome}</th>
                    <th>{produtos.preco}</th>
                    </tr>
                    </>
                )
            })}
        </tbody>
        {/* <thead>
            <tr>

          {produtos.map((produtos) => {
            return(
              <th>{produtos.id}</th>
            )
          })}
           {produtos.map((produtos) => {
            return(
              <th>{produtos.nome}</th>
            )
          })}
           {produtos.map((produtos) => {
            return(
              <th>{produtos.preco}</th>
            )
          })}
            </tr>
        </thead> */}
      </table>
    </div>
  );
}
