'use client';
import { BorderBeam } from '@/components/ui/border-beam';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { TextAnimate } from '@/components/ui/text-animate';
import { motion } from 'motion/react';
import Image from 'next/image';
import { FaCircle, FaStar } from 'react-icons/fa6';
import { LuClipboard, LuTruck, LuReceiptText } from 'react-icons/lu';
import HLine from '@/components/HLine';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaShippingFast } from 'react-icons/fa';

const fadeInUp = (delay = 0, duration = 0.7, y = 30, blur = 20) => ({
    initial: { opacity: 0, y, filter: `blur(${blur}px)` },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration, delay } },
});

const testimonials = [
    {
        name: 'عبد الله العريفي',
        title: 'تجار',
        image: '/testimonials/abdullah.jpg',
        text: 'بوليصة عملية وسهلة الاستخدام. تساعدني في تبسيط عمليات الشحن وتحسين كفاءة أعمالي.',
    },
    {
        name: 'نورة السبيعي',
        title: 'مالكة متجر إلكتروني',
        image: '/testimonials/nora.jpg',
        text: 'دائماً أجد أسعار الشحن تنافسية وخدمة العملاء رائعة وسريعة في الرد. أنصح باستخدام بوليصة.',
    },
    {
        name: 'خالد المطيري',
        title: 'رائد أعمال',
        image: '/testimonials/khaled.jpg',
        text: 'تجربتي مع بوليصة ممتازة. سرعة في معالجة الطلبيات وتكامل مع أشهر شركات الشحن.',
    },
    {
        name: 'رهف العتيبي',
        title: 'صاحبة مشروع منزلي',
        image: '/testimonials/rahaf.jpg',
        text: 'منصة بوليصة وفرت لي الكثير من الوقت والجهد في تنظيم شحن منتجاتي للعملاء.',
    },
    {
        name: 'سامي الحربي',
        title: 'تاجر تجزئة',
        image: '/testimonials/sami.jpg',
        text: 'أعجبني سهولة تتبع الشحنات والمرونة في اختيار شركة الشحن الأنسب لاحتياجاتي.',
    },
    {
        name: 'مي محمد',
        title: 'مديرة متجر للأزياء',
        image: '/testimonials/mai.jpg',
        text: 'بوليصة جعلت عمليات الشحن للمدن البعيدة أسرع بكثير، وفريق الدعم متعاون جداً.',
    },
    {
        name: 'فهد الشهراني',
        title: 'تاجر إلكتروني',
        image: '/testimonials/fahad.jpg',
        text: 'سهلت علي بوليصة إرسال الطلبات بكميات كبيرة دون أي مشاكل في الإجراءات أو تأخير في التوصيل.',
    },
];

