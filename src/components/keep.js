import React from 'react'
import { gsap } from "gsap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Fnav from './Fnav'
import Wave from './svg.png';
import Book from './Button'
import imagee from '../img/home3.png'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
const { useEffect, useRef } = React;
const data = [
  {
    id: 1,
    img:"home3.png"
  },
  {
    id: 2,
    img:"home3.png"
  },
  {
    id: 3,
    img:"home3.png"
  }
]
const DivHero = styled.div`
.hero {
  height:640px;
  background-image:url("../img/wave.png");
  background:#FFBE55;
}
.shop {
  margin:auto;
  margin-left:30px;
}
.heroimg img {
  width:300px
}
.subimg{
  width:400px;
}
.callaction {
  margin-top:200px;
}
.prewave {
  float:right;
  height:200px;
  margin-top:100px
}
@media only screen and (max-width: 500px) {
  .callaction {
    max-width:50;
    margin-top:70px;
  }
  .heroimg{
    margin-top:-30px;
  }
  .subimg .img-fluid {
    display:none;
  }
}
.btn{
  left: -28px;
  background: rgb(32,36,0);
background: linear-gradient(90deg, rgba(32,36,0,1) 0%, rgba(121,79,9,1) 0%, rgba(255,229,0,1) 100%); 
border:none;
border-radius:2px;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}
.split-parent {
  overflow: hidden;
}
.split-child {
  display: inline-block;
}
.text-heading {
  width: 900px;
}
.line h1 {
  letter-spacing:.1rem;
  
  font-size:52px
 
}
.line-wrap{
    overflow:hidden;
    height:46px;
  }

`;
function Fhero() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  let line1 = useRef(null)
  let line2 = useRef(null)
   
 //Animate text
 

 
 gsap.set("#quote", { perspective: 400 });
//end animate text
  const boxRef = useRef();
  useEffect(() => {
    gsap.fromTo(q(".box"), {
      opacity: 0
    }, {
      opacity: 1,
      duration: 3,
      stagger: 0.5
    });
    
    gsap.from([line1, line2], 0.8,{
      delay:.8,
      ease: "power3.out",
      y:64,
      duration:2,
      stagger: {
        amount: 0.15,
      }
    });
    gsap.to(boxRef.current, { rotation: "+=360", duration:4, stagger: 0.5, });
   
  },[])

  return (<DivHero>
  <Fnav/>
  <div  className="hero">
    <Container>
    

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col sm={6}><div className="callaction" style={{maxWidth:"300px"}}>
      {/* <Bounce top> <h2>hello</h2> </Bounce> */}
      
      {/* <Fade top delay={1000}> */}
      <div className='line-wrap'>
      <div className='line1' ref={el=> (line1 = el)}>
       <h1>Delicious Meal</h1> 
       </div>
       </div>
       <div className='line-wrap'>
       <div className='line2' ref={el=> (line2 = el)}>
       <h2>Awesome feelings</h2>
       </div>
       </div>
       {/* </Fade> */}

      <Fade down delay={2000}>
      
       </Fade>
       
      <Fade bottom delay={2000}> <p>Get all your eye wears at a discounted price and also win gifts while shopping.</p></Fade>
      <Slide left delay={3000}> <div className="shop"> <Book /></div> </Slide>
        
         </div></Col>
        <Col sm={6}>
          <div className='heroimg' style={{margin:"20px"}}>
          <div className="box" ref={boxRef} >
            <img  src={require("../img/home1.png")}  alt="" class="img-fluid" />
           </div>
            <div  style={{display:"flex"}} ref={el} className="subimg">
            {
        data.map(item => <div className="box">
            <img style={{marginLeft:"40px", width:"400px"}} src={item.img} alt="" class="img-fluid" />
              </div>)}
                            
          </div>
            </div>

        </Col>
      </Row>
    </Container>
    </div>
    <div style={{backgroundImage: `url(${Wave})`, height:"300px",marginTop:"-300px"}}>
    <div className='down' ref={el}>
    <img src={require("../img/home2.png")} alt="" class="prewave" />
   
    </div>
        </div>
    </DivHero>);
}

export default Fhero;