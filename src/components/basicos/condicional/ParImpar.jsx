import React from "react";
export function ParImpar({num}) {
  return (
    <div> 
        <p>
    {num %2 === 0  ? num : ''}
        </p>
    </div>
  );
}
