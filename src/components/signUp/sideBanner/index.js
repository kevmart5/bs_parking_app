import React from "react";
import "./sideBanner-styles.css";

function SideBanner() {
  return (
    <React.Fragment>
      <div className="sideBanner__image">
        <div className="fullscreen-bg">
          <video
            loop muted autoplay poster="img/videoframe.jpg" className="fullscreen-bg__video">
            <source src="./assets/videos/cars.mp4" type="video/mp4" />
            <source src="video/big_buck_bunny.mp4" type="video/mp4" />
            <source src="video/big_buck_bunny.ogv" type="video/ogg" />
          </video>
        </div>
        <div className="sideBanner__background-color" />
      </div>
    </React.Fragment>
  );
}

export default SideBanner;
