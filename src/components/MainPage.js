import './MainPage.css';
import useFadeIn from '@nooks/use-fade-in';
const bulgogi = require('../image/omma-bulgogi.jpg');
const spicyPork = require('../image/omma-spicy-pork.jpg');
const bibimbap = require('../image/omma-bibimbap.png');

const MainPage = () => {
  const fadeImg = useFadeIn(1, 2);
  const fadeOne = useFadeIn(1, 2);
  const fadeTwo = useFadeIn(1, 2);
  const fadeImgTwo = useFadeIn(2, 3);
  const fadeThree = useFadeIn(2, 3);
  const fadeFour = useFadeIn(2, 3);
  const fadeImgThree = useFadeIn(3, 4);
  const fadeFive = useFadeIn(3, 4);
  const fadeSix = useFadeIn(3, 4);
  return (
    <div className="main">
      <div className="first">
        <img className="bulgogi" src={bulgogi} {...fadeImg} />
        <div className="writing-one">
          <h4 className="main-writing" {...fadeOne}>
            Try Our Home-styled Food!
          </h4>
          <h5 className="main-writing" {...fadeTwo}>
            Experience a wide array of complex flavors that will truly give your
            palate a new perception of taste with our Home-styled Food.
          </h5>
        </div>
      </div>
      <div className="second">
        <img className="spicy-pork" src={spicyPork} {...fadeImgTwo} />
        <div className="writing-two">
          <h4 className="main-writing" {...fadeThree}>
            We Do Delivery
          </h4>
          <h5 className="main-writing" {...fadeFour}>
            Enjoy our food by doing delivery to your door for conveinence.
          </h5>
        </div>
      </div>
      <div className="third">
        <img className="bibimbap" src={bibimbap} {...fadeImgThree} />
        <div className="writing-three">
          <h4 className="main-writing" {...fadeFive}>
            We Do Catering
          </h4>
          <h5 className="main-writing" {...fadeSix}>
            Have our food deliver and set up and ready to eat with co-workers by
            ordering Catering.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
