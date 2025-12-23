'use client';

import { motion } from 'motion/react';
import { TextAnimate } from '@/components/ui/text-animate';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import HLine from '@/components/HLine';
import { TiStarburst } from 'react-icons/ti';

const fadeInUp = (delay = 0, duration = 0.7, y = 30) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0, transition: { duration, delay } },
});

const clients = [
    'المتاجر الناشئة',
    'المتاجر المتوسطة',
    'المتاجر ذات الطلبات العالية',
    'شركات البيع بالجملة',
    'العلامات التجارية المحلية',
    'المتاجر الناشئة',
    'المتاجر المتوسطة',
    'المتاجر ذات الطلبات العالية',
    'شركات البيع بالجملة',
    'العلامات التجارية المحلية',
    'المتاجر الناشئة',
    'المتاجر المتوسطة',
    'المتاجر ذات الطلبات العالية',
    'شركات البيع بالجملة',
    'العلامات التجارية المحلية',
    'المتاجر الناشئة',
    'المتاجر المتوسطة',
    'المتاجر ذات الطلبات العالية',
    'شركات البيع بالجملة',
    'العلامات التجارية المحلية',
    'المتاجر الناشئة',
    'المتاجر المتوسطة',
    'المتاجر ذات الطلبات العالية',
    'شركات البيع بالجملة',
    'العلامات التجارية المحلية',
];
const clients2 = [
    'متاجر البيع بالتجزئة أونلاين',
    'المتاجر متعددة الفروع',
    'أصحاب المتاجر الموسمية',
    'الشركات الناشئة التقنية',
    'التجار المستقلين',
    'أصحاب المشاريع الصغيرة',
    'متاجر البيع بالتجزئة أونلاين',
    'المتاجر متعددة الفروع',
    'أصحاب المتاجر الموسمية',
    'الشركات الناشئة التقنية',
    'التجار المستقلين',
    'أصحاب المشاريع الصغيرة',
    'متاجر البيع بالتجزئة أونلاين',
    'المتاجر متعددة الفروع',
    'أصحاب المتاجر الموسمية',
    'الشركات الناشئة التقنية',
    'التجار المستقلين',
    'أصحاب المشاريع الصغيرة',
    'متاجر البيع بالتجزئة أونلاين',
    'المتاجر متعددة الفروع',
    'أصحاب المتاجر الموسمية',
    'الشركات الناشئة التقنية',
    'التجار المستقلين',
    'أصحاب المشاريع الصغيرة',
    'متاجر البيع بالتجزئة أونلاين',
    'المتاجر متعددة الفروع',
    'أصحاب المتاجر الموسمية',
    'الشركات الناشئة التقنية',
    'التجار المستقلين',
    'أصحاب المشاريع الصغيرة',
];

export default function WhoIsItForSection() {
    return (
        <div className='w-full flex flex-col items-center justify-center z-10 relative'>
            <HLine />
            <div className='py-3'></div>
            <HLine />
            <section className='py-[100px] w-full overflow-hidden relative' id='who-is-it-for'>
                <div className='max-w-[1300px] w-full mx-auto relative z-20 text-center'>
                    <motion.h2
                        variants={fadeInUp(0.05)}
                        className='cursor-default font-ibm-plex-sans-arabic relative font-extrabold text-3xl lg:text-4xl leading-[50px]'
                    >
                        <TextAnimate className='inline-block' animation='blurInUp' duration={0.7} by='word' once>
                            بوليصة مصممة لكل أنواع المتاجر الإلكترونية
                        </TextAnimate>
                    </motion.h2>
                    <motion.div variants={fadeInUp(0.53)} className='text-neutral-6700  mb-5'>
                        <TextAnimate className='inline-block' animation='blurInUp' by='word' duration={1} once>
                            مهما كان حجم متجرك أو عدد طلباتك اليومية، بوليصة توفر لك الأدوات المناسبة لإدارة الشحن
                            بكفاءة.
                        </TextAnimate>
                    </motion.div>

                    <motion.div
                        className='max-w-[1300px] pointer-events-none px-2 py-3 mx-auto relative flex w-full flex-col items-center justify-center overflow-hidden'
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: 0.22 }}
                    >
                        <div className='absolute h-full w-20 lg:w-40 bg-linear-to-l from-background to-transparent top-0 right-0 z-20'></div>
                        <div className='absolute h-full w-20 lg:w-40 bg-linear-to-r from-background to-transparent top-0 left-0 z-20'></div>
                        <Swiper
                            className='w-full mb-2'
                            spaceBetween={10}
                            slidesPerView={5}
                            breakpoints={{
                                765: {
                                    slidesPerView: 3,
                                },
                                991: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    slidesPerView: 5,
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
                            {clients?.map((_, index) => (
                                <SwiperSlide className='text-center' key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className='px-4 py-1 rounded-md bg-muted-foreground/5 font-ibm-plex-sans-arabic font-medium'>
                                            <div className='inline-flex items-center gap-1'>
                                                <span className='bg-linear-to-r text-lg from-orange-200 to-orange-600 bg-clip-text text-transparent'>
                                                    ✹
                                                </span>
                                                {_}
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            className='w-full'
                            spaceBetween={10}
                            slidesPerView={5}
                            breakpoints={{
                                765: {
                                    slidesPerView: 3,
                                },
                                991: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    slidesPerView: 5,
                                },
                            }}
                            loop={true}
                            speed={6000}
                            modules={[Autoplay]}
                            centeredSlides={false}
                            autoplay={{
                                reverseDirection: true,
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                        >
                            {clients2?.map((_, index) => (
                                <SwiperSlide className='text-center' key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className='px-4 py-1 rounded-md bg-muted-foreground/5 font-ibm-plex-sans-arabic font-medium'>
                                            <div className='inline-flex items-center gap-1'>
                                                <span className='bg-linear-to-r text-lg from-orange-200 to-orange-600 bg-clip-text text-transparent'>
                                                    ✹
                                                </span>
                                                {_}
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </section>
            <HLine />
            <div className='py-3'></div>
            <HLine borderColor='#91b436' addBeam reverseBeam />
        </div>
    );
}
