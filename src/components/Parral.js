import React from 'react';
import Tabs from './Tab';
// import Hero from './components/Homeswipe';
// import { Parallax, ParallaxLayer } from '@react-spring/web';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Parral() {
  return (
    <div>
        <Parallax pages={2} style={{ top: '0', left: '0' }}>
  <ParallaxLayer
    offset={0}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* <Tabs/> */}
  </ParallaxLayer>

  <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#fff' }} />

  <ParallaxLayer
    offset={2}
    speed={0.5}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // color: 'white',
    }}>
    <Tabs/>
  </ParallaxLayer>
</Parallax>
    </div>
  )
}
