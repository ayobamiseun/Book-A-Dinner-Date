
import React, { useState } from 'react';
import "./style.css";
import logo from './chefs.jpg';
import order from './slide.png'
import ord from './slid.jpg'
import {Animated} from "react-animated-css";


import Carousel from 'react-bootstrap/Carousel';

export default function Swipes() {
 
  return (
    <div class="swiper-container2" data-scroll>
          <div class="swiper-wrapper">
            
            <div class="swiper-slide">
              <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div class="slide-inner--image" style={"backgroundImage: url('https://source.unsplash.com/random')"}></div>
                <div class="slide-inner--info box4">
                  <h1>The Drive<br/>of your life</h1>
                  <a href="gallery.html" data-type="page-transition" class="ms-btn--slider">take a look</a>
                </div>
              </div>
            </div>
          
            <div class="swiper-slide">
              <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div class="slide-inner--image" style={"backgroundImage: url('https://source.unsplash.com/random')"}>
                </div>
                <div class="slide-inner--info">
                  <h1>The Power<br/>of Dreams</h1>
                  <a href="gallery.html" data-type="page-transition" class="ms-btn--slider">take a look</a>
                </div>
              </div>
            </div>
          
            <div class="swiper-slide">
              <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div class="slide-inner--image" style={"backgroundImage: url('https://source.unsplash.com/random')"}>
                </div>
                <div class="slide-inner--info">
                  <h1>romantic<br/>chipping</h1>
                  <a href="gallery.html" data-type="page-transition" class="ms-btn--slider">take a look</a>
                </div>
              </div>
            </div>
            
            <div class="swiper-slide">
              <div class="slide-inner" data-swiper-parallax="45%">
                <div class="overlay"></div>
                <div class="slide-inner--image" style={"backgroundImage: url('https://source.unsplash.com/random')"}>
                </div>
                <div class="slide-inner--info">
                  <h1>What<br/>the Fog?</h1>
                  <a href="gallery.html" data-type="page-transition" class="ms-btn--slider">take a look</a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-nav-btn">
            <div class="swiper-button-prev swiper-button-white">prev</div>
            <div class="swiper-button-next swiper-button-white">next</div>
          </div>
          
        </div>
  );
}
