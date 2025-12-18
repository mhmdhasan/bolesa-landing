'use client';

import { BorderBeam } from '@/components/ui/border-beam';
import Image from 'next/image';
import { Highlighter } from '@/components/ui/highlighter';
import HLine from '@/components/HLine';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const carrierImages = [
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

export default function Hero() {
    return (
        <section className='py-[100px] w-full overflow-hidden'>
            <div className='max-w-[1110px] mt-10 w-full mx-auto relative'>
                <div className='framer-1hdn25l absolute inset-0 top-20 opacity-50'>
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
                <div className='flex text-center items-center flex-col w-full gap-7 relative z-20'>
                    {/* shadow-[2px_2px_5px_rgba(0,0,0,0.07)] */}
                    <div className='bg-neutral-800 text-white inline-block border w-fit backdrop-blur-lg  rounded-xl px-5 py-1'>
                        بوليصة هي الإختيار الأنسب والأكثر أمانًا للشحن المتميز
                        <BorderBeam size={50} className='from-transparent via-orange-500 to-transparent' />
                    </div>

                    <h1 className='font-ibm-plex-sans-arabic font-extrabold text-3xl lg:text-6xl leading-[50px]'>
                        أقوى{' '}
                        <Highlighter action='underline' strokeWidth={1.5} iterations={4} color='#ffa866'>
                            <span className='font-ibm-plex-sans-arabic'>منصة شحن</span>
                        </Highlighter>{' '}
                        للمتاجر الإلكترونية
                    </h1>
                    <p className='text-lg max-w-3xl mx-auto'>
                        بوليصة تقدم لك الحل الشامل لإدارة عمليات الشحن لمتجرك الإلكتروني بسهولة وسرعة. مع خدمات موثوقة
                        وآمنة، نوفر لك متابعة الشحنات، اختيار أفضل شركات النقل، وتكامل سلس مع متجرك
                        {/* لضمان وصول منتجاتك
                        إلى عملائك في الوقت المحدد وبأفضل الأسعار. */}
                    </p>

                    <div className='relative rounded-3xl mt-4'>
                        <div className='w-full max-h-[500px] rounded-3xl border-7 border-muted-foreground/10 ring-9 ring-muted-foreground/5 overflow-hidden relative z-20'>
                            <Image
                                src='/bolesa-screen.png'
                                alt='Hero Image'
                                width={1110}
                                height={400}
                                className='w-full h-full object-cover rounded-3xl'
                            />
                        </div>
                        <BorderBeam
                            duration={20}
                            size={500}
                            borderWidth={2}
                            className='from-transparent via-orange-300 to-transparent rounded-xl'
                        />
                    </div>
                </div>
            </div>

            <div className='mt-20 w-full flex flex-col items-center justify-center gap-3 z-10  relative'>
                <HLine />

                <div className='max-w-[1300px] px-2 py-3 mx-auto relative flex w-full flex-col items-center justify-center overflow-hidden'>
                    {/* <Marquee repeat={6} pauseOnHover className='[--duration:20s]'>
                        {carrierImages.map((img, idx) => (
                            <div key={idx} className='text-center'>
                                <Image
                                    className='carrier grayscale'
                                    src={img.src}
                                    alt={img.alt}
                                    width={img.width}
                                    height={img.height}
                                    style={{
                                        maxHeight: 30,
                                        objectFit: 'contain',
                                        objectPosition: 'center',
                                    }}
                                />
                            </div>
                        ))}
                    </Marquee> */}
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
                                <Image
                                    src={img?.src}
                                    alt={img?.alt}
                                    height={0}
                                    width={150}
                                    style={{
                                        maxHeight: 30,
                                        objectFit: 'contain',
                                        objectPosition: 'center',
                                    }}
                                    className='grayscale object-fit'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* <div className='grid grid-cols-1 xl:grid-cols-3 w-full max-w-xl mx-auto'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='font-bold text-4xl'>2M</div>
                        <p className='font-bold text-lg'>بوليصة</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='font-bold text-4xl'>2M</div>
                        <p className='font-bold text-lg'>بوليصة</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='font-bold text-4xl'>2M</div>
                        <p className='font-bold text-lg'>بوليصة</p>
                    </div>
                </div> */}
                <HLine />
            </div>
        </section>
    );
}
