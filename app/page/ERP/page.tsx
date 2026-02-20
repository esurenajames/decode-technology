import ERPHero from './components/ERPHero';
import ERPBusinessChallenges from './components/ERPBusinessChallenges';
import ERPFeaturesGrid from './components/ERPFeaturesGrid';
import ERPCTA from './components/ERPCTA';
import ERPTestimonials from './components/ERPTestimonials';
import ERPFeatures from './components/ERPFeatures';
import ERPFAQ from './components/ERPFAQ';

export default function ERPPage() {
    return (
        <main>
            <ERPHero />
            <ERPBusinessChallenges />
            <ERPFeaturesGrid />
            <ERPCTA />
            <ERPTestimonials />
            <ERPFeatures />
            <ERPFAQ />
        </main>
    );
}