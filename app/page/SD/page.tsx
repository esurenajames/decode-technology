import SDHero from './components/SDHero';
import SDProcess from './components/SDProcess';
import SDCTA from './components/SDCTA';
import SDFAQ from './components/SDFAQ';
import SDIcons from './components/SDIcons';
import SDServices from './components/SDServices';

export default function SDPage() {
    return (
        <>
            <SDHero />
            <SDServices />
            <SDProcess />
            <SDIcons />
            <SDCTA />
            <SDFAQ />
        </>
    );
}
