import React from 'react'
import { gsap } from "gsap";
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const { useEffect, useRef, useState, useLayoutEffect } = React;

const data = [
  {
    id: 1,
    img:"https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg"
  },
  {
    id: 2,
    img:"https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg"
  },
  {
    id: 3,
    img:"https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg"
  }
]
const Divdog = styled.div`
.box {
    display:flex;
    height:50px;
    width:50px;
} 
`;
function Box({ children, img }) {    
  return (<Divdog>
    <div className="box">{children}</div>
    </Divdog> );
}

export default function Gsap() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  
 
  useEffect(() => {
   
    gsap.fromTo(q(".box"), {
        opacity: 0
      }, {
        opacity: 1,
        duration: 3,
        stagger: 0.5
      });
  },[])

  return (
    <div className="panel flex-row" ref={el}>
    <Row><Col xs={4}>
      {
        data.map(item => <Box key={item.id} {...item }> <img src={item.img} /></Box>)
      }
      </Col></Row>
    </div>
  );
}

