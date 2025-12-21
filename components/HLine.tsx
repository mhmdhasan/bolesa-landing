import { cn } from '@/lib/utils';
import { BorderBeam } from './ui/border-beam';

export default function HLine({
    className,
    borderColor,
    addBeam,
}: {
    className?: string;
    borderColor?: string;
    addBeam?: boolean;
}) {
    return (
        <div
            style={borderColor ? { borderBottomColor: borderColor, opacity: 0.8 } : undefined}
            className={cn('border-b border-dotted w-[120vw] relative border-neutral-400', className)}
        >
            {addBeam && (
                <BorderBeam
                    size={51}
                    colorFrom={borderColor || '#000'}
                    colorTo={borderColor || '#444'}
                    delay={Math.random() * 7}
                    duration={15}
                />
            )}
            <div className='absolute w-[1300px] top-0 start-[50%] translate-x-[50%]'>
                <span
                    style={borderColor ? { borderColor, opacity: 0.8 } : undefined}
                    className='size-[5px] border bg-background rounded-full absolute -top-[2px] -start-[2px]'
                />
                <span
                    style={borderColor ? { borderColor, opacity: 0.8 } : undefined}
                    className='size-[5px] border bg-background rounded-full absolute -top-[2px] -end-[2px]'
                />
            </div>
        </div>
    );
}
