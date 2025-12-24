import { useEffect, useState } from 'react';

export default function useMobile(breakpoint: number = 768) {
    const [isMobile, setIsMobile] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= breakpoint;
        }
        return false;
    });

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= breakpoint);
        }

        window.addEventListener('resize', handleResize);
        // Run initially in case SSR mismatch
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint]);

    return isMobile;
}
