'use client';

import CalculatorHero from './components/CalculatorHero';
import CalculatorMain from './components/CalculatorMain';
import CalculatorInfo from './components/CalculatorInfo';

export default function CalculatorPage() {
    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            <CalculatorHero />
            <CalculatorMain />
            <CalculatorInfo />
        </main>
    );
}
