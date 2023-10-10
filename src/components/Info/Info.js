import React from "react";
import "./Info.css";
import "F:\\Medide About page\\medide-about_page\\node_modules/bootstrap/dist/css/bootstrap.min.css";
import Image from "../images/side_photo.png";
function Info() {
  return (
    <div className="Flexing">
      <div>
        <h1 class="Wel">Welcome to</h1>
        <h1 className="Med">
          <div class="waviy">
            <span class="a1">M</span>
            <span class="a2">e</span>
            <span class="a3">d</span>
            <span class="a4">i</span>
            <span class="a5">d</span>
            <span class="a6">e</span>
          </div>
        </h1>
        <div className="sidename">
          Your Easier Way to <span className="pinky">Healthcare</span>
        </div>
        <br />
        <p className="maincontext">
          Discover & reserve diagnostics, blood banks, hospitals, counseling
          within 50km. Effortlessly book appointments online or set your
          location
        </p>
      </div>
      <div>
        <img className="i2" src={Image} alt="#" />
      </div>
    </div>
  );
}

export default Info;
