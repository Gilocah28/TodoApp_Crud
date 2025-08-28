import React from "react";
import "./main_container.scss";
import sunBtn from "../assets/icon-sun.svg";
import moonBtn from "../assets/icon-moon.svg";
import Input from "./InputContianer/Input";
import ListComponent from "./ListComponent/ListComponent";

const Main_Container = ({ isToggle, handleToggle }) => {
  return (
    <div className="container">
      <div className="title">
        <h1>TODO APP</h1>
        <button onClick={handleToggle}>
          <img src={isToggle ? sunBtn : moonBtn} alt="btn" />
        </button>
      </div>

    <Input/>
    <ListComponent/>    

    </div>
  );
};

export default Main_Container;
