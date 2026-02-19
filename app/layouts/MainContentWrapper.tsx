'use client';

import { usePathname } from 'next/navigation';

export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAIChatbot = pathname === '/ai-chatbot';

    return (
        <main style={{ paddingTop: isAIChatbot ? 0 : 'var(--nav-height)' }}>
            {children}
        </main>
    );
}
