import React from "react";
import "./style.css";

function ImageSquare(props) {
  return(
    <div className="card">
      <div className="img-container">
        <img
          onClick={() => props.selectedImage(props.id)}
          alt="Beyoncé"
          src={props.image}
        />
      </div>
    </div>
  )
}

export default ImageSquare;