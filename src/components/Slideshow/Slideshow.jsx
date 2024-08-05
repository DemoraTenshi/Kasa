import React, { useState } from "react"
import PropTypes from "prop-types"
import leftArrow from "../../assets/arrow-prev.png"
import rightArrow from "../../assets/arrow-next.png"
import './Slideshow.scss'

function Slideshow({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    const showNavigation = slides.length > 1;

    return (
        <div className="slideshow">
            <div className="slideshow__container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slideshow__slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={slide} alt={`Slide ${index + 1}`} />
                        {showNavigation && (
                            <p className="slideshow__caption">
                                {currentIndex + 1}/{slides.length}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            {showNavigation && (
                <>
                    <button className="slideshow__button prev" onClick={goToPrevious}>
                        <img src={leftArrow} alt="Previous" />
                    </button>
                    <button className="slideshow__button next" onClick={goToNext}>
                        <img src={rightArrow} alt="Next" />
                    </button>
                </>
            )}
        </div>
    );
}

Slideshow.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;