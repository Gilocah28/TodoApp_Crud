import React from "react";
import { useToggle } from "../../hooks/useToggle";
import bgLight from "../../assets/bg-desktop-light.jpg";
import bgLightMobile from "../../assets/bg-mobile-light.jpg";
import bgDark from "../../assets/bg-desktop-dark.jpg";
import bgDarkMobile from "../../assets/bg-mobile-dark.jpg";
import "./bgImage.scss";

const ImageSource = () => {
  const { isToggle } = useToggle();
  return (
    <picture>
      <source
        media="(max-width:600px)"
        srcSet={isToggle ? bgDarkMobile : bgLightMobile}
      />
      <img
        src={isToggle ? bgDark : bgLight}
        alt="Background-image"
        className="Image-bg"
      />
    </picture>
  );
};

export default ImageSource;
