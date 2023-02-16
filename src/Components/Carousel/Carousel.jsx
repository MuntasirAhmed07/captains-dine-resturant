import React from "react";
import Marquee from "react-fast-marquee";
// import { default as img1, default as img2, default as img3, default as img4, default as img5, default as img6 } from "../../Assets/hero1.jpg";
import img5 from "../../Assets/images/five.png";
import img4 from "../../Assets/images/four.png";
import img1 from "../../Assets/images/one.png";
import img6 from "../../Assets/images/six.png";
import img3 from "../../Assets/images/three.png";
import img2 from "../../Assets/images/two.png";
import "./carousel.css";




function App() {
  return (
    <div className="App">
      <div id="border">
        <Marquee direction="right" speed={50} gradient={false} pauseOnHover={true}>

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
