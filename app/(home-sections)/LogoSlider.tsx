'use client';

import Image from 'next/image';
import HLine from '@/components/HLine';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'motion/react';

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

export default function LogoSlider() {
    return (
        <section>
            <div className='w-full flex flex-col items-center justify-center gap-3 z-10 relative'>
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
                    <div className='absolute h-full w-30 lg:w-40 bg-linear-to-l from-background to-transparent top-0 right-0 z-100'></div>
                    <div className='absolute h-full w-30 lg:w-40 bg-linear-to-r from-background to-transparent top-0 left-0 z-100'></div>
                </motion.div>

                <HLine borderColor='#f77972' />
            </div>
        </section>
    );
}
