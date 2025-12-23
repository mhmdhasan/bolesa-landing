'use client';

import HLine from '@/components/HLine';
import { motion } from 'motion/react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { TextAnimate } from '@/components/ui/text-animate';
import { BorderBeam } from '@/components/ui/border-beam';
import { FaAppStore, FaCircle } from 'react-icons/fa6';
import { HiArrowNarrowLeft } from 'react-icons/hi';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SectionBadge from '@/components/SectionBadge';

const fadeInUp = (delay = 0, duration = 0.7, y = 30, blur = 20) => ({
    initial: { opacity: 0, y, filter: `blur(${blur}px)` },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration, delay } },
});

export default function CTASection() {
    return (
        <>
            <section
                className='py-[20px] w-full overflow-hidden relative selection:text-[#333] selection:bg-[rgba(51,51,51,0.12)]'
                id='cta'
            >
                <div className='flex justify-center items-center translate-y-[50px] mb-5'>
                    <HLine borderColor='#333' />
                </div>
                <div className='flex justify-center items-center translate-y-[50px]'>
                    <HLine borderColor='#333' />
                </div>
                <div className='max-w-[1200px] border-foreground/20 bg-background py-[90px] w-full mx-auto relative z-20 text-center rounded-3xl'>
                    <div
                        className='absolute -inset-px rounded-3xl pointer-events-none z-0'
                        style={{
                            padding: '2px', // Control border thickness here
                            background:
                                'linear-gradient(200deg, rgba(0,0,9,0.41), rgba(0,0,9,0.11) 50%, rgba(0,0,0,0.2) 100%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                        }}
                    ></div>
                    <div className='w-full h-[150px] rounded-t-3xl  bg-linear-to-b from-[#333] to-background absolute top-0 opacity-5'></div>
                    <FlickeringGrid
                        className='absolute rounded-3xl overflow-hidden inset-0 z-0 rotate-x-180 mask-[radial-gradient(1000px_circle_at_center,white,transparent)]'
                        squareSize={4}
                        gridGap={6}
                        color='#333'
                        maxOpacity={0.1}
                        flickerChance={0.1}
                        height={150}
                        width={2000}
                    />
                    <div className='w-full h-[150px] bg-linear-to-b from-transparent to-background rotate-x-180 absolute bottom-0 z-10 rounded-t-3xl'></div>

                    <div className='w-full h-[150px] rounded-t-3xl overflow-hidden rotate-x-180 bg-linear-to-b from-[#333] to-background absolute bottom-0 opacity-5'></div>
                    <FlickeringGrid
                        className='absolute rounded-t-3xl overflow-hidden inset-0 z-0 mask-[radial-gradient(1000px_circle_at_center,white,transparent)]'
                        squareSize={4}
                        gridGap={6}
                        color='#333'
                        maxOpacity={0.1}
                        flickerChance={0.1}
                        height={150}
                        width={2000}
                    />
                    <div className='w-full h-[150px] bg-linear-to-b from-transparent to-background absolute top-0 z-10'></div>

                    <div className='w-full relative z-20'>
                        <div className='flex flex-col items-center text-center'>
                            <SectionBadge title='ابدأ الشحن الآن' color='#333' />
                            <motion.h2
                                variants={fadeInUp(0.05)}
                                className='cursor-default font-ibm-plex-sans-arabic relative font-extrabold text-3xl lg:text-4xl leading-[50px]'
                            >
                                <TextAnimate
                                    className='inline-block'
                                    animation='blurInUp'
                                    duration={0.7}
                                    by='word'
                                    once
                                >
                                    أقل الأسعار بغض النظر عن مقدار الشحن
                                </TextAnimate>
                            </motion.h2>
                            <motion.div variants={fadeInUp(0.53)} className='text-neutral-6700 max-w-2xl mx-auto mt-4'>
                                <TextAnimate className='inline-block' animation='blurInUp' by='word' duration={1} once>
                                    قارن الأسعار في الوقت الفعلي وأوقات التسليم لجميع شركات النقل وحدد تلقائيًا أفضل
                                    شركة نقل لكل شحنة بناءً على التكلفة ووقت التسليم. بفضل انضمتنا الرائعة ، تفاوضنا على
                                    الأسعار المحجوزة للعديد من الشركات ، لاجل راحتكم.
                                </TextAnimate>
                            </motion.div>
                            <Button asChild variant='store' className='mt-8 px-5!'>
                                <Link target='_blank' href={'https://app.bolesa.net/register'}>
                                    ابدأ الآن مجانا
                                    <HiArrowNarrowLeft className='size-5 shrink-0' />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center translate-y-[-50px] items-center'>
                    <HLine borderColor='#333' />
                </div>
                <div className='flex justify-center translate-y-[-50px] items-center mt-5'>
                    <HLine borderColor='#333' />
                </div>
            </section>
            <div className='flex  flex-col items-center justify-center w-full mx-auto'>
                <HLine />
            </div>
        </>
    );
}
