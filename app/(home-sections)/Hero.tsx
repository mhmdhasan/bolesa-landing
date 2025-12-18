'use client';

import { useRef, useEffect, useState } from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import Image from 'next/image';
import { Highlighter } from '@/components/ui/highlighter';
import HLine from '@/components/HLine';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Lenis from 'lenis';
import { motion } from 'motion/react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { BsStars } from 'react-icons/bs';

const carrierImages = [
    // ... (same as before)
    {
        src: '/aramex-del.png',
        alt: 'ارامكس',
        width: 120,
        height: 100,
        delay: 0,
    },
    {
        src: '/sobol.png',
        alt: 'واي اكسبريس',
        width: 80,
        height: 100,
        delay: 100,
    },
    {
        src: '/smsa.png',
        alt: 'يو بي اس',
        width: 120,
        height: 100,
        delay: 200,
    },
    {
        src: '/jt_express.png',
        alt: 'مخدوم',
        width: 120,
        height: 100,
        delay: 300,
    },
    {
        src: '/naqel.png',
        alt: 'ناقل',
        width: 150,
        height: 100,
        delay: 400,
    },
    {
        src: '/kwick-box.png',
        alt: 'كويك بوكس',
        width: 120,
        height: 100,
        delay: 400,
    },
    {
        src: '/redbox.svg',
        alt: 'ريد بوكس',
        width: 120,
        height: 100,
        delay: 400,
    },
    {
        src: '/third_mile.png',
        alt: 'ثرد مايل',
        width: 120,
        height: 100,
        delay: 400,
    },
    {
        src: '/fastlo.png',
        alt: 'فاستلو',
        width: 120,
        height: 100,
        delay: 400,
    },
    {
        src: '/flow_express.png',
        alt: 'فلو إكسبريس',
        width: 100,
        height: 100,
        delay: 400,
    },
    {
        src: '/imile_2.png',
        alt: 'اي مايل',
        width: 80,
        height: 100,
        delay: 400,
    },
    {
        src: '/aramex-del.png',
        alt: 'ارامكس',
        width: 120,
        height: 100,
        delay: 0,
    },
    {
        src: '/sobol.png',
        alt: 'واي اكسبريس',
        width: 80,
        height: 100,
        delay: 100,
    },
    {
        src: '/smsa.png',
        alt: 'يو بي اس',
        width: 120,
        height: 100,
        delay: 200,
    },
    {
        src: '/jt_express.png',
        alt: 'مخدوم',
        width: 120,
        height: 100,
        delay: 300,
    },
    {
        src: '/naqel.png',
        alt: 'ناقل',
        width: 150,
        height: 100,
        delay: 400,
    },
    {
        src: '/kwick-box.png',
        alt: 'كويك بوكس',
        width: 120,
        height: 100,
        delay: 400,
    },
    {
        src: '/redbox.svg',
        alt: 'ريد بوكس',
        width: 120,
        height: 100,
        delay: 400,
    },
    {
        src: '/third_mile.png',
        alt: 'ثرد مايل',
        width: 120,
        height: 100,
        delay: 400,
    },
    {
        src: '/fastlo.png',
        alt: 'فاستلو',
        width: 120,
        height: 100,
        delay: 400,
    },
    {
        src: '/flow_express.png',
        alt: 'فلو إكسبريس',
        width: 100,
        height: 100,
        delay: 400,
    },
    {
        src: '/imile_2.png',
        alt: 'اي مايل',
        width: 80,
        height: 100,
        delay: 400,
    },
];

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
            className='fixed z-[99] pointer-events-none mix-blend-difference'
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
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.9,
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <section className='py-[100px] w-full overflow-hidden relative'>
            {/* Cursor Follower Circle */}
            <CursorCircle />

            <FlickeringGrid
                className='absolute inset-0 z-0 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]'
                squareSize={4}
                gridGap={6}
                color='#ccc'
                maxOpacity={0.5}
                flickerChance={0.1}
                height={500}
                width={2000}
            />
            <div className='max-w-[1110px] mt-10 w-full mx-auto relative'>
                <div className='framer-1hdn25l absolute inset-0 top-20 opacity-20'>
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
                    {/* shadow-[2px_2px_5px_rgba(0,0,0,0.07)] */}
                    <motion.div variants={fadeInUp(0.05)}>
                        <div className='cursor-default bg-muted inline-flex gap-2 items-center border w-fit backdrop-blur-lg rounded-xl px-5 py-1'>
                            <BsStars />
                            بوليصة هي الإختيار الأنسب والأكثر أمانًا للشحن المتميز
                            <BorderBeam size={50} className='from-transparent via-orange-500 to-transparent' />
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp(0.15)}>
                        <h1 className='cursor-default font-ibm-plex-sans-arabic relative font-extrabold text-3xl lg:text-6xl leading-[50px]'>
                            أقوى{' '}
                            <Highlighter action='highlight' strokeWidth={1.5} iterations={4} color='#d97445'>
                                <span className='cursor-default font-ibm-plex-sans-arabic relative z-20 text-white'>
                                    منصة شحن
                                </span>
                            </Highlighter>{' '}
                            للمتاجر الإلكترونية
                        </h1>
                    </motion.div>
                    <motion.p className='text-lg max-w-3xl mx-auto cursor-default' variants={fadeInUp(0.23)}>
                        بوليصة تقدم لك الحل الشامل لإدارة عمليات الشحن لمتجرك الإلكتروني بسهولة وسرعة. مع خدمات موثوقة
                        وآمنة، نوفر لك متابعة الشحنات، اختيار أفضل شركات النقل، وتكامل سلس مع متجرك
                    </motion.p>
                    <motion.div
                        className='p-1 bg-muted/30 relative z-20 rounded-2xl border-2 border-muted-foreground/10 ring-3 ring-muted-foreground/5 grid grid-cols-1 xl:grid-cols-3 gap-2 w-full max-w-3xl'
                        variants={fadeInUp(0.32)}
                    >
                        <motion.div variants={fadeInUp(0.35, 0.6, 10)}>
                            <div className='rounded-xl cursor-default bg-background/60 backdrop-blur-sm p-4 shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                                <p className='text-2xl font-bold font-ibm-plex-sans-arabic'>2M</p>
                                <p>بوليصة</p>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInUp(0.41, 0.6, 10)}>
                            <div className='rounded-xl bg-background/60 backdrop-blur-sm p-4 shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                                <p className='text-2xl font-bold font-ibm-plex-sans-arabic'>4000+</p>
                                <p>عميل</p>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInUp(0.47, 0.6, 10)}>
                            <div className='rounded-xl bg-background/60 backdrop-blur-sm p-4 shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                                <p className='text-2xl font-bold font-ibm-plex-sans-arabic'>99.8%</p>
                                <p>نسبة نجاح</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <div className='mt-20 w-full flex flex-col items-center justify-center gap-3 z-10  relative'>
                <HLine />

                <motion.div
                    className='max-w-[1300px] px-2 py-3 mx-auto relative flex w-full flex-col items-center justify-center overflow-hidden'
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: 0.22 }}
                >
                    <Swiper
                        className='w-full'
                        spaceBetween={15}
                        slidesPerView={5}
                        breakpoints={{
                            765: {
                                slidesPerView: 3,
                            },
                            991: {
                                slidesPerView: 9,
                            },
                            1200: {
                                slidesPerView: 11,
                            },
                        }}
                        loop={true}
                        speed={6000}
                        modules={[Autoplay]}
                        centeredSlides={false}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                    >
                        {carrierImages?.map((img, index) => (
                            <SwiperSlide className='text-center' key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src={img?.src}
                                        alt={img?.alt}
                                        height={0}
                                        width={150}
                                        style={{
                                            maxHeight: 25,
                                            objectFit: 'contain',
                                            objectPosition: 'center',
                                        }}
                                        className='grayscale object-fit'
                                    />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
                <HLine />
            </div>
        </section>
    );
}
