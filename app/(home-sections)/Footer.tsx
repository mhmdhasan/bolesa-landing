'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/ui/shadcn-io/navbar-02';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FaAppStore, FaCircle, FaGooglePlay } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const fadeInUp = (delay = 0, duration = 0.7, y = 30, blur = 8) => ({
    initial: { opacity: 0, y, filter: `blur(${blur}px)` },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration, delay } },
});

export default function Footer() {
    return (
        <motion.footer
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.22 }}
            variants={fadeInUp(0.58)}
            className='w-full px-5 relative z-99'
        >
            <div className='bg-neutral-100 border-t-5 ring-6 border-t-neutral-200/30 ring-neutral-200/30 pt-[50px] pb-[30px] mx-auto px-5 lg:px-0 flex flex-col gap-6 rounded-3xl'>
                <div className='grid max-w-[1200px] mx-auto grid-col-1 lg:grid-cols-3 gap-6'>
                    <div className='flex flex-col gap-3'>
                        <Link href='/'>
                            <Logo />
                        </Link>
                        <p className='text-neutral-600 text-sm'>
                            بوليصة شريكك الموثوق في الشحن، نسهّل عمليات التوصيل، ونربط متجرك بشبكة واسعة من شركات الشحن،
                            .
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Image src={'/MOC-QR-LOGO-1.png'} alt='MOC QR' width={50} height={50} />
                            </DialogTrigger>
                            <DialogContent className='w-full! max-w-sm!'>
                                <DialogHeader>
                                    <DialogTitle className='hidden'>موثق من وزارة التجارة السعودية</DialogTitle>
                                </DialogHeader>
                                <Image src={'/MOC-QR-LOGO-1.png'} alt='MOC QR' width={400} height={400} />
                            </DialogContent>
                        </Dialog>
                        <p className='text-sm'>
                            موثق من وزارة التجارة السعودية برقم{' '}
                            <Link
                                href='https://app.bolesa.net/storage/MoC-cert.pdf'
                                target='_blank'
                                className='text-brand'
                            >
                                024223
                            </Link>
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Image src={'/CITC-QR-LOGO.png'} alt='CITC QR' width={50} height={50} />
                            </DialogTrigger>
                            <DialogContent className='w-full! max-w-sm!'>
                                <DialogHeader>
                                    <DialogTitle className='hidden'>موثق من وزارة التجارة السعودية</DialogTitle>
                                </DialogHeader>
                                <Image src={'/CITC-QR-LOGO.png'} alt='CITC QR' width={400} height={400} />
                            </DialogContent>
                        </Dialog>
                        <p className='text-sm'>
                            مرخصة من هيئة الاتصالات و تقنيه المعلومات السعودية برقم{' '}
                            <Link
                                href='https://app.bolesa.net/storage/CITC-cert.pdf'
                                target='_blank'
                                className='text-brand'
                            >
                                2023062050
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2 max-w-[1200px] mx-auto border-b border-neutral-200/70 w-full'></div>
                <div className='grid max-w-[1200px] mx-auto grid-col-1 lg:grid-cols-12 gap-6 w-full items-center'>
                    <ul className='flex items-center justify-center lg:justify-start gap-2 lg:col-span-3'>
                        <li>
                            <Link
                                className='text-sm text-neutral-600 hover:text-brand duration-300'
                                href='https://app.bolesa.net/privacy-policy'
                                target='_blank'
                            >
                                سياسية الخصوصية
                            </Link>
                        </li>
                        <li>
                            <FaCircle className='size-1' />
                        </li>
                        <li>
                            <Link
                                className='text-sm text-neutral-600 hover:text-brand duration-300'
                                href='https://app.bolesa.net/terms-and-conditions'
                                target='_blank'
                            >
                                الشروط والأحكام
                            </Link>
                        </li>
                    </ul>

                    <div className='flex text-neutral-600 lg:col-span-6 justify-center text-center'>
                        <p className='text-sm'>
                            &copy; {new Date().getFullYear()} جميع الحقوق محفوظه لشركة بيان الايصال لتقنية المعلومات -
                            بوليصه
                        </p>
                    </div>
                    <div className='flex justify-center lg:justify-end gap-3 lg:col-span-3'>
                        <Button asChild variant='store' className='py-1.5! px-2! w-auto shadow-none'>
                            <Link
                                target='_blank'
                                href={
                                    'https://apps.apple.com/sa/app/bolesa-%D8%A8%D9%88%D9%84%D9%8A%D8%B5%D8%A9/id6670608761'
                                }
                            >
                                <div className='inline-flex gap-2'>
                                    <div className='inline-flex text-end gap-0 flex-col'>
                                        <p className='text-[11px] font-regular leading-none uppercase'>Get It On</p>
                                        <p className='text-[13px] font-bold leading-none'>App Store</p>
                                    </div>
                                    <FaAppStore className='size-6 shrink-0' />
                                </div>
                            </Link>
                        </Button>
                        <Button asChild variant='store' className='py-1.5! px-3! w-auto shadow-none'>
                            <Link
                                target='_blank'
                                href={'https://play.google.com/store/apps/details?id=com.storagestation.bolesa.co'}
                            >
                                <div className='inline-flex gap-2'>
                                    <div className='inline-flex text-end gap-0 flex-col'>
                                        <p className='text-[11px] font-regular leading-none uppercase'>Get It On</p>
                                        <p className='text-[13px] font-bold leading-none'>Google Play</p>
                                    </div>
                                    <FaGooglePlay className='size-6 shrink-0' />
                                </div>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
