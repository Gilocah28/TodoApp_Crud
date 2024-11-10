import { useState } from "react";
import { useToggle } from "./hooks/useToggle";
import ImageSource from "./components/imageSource/ImageSource";
import "./App.scss";
import Main_Container from "./components/Main_Container";

function App() {
  const { isToggle } = useToggle();
  return (
    <div className={isToggle ? "App_dark" : "App_light"}>
      <div className="Image-Source">
        <ImageSource />
      </div>

      <Main_Container />
    </div>
  );
}

export default App;
