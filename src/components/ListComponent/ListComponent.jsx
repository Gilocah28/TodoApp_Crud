import React, { useContext } from "react";
import { FetchContext } from "../../context/FetchContext";
import IconCross from "../../assets/icon-cross.svg";
import "./List.scss";

const ListComponent = () => {
  const { todos, setTodos } = useContext(FetchContext);

  const deleteTodos = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos((prev) => {
      localStorage.setItem("todosList", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const updateCheck = (id) => {
    const todoUpdateCheck = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );

    setTodos((prev) => {
      localStorage.setItem("todosList", JSON.stringify(todoUpdateCheck));
      return todoUpdateCheck;
    });
  };

  return (
    <div className="list_container">
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="list">
              <div className="check_container">
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => updateCheck(todo.id)}
                />
                <p>{todo.title}</p>
              </div>
              <button onClick={() => deleteTodos(todo.id)}>
                <img src={IconCross} alt="icon" />
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ListComponent;
