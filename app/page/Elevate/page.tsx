import ElevateHero from './components/ElevateHero';
import ElevateShowcase from './components/ElevateShowcase';
import ElevateFeatures from './components/ElevateFeatures';
import ElevateBenefits from './components/ElevateBenefits';
import ElevateTestimonials from './components/ElevateTestimonials';
import ElevateCTA from './components/ElevateCTA';
import ElevateFAQ from './components/ElevateFAQ';

export default function ElevatePage() {
    return (
        <main>
            <ElevateHero />
            <ElevateShowcase />
            <ElevateFeatures />
            <ElevateBenefits />
            <ElevateTestimonials />
            <ElevateCTA />
            <ElevateFAQ />
        </main>
    );
}
