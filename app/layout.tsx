import type { Metadata } from 'next';
import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic, Cairo, Baloo_Bhaijaan_2 } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
    variable: '--font-ibm-plex-sans-arabic',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
});

const cairo = Cairo({
    variable: '--font-cairo',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://bolesa.net'),
    title: {
        default: 'بوليصة - أقوى منصة شحن للمتاجر الإلكترونية',
        template: '%s | بوليصة',
    },
    description:
        'بوليصة تقدم لك الحل الشامل لإدارة عمليات الشحن لمتجرك الإلكتروني بسهولة وسرعة. مع خدمات موثوقة وآمنة، نوفر لك متابعة الشحنات، اختيار أفضل شركات النقل، وتكامل سلس مع متجرك',
    keywords: [
        'بوليصة',
        'شحن',
        'منصة شحن',
        'متاجر إلكترونية',
        'إدارة الشحنات',
        'شركات النقل',
        'شحن سريع',
        'تتبع الشحنات',
        'Bolesa',
        'shipping platform',
        'e-commerce shipping',
        'logistics',
        'shipping management',
    ],
    authors: [{ name: 'Bolesa' }],
    creator: 'Bolesa',
    publisher: 'Bolesa',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'ar_SA',
        url: 'https://bolesa.net',
        siteName: 'بوليصة',
        title: 'بوليصة - أقوى منصة شحن للمتاجر الإلكترونية',
        description:
            'بوليصة تقدم لك الحل الشامل لإدارة عمليات الشحن لمتجرك الإلكتروني بسهولة وسرعة. مع خدمات موثوقة وآمنة، نوفر لك متابعة الشحنات، اختيار أفضل شركات النقل، وتكامل سلس مع متجرك',
        images: [
            {
                url: '/bolesa-screen.png',
                width: 1200,
                height: 630,
                alt: 'بوليصة - منصة الشحن للمتاجر الإلكترونية',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'بوليصة - أقوى منصة شحن للمتاجر الإلكترونية',
        description: 'بوليصة تقدم لك الحل الشامل لإدارة عمليات الشحن لمتجرك الإلكتروني بسهولة وسرعة',
        images: ['/bolesa-screen.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://bolesa.net',
    },
    verification: {
        // Add your verification codes here when available
        // google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
        // yahoo: 'your-yahoo-verification-code',
    },
    category: 'technology',
    classification: 'Shipping Platform',
    other: {
        'mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ar' dir='rtl'>
            <body
                className={`${geistSans.variable} overflow-x-hidden ${ibmPlexSansArabic.variable} ${cairo.variable} ${geistMono.variable} font-cairo antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
