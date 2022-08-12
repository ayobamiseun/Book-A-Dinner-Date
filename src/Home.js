import React from 'react'
import  './App.css';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/bootstrap.min.css';
import Button from '@mui/material/Button';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './components/Navbar';
import Gallery from './components/Image';


import Slider from './components/Slider';
import Tell  from './components/Tell';
import Tabs from './components/Tab';
import Para from './components/Parral';
import Organ from './components/Organise';
import Hero from './components/Homeswipe';
import Booktable from './components/Book';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// import image from '../../public/images/chefs.jpg'
const images = [ 
  `${process.env.PUBLIC_URL+ "/chefs.jpg"}`,
  `${process.env.PUBLIC_URL+ "/slide/slide-3.jpg"}`,
  `${process.env.PUBLIC_URL+ "/slide/slide-2.png"}`,
  `${process.env.PUBLIC_URL+ "/slide/slide-1.jpeg"}`,
  // `url(${process.env.PUBLIC_URL+ "/chefs.jpg"})`,
  // 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  // 'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  // 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  // 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
 ]
function Home() {
  return (
    <div>
    {/* <Route></Route> */}
     <Navbar/>
     {/* <Slider slides={images} autoPlay={2} /> */}
      <Hero/>
      <Tabs/>
      {/* <Button variant="contained">Hello World</Button> */}

      <Gallery/>
      <div className="organ-bc">
      <Organ/>
      </div>
      <Booktable/>
      <Footer/>
      
      
      
    </div>
    
  );
}

export default Home;
