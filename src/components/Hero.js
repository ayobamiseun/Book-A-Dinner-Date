import React from 'react'
import { gsap } from "gsap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import Wave from './wav.svg';
import Book from './Button'
import imagee from '../img/home3.png'
import Slide from 'react-reveal/Slide';
import Wobble from 'react-reveal/Wobble';
import Fade from 'react-reveal/Fade';
const { useEffect, useRef } = React;
const data = [
  {
    id: 1,
    img:"specials-1.png"
  },
  {
    id: 2,
    img:"specials-4.png"
  },
  {
    id: 3,
    img:"specials-2.png"
  },
  {
    id: 4,
    img:"specials-5.png"
  }
]
const DivHero = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
body {
  ${'' /* font-family:'bebas Neue' */}
}
.hero {
  height:640px;
  background-image:url("../img/wave.png");
  background:#FFBE55;
}
.shop .shop1 {
  margin:auto;
  margin-left:30px;
}
.heroimg img {
  width:300px
}
.subimg{
  width:500px;
  
}
.callaction {
  margin-top:200px;
}
.prewave {
  float:right;
  height:200px;
  margin-top:100px
}
.callaction  h1 {
  letter-spacing:.1rem;
  // font-family: 'Bebas Neue';
  font-size:52px
  
}
@media only screen and (max-width: 500px) {
  .callaction {
    max-width:50;
    margin-top:70px;
  }
  .callaction  h1 {
  letter-spacing:.1rem;
  
  font-size:22px
  
}

  .heroimg{
    margin-top:50px;
  }
  
}
@media only screen and (max-width: 600px) {
  .wave{
  display:none;
}
.subimg .img-flui {
    display:none;
  }
}
.boxx{
    max-width:80%;
    margin:auto;
    
}
.btn{
  font-size:18px;
  left:0px;
  font-family:Arial;
  width:140px;
  height:40px;
  border-width:1px;
  color:#333333;
  border-color:#ffaa22;
  font-weight:bold;
  border-top-left-radius:38px;
  border-top-right-radius:38px;
  border-bottom-left-radius:38px;
  border-bottom-right-radius:38px;
  box-shadow: 1px 2px 7px -4px #fff6af;
  text-shadow: 0px 1px 0px #ffee66;
  background:linear-gradient(#ffec64, #ffab23);

}
`;
function Hero() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  
  const boxRef = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360", duration:5, stagger: 0.5, });
   
    gsap.fromTo(q(".box"), {
        opacity: 0
      }, {
        opacity: 1,
        duration: 3,
        stagger: 0.5
      });
  },[])

  return (<DivHero>
 
  <div  className="hero">
    <Container>
    

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col sm={6}><div className="callaction" style={{maxWidth:"80%", margin:"auto", marginTop:"70px"}}>
      {/* <Bounce top> <h2>hello</h2> </Bounce> */}
      
      <Fade top>
      
       <h1>Delicious Meal</h1> </Fade>

       <Fade bottom>
      
      <h1>Awesome feelings</h1> </Fade>
       
      <Fade bottom delay={2000}> <p>Get all your eye wears at a discounted price and also win gifts while shopping.</p></Fade>
      <Wobble> <div className="shop"> <Book className="shop1" title="book" /> </div>
      </Wobble>
         </div></Col>
        <Col sm={6}>
          <div className='heroimg' style={{}}>
          <div className="boxx" ref={boxRef} >
            <img  src={require("../img/home1.png")}  alt="" class="img-fluid" />
           </div>
            <div  style={{display:"flex"}} ref={el} className="subimg">
            {
        data.map(item => <div className="box">
            <img style={{ maxWidth:"70%"}} src={item.img} alt="" class="img-flui" />
              </div>)}
                            
          </div>
            </div>

        </Col>
      </Row>
    </Container>
    </div>
    <div className='wave' style={{backgroundImage: `url(${Wave})`, height:"300px",marginTop:"-250px"}}> <img src={require("../img/home2.png")} alt="" class="prewave" />
        </div>
    </DivHero>);
}

export default Hero;