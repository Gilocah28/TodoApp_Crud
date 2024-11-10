import { useState } from "react";

export const useToggle = (initialize = false) => {
  const [isToggle, setIsToggle] = useState(initialize);

  const handleToggle = () => {
    setIsToggle((prev) => !prev)
  } 

  return { isToggle, handleToggle };
};
