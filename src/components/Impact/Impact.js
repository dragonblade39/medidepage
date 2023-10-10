import React from "react";
import "./Impact.css";
import Image1 from "../images/grid1.png";
import Image2 from "../images/grid2.png";
import Image3 from "../images/grid3.png";
function Impact() {
  return (
    <div className="impact_m1">
      <br />
      <br />
      <br />
      <h1 className="impact_main">
        Our<span className="pinky2"> Impact</span>
      </h1>
      <p className="below_text">
        Find out how we<span className="pinky2"> Help</span>
      </p>
      <br />
      <br />
      <div class="container">
        <div class="row">
          <div class="col impact1">
            <img className="impact_image1" src={Image1} alt="#"></img>
            <h1 className="impact_headings">
              Dicover Medical Services Near You
            </h1>
            <p className="impact_content">
              Medide brings you a seamless way to find diagnostic center,blood
              banks, specialty hospitals and counselling centers within 50km of
              your current location.
            </p>
          </div>
          <div class="col impact2">
            <img className="impact_image2" src={Image2} alt="#"></img>
            <h1 className="impact_headings">Revolutionizing Appoinments</h1>
            <p className="impact_content">
              Fed up with appoinment troubles? Medide Revolutionizes the process
              by enabling hassle-free online booking for medical facilities near
              you.
            </p>
          </div>
          <div class="col impact3">
            <img className="impact_image3" src={Image3} alt="#"></img>
            <h1 className="impact_headings">
              Connecting Health and Convinience
            </h1>
            <p className="impact_content">
              Medide Brideges the gap between medical needs and services,
              ensuring you acess the care you require with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
