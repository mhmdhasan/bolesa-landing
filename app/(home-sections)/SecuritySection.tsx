'use client';

import { motion } from 'motion/react';
import { TextAnimate } from '@/components/ui/text-animate';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import HLine from '@/components/HLine';
import { TiStarburst } from 'react-icons/ti';
import { BorderBeam } from '@/components/ui/border-beam';
import { FaCircle } from 'react-icons/fa';
import { BsShieldLock } from 'react-icons/bs';
import { LuServerCog } from 'react-icons/lu';
import { IoBarChartOutline } from 'react-icons/io5';
import { BiSupport } from 'react-icons/bi';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { LuClipboardPenLine } from 'react-icons/lu';
import SectionBadge from '@/components/SectionBadge';

const fadeInUp = (delay = 0, duration = 0.7, y = 30, blurFrom = 16, blurTo = 0) => ({
    initial: { opacity: 0, y, filter: `blur(${blurFrom}px)` },
    animate: {
        opacity: 1,
        y: 0,
        filter: `blur(${blurTo}px)`,
        transition: { duration, delay },
    },
});

const securitySteps = [
    {
        icon: <BsShieldLock className='size-8' />,
        title: 'حماية متقدمة للبيانات',
        description:
            'نولي حماية بيانات المتاجر والعملاء أولوية قصوى، حيث يتم التعامل مع جميع المعلومات بسرية تامة، مع تطبيق أفضل ممارسات الأمان لضمان عدم الوصول غير المصرّح به.',
    },
    {
        icon: <LuServerCog className='size-7' />,
        title: 'أنظمة مستقرة وموثوقة',
        description:
            'تعتمد بوليصة على بنية تقنية مستقرة تضمن تشغيل المنصة على مدار الساعة، مما يتيح لك إدارة شحناتك بثقة دون القلق من التوقفات أو الأعطال المفاجئة.',
    },
    {
        icon: <IoBarChartOutline className='size-6' />,
        title: 'مراقبة مستمرة للأداء',
        description:
            'نقوم بمراقبة الأنظمة بشكل مستمر لضمان الأداء الأمثل، والاستجابة السريعة لأي تحديات تقنية قد تؤثر على تجربة الاستخدام.',
    },
    {
        icon: <BiSupport className='size-7' />,
        title: 'دعم فني متواصل',
        description:
            'يتوفر فريق دعم فني متخصص لمساعدتك في حل أي استفسار أو مشكلة، وضمان سير عمليات الشحن بسلاسة في جميع الأوقات.',
    },
    {
        icon: <MdOutlineLocalShipping className='size-7.5' />,
        title: 'موثوقية في جميع مراحل الشحن',
        description:
            'من لحظة إنشاء بوليصة الشحن وحتى تسليم الطلب للعميل، نحرص على توفير تجربة مستقرة وموثوقة تدعم أعمالك وتعزّز ثقة عملائك.',
    },
    {
        icon: <LuClipboardPenLine className='size-7' />,
        title: 'دقة البيانات في جميع المراحل',
        description:
            'تضمن بوليصة عرض بيانات الشحن بشكل دقيق ومنظّم، مما يساعدك على تقليل الأخطاء ومتابعة الطلبات بثقة في كل مرحلة من مراحل الشحن.',
    },
];

export default function SecuritySection() {
    return (
        <div className='w-full flex flex-col items-center justify-center z-10 relative'>
            <HLine />
            <div className='py-3'></div>
            <HLine />
            <section className='py-[100px] w-full overflow-hidden relative' id='who-is-it-for'>
                <div className='max-w-[1200px] w-full mx-auto relative z-20 text-center'>
                    <SectionBadge title='الأمان والموثوقية' color='#333' />
                    <motion.h2
                        variants={fadeInUp(0.05)}
                        className='cursor-default font-ibm-plex-sans-arabic relative font-extrabold text-3xl lg:text-4xl leading-[50px]'
                    >
                        <TextAnimate className='inline-block' animation='blurInUp' duration={0.7} by='word' once>
                            أمان، موثوقية، واعتمادية
                        </TextAnimate>
                    </motion.h2>
                    <motion.div variants={fadeInUp(0.53)} className='text-neutral-6700 max-w-xl mx-auto mb-5'>
                        <TextAnimate className='inline-block' animation='blurInUp' by='word' duration={1} once>
                            نلتزم في بوليصة بأعلى معايير الأمان لحماية بيانات متجرك وشحناتك. جميع العمليات تتم عبر أنظمة
                            مؤمنة تضمن سلامة المعلومات وسهولة الوصول في أي وقت.
                        </TextAnimate>
                    </motion.div>

                    <motion.div
                        className='max-w-[1300px] pointer-events-none px-2 py-3 mx-auto relative w-full flex-col items-center justify-center overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-4'
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: 0.22 }}
                    >
                        {securitySteps.map((step, idx) => (
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
                                    <div className='flex items-center gap-1 flex-row-reverse'>
                                        <span
                                            className={`h-3 w-[3px] ${
                                                idx >= securitySteps?.length - 1 ? 'bg-brand' : 'bg-background'
                                            } rounded-lg`}
                                        ></span>
                                        <span
                                            className={`h-3 w-[3px] ${
                                                idx >= securitySteps?.length - 2 ? 'bg-brand' : 'bg-background'
                                            } rounded-lg`}
                                        ></span>
                                        <span
                                            className={`h-3 w-[3px] ${
                                                idx >= securitySteps?.length - 3 ? 'bg-brand' : 'bg-background'
                                            } rounded-lg`}
                                        ></span>
                                        <span
                                            className={`h-3 w-[3px] ${
                                                idx >= securitySteps?.length - 4 ? 'bg-brand' : 'bg-background'
                                            } rounded-lg`}
                                        ></span>
                                        <span
                                            className={`h-3 w-[3px] ${
                                                idx >= securitySteps?.length - 5 ? 'bg-brand' : 'bg-background'
                                            } rounded-lg`}
                                        ></span>
                                        <span
                                            className={`h-3 w-[3px] ${
                                                idx >= securitySteps?.length - 65 ? 'bg-brand' : 'bg-background'
                                            } rounded-lg`}
                                        ></span>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ scale: 0.85, rotate: -7, opacity: 0 }}
                                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    className='flex items-center justify-center'
                                >
                                    {/* <Image
                                    src={step.image}
                                    alt={step.title}
                                    width={500}
                                    height={500}
                                    className={`w-full h-auto max-w-[160px] object-cover`}
                                /> */}
                                </motion.div>
                                <div className='bg-background rounded-2xl shadow-[0_3px_7px_rgba(0,0,0,0.09)]'>
                                    <div className='py-5 px-5 text-start space-y-1'>
                                        <h3 className='font-ibm-plex-sans-arabic font-bold text-lg'>{step.title}</h3>
                                        <div className='text-muted-foreground font-medium text-sm'>
                                            {step.description}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
