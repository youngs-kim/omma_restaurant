import './AboutUs.css';
const map = require('../image/map.png');

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-us">
        <h5 className="about-title">ABOUT OMMA RESTAURANT</h5>
        <h6 className="about-description">
          We, at Omma Restaurant, are pleased to present our guests to an
          experience they will truly never forget, from our boundless menu
          options consisting of home-style korean meal, to our unique Korean
          fusion styled food like Bulgogi Quesadilla. You will experience a wide
          array of complex flavors that will truly give your palate a new
          perception of taste.
        </h6>
      </div>
      <div className="guide">
        <img className="map" src={map} alt={map} />
        <div className="address">
          <h5 className="address-font">720 N Lake Ave, UNIT #8</h5>
          <h5 className="address-font">Pasadena, CA 91104</h5>
          <h5 className="address-font">Phone : 626-111-2222</h5>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
