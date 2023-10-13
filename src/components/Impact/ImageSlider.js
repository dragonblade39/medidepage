import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "../images/grid1.png";
import Image2 from "../images/grid2.png";
import Image3 from "../images/grid3.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Impact.css";
function ImageSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1020 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        <div className="card ff">
          <div class="col">
            <br />
            <span class="circle">
              <img className="impact_image1 " src={Image1} alt="#"></img>
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
        </div>
        <div className="card ff">
          <div class="col">
            <br />
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
        </div>
        <div className="card">
          <br />
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
            <br />
          </div>
        </div>
        <div className="card">
          <div class="col">
            <br />
            <span class="circle">
              <img className="impact_image1" src={Image1} alt="#"></img>
            </span>
            <br />
            <br />
            <br />
            <h1 className="impact_headings">Book with confidence</h1>
            <p className="impact_content">
              Select your desired medical facility and secure your appointment
              online through Medide's user-friendly interface.
            </p>
            <br />
          </div>
        </div>
        <div className="card">
          <div class="col">
            <br />
            <div class="circle">
              <img className="impact_image2 " src={Image2} alt="#"></img>
            </div>
            <br />
            <br />
            <h1 className="impact_headings">
              Easy Payments, Seamless Experience
            </h1>
            <p className="impact_content">
              Medide offers a range of payment options, making settling your
              appointments simple and convenient.
            </p>
            <br />
          </div>
        </div>
        <div className="card">
          <br />
          <div class="col">
            <div class="circle">
              <img className="impact_image3" src={Image3} alt="#"></img>
            </div>
            <br />
            <br />
            <h1 className="impact_headings">Results at your Fingertips</h1>
            <p className="impact_content">
              Say hello to convenience - Medide delivers your test results
              directly to your account, keeping you informed and empowered,
            </p>
            <br />
          </div>
        </div>
      </Carousel>
      ;
    </div>
  );
}

export default ImageSlider;
