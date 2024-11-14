import React, { useContext, useMemo, useState } from "react";
import { FetchContext } from "../../context/FetchContext";
import IconCross from "../../assets/icon-cross.svg";
import "./List.scss";
import FilteredComponent from "../filteredComponent/FilteredComponent";

const ListComponent = () => {
  const { todos, setTodos } = useContext(FetchContext);
  const [filterItem, setFilterItem] = useState("all");

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

  const handleFilterTodos = (value) => {
    setFilterItem(value);
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filterItem === "active") return !todo.isComplete;
      if (filterItem === "complete") return todo.isComplete;
      return true;
    });
  }, [todos, filterItem]);

  return (
    <div className="list_container">
      <ul>
        {filteredTodos.map((todo) => {
          return (
            <div key={todo.id} className="list">
              <div className="check_container">
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => updateCheck(todo.id)}
                />
                <p className={todo.isComplete ? "completed" : ""}>
                  {todo.title}
                </p>
              </div>
              <button onClick={() => deleteTodos(todo.id)}>
                <img src={IconCross} alt="icon" />
              </button>
            </div>
          );
        })}
      </ul>

      <FilteredComponent handleFilterTodos={handleFilterTodos}/>
    </div>
  );
};

export default ListComponent;
