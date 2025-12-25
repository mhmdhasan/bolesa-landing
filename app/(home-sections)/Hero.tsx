'use client';

import { useRef, useEffect, useState } from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import { Highlighter } from '@/components/ui/highlighter';
import 'swiper/css';
import Lenis from 'lenis';
import { motion } from 'motion/react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { BsStars } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaAppStore } from 'react-icons/fa6';
import { FaGooglePlay } from 'react-icons/fa6';
import { FaShippingFast } from 'react-icons/fa';
import { TextAnimate } from '@/components/ui/text-animate';
import HLine from '@/components/HLine';
import { SlidingNumber } from '@/components/ui/sliding-number';
import useMobile from '@/app/hooks/useMobile';
// 3193d8a f214b23

const fadeInUp = (delay = 0, duration = 0.7, y = 30) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0, transition: { duration, delay } },
});

function CursorCircle() {
    const circleRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setCoords({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    // Animate with CSS transform for best performance
    useEffect(() => {
        if (circleRef.current) {
            circleRef.current.style.transform = `translate3d(${coords.x - 9}px, ${coords.y - 9}px, 0)`;
        }
    }, [coords]);

    // The circle is pointer-events-none so it never blocks anything.
    return (
        <div
            ref={circleRef}
            className='hidden lg:block fixed z-99 pointer-events-none mix-blend-difference'
            style={{
                left: 0,
                top: 0,
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#fff',
                transition: 'all 0.1s',
                // transform handled by useEffect for performance
                willChange: 'transform',
            }}
        />
    );
}

export default function Hero() {
    const isMobile = useMobile();
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            smoothWheel: true,
            // easing: (t) => Math.min(1, 1.001 - Math.pow(6, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <section className='py-[80px] lg:py-[150px] w-full overflow-hidden relative' id='hero'>
            {/* Cursor Follower Circle */}
            <CursorCircle />
            <div className='flex absolute top-16.5 flex-col items-center justify-center w-full mx-auto'>
                <HLine />
            </div>

            <FlickeringGrid
                className='absolute inset-0 z-0 mask-[radial-gradient(1000px_circle_at_center,white,transparent)]'
                squareSize={4}
                gridGap={6}
                color='#ccc'
                maxOpacity={0.3}
                flickerChance={0.2}
                height={800}
                width={2000}
            />
            <div className='max-w-[1110px] mt-10 w-full mx-auto relative px-4 lg:px-0'>
                <div className='framer-1hdn25l absolute inset-0 top-20 opacity-30'>
                    <div className='framer-upm3bh'></div>
                    <div className='framer-1v27kjt'></div>
                    <div className='framer-tc2tc4'></div>
                    <div className='framer-1durknj hidden-9p1vnb'></div>
                    <div className='framer-q9md6a'></div>
                    <div className='framer-zgoxf9 hidden-9p1vnb'></div>
                    <div className='framer-hoxdws hidden-9p1vnb'></div>
                </div>
                <div
                    className='framer-gjtruq hidden-1jmelty hidden-9p1vnb absolute inset-0 opacity-60'
                    data-framer-name='Rings'
                >
                    <div className='framer-ewttbr'>
                        <div className='framer-1e2t9ku'></div>
                    </div>
                </div>
                <motion.div
                    className='flex text-center items-center flex-col w-full gap-7 relative z-20'
                    initial='initial'
                    animate='animate'
                >
                    <motion.div variants={fadeInUp(0.05)}>
                        <div className='cursor-default bg-background  shadow-[0_5px_20px_rgba(0,0,0,0.07)] hidden lg:inline-flex gap-2 items-center border border-muted-foreground/10 w-fit backdrop-blur-lg rounded-xl px-5 py-1 text-[16px] font-ibm-plex-sans-arabic'>
                            <BsStars className='text-brand' />
                            بوليصة هي الإختيار الأنسب والأكثر أمانًا للشحن المتميز
                            <BorderBeam size={50} className='from-transparent via-orange-500 to-transparent' />
                        </div>
                        <div className='cursor-default bg-background shadow-[0_5px_20px_rgba(0,0,0,0.07)] inline-flex lg:hidden gap-2 items-center border border-muted-foreground/10 w-fit backdrop-blur-lg rounded-xl px-5 py-1 text-[16px] font-ibm-plex-sans-arabic'>
                            <BsStars className='text-brand' />
                            بوليصة هي الإختيار الأنسب للشحن المتميز
                            <BorderBeam size={50} className='from-transparent via-orange-500 to-transparent' />
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp(0.15)}>
                        <h1 className='cursor-default font-ibm-plex-sans-arabic relative font-extrabold text-[44px] lg:text-6xl leading-[50px]'>
                            <TextAnimate className='inline-block' animation='blurInUp' by='word' once>
                                أقوى
                            </TextAnimate>{' '}
                            <Highlighter
                                action='underline'
                                strokeWidth={3.5}
                                padding={isMobile ? 4 : 10}
                                iterations={2}
                                color='#f28247'
                                isView={true}
                            >
                                <span className='cursor-default font-ibm-plex-sans-arabic relative z-20'>منصة شحن</span>
                            </Highlighter>{' '}
                            <TextAnimate className='inline-block' animation='blurInUp' by='word' once>
                                للمتاجر الإلكترونية
                            </TextAnimate>
                        </h1>
                    </motion.div>
                    <motion.div className='text-lg max-w-3xl mx-auto cursor-default' variants={fadeInUp(0.23)}>
                        <TextAnimate className='inline-block' animation='blurInUp' by='word' duration={2} once>
                            بوليصة تقدم لك الحل الشامل لإدارة عمليات الشحن لمتجرك الإلكتروني بسهولة وسرعة. مع خدمات
                            موثوقة وآمنة، نوفر لك متابعة الشحنات، اختيار أفضل شركات النقل، وتكامل سلس مع متجرك
                        </TextAnimate>
                    </motion.div>
                    <motion.div
                        className='p-1 bg-muted/30 relative z-20 rounded-2xl border-2 border-muted-foreground/10 ring-3 ring-muted-foreground/5 grid grid-cols-1 xl:grid-cols-3 gap-2 w-full max-w-2xl'
                        variants={fadeInUp(0.32)}
                    >
                        <motion.div variants={fadeInUp(0.35, 0.6, 10)}>
                            <div className='rounded-xl flex justify-center flex-col items-center cursor-default bg-background/60 backdrop-blur-sm px-4 py-5 shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                                <div className='flex items-center justify-center text-3xl font-bold font-ibm-plex-sans-arabic bg-linear-to-r from-brand via-orange-600/70 to-orange-700/80 bg-clip-text text-transparent'>
                                    2,000,000
                                </div>
                                <p>بوليصة</p>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInUp(0.41, 0.6, 10)}>
                            <div className='rounded-xl bg-background/60 backdrop-blur-sm flex justify-center items-center flex-col px-4 py-5 shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                                <span className='text-3xl font-bold font-ibm-plex-sans-arabic bg-linear-to-r from-brand via-orange-600/70 to-orange-700/80 bg-clip-text text-transparent'>
                                    +4000
                                </span>
                                <p>عميل</p>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInUp(0.47, 0.6, 10)}>
                            <div className='rounded-xl bg-background/60 backdrop-blur-sm flex justify-center items-center flex-col px-4 py-5 shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                                <div className='flex items-center text-3xl font-bold font-ibm-plex-sans-arabic bg-linear-to-r from-brand via-orange-600/70 to-orange-700/80 bg-clip-text text-transparent'>
                                    99.7%
                                </div>
                                <p>نسبة نجاح</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className='w-full flex flex-col items-center gap-2'>
                        <motion.div variants={fadeInUp(0.53)} className='text-neutral-6700 mb-3'>
                            <TextAnimate className='inline-block' animation='blurInUp' by='word' duration={1} once>
                                حمّل تطبيق بوليصة أو ابدأ الشحن من تطبيق الويب بسهولة وسرعة
                            </TextAnimate>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp(0.58)}
                            className='flex items-center justify-center flex-col lg:flex-row gap-2 flex-wrap'
                        >
                            <Button asChild variant='primary' className='px-6! w-full lg:w-auto'>
                                <Link target='_blank' href={'https://app.bolesa.net'}>
                                    ابدأ الشحن الآن
                                    <FaShippingFast className='size-6 shrink-0 rotate-y-180' />
                                </Link>
                            </Button>
                            <div className='flex items-center justify-center gap-2'>
                                <Button asChild variant='store' className='py-2! grow lg:w-auto'>
                                    <Link
                                        target='_blank'
                                        href={
                                            'https://apps.apple.com/sa/app/bolesa-%D8%A8%D9%88%D9%84%D9%8A%D8%B5%D8%A9/id6670608761'
                                        }
                                    >
                                        <div className='inline-flex gap-2'>
                                            <div className='inline-flex text-end gap-0 flex-col'>
                                                <p className='text-[11px] font-regular leading-none uppercase'>
                                                    Get It On
                                                </p>
                                                <p className='text-[14px] font-bold leading-none'>App Store</p>
                                            </div>
                                            <FaAppStore className='size-6 shrink-0' />
                                        </div>
                                    </Link>
                                </Button>
                                <Button asChild variant='store' className='py-2! grow lg:w-auto'>
                                    <Link
                                        target='_blank'
                                        href={
                                            'https://play.google.com/store/apps/details?id=com.storagestation.bolesa.co'
                                        }
                                    >
                                        <div className='inline-flex gap-2'>
                                            <div className='inline-flex text-end gap-0 flex-col'>
                                                <p className='text-[11px] font-regular leading-none uppercase'>
                                                    Get It On
                                                </p>
                                                <p className='text-[14px] font-bold leading-none'>Google Play</p>
                                            </div>
                                            <FaGooglePlay className='size-6 shrink-0' />
                                        </div>
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
