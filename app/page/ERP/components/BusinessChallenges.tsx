'use client';

import {
    AppstoreAddOutlined,
    PieChartOutlined,
    AimOutlined,
    WalletOutlined,
    PlusOutlined,
    CloudServerOutlined,
    CheckCircleFilled
} from '@ant-design/icons';

const ProcessCard = ({
    title,
    description,
    icon,
    className = ""
}: {
    title: string;
    description?: string;
    icon: React.ReactNode;
    className?: string;
}) => (
    <div className={`relative p-8 rounded-3xl bg-white border border-[#E1EAF5] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden flex flex-col justify-between h-full min-h-[220px] ${className}`}>

        {/* Subtle Gradient - Light Blue */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />

        <div className="relative z-10 w-full mb-4">
            <div className="mb-6 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#2F7FF5] group-hover:bg-[#2F7FF5] group-hover:text-white transition-colors duration-300">
                {icon}
            </div>

            <h3 className="text-xl font-bold text-[#19253b] mb-2 leading-tight pr-8">
                {title}
            </h3>
            {description && (
                <p className="text-[#6b7f9e] text-sm leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    </div>
);

export default function BusinessChallenges() {
    return (
        <section className="w-full py-32 bg-gray-100">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#19253b] leading-tight tracking-tight max-w-3xl">
                        Managing Your Growing Business Can Be Difficult.
                    </h2>
                    <p className="text-[#6b7f9e] text-lg font-medium max-w-2xl leading-relaxed">
                        As your business grows, disconnected systems and manual processes make everyday operations harder to manage.
                    </p>
                </div>

                {/* Bento Grid layout matching the reference image: Left Big Card + Right 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Large Left Card - Light Blue Theme */}
                    <div className="md:col-span-1 rounded-3xl bg-primary border border-blue-100 relative p-8 min-h-[500px] flex flex-col group overflow-hidden">

                        <div className="mb-8 relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                                Integration & Centralization
                            </h3>
                            <p className="text-white text-sm leading-relaxed mb-6">
                                Consolidate data and processes from various departments into a single unified platform.
                            </p>
                        </div>

                        {/* Centralized Mockup Graphic */}
                        <div className="bg-white rounded-xl shadow-lg border border-blue-50 p-5 relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2 mt-auto">
                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Modules</span>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-[#2F7FF5]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#73C4F1]"></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {[
                                    "Finance & Accounting",
                                    "Supply Chain",
                                    "HR Management",
                                    "CRM & Sales"
                                ].map((mod, i) => (
                                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#2F7FF5]" />
                                            <span className="text-sm font-medium text-[#19253b]">{mod}</span>
                                        </div>
                                        {i % 2 === 0 && <CheckCircleFilled className="text-[#2F7FF5] text-xs" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    </div>

                    {/* Right Grid - 4 Cards */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <ProcessCard
                            title="Data Powered Decision Making"
                            description="Real-time insights help chart a course to success."
                            icon={<PieChartOutlined className="text-2xl" />}
                        />

                        <ProcessCard
                            title="Precise Solution for Needs"
                            description="Tools designed to fit your unique business process."
                            icon={<AimOutlined className="text-2xl" />}
                        />

                        <ProcessCard
                            title="Cost Efficiency & Saving"
                            description="Identify cost-saving opportunities and optimize resources."
                            icon={<WalletOutlined className="text-2xl" />}
                        />

                        <ProcessCard
                            title="Scalable Infrastructure"
                            description="Grow without limits using our flexible architecture."
                            icon={<CloudServerOutlined className="text-2xl" />}
                        />

                    </div>
                </div>

            </div>
        </section>
    );
}
