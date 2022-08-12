import React, { Component } from 'react'
import { css } from '@emotion/core'
import styled from "styled-components";

// import Button from '@mui/material/Button';

const Button = styled.button`
  ${'' /* display: flex; */}
  transition: 0.5s;
  line-height: 1;
  margin: 0 10px;
  ${'' /* -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s; */}
  color: #fff;
  border: 2px solid #ffb03b;
  height: 50px;
  background-color: red;
  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  translate(-50%, -50%) /* Apply negative top and left margins to truly center the element */
`;

const Container = styled.div`
`;
    
  

export class SliderText extends Component {
  render() {
    return (
      <div 
      
      >
      <Container
      
      >
           <Button 
     >Contained1</Button>
      </Container>
     
        
      </div>
    )
  }
}

export default SliderText