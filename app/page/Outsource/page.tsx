import OutsourceHero from './components/OutsourceHero';
import OutsourceServices from './components/OutsourceServices';
import OutsourceOfferings from './components/OutsourceOfferings';
import OutsourceWhyChoose from './components/OutsourceWhyChoose';
import OutsourceFAQ from './components/OutsourceFAQ';
import OutsourceCTA from './components/OutsourceCTA';

export default function OutsourcePage() {
    return (
        <main>
            <OutsourceHero />
            <OutsourceServices />
            <OutsourceOfferings />
            <OutsourceWhyChoose />
            <OutsourceCTA />
            <OutsourceFAQ />
        </main>
    );
}

