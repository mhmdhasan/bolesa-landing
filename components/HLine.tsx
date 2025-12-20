import { cn } from '@/lib/utils';

export default function HLine({ className, borderColor }: { className?: string; borderColor?: string }) {
    return (
        <div
            style={borderColor ? { borderBottomColor: borderColor } : undefined}
            className={cn('border-b border-dotted w-[200vw] relative border-neutral-400', className)}
        >
            <div className='absolute w-[1300px] top-0 start-[50%] translate-x-[50%]'>
                <span
                    style={borderColor ? { borderColor } : undefined}
                    className='size-[5px] border bg-background rounded-full absolute -top-[2px] -start-[2px]'
                />
                <span
                    style={borderColor ? { borderColor } : undefined}
                    className='size-[5px] border bg-background rounded-full absolute -top-[2px] -end-[2px]'
                />
            </div>
        </div>
    );
}
