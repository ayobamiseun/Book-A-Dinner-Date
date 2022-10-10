import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../steak.svg'
import styled from 'styled-components';
const Form = styled.div`
  .bbt  {
    ${'' /* background:red; */}
  }
`;

export default function Book() {
  return ( <div>
   <Container>
   <div class="section-title" style={{marginBottom:"0px"}}>
          <h2>Book a <span>Table</span></h2>
     </div>
   <Row>
   <Col sm={6}>
    <img src={img}/>
   </Col>
   <Col sm={6}>
         
         <Form style={{marginTop:"60px"}}>
        <form action="forms/book-a-table.php" method="post" role="form" class="php-email-form">
          <div class="row">
            <div class="col-md-6 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div class="validate"></div>
            </div>
            <div class=" col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
              <div class="validate"></div>
            </div>
            <div class=" col-md-6 form-group mt-3 ">
              <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div class="validate"></div>
            </div>
            <div class=" col-md-6 form-group mt-3">
              <input type="text" name="date" class="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div class="validate"></div>
            </div>
            <div class=" col-md-6 form-group mt-3">
              <input type="text" class="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div class="validate"></div>
            </div>
            <div class=" col-md-6 form-group mt-3">
              <input type="number" class="form-control" name="people" id="people" placeholder="number of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars"/>
              <div class="validate"></div>
            </div>
          </div>
          <div class="form-group mt-3">
            <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
            <div class="validate"></div>
          </div>
          <div class="mb-3">
            {/* <div class="loading">Loading</div>
            <div class="error-message"></div> */}
            {/* <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div> */}
          </div>
          <div class="text-center"><button type="submit" className='bbt'>Send Message</button></div>
        </form>
        </Form>
    
    </Col>
    </Row>
    </Container>
    </div>
  )
}
