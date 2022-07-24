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
          <h4 className="main-writing">Try Our Home-styled Food!</h4>
          <h5 className="main-writing">
            Experience a wide array of complex flavors that will truly give your
            palate a new perception of taste with our Home-styled Food.
          </h5>
        </div>
      </div>
      <div className="second">
        <img className="spicy-pork" src={spicyPork} />
        <div className="writing-two">
          <h4 className="main-writing">We Do Delivery</h4>
          <h5 className="main-writing">
            Enjoy our food by doing delivery to your door for conveinence.
          </h5>
        </div>
      </div>
      <div className="third">
        <img className="bibimbap" src={bibimbap} />
        <div className="writing-three">
          <h4 className="main-writing">We Do Catering</h4>
          <h5 className="main-writing">
            Have our food deliver and set up and ready to eat with co-workers by
            ordering Catering.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
