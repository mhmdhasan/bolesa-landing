'use client';

import React, { useEffect, useState } from 'react';

const ScrollTopButton: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 1000);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={handleClick}
            className={`fixed right-5 z-9999 bg-foreground text-background font-ibm-plex-sans-arabic text-[13px] font-bold rounded-t-lg inline-flex items-center justify-center px-3 py-1.5 cursor-pointer ${
                showButton ? 'bottom-0' : '-bottom-10'
            } transition-all duration-600`}
            aria-label='Scroll to top'
        >
            عودة للأعلى
        </button>
    );
};

export default ScrollTopButton;
