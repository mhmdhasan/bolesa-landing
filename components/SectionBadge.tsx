'use client';

import { motion } from 'motion/react';
import { MdLightbulbCircle } from 'react-icons/md';
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
            className='mb-4'
        >
            <div
                className={`cursor-default bg-[${color}]/5 border border-[${color}]/20 inline-flex gap-2 items-center w-fit backdrop-blur-lg text-md rounded-3xl px-5 py-1 shadow-[0_1px_5px_rgba(0,0,0,0.07)]`}
            >
                <RiLogoutCircleFill className={`size-4 text-[${color}]`} />
                <TextAnimate className='inline-block' animation='slideRight' duration={0.5} by='word' once>
                    {title}
                </TextAnimate>
                <BorderBeam size={50} className={`from-transparent via-[${color}] to-transparent`} />
            </div>
        </motion.div>
    );
}
