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
      speed: 2,
      autoplay: true
    
    };
    return (
      <div className="container-fluid customer">
        <h1>What our customers say</h1>
        <Slider {...settings}>
        <div className="item">
          <p>It's quite helpful. We can know what is in trend on market and shop without confusion</p>
          <h2>Aastha Dahal</h2>
          <h3>Customer</h3>
        </div>

        <div className="item">
          <p>Shop by taking  a glimpse of trending products.</p>
          <h2>Leeza Kunwar</h2>
          <h3>Customer</h3>
        </div>

        <div className="item">
          <p>It's quite easy to know what is on trend in the market.</p>
          <h2>Sujan</h2>
          <h3>Customer</h3>
        </div>
      </Slider>

      </div>
     
    );
  }
}

export default Customer