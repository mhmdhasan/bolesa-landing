'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot='accordion-item'
            className={cn('border-none bg-background', className)}
            {...props}
        />
    );
}

type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
    'data-state'?: 'open' | 'closed';
};

function AccordionTrigger({ className, children, 'data-state': dataState, ...props }: AccordionTriggerProps) {
    return (
        <AccordionPrimitive.Header className='flex'>
            <AccordionPrimitive.Trigger
                data-slot='accordion-trigger'
                className={cn(
                    'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 r py-4 text-left text-md font-ibm-plex-sans-arabic transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>span>span.test]:rotate-90 [&[data-state=open]>span]:border-s-2 [&[data-state=open]>span]:border-e-2 [&[data-state=open]>span]:border-t-2 [&[data-state=open]>span]:border-t-brand/70  rounded-xl px-6 font-bold cursor-pointer text-md lg:items-center',
                    className
                )}
                {...props}
            >
                {children}
                <span
                    data-slot='accordion-plusminus'
                    className={cn(
                        'relative flex items-center justify-center size-9 rounded-full bg-neutral-700 shrink-0 translate-y-0.5 transition-transform duration-500 border-b-2 border-brand'
                    )}
                    aria-hidden='true'
                >
                    <span
                        className={cn(
                            'absolute left-1/2 top-1/2 w-0.5 h-3 bg-background transition-all duration-500 test'
                        )}
                        style={{ transform: 'translate(-50%, -50%)', transformOrigin: 'top left' }}
                    />
                    <span
                        className='absolute left-1/2 top-1/2 h-0.5 w-3 bg-background transition-all duration-500'
                        style={{ transform: 'translate(-50%, -50%)' }}
                    />
                </span>
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot='accordion-content'
            className='data-[state=closed]:animate-accordion-up w-[calc(100%-3rem)] mx-auto duration-400 data-[state=open]:animate-accordion-down overflow-hidden text-md rounded-xl'
            {...props}
        >
            <div className={cn('pt-0 pb-4 w-full', className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
