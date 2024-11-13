import React, { useContext } from "react";
import "./input.scss";
import { FetchContext } from "../../context/FetchContext";

const Input = () => {
  const { handleSubmit, setTask, task } = useContext(FetchContext);

  return (
    <div className="input_container">
      <form onSubmit={handleSubmit}>
        <button type="submit" className="submit"></button>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={task}
          onChange={(event) => setTask(event.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default Input;
