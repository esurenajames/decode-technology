import Image from 'next/image';

// Import logos
import BCG from '../../../assets/BCG-removebg-preview.png';
import C3 from '../../../assets/C3-removebg-preview.png';
import KLL1 from '../../../assets/KLL1-removebg-preview.png';
import LSC from '../../../assets/LSC-removebg-preview.png';
import PLX from '../../../assets/PLX-removebg-preview.png';
import PVA from '../../../assets/PVA-removebg-preview.png';
import RPDOTRCAB from '../../../assets/RP-DOTRCAB-removebg-preview.png';
import CRK from '../../../assets/crk-removebg-preview.png';
import EDAMAMA from '../../../assets/edamama-removebg-preview.png';
import GOLDPLAN from '../../../assets/goldplan-removebg-preview.png';
import JINZAI from '../../../assets/jinzai-copy-removebg-preview.png';
import SPROBE from '../../../assets/sprobe-removebg-preview.png';

const HEADLINE_LOGOS = [
    { name: 'BCG', src: BCG },
    { name: 'C3', src: C3 },
    { name: 'KLL1', src: KLL1 },
    { name: 'LSC', src: LSC },
    { name: 'PLX', src: PLX },
    { name: 'PVA', src: PVA },
    { name: 'RP-DOTRCAB', src: RPDOTRCAB },
    { name: 'CRK', src: CRK },
    { name: 'EDAMAMA', src: EDAMAMA },
    { name: 'GOLDPLAN', src: GOLDPLAN },
    { name: 'JINZAI', src: JINZAI },
    { name: 'SPROBE', src: SPROBE },
];

export default function TrustedBy() {
    return (
        <section className="pb-12 bg-gray-50">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-lg font-bold mb-12 uppercase tracking-widest">
                    Trusted by leading companies worldwide
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-center">
                    {HEADLINE_LOGOS.map((logo) => (
                        <div
                            key={logo.name}
                            className="relative w-full h-16 transition-all duration-500 hover:scale-105"
                        >
                            <div className="absolute inset-0 w-full h-full flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer">
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} logo`}
                                    className="object-contain max-h-12 w-auto"
                                    sizes="(max-width: 768px) 50vw, 20vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
