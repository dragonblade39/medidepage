import React from "react";
import "./GetInTouch.css";
function GetInTouch() {
  return (
    <div className="getin">
      <br />
      <h1 className="getin_main">
        Get in<span className="pinky3"> Touch</span>
      </h1>
      <br />
      <div class="container getin_footer">
        <div class="lower">
          <div class=" getin_content">
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
          <br />
          <div class=" getin_content">
            <span class="bold">Ph No. - </span>
            <span className="notbold">+91 77082 63621</span>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default GetInTouch;
