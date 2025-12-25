'use client';

import { motion } from 'motion/react';
import { TextAnimate } from '@/components/ui/text-animate';
import HLine from '@/components/HLine';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';
import SectionBadge from '@/components/SectionBadge';

const fadeInUp = (delay = 0, duration = 0.7, y = 20, blur = 8) => ({
    initial: { opacity: 0, y, filter: `blur(${blur}px)` },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration, delay } },
});

export default function ContactUsSection() {
    return (
        <div className='w-full flex flex-col items-center justify-center z-10 relative'>
            <section className='py-[100px] w-full overflow-hidden relative' id='contact-us'>
                <div className='max-w-[1300px] px-6 lg:px-0 w-full mx-auto relative z-20 text-center'>
                    <SectionBadge title='تواصل معنا' color='#333' />
                    <motion.h2
                        variants={fadeInUp(0.05)}
                        className='cursor-default font-ibm-plex-sans-arabic relative font-extrabold text-3xl lg:text-4xl leading-[50px]'
                    >
                        <TextAnimate
                            className='inline-block leading-normal!'
                            animation='blurInUp'
                            duration={0.7}
                            by='word'
                            once
                        >
                            لديك استفسار؟ فريقنا بانتظارك
                        </TextAnimate>
                    </motion.h2>
                    <motion.div variants={fadeInUp(0.53)} className='text-neutral-700 max-w-2xl mt-1 mx-auto mb-5'>
                        <TextAnimate className='inline-block' animation='blurInUp' by='word' duration={1} once>
                            يسعدنا تواصلك معنا والإجابة عن جميع استفساراتك. فريق بوليصة جاهز لمساعدتك وتقديم الدعم
                            اللازم لضمان أفضل تجربة ممكنة.
                        </TextAnimate>
                    </motion.div>

                    <motion.div
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: 0.22 }}
                        variants={fadeInUp(0.53)}
                        className='max-w-3xl z-100 px-2 py-3 mx-auto relative flex w-full flex-col items-center justify-center'
                    >
                        <div className='w-full rounded-2xl bg-neutral-800 p-1'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 text-background text-start'>
                                <div className='flex flex-col gap-4 rounded-xl bg-background text-foreground p-5'>
                                    <div className='flex flex-col gap-2'>
                                        <h5 className='font-bold text-lg font-ibm-plex-sans-arabic'>
                                            الاستفسار عن الخدمة
                                        </h5>
                                        <p className='text-neutral-600 text-sm'>
                                            لمعرفة المزيد عن بوليصة، المزايا المتاحة، أو كيفية البدء.
                                        </p>
                                    </div>
                                    <div className='border-b border-dotted border-neutral-300'></div>
                                    <div className='flex flex-col gap-2'>
                                        <h5 className='font-bold text-lg font-ibm-plex-sans-arabic'>الدعم الفني</h5>
                                        <p className='text-neutral-600 text-sm'>
                                            في حال وجود أي مشكلة تقنية أو استفسار متعلق باستخدام المنصة.
                                        </p>
                                    </div>
                                    <div className='border-b border-dotted border-neutral-300'></div>
                                    <div className='flex flex-col gap-2'>
                                        <h5 className='font-bold text-lg font-ibm-plex-sans-arabic'>
                                            طلبات التعاون والشراكات
                                        </h5>
                                        <p className='text-neutral-600 text-sm'>
                                            للتواصل بخصوص فرص التعاون أو الشراكات التجارية.
                                        </p>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-1 h-full'>
                                    <div className='flex flex-col justify-center bg-neutral-700/30 rounded-xl p-4 flex-1'>
                                        <h5 className='text-neutral-300 text-[13px]'>من خلال بريدنا اللإلكتروني</h5>
                                        <a
                                            href='mailto:Info@bolesa.net'
                                            className='font-medium text-[25px] font-ibm-plex-sans-arabic'
                                        >
                                            Info@bolesa.net
                                        </a>
                                    </div>
                                    <div className='flex flex-col justify-center bg-neutral-700/30 rounded-xl p-4 flex-1'>
                                        <h5 className='text-neutral-300 text-[13px]'>أو من خلال رقم الهاتف</h5>
                                        <a
                                            href='tel:+966552993266'
                                            className='font-medium text-[25px] font-ibm-plex-sans-arabic text-end'
                                            style={{ direction: 'ltr' }}
                                        >
                                            +966552993266
                                        </a>
                                    </div>
                                    <div className='flex flex-col gap-2 justify-center bg-neutral-700/30 rounded-xl p-4 flex-1'>
                                        <h5 className='text-neutral-300 text-[13px]'>
                                            أو تابعنا على شبكات التواصل الإجتماعي
                                        </h5>
                                        <div className='flex items-center gap-2 '>
                                            <Link
                                                href='https://www.instagram.com/bolesa.sa/?igshid=YmMyMTA2M2Y%3D'
                                                target='_blank'
                                                className='size-9 cursor-pointer rounded-lg inline-flex items-center justify-center bg-neutral-700 hover:bg-background hover:text-foreground duration-300'
                                            >
                                                <FaInstagram className='size-5' />
                                            </Link>
                                            <Link
                                                href='https://www.tiktok.com/@bolesa.net?_t=8YWPw3SY3Aw&_r=1'
                                                target='_blank'
                                                className='size-9 cursor-pointer rounded-lg inline-flex items-center justify-center bg-neutral-700 hover:bg-background hover:text-foreground duration-300'
                                            >
                                                <FaTiktok className='size-4.5' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
