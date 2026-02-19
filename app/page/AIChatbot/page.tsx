'use client';

import AIChatbotHero from './components/AIChatbotHero';
import AIChatbotNavbar from './components/AIChatbotNavbar';
import AIChatbotCoreFeatures from './components/AIChatbotCoreFeatures';
import AIChatbotScrollFeatures from './components/AIChatbotScrollFeatures';

export default function AIChatbotPage() {
    return (
        <main className="min-h-screen bg-black">
            <AIChatbotNavbar />
            <AIChatbotHero />
            <AIChatbotCoreFeatures />
            <AIChatbotScrollFeatures />
        </main>
    );
}
