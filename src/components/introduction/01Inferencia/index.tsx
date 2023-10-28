import React from "react";

/**
 * Inferência é a capacidade do compilador determinar automaticamente o tipo de
 * uma variável com base no valor atribuído. No React, ao iniciar 'total' com um
 * número, ele é automaticamente considerado do tipo numérico. Similarmente,
 * 'SetTotal' é esperado para aceitar apenas números. Aproveite a inferência de
 * tipos e adicione tipagens explícitas somente quando necessário.
 */

export const Inferencia = () => {
  const [total, setTotal] = React.useState(1);

  const increment = () => {
    setTotal((total) => total + 1);
  };

  return (
    <>
      <p>{total}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
};
