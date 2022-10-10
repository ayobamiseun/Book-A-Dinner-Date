import React from 'react'
import  './App.css';
import Button from '@mui/material/Button';
import Navbar  from './components/Navbar';
// import Gallery from './components/Image';
import Slider from './components/Slider';
import Tell  from './components/Org';
import Tabs from './components/Tab';
import Header from './components/Header'
import Hero from './components/Hero';

import More from './components/Organise'
import Booktable from './components/Book';
import Footer from './components/Footer';
import Contact from './components/Contact';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Tabs/>
      <More />
      <Booktable/>
      <Tell/>
      <Footer/>    
    </div>
    
  );
}

export default Home;
