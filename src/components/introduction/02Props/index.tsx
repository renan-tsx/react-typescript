import React from "react";

/**
 * O componente Button recebe propriedades tipadas por meio de uma interface.
 * O ponto de interrogação indica que a propriedade é opcional.
 * Ao contrário da inferência de tipo, aqui definimos explicitamente um tipo para o Button.
 */

interface ButtonProps extends React.ComponentProps<"button"> {
  fontSize?: string;
}

export const Button = ({ fontSize, children, ...props }: ButtonProps) => {
  return (
    <button style={{ fontSize }} {...props}>
      {children}
    </button>
  );
};
