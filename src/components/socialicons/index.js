import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaMailBulk
} from "react-icons/fa";

function Socialicons() {
  return (
    <div className="stick_follow_icon">
      <ul>
          <li>
            <a href="https://www.linkedin.com/in/mahtab-sarlak-10b275161">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/MahtabSarlak">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="sarlak3@gmail.com">
              <FaMailBulk />
            </a>
          </li>
      </ul>
      <p style={{color: "#0d6efd"}}>Follow Me</p>
    </div>
  );
};

export default Socialicons;
