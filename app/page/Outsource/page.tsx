import OutsourceHero from './components/OutsourceHero';
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
