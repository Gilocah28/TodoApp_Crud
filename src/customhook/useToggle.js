import { useContext, useEffect, useState } from "react";

export const useToggle = (initialize = false) => {
  const [isToggle, setIsToggle] = useState(initialize);

  useEffect(() => {
    const isGetTheme = localStorage.getItem("theme");

    if (isGetTheme === null) {
      localStorage.setItem("theme", JSON.stringify(initialize));
    } else {
      setIsToggle((prev) => JSON.parse(isGetTheme));
    }
  }, []);

  const handleToggle = () => {
    setIsToggle((prev) => {
      const isTheme = !prev;
      localStorage.setItem("theme", JSON.stringify(isTheme));
      return isTheme;
    });
  };

  return { isToggle, handleToggle };
};
