'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAIChatbot = pathname === '/ai-chatbot';
    const isERP = pathname === '/erp';

    // Force scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <main style={{ paddingTop: (isAIChatbot || isERP) ? 0 : 'var(--nav-height)' }}>
            {children}
        </main>
    );
}
