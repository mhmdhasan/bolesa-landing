import { cn } from '@/lib/utils';

export default function VLine({ className }: { className?: string }) {
    return <div className={cn('border-l border-dotted border-foreground/20', className)}></div>;
}
