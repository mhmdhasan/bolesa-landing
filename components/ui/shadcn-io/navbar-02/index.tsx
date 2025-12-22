'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Simple logo component for the navbar
const Logo = () => {
    return <Image src='/bolesa_logo.svg' alt='Logo' width={60} height={60} />;
};

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
    <svg
        className={cn('pointer-events-none', className)}
        width={16}
        height={16}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        xmlns='http://www.w3.org/2000/svg'
        {...(props as any)}
    >
        <path
            d='M4 12L20 12'
            className='origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315'
        />
        <path
            d='M4 12H20'
            className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
        />
        <path
            d='M4 12H20'
            className='origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135'
        />
    </svg>
);

// Types
export interface Navbar02NavItem {
    href?: string;
    label: string;
    submenu?: boolean;
    type?: 'description' | 'simple' | 'icon';
    items?: Array<{
        href: string;
        label: string;
        description?: string;
        icon?: string;
    }>;
}

export interface Navbar02Props extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    logoHref?: string;
    navigationLinks?: Navbar02NavItem[];
    signInText?: string;
    signInHref?: string;
    ctaText?: string;
    ctaHref?: string;
    onSignInClick?: () => void;
    onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: Navbar02NavItem[] = [
    { href: '#contact-us', label: 'تواصل معنا' },
    { href: '#faq', label: 'الأسئلة الشائعة' },
    { href: '#tracking', label: 'تتبع الشحنات' },
    { href: '#carriers', label: 'الناقلون' },
    { href: '#features', label: 'المميزات' },
    { href: '#how-it-works', label: 'آلية العمل' },
    { href: '#hero', label: 'الرئيسية' },
    // ...(same as before)
];

function useActiveSection(hrefs: (string | undefined)[]) {
    const [activeId, setActiveId] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
        function handler() {
            const hashHrefs = hrefs.filter(Boolean).filter((href) => href!.startsWith('#')) as string[];
            let found: string | undefined = undefined;

            for (let i = 0; i < hashHrefs.length; i++) {
                const href = hashHrefs[i];
                const id = href.replace('#', '');
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom >= 80) {
                    found = href;
                    break;
                }
            }
            if (!found && hashHrefs.length > 0) {
                // fallback to first if at page top
                const firstEl = document.getElementById(hashHrefs[0].replace('#', ''));
                if (firstEl && window.scrollY < firstEl.offsetTop) {
                    found = hashHrefs[0];
                }
            }
            setActiveId(found);
        }

        window.addEventListener('scroll', handler, { passive: true });
        handler();
        return () => window.removeEventListener('scroll', handler);
    }, [hrefs.join(',')]);

    return activeId;
}

