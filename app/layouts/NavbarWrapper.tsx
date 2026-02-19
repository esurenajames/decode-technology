'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function NavbarWrapper() {
    const pathname = usePathname();
    const isAIChatbot = pathname === '/ai-chatbot';

    if (isAIChatbot) return null;

    return <Navbar />;
}
