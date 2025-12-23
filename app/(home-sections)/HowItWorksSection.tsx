'use client';
import { BorderBeam } from '@/components/ui/border-beam';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { TextAnimate } from '@/components/ui/text-animate';
import { motion } from 'motion/react';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa6';
import { LuClipboard, LuTruck, LuReceiptText } from 'react-icons/lu';
import SectionBadge from '@/components/SectionBadge';

const fadeInUp = (delay = 0, duration = 0.7, y = 30, blur = 20) => ({
    initial: { opacity: 0, y, filter: `blur(${blur}px)` },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration, delay } },
});

const howItWorks = [
    {
        title: 'ادخل معلومات الشحنة',
        description:
            'أدخل بيانات الشحنة مثل الوزن والأبعاد وعنوان العميل بدقة، ليتم تجهيز الشحنة بالشكل الأمثل وضمان تسعير صحيح وسريع.',
        icon: <LuClipboard className='size-7' />,
        image: '/3dclipboard.png',
    },
    {
        title: 'اختر الناقل المناسب',
        description:
            'استعرض قائمة واسعة من شركات الشحن المعتمدة، وقارن بين الأسعار ومدة التوصيل لاختيار الخيار الأنسب لكل شحنة.',
        icon: <LuTruck className='size-7' />,
        image: '/3dtruck.png',
    },
    {
        title: 'اطبع بوليصة الشحن',
        description:
            'اطبع بوليصة الشحن وابدأ بإرسال طلباتك، مع إمكانية تتبع حالة الشحنة من خلال صفحة التتبع خاصتنا حتى وصولها للعميل.',
        icon: <LuReceiptText className='size-7' />,
        image: '/3dbox.png',
    },
];

export default function HowItWorksSection() {
    return (
        <section
            className='py-[100px] w-full overflow-hidden relative selection:text-[#352322] selection:bg-[rgba(247,191,180,0.27)]'
            id='how-it-works'
        >
            <div className='w-full h-[300px] bg-linear-to-b from-[#f77972] to-background absolute top-0 opacity-5'></div>
            <FlickeringGrid
                className='absolute inset-0 z-0 mask-[radial-gradient(800px_circle_at_center,white,transparent)]'
                squareSize={4}
                gridGap={6}
                color='#f77972'
                maxOpacity={0.2}
                flickerChance={0.1}
                height={300}
                width={2000}
            />
            <div className='w-full h-[300px] bg-linear-to-b from-transparent to-background absolute top-0 z-10'></div>
            <div className='max-w-[1110px] w-full mx-auto relative z-20 text-center'>
                <motion.div variants={fadeInUp(0.05)} className='mb-4'>
                    <SectionBadge title='آلية عمل بوليصة' color='#f77972' />
                </motion.div>
                <motion.h2
                    variants={fadeInUp(0.05)}
                    className='cursor-default font-ibm-plex-sans-arabic relative font-extrabold text-3xl lg:text-4xl leading-[50px]'
                >
                    <TextAnimate className='inline-block' animation='blurInUp' duration={0.7} by='word' once>
                        أسرع, وأسهل طريقة
                    </TextAnimate>
                    <TextAnimate
                        className='inline-block text-neutral-600 ms-2'
                        animation='blurInUp'
                        duration={0.7}
                        by='word'
                        once
                    >
                        لشحن منتجاتكم الى عملائكم
                    </TextAnimate>
                </motion.h2>
                <motion.div variants={fadeInUp(0.53)} className='text-neutral-6700  mb-5'>
                    <TextAnimate className='inline-block' animation='blurInUp' by='word' duration={1} once>
                        تتميز بوليصة بتقديم تجربة شحن لا مثيل لها لعملاء المتاجر الالكترونية. نوفر لكم جميع الأدوات
                        اللازمة لتتجاوز توقعات عملائك
                    </TextAnimate>
                </motion.div>

                {/* -------------------------------------------------------------- */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pt-6'>
                    {howItWorks.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className='bg-muted rounded-3xl p-1.5 gap-4 flex flex-col'
                            variants={fadeInUp(0.1 + idx * 0.13, 0.8, 60)}
                            initial='initial'
                            whileInView='animate'
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <div className='flex items-center justify-between py-4 px-3'>
                                {step.icon}
                                <div className='flex items-center gap-1'>
                                    <span
                                        className={`h-3 w-[3px] ${idx >= 0 ? 'bg-brand' : 'bg-background'} rounded-lg`}
                                    ></span>
                                    <span
                                        className={`h-3 w-[3px] ${idx > 0 ? 'bg-brand' : 'bg-background'} rounded-lg`}
                                    ></span>
                                    <span
                                        className={`h-3 w-[3px] ${idx === 2 ? 'bg-brand' : 'bg-background'} rounded-lg`}
                                    ></span>
                                </div>
                            </div>
                            <motion.div
                                initial={{ scale: 0.85, rotate: -7, opacity: 0 }}
                                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                                transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true, amount: 0.5 }}
                                className='h-[160px] flex items-center justify-center'
                            >
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    width={500}
                                    height={500}
                                    className={`w-full h-auto max-w-[160px] object-cover`}
                                />
                            </motion.div>
                            <div className='bg-background rounded-2xl shadow-[0_3px_7px_rgba(0,0,0,0.09)]'>
                                <div className='py-5 px-5 text-start space-y-1'>
                                    <h3 className='font-ibm-plex-sans-arabic font-bold text-lg'>{step.title}</h3>
                                    <div className='text-muted-foreground font-medium text-sm'>
                                        {/* {step.description} */}

                                        {step.description}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
