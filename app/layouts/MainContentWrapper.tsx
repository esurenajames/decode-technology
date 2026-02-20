'use client';

import { usePathname } from 'next/navigation';

export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAIChatbot = pathname === '/ai-chatbot';
    const isERP = pathname === '/erp';

    return (
        <main style={{ paddingTop: (isAIChatbot || isERP) ? 0 : 'var(--nav-height)' }}>
            {children}
        </main>
    );
}
