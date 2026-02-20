import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import CTA from './components/CTA';
import Apps from './components/Apps';
import About from './components/About';
import Blogs from './components/Blogs';

export default function LandingPage() {
    return (
        <>
            <Hero />
            <TrustedBy />
            <Features />
            <CTA />
            <Apps />
            <About />
            <Blogs />
        </>
    );
}
