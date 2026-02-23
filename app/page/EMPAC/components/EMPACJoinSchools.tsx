import Image from 'next/image';

import ACM from '../../../assets/ACM-removebg-preview.png';
import AMS from '../../../assets/AMS-removebg-preview.png';
import ASG2 from '../../../assets/ASG2-removebg-preview.png';
import BANDWELL from '../../../assets/BANDWELL-removebg-preview.png';
import LSC from '../../../assets/LSC-removebg-preview.png';
import CRK from '../../../assets/crk-removebg-preview.png';

const SCHOOL_LOGOS = [
    { name: 'ACM', src: ACM },
    { name: 'AMS', src: AMS },
    { name: 'ASG2', src: ASG2 },
    { name: 'BANDWELL', src: BANDWELL },
    { name: 'LSC', src: LSC },
    { name: 'CRK', src: CRK },
];

export default function EMPACJoinSchools() {
    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-sm md:text-base font-bold mb-10 text-gray-400 uppercase tracking-[0.2em]">
                    Join 100+ schools worldwide
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-center">
                    {SCHOOL_LOGOS.map((logo) => (
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
