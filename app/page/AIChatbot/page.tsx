'use client';

import AIChatbotHero from './components/AIChatbotHero';
import AIChatbotNavbar from './components/AIChatbotNavbar';
import AIChatbotCoreFeatures from './components/AIChatbotCoreFeatures';
import AIChatbotShowcase from './components/AIChatbotShowcase';
import AIChatbotCTA from './components/AIChatbotCTA';
import AIChatbotCTA2 from './components/AIChatbotCTA2';
import AIChatbotChannels from './components/AIChatbotChannels';
import AIChatbotFAQ from './components/AIChatbotFAQ';
import AIChatbotQuote from './components/AIChatbotQuote';
import StarfieldCanvas from './components/StarfieldCanvas';

export default function AIChatbotPage() {
    return (
        // Dark root — canvas sits behind; sections with their own bg override stars
        <div style={{ background: '#0d0d0e', minHeight: '100vh', position: 'relative' }}>
            {/* Fixed starfield — always behind everything */}
            <StarfieldCanvas />

            {/* Page content — sits above the canvas */}
            <main style={{ position: 'relative', zIndex: 1 }}>
                <AIChatbotNavbar />
                <AIChatbotHero />
                <AIChatbotChannels />
                <AIChatbotCoreFeatures />
                <AIChatbotQuote />
                <AIChatbotCTA />
                <AIChatbotShowcase />
                <AIChatbotCTA2 />
                <AIChatbotFAQ />
            </main>
        </div>
    );
}
