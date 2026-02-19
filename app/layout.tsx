import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavbarWrapper from './layouts/NavbarWrapper';
import Footer from './layouts/Footer';
import AntdProvider from './layouts/AntdProvider';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Decode Technologies — Enterprise Software Solutions',
    description: 'Decode Technologies builds enterprise-grade AI chatbots, ERP systems, and custom software that empower businesses to scale.',
};

import MainContentWrapper from './layouts/MainContentWrapper';

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <AntdProvider>
                    <NavbarWrapper />
                    <MainContentWrapper>
                        {children}
                    </MainContentWrapper>
                    <Footer />
                </AntdProvider>
            </body>
        </html>
    );
}
