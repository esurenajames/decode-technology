import EMPACHero from './components/EMPACHero';
import EMPACProcess from './components/EMPACProcess';
import EMPACFeatures from './components/EMPACFeatures';
import EMPACLearningPossibilities from './components/EMPACLearningPossibilities';
import EMPACCTA from './components/EMPACCTA';
import EMPACFAQ from './components/EMPACFAQ';

export default function EMPACPage() {
    return (
        <main>
            <EMPACHero />
            <EMPACProcess />
            <EMPACFeatures />
            <EMPACCTA />
            <EMPACLearningPossibilities />
            <EMPACFAQ />
        </main>
    );
}
