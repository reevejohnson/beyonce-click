import React from "react";
import "./style.css";

function Navbar(props) {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Beyoncé Memory Game</a>
      <div className="collapse navbar-collapse" id="navbarText">
        <span className="navbar-text">
          Score: <span style={{color: "blue"}}>{props.currentScore}</span> | Top Score: {props.topScore}
        </span>
      </div>
    </nav>
  )
}

export default Navbar;