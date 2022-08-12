import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import styled from "styled-components";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Organ = styled.div`

#Orga { 
    height: 100%;
   
 }
html,
body {
  position: relative;
  height: 100%;
 
 
}

body {
  ${'' /* background: #eee; */}
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  background-image:url('${process.env.PUBLIC_URL+ "/../gallery/gallery-4.jpg"}');
   
}

.swiper {
  width: 100%;
  height: 100%;
   margin-top: 50px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  ${'' /* background: #fff; */}
     ${'' /* background-color:red; */}
   
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
 
}
.orgb{
    width:100%;
    background:red;
    background-image:url('${process.env.PUBLIC_URL+ "../../gallery/gallery-4.jpg"}');
    ${'' /* background-color:red;
    position:absolute;
    z-index:10000; */}
    position:relative;
}
${'' /* .orgb::before {
  content: "";
  background-color: rgba(12, 11, 10, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
} */}
.show {
    display:flex;
    ${'' /* background-color:red; */}
    width:90%;
    ${'' /* display: flex;
  flex-direction: column;
  background: #565656;
  padding: 5px;
  align-content: space-between;
  justify-content: space-between; */}

  font-weight: 600;
  font-size: 26px;
  color: #fff;
}
.price {
    color: #ffb03b;

}
.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  margin: 15px 0 0 0;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
   font-family: "Poppins", sans-serif;
}
.section-title h2 span {
  color: #ffb03b;
}
.section-title p {
  margin: 15px auto 0 auto;
  font-weight: 300;
}
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}
.swiper-pagination {
    position: initial;
    text-align: center;
    transition: .3s opacity;
    transform: translate3d(0,0,0);
    z-index: 10;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
    cursor:pointer;
    ${'' /* width:0px; */}
    height:20px;
    width:20px;
    font-weigth:800;
    background-color: #ffb03b;
}

.events .event-item {
  color: #fff;
}
.events .event-item h3 {
  font-weight: 600;
  font-size: 26px;
  color: #ffb03b;
}
.events .event-item .price {
  font-size: 26px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-bottom: 15px;
}
.events .event-item .price span {
  border-bottom: 2px solid #ffb03b;
}
.events .event-item ul {
  list-style: none;
  padding: 0;
}
.events .event-item ul li {
  padding-bottom: 10px;
}
.events .event-item ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #ffb03b;
}
.events .event-item p:last-child {
  margin-bottom: 0;
}
.show .fst-italic {
    font-size:19px;
}
.show  ul {
    font-size: 18px;
  padding-right: 4px;
  color: #fff;
   font-family: "Poppins", sans-serif;
}
.show  p {
    font-size: 18px;
  padding-right: 4px;
  color: #fff;
   font-family: "Poppins", sans-serif;
}
.show p {
    display:flex;
  margin-left:20px;
}
.show h3 {
    font-weight: 600;
  font-size: 26px;
  color: #ffb03b;
  display:flex;
  margin:20px;
  margin-top: 0;
}
.show  .ul i {
    font-size: 20px;
  padding-right: 4px;
  color: #ffb03b;
}
@media (max-width: 1024px) {
	 .show {
        flex-flow: row wrap;
		 ${'' /* flex-grow: 0; */}
	} }
    @media (max-width: 768px) {
	 .show {
		 justify-content: center;
	}
}`


export default function Orga() {
  return (
    <>
     <Organ className="orgb">
     <div class="section-title">
          <h2>Organize Your <span>Events</span> in our Restaurant</h2>
        </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
     <div className="or">
     <SwiperSlide>
        <div className="show">
            <div> <img src={`${process.env.PUBLIC_URL+ "../../gallery/event-custom.jpg"}`}alt="Plant 6" className="item__image"/></div>
            <div> 
            <h3>Custom Parties</h3>
                  <div class="price">
                    <p><span>$99</span></p>
                  </div>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul className="ul">
                    <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur
                  </p></div>
        </div>
      </SwiperSlide>
     </div>
      
     <div className="or">
     <SwiperSlide>
        <div className="show">
            <div> <img src={`${process.env.PUBLIC_URL+ "../../gallery/event-birthday.jpg"}`}alt="Plant 6" className="item__image"/></div>
            <div> 
            <h3>Birthday Parties</h3>
                  <div class="price">
                    <p><span>$99</span></p>
                  </div>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur
                  </p> </div>
        </div>
      </SwiperSlide>
     </div>
     <div className="or">
     <SwiperSlide>
        <div className="show">
            <div> <img src={`${process.env.PUBLIC_URL+ "../../gallery/event-private.jpg"}`}alt="Plant 6" className="item__image"/></div>
            <div> 
            <h3>Private Events</h3>
                  <div class="price">
                    <p><span>$99</span></p>
                  </div>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur
                  </p> </div>
        </div>
      </SwiperSlide>
     </div>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      </Organ>
        
    </>
  );
}
