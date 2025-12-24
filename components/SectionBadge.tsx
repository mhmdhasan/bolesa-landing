'use client';

import { motion } from 'motion/react';
import { BorderBeam } from './ui/border-beam';
import { RiLogoutCircleFill } from 'react-icons/ri';

import { TextAnimate } from './ui/text-animate';

const fadeInUp = (delay = 0, duration = 0.7, y = 30, blurFrom = 8, blurTo = 0) => ({
    initial: { opacity: 0, y, filter: `blur(${blurFrom}px)` },
    animate: { opacity: 1, y: 0, filter: `blur(${blurTo}px)`, transition: { duration, delay } },
});

export default function SectionBadge({ title, color }: { title: string; color: string }) {
    return (
        <motion.div
            variants={fadeInUp(0.05)}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.3 }}
            className='mb-4 z-99'
        >
            <div
                className='cursor-default inline-flex gap-2 items-center w-fit backdrop-blur-lg text-md rounded-3xl px-5 py-1 shadow-[0_1px_5px_rgba(0,0,0,0.07)] border'
                style={{
                    background: `${color}0D`, // 0D = ~5% alpha, for most hex colors
                    borderColor: `${color}33`, // 33 = ~20% alpha, for most hex colors
                }}
            >
                <RiLogoutCircleFill className='size-4' style={{ color: color }} />
                <TextAnimate className='inline-block' animation='slideRight' duration={0.5} by='word' once>
                    {title}
                </TextAnimate>
                <BorderBeam
                    size={50}
                    style={{
                        background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
                    }}
                    className=''
                />
            </div>
        </motion.div>
    );
}
