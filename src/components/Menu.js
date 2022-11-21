import './Menu.css';
const bulgogi = require('../image/omma-bulgogi.jpg');
const spicyPork = require('../image/omma-spicy-pork.jpg');
const bibimbap = require('../image/omma-bibimbap.png');
const bulque = require('../image/omma-bulque.jpg');
const chicken = require('../image/omma-fried-chicken.jpg');

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="each-menu">
        <img className="food-img" src={bulgogi} alt={bulgogi} />
        <div>
          <h5 className="food-title">Bulgogi Rice</h5>
          <h6 className="price">$14.99</h6>
          <h6 className="menu-description">
            Thinly sliced beef marinated in a sauce that is a mix of soy sauce,
            sugar or honey, sesame oil, garlic, onion, and pureed Asian pear.
          </h6>
        </div>
      </div>
      <div className="each-menu">
        <img className="food-img" src={spicyPork} alt={spicyPork} />
        <div>
          <h5 className="food-title">Spicy Pork Rice</h5>
          <h6 className="price">$14.99</h6>
          <h6 className="menu-description">
            Spicy Pork- tender pieces of pork tenderloin are marinated and then
            coated in a sweet, spicy, and salty sauce. Serve over white rice for
            an unbelievably delicious dinner with plenty of heat.
          </h6>
        </div>
      </div>
      <div className="each-menu">
        <img className="food-img" src={bibimbap} alt={bibimbap} />
        <div>
          <h5 className="food-title">Bibimbap</h5>
          <h6 className="price">$13.99</h6>
          <h6 className="menu-description">
            Bibimbap (비빔밥), which literally means “mixed rice”, is one of
            Korea’s most famous dishes and it is made up of steamed rice topped
            with stir fried vegetables, meat and a fried (or raw) egg and
            everything gets mixed together just before eating.
          </h6>
        </div>
      </div>
      <div className="each-menu">
        <img className="food-img" src={bulque} alt={bulque} />
        <div>
          <h5 className="food-title">Bulgogi Quesadilla</h5>
          <h6 className="price">$14.99</h6>
          <h6 className="menu-description">
            Korean fusion Monterey cheese Quesadilla with our home-made bulgogi.
            Enjoy with our Home-made Pico de gallo, salsa verde and seasame
            mayo.
          </h6>
        </div>
      </div>
      <div className="each-menu">
        <img className="food-img" src={chicken} alt={chicken} />
        <div>
          <h5 className="food-title">Korean Fried Chicken</h5>
          <h6 className="price">$17.99</h6>
          <h6 className="menu-description">
            8pcs of Korean Style Chicken Wings. Light and crispy with an added
            kick.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Menu;
