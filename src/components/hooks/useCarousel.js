import React, { useCallback, useState } from 'react'

export const useCarousel = (initialCounter, initialCardWidth, tasksLength) => {

    const [counter, setCounter] = useState(initialCounter);
    const [cardWidth] = useState(initialCardWidth)
    
    const handleNextButtonClick = useCallback(() => {
        if (counter < tasksLength -1){
            setCounter((prevCounter) => prevCounter + 1);
        }
    }, [counter, tasksLength]);
    
    const handlePrevButtonClick = useCallback(() => {
        if(counter > 0){
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, [counter]);

    const carouselStyle = {
        display: 'flex',
        transition: 'transform 0.5s ease',
        transform: `translateX(${-cardWidth * counter}px)`,
    };

    return {
        counter,
        carouselStyle,
        handleNextButtonClick,
        handlePrevButtonClick,
    };
};
