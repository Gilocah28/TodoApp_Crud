import React, { useContext, useMemo } from "react";
import "./filteredCom.scss";
import { FetchContext } from "../../context/FetchContext";

const FilteredComponent = ({ handleFilterTodos }) => {
  const { todos } = useContext(FetchContext);

  const completedCount = useMemo(() => {
    return todos.filter((todo) => !todo.isComplete).length;
  }, [todos]);

  return (
    <div className="filter_container">
      <p>
        {completedCount === 0 ? "No item left" : "item left"}{" "}
        {completedCount === 0 ? "" : completedCount}
      </p>

      <div className="centered_container">
        <p
          onClick={(e) => {
            e.preventDefault();
            handleFilterTodos("all");
          }}
        >
          All
        </p>
        <p
          onClick={(e) => {
            e.preventDefault();
            handleFilterTodos("active");
          }}
        >
          Active
        </p>
        <p
          onClick={(e) => {
            e.preventDefault();
            handleFilterTodos("complete");
          }}
        >
          Completed
        </p>
      </div>
      <p
        onClick={(e) => {
          e.preventDefault();
          handleFilterTodos("clear");
        }}
      >
        Clear
      </p>
    </div>
  );
};

export default FilteredComponent;
