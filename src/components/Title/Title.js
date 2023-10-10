import React from "react";
import "./Title.css";
import Image from "../images/logo_medide.png";
import image from "../images/logo_medide.jpg";
function Title() {
  return (
    <div>
      <img className="i1" src={Image} alt={image} />
    </div>
  );
}

export default Title;
