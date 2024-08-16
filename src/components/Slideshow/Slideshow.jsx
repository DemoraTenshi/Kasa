import React, { useState } from 'react'
import leftArrow from '../../assets/arrow-prev.png'
import rightArrow from '../../assets/arrow-next.png'
import Modal from '../Modal/Modal'
import './Slideshow.scss'
function Slideshow({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    };

    const openModal = (index) => {
        setCurrentIndex(index)
        setIsModalOpen(true)
    };

    const closeModal = () => {
        setIsModalOpen(false)
    };

    const showNavigation = slides.length > 1

    return (
        <div className='slideshow'>
            <div className='slideshow__container'>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slideshow__slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            onClick={() => openModal(index)}
                        />
                        {showNavigation && (
                            <p className='slideshow__caption'>
                                {currentIndex + 1}/{slides.length}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            {showNavigation && (
                <>
                    <button className='slideshow__button prev' onClick={goToPrevious}>
                        <img src={leftArrow} alt='Previous' />
                    </button>
                    <button className='slideshow__button next' onClick={goToNext}>
                        <img src={rightArrow} alt='Next' />
                    </button>
                </>
            )}
            {isModalOpen && (
                <Modal
                    images={slides}
                    currentIndex={currentIndex}
                    onClose={closeModal}
                    onNavigate={(index) => setCurrentIndex(index)}
                />
            )}
        </div>
    )
}


export default Slideshow;
