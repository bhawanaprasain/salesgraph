import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/customer.css"

class Customer extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      // speed: 100,
      autoplay: true
    
    };
    return (
      <div className="container-fluid customer">
        <h1>What our customers say</h1>
        <Slider {...settings}>
        <div className="item">
          <p>It is best site . We can know what is in trend on market and shop without confusion</p>
          <h2>Bhawana prasain</h2>
          <h3>Customer</h3>
        </div>
        <div className="item">
        <p>It is best site . We can know what is in trend on market and shop without confusion</p>
          <h2>Bhawana prasain</h2>
          <h3>Customer</h3>

        </div>
        <div className="item">
        <p>It is best site . We can know what is in trend on market and shop without confusion</p>
          <h2>Bhawana prasain</h2>
          <h3>Customer</h3>

        </div>
      </Slider>

      </div>
     
    );
  }
}

export default Customer