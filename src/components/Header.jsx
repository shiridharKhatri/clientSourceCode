import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <header>
      <div className="donateForm">
        <form>
          <select name="" id="">
            <option value="">Donate Fund</option>
          </select>
          <input type="text" placeholder="Phone /email" />
          <input type="number" placeholder="donation amount" />
          <button>Donate</button>
        </form>
      </div>
      <div className="headerImage">
        <Slider {...settings}>
          <div>
            <img src="/images/head/one.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/two.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/three.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/four.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/five.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/six.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/seven.png" alt="headerImage" />
          </div>
          <div>
            <img src="/images/head/eight.png" alt="headerImage" />
          </div>
        </Slider>
      </div>
    </header>
  );
}
