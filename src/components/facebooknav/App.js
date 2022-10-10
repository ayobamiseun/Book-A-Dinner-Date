import React, { useState } from 'react'
import {ReactComponent as BellIcon } from '../../icons/bell.svg';
import {ReactComponent as MessengerIcon } from '../../icons/messenger.svg'
import {ReactComponent as CaretIcon } from '../../icons/caret.svg'
import {ReactComponent as PlusIcon } from '../../icons/plus.svg'
import {ReactComponent as CogIcon } from '../../icons/cog.svg'
import {ReactComponent as ChevronIcon } from '../../icons/chevron.svg'
import {ReactComponent as ArrowIcon } from '../../icons/arrow.svg'
import {ReactComponent as BoltIcon } from '../../icons/bolt.svg'


import { CSSTransition } from 'react-transition-group';


import './face.css'

export default function App() {
  return (
     <Navbar>
     <NavItem icon={<PlusIcon/>}/>
     <NavItem icon={<BellIcon/>}/>
     <NavItem icon={<MessengerIcon/>}/>
      <NavItem icon={<CaretIcon />}>
         <DropdownMenu />
      </NavItem>
     </Navbar>
  )
}

function DropdownMenu() { 
   const [activeMenu, setActiveMenu] = useState('main')
   function DropdownItem(props){
             return(
               <a href='#' className='menu-item'>
                  <span className='icon-button'>{props.leftIcon}</span>
                  {props.children}
                  <span className='icon-right'>{props.rightIcon}</span>
               </a>
             )
   }
   return (
      <div className='dropdown'>
      <CSSTransition in={activeMenu=== 'main'}
      unmountOnExit
      timeout={500}
      classNames="menu-primary"
      >
      <div className="menu">
      <DropdownItem>My Profile</DropdownItem>
        <DropdownItem>
         leftIcon={<CogIcon/>}
         rightIcon={<ChevronIcon />}
        </DropdownItem>
      </div>
        
        </CSSTransition>
      </div>
   )
}

 function Navbar(props) {
  return (
    
        <nav className='navbarr'>
           <ul className='navbar-navv'>{props.children} </ul> 
        </nav>
     
  )
 }
 


function NavItem(props) {
   const [open, setOpen] = useState(false)
     return (
      <li className='nav-itemm'>
           <a hred="#" className='icon-button' onClick={() => setOpen(!open)}>
                 {props.icon} 
           </a>
           {open && props.children}
      </li>
     )
}
