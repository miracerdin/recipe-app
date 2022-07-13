import React from "react";
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa";
import Styled from "./style.module.css";

const Detail = () => {
  return (
    <>
      <div className={Styled["icons"]}>
        <div className={Styled["icon"]}>
          <a href="https://www.linkedin.com/in/mirac-erdin/">
            <FaLinkedinIn size={50} color="black" />
          </a>{" "}
        </div>
        <div className={Styled["icon"]}>
          <a href="https://github.com/miracerdin">
            <FaGithub size={50} color="black" target="_blank" />
          </a>
        </div>
        <div className={Styled["icon"]}>
          <a href="mailto:miracerdin@gmail.com">
            <FaRegEnvelope size={50} color="black" />
          </a>
        </div>
      </div>
      <div className={Styled.create}>
        <p>This app created by</p> <h1>Miraç ERDİN</h1>
      </div>
    </>
  );
};

export default Detail;
