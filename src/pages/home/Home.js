import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      {/* <div className="svgbg"></div> */}
      <div className="Hometext">
        hey I am sachin soni<b> FRONTEND DEVLOPER</b> and <b>UI/UX DESIGNER</b>
      </div>
      <div className="accimg">
       
        <img className="svgback" src="/image/accpng.png" alt="bluesvg"></img>
        <img
          className="svgmain"
          src="/image/svgg coder.png"
          alt="bluesvg"
        ></img>
      </div>
    </div>
  );
}

export default Home;
