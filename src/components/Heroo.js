import React, { useRef, useState } from "react";
import {Animated} from "react-animated-css";
import styled from 'styled-components';
// import Slider1 from '../svg.png';
import Slider2 from '../img/slide/slide-2.png';
import Slider3 from '../img/slide/slide-3.jpg';
const Home = styled.div`

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

${'' /* hero 2 */}

`
export default function Hero() {
    return (
      <Home>
        <div style={{backgroundImage: `url(${Slider2})`, height:'100vh', backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
          
           <div className="content" style={{}}>
             <div className="subcontent">
                      <Animated animationInDuration={3000} animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                      <h2 class="animate__animated animate__fadeInDown"><span>Delicious</span> Restaurant</h2>
                      </Animated>
                      <Animated animationInDuration={3000} animationIn="wobble" animationOut="ZoomOutDown" isVisible={true}>
                      <p class="animate__animated animate__fadeInUp">Book a remarkable dinner date with your love ones.</p>
                      </Animated>
                      <Animated animationInDuration={5000} animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                      <a href="#menu" class="btn-menu animate__animated animate__fadeInUp scrollto bbt">Our Menu</a>
                    <a href="#book-a-table" class="btn-book animate__animated animate__fadeInUp scrollto bbt">Book a Table</a>
           
                      </Animated>
              </div>
             </div>
                   
           </div>

      </Home>
    );
  }
  