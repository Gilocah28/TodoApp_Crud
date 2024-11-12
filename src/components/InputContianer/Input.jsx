import React from "react";
import "./input.scss"

const Input = () => {
  return <div className="input_container">
    <form>
        <button type="submit"></button>
        <input type="text" placeholder="Create a new todo..."/>
    </form>
  </div>;
};

export default Input;
