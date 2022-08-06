import React from "react";
import "./info.css";
import myImage from "./more.jpg";

const Information = () => {
  return (
    <>
      <div className="img">
        <img src={myImage} alt="Came down from glory" />
      </div>
    </>
  );
};

export default Information;
