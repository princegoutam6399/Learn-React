import React, { useState } from 'react'

const ImageSlider = () => {


    const images = [
        "https://images.pexels.com/photos/14847637/pexels-photo-14847637.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/720239/pexels-photo-720239.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/584366/snow-alpes-mountain-cold-584366.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

    }


    return (
        <div>
            <div className="conatiner">
                <div className="items">
                    <div className="icon">
                        <i class="fa-solid fa-angle-left" onClick={prev}></i>
                        <i class="fa-solid fa-angle-right" onClick={next}></i>
                    </div>
                    <div className="items">
                        {images.map((image, index) => (
                            <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
                                {index === currentIndex && <img src={image} alt={`Slide ${index}`} />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider