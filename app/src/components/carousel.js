import React from 'react';
import Slider from 'react-slick';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: true,
      autoplaySpeed: 3000,
      autoplay: true,
      centerMode: true,
      centerPadding: '50px',
      //   className: '',
      //   dotsClass: 'slick-dots',
      draggable: true,
      easing: 'linear',
      pauseOnDotsHover: false,
      //   pauseOnFocus: true,
      //   prevArrow: `<button type="button" class="slick-prev"><i class="fa fa-long-arrow-left"></i></button>`,
      //   nextArrow: `<button type="button" class="slick-next"><i class="fa fa-long-arrow-right"></i></button>`,

      //   responsive: [
      //     {
      //       breakpoint: 1024,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 3,
      //         infinite: true,
      //         dots: true
      //       }
      //     },
      //     {
      //       breakpoint: 600,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 2,
      //         initialSlide: 2
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //   ]
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
