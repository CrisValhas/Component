import "./Styles/Visual.css"
import { useState } from "react";
import { useEffect } from "react";


export default function Visual() {

    const [state, setState] = useState({
        slideIndex:0,
});
    let a={
        img:"https://somoskudasai.com/wp-content/uploads/2022/04/portada_spy-x-family-33.jpg",
        caption:"title 1",
        description:"This product is amazing 1",
        details:"width: 900,large:300,made in :taiwan"
    };
    let b={
        img: "https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2022/05/01/C8E3DCB0-3FE6-4B0D-8302-2B9845EFEC8B/spy-family_98.jpg?crop=1280,720,x0,y0&width=1900&height=1069&optimize=high&format=webply",
        caption:"title 2",
        description:"This product is amazing 2",
        details:"width: 900,large:300,made in :taiwan"
    };
    let c={img:"https://as01.epimg.net/meristation/imagenes/2022/06/13/noticias/1655110766_378946_1655111034_noticia_normal.jpg",
        caption:"title 3",
        description:"This product is amazing 3",
        details:"width: 900,large:300,made in :taiwan"
    };
    let currentImage =[a,b,c]

    // Next/previous controls
    function plusSlides(n) {
        
        if (state.slideIndex + n === -1 ){
            return setState({
                ...state,
                slideIndex: (currentImage.length-1),
                
            });
        }
        if (state.slideIndex + n === currentImage.length){
            return setState({
            ...state,
            slideIndex: 0,
        });
        }
            return setState({
                ...state,
                slideIndex: (state.slideIndex) + n,
        });
    }
    // Thumbnail image controls
    function currentSlide(n) {
        setState({
            ...state,
            slideIndex: n,
    });
    }
    return (
        
        <div className="back">
            {/* <!-- Slideshow container --> */}
            <div className="slideshow-container">
                {/* <!-- Full-width images with number and caption text --> */}
                <div className ="imgless"><li>{currentImage[state.slideIndex].description}</li></div>
                <div className="fade">
                    <img className="img" src={currentImage[state.slideIndex].img}  alt =""/>
                </div>
                <div className ="imgless"><li>{currentImage[state.slideIndex].details}</li></div>
            </div>
            {/* <!-- The dots/circles --> */}
            <div  className="signal">
                <span className="dot" onClick={(e)=>currentSlide(0)}></span>
                <span className="dot" onClick={(e)=>currentSlide(1)}></span>
                <span className="dot" onClick={(e)=>currentSlide(2)}></span>
            </div>
            {/* <!-- Next and previous buttons --> */}
            <div className="text">
                    <button className="plusSlides" onClick={(e)=>plusSlides(-1)}>previous</button>
                        <div className="Nov"><h1>{currentImage[state.slideIndex].caption}</h1></div>
                    <button className="plusSlides" onClick={(e)=>plusSlides(1)}>next</button>
            </div>
        </div>
    )

}