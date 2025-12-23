'use client';

import HLine from '@/components/HLine';
import { motion } from 'motion/react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { TextAnimate } from '@/components/ui/text-animate';
import { BorderBeam } from '@/components/ui/border-beam';
import { FaCircle } from 'react-icons/fa6';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SectionBadge from '@/components/SectionBadge';

const fadeInUp = (delay = 0, duration = 0.7, y = 30, blur = 20) => ({
    initial: { opacity: 0, y, filter: `blur(${blur}px)` },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration, delay } },
});

const faqs = [
    {
        question: 'هل يمكنني ربط أكثر من متجر في حساب واحد؟',
        answer: 'نعم، تتيح بوليصة ربط أكثر من متجر إلكتروني ضمن حساب واحد، مع إمكانية إدارة جميع الشحنات من لوحة تحكم موحّدة.',
    },
    {
        question: 'هل يتطلب توقيع مني عقود مع شركات الشحن؟',
        answer: 'لا. كل ما عليكم هو تسجيل الدخول تفعيل الحساب وشحن المحفظة وابدأ بطباعة البوليصات',
    },
    {
        question: 'هل توجد رسوم اشتراك شهرية؟',
        answer: 'لا، يمكنك استخدام بوليصة بدون رسوم اشتراك شهرية. يتم احتساب التكلفة بناءً على بوليصات الشحن التي تقوم بإنشائها فقط.',
    },
    {
        question: 'هل يمكن تتبّع الشحنات بعد الإرسال؟',
        answer: 'نعم، يمكنك تتبّع جميع الشحنات لحظة بلحظة من خلال لوحة التحكم، كما يمكن مشاركة رابط التتبع مع العميل.',
    },
    {
        question: 'هل بوليصة مناسبة للمتاجر الناشئة؟',
        answer: 'بالتأكيد، بوليصة مصممة لتناسب المتاجر في جميع مراحلها، بدءًا من المتاجر الناشئة وحتى المتاجر ذات حجم الطلبات الكبير.',
    },
    {
        question: 'ما مدى أمان بيانات متجري؟',
        answer: 'نلتزم بأعلى معايير الأمان لحماية بيانات المتاجر والعملاء، وتتم جميع العمليات عبر أنظمة مؤمنة وموثوقة.',
    },
    {
        question: 'هل يتوفر دعم فني؟',
        answer: 'نعم، يتوفر فريق دعم فني لمساعدتك في أي استفسار أو مشكلة، لضمان تجربة استخدام سلسة في جميع الأوقات.',
    },
    // {
    //     question: 'كيف أبدأ باستخدام بوليصة؟',
    //     answer: 'يمكنك البدء بسهولة من خلال إنشاء حساب، ربط متجرك الإلكتروني، والبدء في إنشاء بوليصات الشحن مباشرة.',
    // },
];

export default function FAQsSection() {
    return (
        <>
            <div className='flex  flex-col items-center justify-center w-full mx-auto' id='faq'>
                <HLine />
                <div className='py-3'></div>
                <HLine />
            </div>
            <section className='py-[100px] w-full overflow-hidden relative selection:text-[#444444] selection:bg-[rgba(121,121,121,0.29)]'>
                <div className='w-full h-[300px] bg-linear-to-b from-[#dddddd] to-background absolute top-0 opacity-5'></div>
                <FlickeringGrid
                    className='absolute inset-0 z-0 mask-[radial-gradient(1000px_circle_at_center,white,transparent)]'
                    squareSize={4}
                    gridGap={6}
                    color='#dddddd'
                    maxOpacity={0.3}
                    flickerChance={0.1}
                    height={300}
                    width={2000}
                />
                <div className='w-full h-[300px] bg-linear-to-b from-transparent to-background absolute top-0 z-10'></div>
                <div className='max-w-[1250px] w-full mx-auto relative z-20 px-5 items-start grid grid-cols-1 lg:grid-cols-12 gap-10'>
                    <div className='flex flex-col items-start mb-10 lg:col-span-5'>
                        <SectionBadge title='الاسئلة الشائعة' color='#666' />
                        <motion.h2
                            variants={fadeInUp(0.05)}
                            className='cursor-default font-ibm-plex-sans-arabic relative font-extrabold text-3xl lg:text-4xl leading-[50px]'
                        >
                            <TextAnimate className='inline-block' animation='blurInUp' duration={0.7} by='word' once>
                                تحتاج إجابات لأسئلتك؟
                            </TextAnimate>
                        </motion.h2>
                        <motion.div variants={fadeInUp(0.53)} className='text-neutral-6700 max-w-lg mx-auto mb-5 mt-4'>
                            <TextAnimate className='inline-block' animation='blurInUp' by='word' duration={1} once>
                                جمعنا هنا أكثر الأسئلة التي يطرحها أصحاب المتاجر الإلكترونية حول بوليصة، لمساعدتك على
                                فهم الخدمة واتخاذ القرار المناسب بسهولة.
                            </TextAnimate>
                        </motion.div>
                    </div>
                    <div className='lg:col-span-1'></div>
                    <motion.div
                        variants={fadeInUp(0.53)}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: 0.3 }}
                        className='w-full lg:col-span-6'
                    >
                        <Accordion
                            type='single'
                            collapsible
                            className='max-w-2xl gap-1.5 flex flex-col w-full mx-auto bg-muted rounded-2xl p-1.5'
                            defaultValue='item-1'
                        >
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    className='rounded-xl shadow-[0_3px_8px_rgba(0,0,0,0.09)]'
                                    value={`item-${index + 1}`}
                                >
                                    <AccordionTrigger>
                                        {index + 1}. {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className='w-full flex flex-col gap-4 text-balance text-start pt-4 border-t border-dotted'>
                                        <p className='text-neutral-600 text-wrap text-[16px] w-full px-2'>
                                            {faq.answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </section>
            <div className='flex  flex-col items-center justify-center w-full mx-auto'>
                <HLine />
                {/* <div className='py-3'></div>
                <HLine /> */}
            </div>
        </>
    );
}
