import EESHero from './components/EESHero';
import EESAbout from './components/EESAbout';
import EESTechnology from './components/EESTechnology';
import EESAppsGrid from './components/EESAppsGrid';
import EESTestimonials from './components/EESTestimonials';
import EESDeployment from './components/EESDeployment';
import EESCTA from './components/EESCTA';
import EESFAQ from './components/EESFAQ';
import EESMobileApp from './components/EESMobileApp';

export default function EESPage() {
    return (
        <main>
            <EESHero />
            <EESAbout />
            <EESAppsGrid />
            <EESCTA />
            <EESDeployment />
            <EESTestimonials />
            <EESTechnology />
            <EESMobileApp />
            <EESFAQ />
        </main>
    );
}
