import React from "react";
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa";
import Styled from "./style.module.css";

const Detail = () => {
  return (
    <div>
      <div className={Styled["icons"]}>
        <div className={Styled["icon"]}>
          <a href="https://www.linkedin.com/in/mirac-erdin/" target="_blank">
            <FaLinkedinIn size={50} color="black" />
          </a>{" "}
        </div>
        <div className={Styled["icon"]}>
          <a href="https://github.com/miracerdin" target="_blank">
            <FaGithub size={50} color="black" />
          </a>
        </div>
        <div className={Styled["icon"]}>
          <a href="mailto:miracerdin@gmail.com" target="_blank">
            <FaRegEnvelope size={50} color="black" />
          </a>
        </div>
      </div>
      <div className={Styled.create}>
        <p>This app created by</p> <h1>Miraç ERDİN</h1>
      </div>
    </div>
  );
};

export default Detail;
