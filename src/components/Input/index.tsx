import React from "react";

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
  id: string;
}

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type="text" {...props} />
    </div>
  );
};
