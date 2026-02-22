import ElevateHero from './components/ElevateHero';
import ElevateChoice from './components/ElevateChoice';
import ElevateWhyUs from './components/ElevateWhyUs';
import ElevateFeaturesGrid from './components/ElevateFeaturesGrid';
import ElevateCTA from './components/ElevateCTA';
import ElevateFAQ from './components/ElevateFAQ';

export default function ElevatePage() {
    return (
        <main>
            <ElevateHero />
            <ElevateChoice />
            <ElevateWhyUs />
            <ElevateFeaturesGrid />
            <ElevateCTA />
            <ElevateFAQ />
        </main>
    );
}
