import OutsourceHero from './components/OutsourceHero';
import OutsourceServices from './components/OutsourceServices';
import OutsourceExpertise from './components/OutsourceExpertise';
import OutsourcePlans from './components/OutsourcePlans';
import OutsourceFAQ from './components/OutsourceFAQ';
import OutsourceCTA from './components/OutsourceCTA';

export default function OutsourcePage() {
    return (
        <main>
            <OutsourceHero />
            <OutsourceCTA />
            <OutsourceFAQ />
        </main>
    );
}
