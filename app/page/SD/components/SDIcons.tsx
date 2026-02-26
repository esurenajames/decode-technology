import StackIcon from "tech-stack-icons";

const ROW_1 = [
    { name: "js", label: "JavaScript" },
    { name: "nodejs", label: "Node.js" },
    { name: "aws", label: "AWS" },
    { name: "mongodb", label: "MongoDB" },
    { name: "go", label: "Go" },
    { name: "rust", label: "Rust" },
    { name: "php", label: "PHP" },
    { name: "react", label: "React" },
    { name: "react", label: "React Native" },
    { name: "mysql", label: "MySQL" },
];

const ROW_2 = [
    { name: "vuejs", label: "Vue" },
    { name: "laravel", label: "Laravel" },
    { name: "firebase", label: "Firebase" },
    { name: "flutter", label: "Flutter" },
    { name: "codeigniter", label: "CodeIgniter" },
    { name: "typescript", label: "TypeScript" },
    { name: "python", label: "Python" },
    { name: "docker", label: "Docker" },
    { name: "nextjs", label: "Next.js" },
];

export default function SDIcons() {
    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="max-w-full mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                        Technologies We Work With
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        Quickly build scalable solutions with our expertise across modern tech stacks
                    </p>
                </div>

                {/* Grid Wrapper with blurred edges */}
                <div className="relative w-full mx-auto">

                    {/* Left Blur Overlay */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-white/20 backdrop-blur-[1px] z-20 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent)', maskImage: 'linear-gradient(to right, black 20%, transparent)' }} />

                    {/* Right Blur Overlay */}
                    <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-white/20 backdrop-blur-[1px] z-20 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent)', maskImage: 'linear-gradient(to left, black 20%, transparent)' }} />

                    <div className="flex flex-col gap-4" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>

                        {/* Row 1 */}
                        <div className="flex justify-center gap-4 flex-wrap">
                            {ROW_1.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 bg-gray-50 hover:bg-white hover:shadow-md rounded-lg px-5 py-3 transition-all duration-200 group"
                                >
                                    <div className="w-7 h-7 shrink-0">
                                        <StackIcon name={tech.name as any} />
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors whitespace-nowrap">
                                        {tech.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Row 2 */}
                        <div className="flex justify-center gap-4 flex-wrap">
                            {ROW_2.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 bg-gray-50 hover:bg-white hover:shadow-md rounded-lg px-5 py-3 transition-all duration-200 group"
                                >
                                    <div className="w-7 h-7 shrink-0">
                                        <StackIcon name={tech.name as any} />
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors whitespace-nowrap">
                                        {tech.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
