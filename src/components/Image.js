import React, { Component } from 'react'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import styled from "styled-components";

// import Button from '@mui/material/Button';

const Imageh = styled.div`
.items2 {
	 display: flex;
	 flex-wrap: wrap;
	 gap: 1.5rem;
   justify-content: center;
}
 @media (max-width: 768px) {
	 .items2 {
		 justify-content: center;
	}
}
 .item2 {
	order: 4;
    height: 321px;

}
 @media (max-width: 1024px) {
	 .item2 {
		 flex-grow: 0;
     justify-content: center;
	}
}
 .item__position {
	 width: 100%;
	 height: 25rem;
	 position: relative;
	 ${'' /* background: #f7f7f7; */}
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 cursor: pointer;
   justify-content: space-between;
}
 .item__image {
	 height: 80%;
	 cursor: pointer;
     width: 342px;
}
 .item__image--hue {
	 filter: hue-rotate(130deg);
}
 .item__detail {
	 font-size: 1.6rem;
	 padding-top: 0.8rem;
	 text-align: left;
}
 .item__detail p {
	 margin: 0;
}

`;

export class Image extends Component {
  render() {
    return (
       
        <Imageh className="items2">
        <div className="items2">
        <div className="item2">
          <div className="item__position">
            <img src={`${process.env.PUBLIC_URL+ "../../gallery/gallery-1.jpg"}`}alt="Plant 1" className="item__image item__image--hue"/>
          </div>
         
        </div>
        <div className="item2">
          <div className="item__position">
            <img src={`${process.env.PUBLIC_URL+ "../../gallery/gallery-2.jpg"}`} alt="Plant 2" className="item__image item__image--hue"/>
          </div>
          
        </div>
        <div className="item2">
          <div className="item__position">
            <img src={`${process.env.PUBLIC_URL+ "../../gallery/gallery-3.jpg"}`} alt="Plant 3" className="item__image"/>
          </div>
         
        </div>
        <div className="item2">
          <div className="item__position">
            <img src={`${process.env.PUBLIC_URL+ "../../gallery/gallery-4.jpg"}`} alt="Plant 4" className="item__image item__image--hue"/>
          </div>
          
        </div>
        <div className="item2">
          <div className="item__position">
            <img src={`${process.env.PUBLIC_URL+ "../../gallery/gallery-5.jpg"}`}alt="Plant 5" className="item__image item__image--hue"/>
          </div>
         
        </div>
        <div className="item2">
          <div className="item__position">
            <img src={`${process.env.PUBLIC_URL+ "../../gallery/gallery-6.jpg"}`}alt="Plant 6" className="item__image"/>
          </div>
          
        </div>
        <div className="item2">
          <div className="item__position">
            <img src={`${process.env.PUBLIC_URL+ "../../gallery/gallery-7.jpg"}`}alt="Plant 7" className="item__image"/>
          </div>
          
        </div>
        <div className="item2">
          <div className="item__position">
            <img src={`${process.env.PUBLIC_URL+ "../../gallery/gallery-8.jpg"}` }alt="Plant 8" className="item__image item__image--hue"/>
          </div>
          
        </div>
        
        </div>
      </Imageh>
       
    //     <ImageList sx={{ width: 1200, height: 450 }} cols={4} rowHeight={227}>
    //     {itemData.map((item) => (
    //       <ImageListItem key={item.img}>
    //         <img
    //           src={`${item.img}?w=227&h=227&fit=crop&auto=format`}
    //           srcSet={`${item.img}?w=227&h=227&fit=crop&auto=format&dpr=2 2x`}
    //           alt={item.title}
    //           loading="lazy"
    //         />
    //       </ImageListItem>
    //     ))}
    //   </ImageList>
    )
  }
}

export default Image

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];