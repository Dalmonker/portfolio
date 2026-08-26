import { useState, useEffect } from 'react';

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,  // вместо undefined
        height: 0, // вместо undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};