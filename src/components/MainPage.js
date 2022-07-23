import './MainPage.css';
const bulgogi = require('../image/omma-bulgogi.jpg');
const spicyPork = require('../image/omma-spicy-pork.jpg');
const bibimbap = require('../image/omma-bibimbap.png');

const MainPage = () => {
  return (
    <div className="main">
      <div className="first">
        <img className="bulgogi" src={bulgogi} />
        <div className="writing-one">
          <h4>Try Our Home-styled Food!</h4>
          <h5>description</h5>
        </div>
      </div>
      <div className="second">
        <img className="spicy-pork" src={spicyPork} />
        <div className="writing-two">
          <h4>We Do Delivery</h4>
          <h5>description descrition descrition</h5>
        </div>
      </div>
      <div className="third">
        <img className="bibimbap" src={bibimbap} />
        <div className="writing-three">
          <h4>We Do Catering</h4>
          <h5>description descrition descrition</h5>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
