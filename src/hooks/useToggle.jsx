import { useState } from "react";

export const useToggle = (initializer = false) => {
  const [isToggle, setIsToogle] = useState(initializer);

  const toggle = () => {
    setIsToogle(!isToggle);
  };

  return { isToggle, toggle };
};
