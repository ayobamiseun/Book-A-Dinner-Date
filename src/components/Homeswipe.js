import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper,  SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Animated} from "react-animated-css";
 
// import 'animate.css/animate.css'

import Slider1 from '../img/slide/slide-1.jpeg';
import Slider2 from '../img/slide/slide-2.png';
import Slider3 from '../img/slide/slide-3.jpg';

// import "./styles.css";

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import styled from 'styled-components';
const Home = styled.div`
.swiper {
  ${'' /* width: 100%;
  height: 100%; */}
}

.swiper-slide {
  ${'' /* background-position: center;
  background-size: cover; */}
}

.swiper-slide img {
  ${'' /* display: block; */}
  width: 100%;
}
.content {
    display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.content h2 {
    text-align: center;
    color: #fff;
  margin-bottom: 30px;
  font-size: 48px;
  font-weight: 700;
}
.content p {
    width: 80%;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
  margin: 0 auto 30px auto;
  color: #fff;
}
.subcontent {
    text-align: center;
}
`
export default function App() {
  return (
    <Home>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <div style={{ backgroundImage: `url(${Slider1})`, height:'100vh', backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
         {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
         <div className="content">
         <div className="subcontent">
         <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
         <h2 class="animate__animated animate__fadeInDown"><span>Delicious</span> Restaurant</h2>
        
</Animated>
             
              <Animated 
               animationEnter="bounceIn"
    animationLeave="bounceOut"
    durationEnter={1000}
    durationLeave={1000}
    component="p"
              >
        
              <p className="animate__animated animate__bounce">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                   
</Animated>  <div>
                  <a href="#menu" class="btn-menu animate__animated animate__fadeInUp scrollto bbt">Our Menu</a>
                  <a href="#book-a-table" class="btn-book animate__animated animate__fadeInUp scrollto bbt">Book a Table</a>
                </div>
         </div>
        
         </div>
          
         </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ backgroundImage: `url(${Slider2})`,  height:'100vh', backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
        <div className="content">
        <div className="subcontent">
         <h2 class="animate__animated animate__fadeInDown"><span>Delicious</span> Restaurant</h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div>
                  <a href="#menu" class="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" class="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                </div>
         </div>
         </div>
         </div> </SwiperSlide>
        <SwiperSlide>
        <div style={{ backgroundImage: `url(${Slider3})`,  height:'100vh', backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
        <div className="content">
        <div className="subcontent">
         <h2 class="animate__animated animate__fadeInDown"><span>Delicious</span> Restaurant</h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div>
                  <a href="#menu" class="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" class="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                </div>
         </div>
         </div>
         </div>  </SwiperSlide>
        <SwiperSlide>
        <div style={{ backgroundImage: `url(${Slider2})`,  height:'100vh', backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
        <div className="content">
        <div className="subcontent">
         <h2 class="animate__animated animate__fadeInDown"><span>Delicious</span> Restaurant</h2>
                <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div>
                  <a href="#menu" class="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" class="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                </div>
         </div>
         </div>
         </div>   </SwiperSlide>
      </Swiper>
    </Home>
  );
}
