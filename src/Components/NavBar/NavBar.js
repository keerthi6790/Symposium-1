import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar(props) {
  return (
    <div className="navBarFlex">
      <div className="navBarInnerFlex">
        <ul>
          <Link to="/">
          <li style={{color:`${props.color}`}}>Home</li>
          </Link>
          <Link to="/Events">
            <li style={{color:`${props.color}`}}>Event</li>
          </Link>
          <Link to="/Contact">
          <li style={{color:`${props.color}`}}>Contact</li>
          </Link>
          <Link to="/Register">
            <li  style={{color:`${props.color}`}}>Register</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
