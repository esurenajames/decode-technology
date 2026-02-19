'use client';

import SupportHero from './components/SupportHero';
import SupportOptions from './components/SupportOptions';
import FAQSection from './components/FAQSection';
import HelpResources from './components/HelpResources';

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-white">
            <SupportHero />
            <SupportOptions />
            <FAQSection />
            <HelpResources />
        </main>
    );
}
