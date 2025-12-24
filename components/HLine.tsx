import { cn } from '@/lib/utils';
import { BorderBeam } from './ui/border-beam';

export default function HLine({
    className,
    borderColor,
    addBeam,
    reverseBeam,
}: {
    className?: string;
    borderColor?: string;
    addBeam?: boolean;
    reverseBeam?: boolean;
}) {
    return (
        <div
            style={borderColor ? { borderBottomColor: borderColor, opacity: 0.8 } : undefined}
            className={cn('border-b border-dotted w-dvw lg:w-[120vw] relative border-foreground/20', className)}
        >
            {addBeam && (
                <BorderBeam
                    size={51}
                    colorFrom={borderColor || '#000'}
                    colorTo={borderColor || '#444'}
                    delay={Math.random() * 7}
                    duration={15}
                    reverse={reverseBeam}
                />
            )}
            <div className='absolute w-full lg:max-w-[1300px] top-0 start-[50%] translate-x-[50%]'>
                <span
                    style={borderColor ? { borderColor, background: borderColor, opacity: 1 } : undefined}
                    className='size-[5px] border rotate-45 bg-neutral-400 absolute -top-[2px] start-[10px] lg:-start-[2px]'
                />
                <span
                    style={borderColor ? { borderColor, background: borderColor, opacity: 1 } : undefined}
                    className='size-[5px] border rotate-45 bg-neutral-400 absolute -top-[2px] end-[10px] lg:-end-[2px]'
                />
            </div>
        </div>
    );
}
