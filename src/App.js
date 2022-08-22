import React from 'react'
import  './App.css';
import Home from './Home'
import Contact from './components/Contact';
import Abt from './components/About2';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


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
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Abt />} />
      <Route path="contact" element={<Contact />}>
        {/* <Route path="me" element={<OwnUserProfile />} />
        <Route path=":id" element={<UserProfile />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
