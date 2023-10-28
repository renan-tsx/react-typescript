import React from "react";
import { Button } from "../introduction/02Props";

export const ButtonCount = () => {
  const [total, setTotal] = React.useState(0);

  const increment = () => setTotal((total) => total + 1);

  return (
    <>
      <Button fontSize="2rem" onClick={increment}>
        Increment {total}
      </Button>
    </>
  );
};
