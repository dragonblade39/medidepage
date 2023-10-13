import React from "react";

import "./Impact.css";
import Image1 from "../images/grid1.png";
import Image2 from "../images/grid2.png";
import Image3 from "../images/grid3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { LiaLessThanSolid } from "react-icons/lia";
import ImageSlider from "./ImageSlider";
function Impact() {
  return (
    <div className="impact_m1">
      <br />

      <h1 className="impact_main">
        Our<span className="pinky2"> Impact</span>
      </h1>
      <br />

      {/* <LiaLessThanSolid color="#eb64a9" size={150} /> */}
      <ImageSlider class="imageslider" />
      {/* <div class="container text-center">
        <div class="row align-items-start items1">
          <div class="col">
            <span class="circle">
              <img className="impact_image1" src={Image1} alt="#"></img>
            </span>
            <br />
            <br />
            <br />
            <h1 className="impact_headings">
              Dicover Medical Services Near You
            </h1>
            <p className="impact_content">
              Medide brings you a seamless way to find diagnostic center,blood
              banks, specialty hospitals and counselling centers within 50km of
              your current location.
            </p>
          </div>
          <div class="col">
            <div class="circle">
              <img className="impact_image2 " src={Image2} alt="#"></img>
            </div>
            <br />
            <br />
            <h1 className="impact_headings">Revolutionizing Appoinments</h1>
            <p className="impact_content">
              Fed up with appoinment troubles? Medide Revolutionizes the process
              by enabling hassle-free online booking for medical facilities near
              you.
            </p>
          </div>
          <div class="col">
            <div class="circle">
              <img className="impact_image3" src={Image3} alt="#"></img>
            </div>
            <br />
            <br />
            <h1 className="impact_headings">
              Connecting Health and Convinience
            </h1>
            <p className="impact_content">
              Medide Brideges the gap between medical needs and services,
              ensuring you acess the care you require with ease.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Impact;
