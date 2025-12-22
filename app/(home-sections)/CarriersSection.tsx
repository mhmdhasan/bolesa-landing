'use client';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { motion } from 'motion/react';
import { FaCircle } from 'react-icons/fa6';
import Image from 'next/image';
import { BorderBeam } from '@/components/ui/border-beam';
import { TextAnimate } from '@/components/ui/text-animate';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import HLine from '@/components/HLine';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaShippingFast } from 'react-icons/fa';

const fadeInUp = (delay = 0, duration = 0.7, y = 30, blurFrom = 8, blurTo = 0) => ({
    initial: { opacity: 0, y, filter: `blur(${blurFrom}px)` },
    animate: { opacity: 1, y: 0, filter: `blur(${blurTo}px)`, transition: { duration, delay } },
});

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
];
const carrierImages2 = [
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

export default function CarriersSection() {
    return (
        <>
            <div className='relative flex flex-col items-center justify-center w-full mx-auto'>
                <HLine />
                <div className='py-3'></div>
                <HLine borderColor='#f28247' addBeam={true} />
            </div>
            <section className='py-[90px] w-full overflow-hidden relative'>
                <div className='w-full h-[300px] bg-linear-to-b from-[#f28247] to-background absolute top-0 opacity-5'></div>
                <FlickeringGrid
                    className='absolute inset-0 z-0 mask-[radial-gradient(1000px_circle_at_center,white,transparent)]'
                    squareSize={4}
                    gridGap={6}
                    color='#f28247'
                    maxOpacity={0.3}
                    flickerChance={0.1}
                    height={300}
                    width={2000}
                />
                <div className='w-full h-[300px] bg-linear-to-b from-transparent to-background absolute top-0 z-10'></div>
                <div className='max-w-[1300px] w-full mx-auto relative z-20 text-center px-5 grid grid-cols-1 xl:grid-cols-2 items-center'>
                    <div className='flex flex-col items-center mb-10'>
                        <motion.div variants={fadeInUp(0.05)} className='mb-4'>
                            <div className='cursor-default bg-[#f28247]/5 border border-[#f28247]/20 inline-flex gap-2 items-center w-fit backdrop-blur-lg text-md rounded-3xl px-5 py-1 shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                                <FaCircle className='size-3 text-[#f28247]' />
                                شركاء النجاح
                                <BorderBeam size={50} className='from-transparent via-[#f28247] to-transparent' />
                            </div>
                        </motion.div>
                        <motion.h2
                            variants={fadeInUp(0.05)}
                            className='cursor-default font-ibm-plex-sans-arabic relative font-extrabold text-3xl lg:text-4xl leading-[50px]'
                        >
                            <TextAnimate className='inline-block' animation='blurInUp' duration={0.7} by='word' once>
                                شركائنا في الشحن والتوزيع
                            </TextAnimate>
                        </motion.h2>
                        <motion.div variants={fadeInUp(0.53)} className='text-neutral-6700 max-w-lg mx-auto mb-5 mt-4'>
                            <TextAnimate className='inline-block' animation='blurInUp' by='word' duration={1} once>
                                نعمل مع نخبة من أفضل شركات الشحن المحلية والعالمية لضمان تغطية شاملة، وجودة عالية، وسرعة
                                توصيل تلبي تطلعات عملائك.
                            </TextAnimate>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
                            className='flex items-center justify-center gap-2 flex-wrap'
                        >
                            <Button
                                customPattern={['#d6361f', '#f28247']}
                                asChild
                                variant='store'
                                className='px-4! text-[16px]! shadow-[1px_3px_8px_rgba(0,0,0,0.2)]'
                            >
                                <Link target='_blank' href={'https://app.bolesa.net'}>
                                    اشحن الآن
                                    <FaShippingFast className='size-5 shrink-0 rotate-y-180' />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
                    >
                        <div className='relative flex h-[550px] w-full flex-col items-center justify-center overflow-hidden'>
                            <div className='w-auto aspect-square h-[70%] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.08)]'>
                                {/* <BorderBeam
                                    colorFrom='#f28247'
                                    colorTo='#d6361f'
                                    className='z-99 relative'
                                    size={100}
                                /> */}
                            </div>
                            <div className='w-auto aspect-square h-[50%] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.08)]'>
                                {/* <BorderBeam
                                    colorFrom='#f28247'
                                    colorTo='#d6361f'
                                    className='z-99 relative'
                                    size={100}
                                    reverse
                                /> */}
                            </div>
                            <div className='w-auto aspect-square h-[30%] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.08)]'>
                                {/* <BorderBeam
                                    colorFrom='#f28247'
                                    colorTo='#d6361f'
                                    className='z-99 relative'
                                    size={100}
                                /> */}
                            </div>
                            <div className='w-auto aspect-square h-[15%] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.08)]'>
                                {/* <BorderBeam
                                    colorFrom='#f28247'
                                    colorTo='#d6361f'
                                    className='z-99 relative'
                                    size={100}
                                /> */}
                            </div>
                            <div
                                className='framer-1v1ob1h'
                                data-framer-name='Center icon'
                                style={{ transform: 'translate(-50%, -50%)', opacity: 1 }}
                            >
                                <div
                                    className='framer-143kh33 opacity-50'
                                    style={{
                                        background:
                                            'radial-gradient(50% 50%, rgba(227, 148, 0, 0.15) 0%, rgba(227, 148, 0, 0) 100%)',
                                    }}
                                />
                                <div
                                    className='framer-8jf8ke opacity-50'
                                    style={{
                                        background:
                                            'radial-gradient(50% 50%, rgba(0, 151, 254, 0.15) 0%, rgba(227, 148, 0, 0) 100%)',
                                    }}
                                />
                                <div
                                    className='framer-a9uzhz opacity-50'
                                    style={{
                                        background:
                                            'radial-gradient(50% 50%, rgba(0, 173, 9, 0.15) 0%, rgba(227, 148, 0, 0) 100%)',
                                    }}
                                />
                                <div
                                    className='framer-ppd9z0 opacity-50'
                                    style={{
                                        background:
                                            'radial-gradient(50% 50%, rgba(243, 71, 255, 0.15) 0%, rgba(227, 148, 0, 0) 100%)',
                                    }}
                                />
                                <div
                                    className='framer-12hpzgp opacity-50'
                                    style={{
                                        background:
                                            'radial-gradient(50% 50%, rgba(153, 102, 255, 0.15) 0%, rgba(227, 148, 0, 0) 100%)',
                                    }}
                                />
                                <div
                                    className='framer-6li7ng opacity-50'
                                    style={{
                                        background:
                                            'radial-gradient(50% 50%, rgba(255, 71, 71, 0.25) 0%, rgba(227, 148, 0, 0) 100%)',
                                    }}
                                />
                                <div
                                    className='framer-1n0mvn2 opacity-50'
                                    style={{
                                        background:
                                            'radial-gradient(50% 50%, rgba(71, 114, 255, 0.25) 0%, rgba(227, 148, 0, 0) 100%)',
                                    }}
                                />
                                <div className='framer-1v7kf7i z-20 relative w-24 h-24 bg-background/80 backdrop-blur-md rounded-2xl ring-6 ring-muted-foreground/15 shadow-[0_3px_8px_rgba(0,0,0,0.25)]'>
                                    <Image
                                        decoding='auto'
                                        width={80}
                                        height={80}
                                        src='/bolesa_logo.svg'
                                        alt=''
                                        className='w-fit max-w-[60px]'
                                    />
                                </div>
                            </div>
                            <OrbitingCircles radius={240} iconSize={70} speed={0}>
                                {carrierImages.map((image, index) => (
                                    <div
                                        key={index}
                                        style={{ borderRadius: '0.7rem', width: '120px', overflow: 'hidden' }}
                                        className='w-30 h-15 bg-background  shadow-[0_3px_10px_rgba(0,0,0,0.1)] overflow-hidden! relative flex items-center justify-center p-1 backdrop-blur-md rounded-xl'
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={image.width}
                                            height={image.height}
                                            className='relative z-10'
                                        />
                                    </div>
                                ))}
                            </OrbitingCircles>
                            <OrbitingCircles reverse radius={138} iconSize={70} speed={0}>
                                {carrierImages2.map((image, index) => (
                                    <div
                                        key={index}
                                        style={{ borderRadius: '0.7rem', width: '120px', overflow: 'hidden' }}
                                        className='w-30 h-15 bg-background  shadow-[0_3px_10px_rgba(0,0,0,0.1)] overflow-hidden! relative flex items-center justify-center p-1 backdrop-blur-md rounded-xl'
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={image.width}
                                            height={image.height}
                                            className='relative z-10'
                                        />
                                    </div>
                                ))}
                            </OrbitingCircles>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
