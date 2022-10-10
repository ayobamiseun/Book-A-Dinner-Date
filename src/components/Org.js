import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';





const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];
const Example = () => {
   
    const images = [
        "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
        "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
        "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg",
        "./gallery/gallery-1.jpg",
        "./gallery/gallery-2.jpg",
        "./gallery/gallery-3.jpg",
        "./gallery/gallery-4.jpg",
        "./gallery/gallery-5.jpg",
        "./gallery/gallery-6.jpg",
        "./gallery/gallery-7.jpg",
        "./gallery/gallery-8.jpg"
    ];

    return (
        <div style={{marginTop:"50px"}}>
         <div className="section-title">
          <h2 className="special" style={{}}> Ga<span>ll</span>ery</h2>
          {/* <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p> */}
        </div>
            <Slide slidesToScroll={1} slidesToShow={1} indicators={true} duration={1000} responsive={responsiveSettings}>
                <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[7]})`, height:"300px", backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundSize:"450px" }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[8]})`, height:"300px", backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundSize:"490px" }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})`, height:"300px", backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundSize:"490px" }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[7]})`, height:"300px", backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundSize:"490px" }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})`, height:"300px", backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundSize:"490px" }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[8]})`, height:"300px", backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundSize:"490px" }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})`, height:"300px", backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundSize:"490px" }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[9]})`, height:"300px", backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundSize:"490px" }}>
                    <span>Slide 3</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[9]})`, height:"300px", backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundSize:"490px" }}>
                    <span>Slide 3</span>
                </div>
            </div>
            </Slide>
        </div>
    );
};

export default Example;