import ImageSource from "./components/imageSource/ImageSource";
import "./App.scss";
import Main_Container from "./components/Main_Container";
import { useToggle } from "./customhook/useToggle";

function App() {
  const { isToggle, handleToggle } = useToggle();

  return (
    <div className={isToggle ? "App_dark" : "App_light"}>  


    
      <div className="Image-Source">
        <ImageSource isToggle={isToggle} />
      </div>

      <Main_Container isToggle={isToggle} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
