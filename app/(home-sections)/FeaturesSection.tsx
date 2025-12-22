'use client';
import { BorderBeam } from '@/components/ui/border-beam';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { TextAnimate } from '@/components/ui/text-animate';
import { motion } from 'motion/react';
import { FaCircle } from 'react-icons/fa6';
import { LuBrain, LuChartNoAxesCombined } from 'react-icons/lu';

const fadeInUp = (delay = 0, duration = 0.7, y = 30, blurFrom = 8, blurTo = 0) => ({
    initial: { opacity: 0, y, filter: `blur(${blurFrom}px)` },
    animate: { opacity: 1, y: 0, filter: `blur(${blurTo}px)`, transition: { duration, delay } },
});

export default function FeaturesSection() {
    return (
        <section className='py-[90px] w-full overflow-hidden relative'>
            <div className='w-full h-[300px] bg-linear-to-b from-[#91b436] to-background absolute top-0 opacity-5'></div>
            <FlickeringGrid
                className='absolute inset-0 z-0 mask-[radial-gradient(1000px_circle_at_center,white,transparent)]'
                squareSize={4}
                gridGap={6}
                color='#91b436'
                maxOpacity={0.3}
                flickerChance={0.1}
                height={300}
                width={2000}
            />
            <div className='w-full h-[300px] bg-linear-to-b from-transparent to-background absolute top-0 z-10'></div>
            <div className='max-w-[1200px] w-full mx-auto relative z-20 text-center px-5'>
                <div className='grid grid-cols-1 xl:grid-cols-12 gap-3 items-end'>
                    <div className='flex flex-col items-start xl:col-span-7'>
                        <motion.div variants={fadeInUp(0.05)} className='mb-4'>
                            <div className='cursor-default bg-[#91b436]/5 border border-[#91b436]/20 inline-flex gap-2 items-center w-fit backdrop-blur-lg text-md rounded-3xl px-5 py-1 shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                                <FaCircle className='size-3 text-[#91b436]' />
                                لماذا بوليصة؟
                                <BorderBeam size={50} className='from-transparent via-[#91b436] to-transparent' />
                            </div>
                        </motion.div>
                        <motion.h2
                            variants={fadeInUp(0.05)}
                            className='cursor-default font-ibm-plex-sans-arabic relative font-extrabold text-3xl lg:text-4xl leading-[50px]'
                        >
                            <TextAnimate className='inline-block' animation='blurInUp' duration={0.7} by='word' once>
                                مزايا بوليصة لإدارة الشحن
                            </TextAnimate>
                        </motion.h2>
                    </div>
                    <motion.div variants={fadeInUp(0.53)} className='text-neutral-6700 xl:col-span-5 mb-5 text-start'>
                        <TextAnimate className='inline-block' animation='blurInUp' by='word' duration={1} once>
                            توفّر بوليصة مجموعة متكاملة من الأدوات التي تساعدك على إدارة عمليات الشحن بكفاءة ووضوح،
                            بدءًا من إنشاء الطلبات وحتى تسليمها
                        </TextAnimate>
                    </motion.div>
                </div>

                {/* -------------------------------------------------------------- */}
                <motion.div
                    variants={fadeInUp(0.1, 0.7, 30, 50, 0)}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: 0.3 }}
                    className='grid grid-cols-1 lg:grid-cols-3 gap-1 mt-6 bg-muted rounded-2xl p-1.5 relative'
                >
                    <div className='rounded-xl text-white bg-[#060e00] p-8 relative overflow-hidden'>
                        <div className='absolute inset-0 bg-linear-to-b from-transparent to-[#060e00] z-10'></div>
                        <div
                            className='absolute inset-0 pointer-events-none overflow-hidden opacity-20'
                            aria-hidden='true'
                        >
                            <svg width='100%' height='100%' className='w-full h-full' style={{ display: 'block' }}>
                                <defs>
                                    <pattern id='dotted-pattern' patternUnits='userSpaceOnUse' width='20' height='20'>
                                        <circle cx='1' cy='1' r='1' fill='#ffffff' opacity='1' />
                                    </pattern>
                                </defs>
                                <rect width='100%' height='100%' fill='url(#dotted-pattern)' />
                            </svg>
                        </div>

                        <div className='relative z-99 flex flex-col gap-1 text-start'>
                            <LuBrain className='size-7' />
                            <h2 className='text-[26px] font-bold font-ibm-plex-sans-arabic'>رؤيتنا</h2>
                            <p className='text-neutral-300 text-[15px]'>
                                نسعى في بوليصة إلى أن نكون المنصة الرائدة في إدارة الشحن للمتاجر الإلكترونية، عبر تقديم
                                حلول ذكية وبسيطة تساعد التجار على تحسين كفاءة عملياتهم، وتعزيز تجربة عملائهم
                            </p>
                        </div>
                        <div className='relative z-99 flex flex-col gap-1 text-start mt-7'>
                            <LuChartNoAxesCombined className='size-7' />
                            <h2 className='text-[26px] font-bold font-ibm-plex-sans-arabic'>مهمتنا</h2>
                            <p className='text-neutral-300 text-[15px]'>
                                تتمثل مهمتنا في تمكين أصحاب المتاجر الإلكترونية من إدارة شحناتهم بسهولة واحترافية، عبر
                                منصة موحّدة تجمع بين الأتمتة، المرونة، والتكامل السلس.
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:col-span-2 lg:grid-cols-2 gap-2'>
                        <div className='bg-background rounded-2xl shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                            <div className='py-5 px-5 h-full text-start space-y-1 flex flex-col justify-between'>
                                <h3 className='text-[20px] font-bold font-ibm-plex-sans-arabic'>خيارات شحن متعددة</h3>
                                <p className='text-neutral-700 text-[15px]'>
                                    اختر من بين مجموعة كبيرة من شركات الشحن المحلية والعالمية، بما يناسب طبيعة عملك ونوع
                                    شحناتك.
                                </p>
                            </div>
                        </div>
                        <div className='bg-background rounded-2xl shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                            <div className='py-5 px-5 h-full text-start space-y-1 flex flex-col justify-between'>
                                <h3 className='text-[20px] font-bold font-ibm-plex-sans-arabic'>احصل على أفضل سعر</h3>
                                <p className='text-neutral-700 text-[15px]'>
                                    قارن الأسعار بشكل فوري واحصل على أفضل تكلفة شحن ممكنة دون الحاجة للتفاوض مع كل شركة
                                    على حدة.
                                </p>
                            </div>
                        </div>
                        <div className='bg-background rounded-2xl shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                            <div className='py-5 px-5 h-full text-start space-y-1 flex flex-col justify-between'>
                                <h3 className='text-[20px] font-bold font-ibm-plex-sans-arabic'>بدون عقود</h3>
                                <p className='text-neutral-700 text-[15px]'>
                                    لا حاجة لتوقيع عقود طويلة أو التزامات مسبقة مع شركات الشحن، استخدم المنصة بحرية
                                    ومرونة تامة.
                                </p>
                            </div>
                        </div>
                        <div className='bg-background rounded-2xl shadow-[0_1px_5px_rgba(0,0,0,0.07)]'>
                            <div className='py-5 px-5 h-full text-start space-y-1 flex flex-col justify-between'>
                                <h3 className='text-[20px] font-bold font-ibm-plex-sans-arabic'>دفع عند الاستلام</h3>
                                <p className='text-neutral-700 text-[15px]'>
                                    استلم مبالغ الدفع عند الاستلام بسهولة داخل محفظتك الإلكترونية، مع تقارير واضحة وتحكم
                                    كامل في مستحقاتك.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
