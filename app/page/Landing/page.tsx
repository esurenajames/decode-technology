import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import TrustedBy from './components/TrustedBy';
import CTA from './components/CTA';
import ScrollRevealText from './components/ScrollRevealText';
import About from './components/About';
import Blogs from './components/Blogs';

export default function LandingPage() {
    return (
        <>
            <Hero />
            <FeaturesGrid />
            <TrustedBy />
            <CTA />

            <About />
            <ScrollRevealText />
            <Blogs />
        </>
    );
}
