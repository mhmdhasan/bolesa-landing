'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/shadcn-io/navbar-02';
import Link from 'next/link';

const navLinks = [
    { id: 'contact-us', href: '#contact-us', label: 'تواصل معنا' },
    { id: 'faq', href: '#faq', label: 'الأسئلة الشائعة' },
    { id: 'tracking', href: '#tracking', label: 'تتبع الشحنات' },
    { id: 'carriers', href: '#carriers', label: 'الناقلون' },
    { id: 'features', href: '#features', label: 'المميزات' },
    { id: 'howitworks', href: '#howitworks', label: 'آلية العمل' },
    { id: 'hero', href: '#hero', label: 'الرئيسية' },
];

export default function Header() {
    const [showNav, setShowNav] = useState(true);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    // Hide/show nav on scroll direction as before
                    if (currentScrollY <= 0) {
                        setShowNav(true);
                    } else if (currentScrollY > lastScrollY.current) {
                        setShowNav(false);
                    } else if (currentScrollY < lastScrollY.current) {
                        setShowNav(true);
                    }
                    lastScrollY.current = currentScrollY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Also listen on resize because positions can change
        window.addEventListener('resize', handleScroll);

        // Run once on mount to activate at correct position
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Add an "active" CSS class on the <li> itself for better targeting
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-9999 py-4 px-5 transition-transform duration-300 ${
                showNav ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className='max-w-[1490px] w-full mx-auto px-4 py-3 rounded-xl bg-background/50 backdrop-blur-sm border shadow-[0_3px_10px_rgba(0,0,0,0.1)]'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-10'>
                        <Logo />
                        <ul className='hidden xl:flex items-center gap-3 flex-row-reverse'>
                            {navLinks?.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        className={`font-ibm-plex-sans-arabic font-semibold transition-colors ${
                                            false
                                                ? // activeSection === link.href
                                                  'text-brand bg-accent/25 rounded-full px-3 py-1'
                                                : ''
                                        }`}
                                        href={link.href}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex items-center gap-3'>
                        <Button
                            variant='outline'
                            asChild
                            className='text-sm font-medium hover:bg-accent hover:text-accent-foreground'
                        >
                            <Link href='tel:1234567890' className='hidden! xl:inline-flex! items-center py-2.5! gap-3!'>
                                <span className='text-[12px] leading-none!'>اتصل بنا</span>
                                <span
                                    className='font-bold font-ibm-plex-sans-arabic leading-none! text-[17px]'
                                    style={{ direction: 'ltr' }}
                                >
                                    +966552993266
                                </span>
                            </Link>
                        </Button>
                        <Button variant='store' className='text-sm font-medium px-4 h-9 rounded-md shadow-sm' asChild>
                            <Link href='https://app.bolesa.net' target='_blank'>
                                تسجيل الدخول
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