export const Navbar02 = React.forwardRef<HTMLElement, Navbar02Props>(
    (
        {
            className,
            logo = <Logo />,
            logoHref = '/',
            navigationLinks = defaultNavigationLinks,
            signInText = 'Sign In',
            signInHref = 'https://app.bolesa.net/login',
            ctaText = 'تسجيل الدخول',
            ctaHref = 'https://app.bolesa.net/login',
            onSignInClick,
            onCtaClick,
            ...props
        },
        ref
    ) => {
        const [isMobile, setIsMobile] = useState(false);
        const containerRef = useRef<HTMLElement>(null);

        useEffect(() => {
            const checkWidth = () => {
                if (containerRef.current) {
                    const width = containerRef.current.offsetWidth;
                    setIsMobile(width < 768); // 768px is md breakpoint
                }
            };

            checkWidth();

            const resizeObserver = new ResizeObserver(checkWidth);
            if (containerRef.current) {
                resizeObserver.observe(containerRef.current);
            }

            return () => {
                resizeObserver.disconnect();
            };
        }, []);

        // Combine refs
        const combinedRef = React.useCallback(
            (node: HTMLElement | null) => {
                containerRef.current = node;
                if (typeof ref === 'function') {
                    ref(node);
                } else if (ref) {
                    ref.current = node;
                }
            },
            [ref]
        );

        const renderIcon = (iconName: string) => {
            switch (iconName) {
                case 'BookOpenIcon':
                    return <BookOpenIcon size={16} className='text-foreground opacity-60' aria-hidden={true} />;
                case 'LifeBuoyIcon':
                    return <LifeBuoyIcon size={16} className='text-foreground opacity-60' aria-hidden={true} />;
                case 'InfoIcon':
                    return <InfoIcon size={16} className='text-foreground opacity-60' aria-hidden={true} />;
                default:
                    return null;
            }
        };

        // 1. Track which section is active based on the scroll position
        const linkHrefs = navigationLinks.map((n) => n.href);
        const activeHref = useActiveSection(linkHrefs);

        return (
            <header
                ref={combinedRef}
                className={cn(
                    'sticky top-0 z-50 w-full bg-transparent backdrop-blur supports-backdrop-filter:bg-background/60 px-4 md:px-6 **:no-underline',
                    className
                )}
                {...(props as any)}
            >
                <div className='container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4'>
                    {/* Left side */}
                    <div className='flex items-center gap-2'>
                        {/* Mobile menu trigger */}
                        {isMobile && (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        className='group h-9 w-9 hover:bg-accent hover:text-accent-foreground'
                                        variant='ghost'
                                        size='icon'
                                    >
                                        <HamburgerIcon />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent align='start' className='w-64 p-1'>
                                    <NavigationMenu className='max-w-none'>
                                        <NavigationMenuList className='flex-col items-start gap-0'>
                                            {navigationLinks.map((link, index) => (
                                                <NavigationMenuItem key={index} className='w-full'>
                                                    {link.submenu ? (
                                                        <>
                                                            <div className='text-muted-foreground px-2 py-1.5 text-xs font-medium'>
                                                                {link.label}
                                                            </div>
                                                            <ul>
                                                                {link.items?.map((item, itemIndex) => (
                                                                    <li key={itemIndex}>
                                                                        <button
                                                                            onClick={(e) => e.preventDefault()}
                                                                            className='flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline'
                                                                        >
                                                                            {item.label}
                                                                        </button>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </>
                                                    ) : (
                                                        <button
                                                            onClick={(e) => e.preventDefault()}
                                                            className={cn(
                                                                'flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline',
                                                                activeHref === link.href
                                                                    ? 'bg-accent text-accent-foreground font-bold'
                                                                    : ''
                                                            )}
                                                        >
                                                            {link.label}
                                                        </button>
                                                    )}
                                                    {/* Add separator between different types of items */}
                                                    {index < navigationLinks.length - 1 &&
                                                        ((!link.submenu && navigationLinks[index + 1].submenu) ||
                                                            (link.submenu && !navigationLinks[index + 1].submenu) ||
                                                            (link.submenu &&
                                                                navigationLinks[index + 1].submenu &&
                                                                link.type !== navigationLinks[index + 1].type)) && (
                                                            <div
                                                                role='separator'
                                                                aria-orientation='horizontal'
                                                                className='bg-border -mx-1 my-1 h-px w-full'
                                                            />
                                                        )}
                                                </NavigationMenuItem>
                                            ))}
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                </PopoverContent>
                            </Popover>
                        )}
                        {/* Main nav */}
                        <div className='flex items-center gap-6'>
                            <Link href='/'>
                                <Logo />
                            </Link>
                            {/* Navigation menu */}
                            {!isMobile && (
                                <NavigationMenu className='flex'>
                                    <NavigationMenuList className='gap-1'>
                                        {navigationLinks.map((link, index) => (
                                            <NavigationMenuItem key={index}>
                                                {link.submenu ? (
                                                    <>
                                                        <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                                                        <NavigationMenuContent>
                                                            {link.type === 'description' &&
                                                            link.label === 'Features' ? (
                                                                <div className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                                                    <div className='row-span-3'>
                                                                        <NavigationMenuLink asChild>
                                                                            <button
                                                                                onClick={(e) => e.preventDefault()}
                                                                                className='flex h-full w-full select-none flex-col justify-center items-center text-center rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md cursor-pointer'
                                                                            >
                                                                                <div className='mb-3 text-xl font-medium'>
                                                                                    shadcn.io
                                                                                </div>
                                                                                <p className='text-sm leading-tight text-muted-foreground'>
                                                                                    Beautifully designed components
                                                                                    built with Radix UI and Tailwind
                                                                                    CSS.
                                                                                </p>
                                                                            </button>
                                                                        </NavigationMenuLink>
                                                                    </div>
                                                                    {link.items?.map((item, itemIndex) => (
                                                                        <ListItem
                                                                            key={itemIndex}
                                                                            title={item.label}
                                                                            href={item.href}
                                                                            type={link.type}
                                                                        >
                                                                            {item.description}
                                                                        </ListItem>
                                                                    ))}
                                                                </div>
                                                            ) : link.type === 'simple' ? (
                                                                <div className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                                                                    {link.items?.map((item, itemIndex) => (
                                                                        <ListItem
                                                                            key={itemIndex}
                                                                            title={item.label}
                                                                            href={item.href}
                                                                            type={link.type}
                                                                        >
                                                                            {item.description}
                                                                        </ListItem>
                                                                    ))}
                                                                </div>
                                                            ) : link.type === 'icon' ? (
                                                                <div className='grid w-[400px] gap-3 p-4'>
                                                                    {link.items?.map((item, itemIndex) => (
                                                                        <ListItem
                                                                            key={itemIndex}
                                                                            title={item.label}
                                                                            href={item.href}
                                                                            icon={item.icon}
                                                                            type={link.type}
                                                                        >
                                                                            {item.description}
                                                                        </ListItem>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <div className='grid gap-3 p-4'>
                                                                    {link.items?.map((item, itemIndex) => (
                                                                        <ListItem
                                                                            key={itemIndex}
                                                                            title={item.label}
                                                                            href={item.href}
                                                                            type={link.type}
                                                                        >
                                                                            {item.description}
                                                                        </ListItem>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </NavigationMenuContent>
                                                    </>
                                                ) : (
                                                    <NavigationMenuLink
                                                        href={link.href}
                                                        className={cn(
                                                            navigationMenuTriggerStyle(),
                                                            'cursor-pointer font-ibm-plex-sans-arabic text-[16px]',
                                                            activeHref === link.href ? 'bg-background! text-brand' : ''
                                                        )}
                                                    >
                                                        {link.label}
                                                    </NavigationMenuLink>
                                                )}
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            )}
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='flex items-center gap-3'>
                        <Button
                            variant='outline'
                            asChild
                            className='text-sm font-medium hover:bg-accent hover:text-accent-foreground'
                        >
                            <Link href='tel:1234567890' className='inline-flex items-center py-2.5! gap-3!'>
                                <span className='text-[12px] leading-none!'>اتصل بنا</span>
                                <span
                                    className='font-bold font-ibm-plex-sans-arabic leading-none! text-[17px]'
                                    style={{ direction: 'ltr' }}
                                >
                                    +966552993266
                                </span>
                            </Link>
                        </Button>
                        <Button variant='store' className='text-sm font-medium px-4 h-9 rounded-md shadow-sm' asChild>
                            <Link href={ctaHref} target='_blank'>
                                {ctaText}
                            </Link>
                        </Button>
                    </div>
                </div>
            </header>
        );
    }
);

Navbar02.displayName = 'Navbar02';

// ListItem component for navigation menu items
const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'> & {
        title: string;
        href?: string;
        icon?: string;
        type?: 'description' | 'simple' | 'icon';
        children?: React.ReactNode;
    }
>(({ className, title, children, icon, type, href, ...props }, ref) => {
    // Optionally: highlight ListItem also when the sub link's href matches the section
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        if (!href || !href.startsWith('#')) {
            setIsActive(false);
            return;
        }

        const sectionId = href.replace('#', '');

        function onScroll() {
            const el = document.getElementById(sectionId);
            if (el) {
                const rect = el.getBoundingClientRect();
                setIsActive(rect.top <= 80 && rect.bottom >= 80);
            } else {
                setIsActive(false);
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [href]);
    // fallback to active logic: could be unified with parent if needed

    const renderIconComponent = (iconName?: string) => {
        if (!iconName) return null;
        switch (iconName) {
            case 'BookOpenIcon':
                return <BookOpenIcon className='h-5 w-5' />;
            case 'LifeBuoyIcon':
                return <LifeBuoyIcon className='h-5 w-5' />;
            case 'InfoIcon':
                return <InfoIcon className='h-5 w-5' />;
            default:
                return null;
        }
    };

    return (
        <NavigationMenuLink asChild>
            <a
                ref={ref}
                onClick={(e) => e.preventDefault()}
                className={cn(
                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer',
                    className,
                    isActive ? 'bg-accent text-accent-foreground font-bold' : ''
                )}
                {...(props as any)}
            >
                {type === 'icon' && icon ? (
                    <div className='flex items-start space-x-4'>
                        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted'>
                            {renderIconComponent(icon)}
                        </div>
                        <div className='space-y-1'>
                            <div className='text-base font-medium leading-tight'>{title}</div>
                            {children && (
                                <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='text-base font-medium leading-none'>{title}</div>
                        {children && (
                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
                        )}
                    </>
                )}
            </a>
        </NavigationMenuLink>
    );
});
ListItem.displayName = 'ListItem';

export { Logo, HamburgerIcon };
