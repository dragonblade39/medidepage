import React, { useEffect } from "react";
import "./GetInTouch.css";
import AOS from "aos";
import "aos/dist/aos.css";
function GetInTouch() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="getin" data-aos="fade-up">
      <br />
      <br />
      <br />
      <h1 className="getin_main">
        Get in<span className="pinky3"> Touch</span>
      </h1>
      <br />
      <br />
      <br />
      <div class="container getin_footer">
        <div class="row">
          <div class="col getin_content">
            <span class="bold">Email Id - </span>
            <span class="underline">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlKnTKJzgJfdRXkdvQkBWkpCpTWDjhmmbZWfRlqWWnBSgtpNPnQTxXSQJZtBvfddBtbdPL"
                target="__blank"
                class="email_link"
              >
                medideorg@gmail.com
              </a>
            </span>
          </div>
          <div class="col getin_content">
            <span class="bold">Ph No. - </span>
            <span className="notbold">+91 77082 63621</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default GetInTouch;
