import React from "react";
import Mountain from "../../Svg/Mountain";
import NavBar from "../NavBar/NavBar";
import Logo from "../../download.png";
import "./Home.css";
import Hero from "../../Svg/Hero";

export default function Home() {
  return (

<div style={{ backgroundColor: "white" }}>

      <NavBar />
      <div className="HomeOuterFlex">
        <div className="HomeFlex">
          <img src={Logo} width={100} height={80} alt="college logo" />
          <div className="collegeName">
            <h2>K S Rangasamy College of Technology</h2>
            <h2>Tiruchengode</h2>
          </div>
        </div>
      </div>
      <div className="HomeDisplay">
        <div>
          <h1 className="title">SYMPOSIUM-2K22</h1>
          <div className="timeBox">
            <div>
              <h3>12</h3>
              <h5>Days</h5>
            </div>
            :
            <div>
              <h3>23</h3>
              <h5>Hrs</h5>
            </div>
            :
            <div>
              <h3>23</h3>
              <h5>Min</h5>
            </div>
            :
            <div>
              <h3>2</h3>
              <h5>Sec</h5>
            </div>
          </div>
        </div>
        <div>
          <Hero />
        </div>
      </div>
      <Mountain />
    </div>
  );
}
