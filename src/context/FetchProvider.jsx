import React, { useEffect, useState } from "react";
import { FetchContext } from "./FetchContext";

const FetchProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const idGenerator = () => Math.floor(Math.random() * 9999999999);

  useEffect(() => {
    const sampleFirstData = {
      id: idGenerator(),
      title: "Sample todos....",
      isComplete: false,
    };

    const todoData = localStorage.getItem("todosList");

    if (todoData === null) {
      setTodos(sampleFirstData);
      localStorage.setItem("todosList", JSON.stringify([sampleFirstData]));
    }

    setTodos(JSON.parse(todoData));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: idGenerator(),
      title: task,
      isComplete: false,
    };

    setTodos((prevTodos) => {
      const updatedTodos = [newTodo, ...prevTodos];
      localStorage.setItem("todosList", JSON.stringify(updatedTodos));
      return updatedTodos;
    });

    setTask("");
  };

  return (
    <FetchContext.Provider
      value={{ todos, setTodos, idGenerator, handleSubmit, setTask, task }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export default FetchProvider;
