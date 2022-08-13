import React, {useState, useEffect} from 'react'
import './Navbar.css'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import {
  
  Link
} from "react-router-dom";
import Contact from '../components/Contact'
import App from '../App'
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return ( 
  <>
  
<div className='header'>
<h3 className='all'>Ayobami</h3>
    <nav>
    
      {(toggleMenu || screenWidth > 500) && (
        
     <ul className="list">
      
      <button className='items table' >Book Time</button>
      <li className="items">Services</li>
      <li href className="items">Menu</li>
      <li className="items">Events</li>
      <li className="items">Gallery</li>
      <li className="items"><Link to="/about">About</Link></li>
      <li className="items"><Link to="/contact">Contact</Link></li>
      <Link to="/"><li className="items">Home</li></Link>
      
    </ul>
      )}
     
      <button onClick={toggleNav} href="#" className="btn"><FormatAlignLeftIcon /></button>
    </nav>
   
</div>
    
    </>
  )
}