export default function TestimonialsSection() {
    return (
        <>
            <div className='relative flex flex-col items-center justify-center w-full mx-auto'>
                <HLine />
                <div className='py-3'></div>
                <HLine borderColor='#d4c96a' addBeam={true} />
            </div>
            <section
                className='py-[90px] w-full overflow-hidden relative  selection:text-[#514d30] selection:bg-[rgba(212,201,106,0.29)]'
                id='testimonials'
            >
                <div className='w-full h-[300px] bg-linear-to-b from-[#d4c96a] to-background absolute top-0 opacity-5'></div>
                <FlickeringGrid
                    className='absolute inset-0 z-0 mask-[radial-gradient(800px_circle_at_center,white,transparent)]'
                    squareSize={4}
                    gridGap={6}
                    color='#d4c96a'
                    maxOpacity={0.2}
                    flickerChance={0.1}
                    height={300}
                    width={2000}
                />
                <div className='w-full h-[300px] bg-linear-to-b from-transparent to-background absolute top-0 z-10'></div>
                <div className='max-w-[1300px] w-full mx-auto relative z-20 text-center'>
                    <motion.div variants={fadeInUp(0.05)} className='mb-4'>
                        <div className='cursor-default bg-[#d4c96a]/5 border border-[#d4c96a]/20 inline-flex gap-2 items-center w-fit backdrop-blur-lg text-md rounded-3xl px-5 py-1 shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                            <FaCircle className='size-3 text-[#d4c96a]' />
                            آراء العملاء
                            <BorderBeam size={50} className='from-transparent via-[#d4c96a] to-transparent' />
                        </div>
                    </motion.div>
                    <motion.h2
                        variants={fadeInUp(0.05)}
                        className='cursor-default font-ibm-plex-sans-arabic relative font-extrabold text-3xl lg:text-4xl leading-[50px]'
                    >
                        <TextAnimate className='inline-block' animation='blurInUp' duration={0.7} by='word' once>
                            تجربة عملائنا تتحدث عنا
                        </TextAnimate>
                    </motion.h2>
                    <motion.div variants={fadeInUp(0.53)} className='text-neutral-6700  mb-5'>
                        <TextAnimate
                            className='inline-block max-w-xl mx-auto'
                            animation='blurInUp'
                            by='word'
                            duration={1}
                            once
                        >
                            يثق آلاف التجار في بوليصة لإدارة شحن متاجرهم اليومية. آراء عملائنا تعكس تجربتهم الحقيقية
                            معنا، وكيف ساعدتهم بوليصة على تبسيط عمليات الشحن وتحسين كفاءة أعمالهم.
                        </TextAnimate>
                    </motion.div>

                    {/* -------------------------------------------------------------- */}
                    <motion.div
                        className='max-w-[1300px] px-2 py-3 mx-auto relative flex w-full flex-col items-center justify-center overflow-hidden'
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: 0.22 }}
                        variants={{
                            initial: { opacity: 0, y: 30, filter: 'blur(16px)' },
                            animate: {
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                                transition: { duration: 0.7, delay: 0.1 },
                            },
                        }}
                    >
                        <Swiper
                            className='w-full items-stretch'
                            spaceBetween={15}
                            slidesPerView={1}
                            breakpoints={{
                                765: {
                                    slidesPerView: 1,
                                },
                                991: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                            }}
                            loop={true}
                            speed={10000}
                            modules={[Autoplay]}
                            centeredSlides={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                        >
                            {testimonials?.map((testimonial, index) => (
                                <SwiperSlide className='h-auto!' key={index}>
                                    <motion.div
                                        className='bg-muted h-full rounded-3xl p-2 gap-4 flex flex-col'
                                        initial='initial'
                                        whileInView='animate'
                                        viewport={{ once: true, amount: 0.4 }}
                                    >
                                        <div className='bg-background rounded-2xl shadow-[0_5px_6px_rgba(0,0,0,0.1)]'>
                                            <div className='py-5 px-5 text-start space-y-1'>
                                                <h3 className='font-ibm-plex-sans-arabic font-bold text-lg'>
                                                    {/* {step.title} */}
                                                    <div className='flex items-center mb-5'>
                                                        <FaStar className='text-[#d4c96a] shadow-2xl text-[15px]' />
                                                        <FaStar className='text-[#d4c96a] shadow-2xl text-[15px]' />
                                                        <FaStar className='text-[#d4c96a] shadow-2xl text-[15px]' />
                                                        <FaStar className='text-[#d4c96a] shadow-2xl text-[15px]' />
                                                        <FaStar className='text-[#d4c96a] shadow-2xl text-[15px]' />
                                                    </div>
                                                </h3>
                                                <div className='font-ibm-plex-sans-arabic font-bold text-md'>
                                                    <span
                                                        className='font-bold text-muted-foreground/50 me-1'
                                                        aria-hidden='true'
                                                    >
                                                        ”
                                                    </span>
                                                    {testimonial.text}
                                                    <span
                                                        className='font-bold text-muted-foreground ms-1'
                                                        aria-hidden='true'
                                                    >
                                                        “
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='text-start px-5 pt-5 pb-3 mt-auto'>
                                            <p className='font-bold font-ibm-plex-sans-arabic'>{testimonial.name}</p>
                                            <p className='text-muted-foreground font-medium text-sm'>
                                                {testimonial.title}
                                            </p>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                    <div className='absolute h-full w-20 lg:w-40 bg-linear-to-l from-background to-transparent top-0 right-0 z-20'></div>
                    <div className='absolute h-full w-20 lg:w-40 bg-linear-to-r from-background to-transparent top-0 left-0 z-20'></div>
                </div>

                <div className='flex items-center justify-center gap-3 flex-wrap mt-10 z-100 relative'>
                    <Button
                        asChild
                        variant={'store'}
                        className='px-4! text-[16px]! shadow-[1px_3px_8px_rgba(0,0,0,0.2)]'
                    >
                        <Link target='_blank' href={'https://app.bolesa.net'}>
                            ابدأ الشحن الآن
                            <FaShippingFast className='size-5 shrink-0 rotate-y-180' />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant={'store'}
                        className='px-4! text-[16px]! shadow-[1px_3px_8px_rgba(0,0,0,0.2)]'
                        customPattern={['#d4c96a', '#969412']}
                    >
                        <Link target='_blank' href={'https://bolesa.net'}>
                            احكى تجربتك معنا
                            <FaStar className='size-4 shrink-0 rotate-y-180' />
                        </Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
