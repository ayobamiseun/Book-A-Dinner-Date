import React from 'react'
import styled from 'styled-components'
import App from  './App'

const Face = styled.div`
  :root {
    --bg: #242526;
    --bg-accent:#484a4d;
    --text-color: #dadce1;
    --nav-size:60px;
    --border:1px solid #474a4d;
    --border-radius:8px;
    --speed:500ms;
  }
  ul {
    list-style:none;
    margin:0;
    padding:0;
    color:#fff;
  }
  a {
    color: var(--text-color);
    text-decoration:none;
  }
`;

export default function fbnav() {
  return (
    
        <Face>
           <App/>
          
        </Face>
    
  )
}
