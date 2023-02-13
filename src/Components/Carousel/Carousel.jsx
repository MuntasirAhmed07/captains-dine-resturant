import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../Assets/hero1.jpg";
import img2 from "../../Assets/hero1.jpg";
import img3 from "../../Assets/hero1.jpg";
import img4 from "../../Assets/hero1.jpg";
import img5 from "../../Assets/hero1.jpg";
import img6 from "../../Assets/hero1.jpg";
import "./carousel.css";

function App() {
  return (
    <div className="App">
      <div id="border">
        <Marquee direction="right" speed={100} className="container">
          <div className="image_wrapper">
            <img src={img1} alt="" className="img-size" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" className="img-size" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" className="img-size" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" className="img-size" />
          </div>

          <div className="image_wrapper">
            <img src={img6} alt="" className="img-size" />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="" className="img-size" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default App;
