import { cn } from '@/lib/utils';

export default function HLine({ className }: { className?: string }) {
    return (
        <div className={cn('border-b border-dotted border-foreground/20 w-[200vw] relative', className)}>
            <div className='absolute w-[1300px] top-0 start-[50%] translate-x-[50%] flex justify-between'>
                <span className='size-[5px] border border-neutral-400 bg-background rounded-full absolute -top-[2px] -start-[2px]'></span>
                <span className='size-[5px] border border-neutral-400 bg-background rounded-full absolute -top-[2px] -end-[2px]'></span>
            </div>
        </div>
    );
}
