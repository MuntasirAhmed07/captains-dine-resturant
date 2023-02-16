import Hero from "../../Assets/images/six.png";
import Carousel from "../../Components/Carousel/Carousel";
import "./home.css";
import SVGT from "./svgtext";

const Home = () => {
  return (
    <div>
      <div
        className="hero"
        style={{ backgroundImage: `url(${Hero})`, backgroundSize: "cover" }}
      >
        {/* <div className="title">
          <h1>Captain America</h1>
          <h2>Touching Your Heart</h2>
        </div> */}
        <div>
        <SVGT />

        </div>
      </div>
      <div className="car-line">
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
