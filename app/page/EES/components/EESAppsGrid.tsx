'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
    TeamOutlined, MoneyCollectOutlined, RiseOutlined, HeartOutlined,
    ClockCircleOutlined, CalendarOutlined, UserAddOutlined, LoginOutlined,
    LogoutOutlined, GiftOutlined, LaptopOutlined, FieldTimeOutlined,
    ContainerOutlined, NodeIndexOutlined, FileOutlined, AuditOutlined,
    AlertOutlined, SafetyOutlined, QuestionCircleOutlined, AimOutlined,
    IdcardOutlined, ReadOutlined, CarOutlined, HomeOutlined,
    BookOutlined, CrownOutlined, SmileOutlined, ThunderboltOutlined,
    MedicineBoxOutlined, FileDoneOutlined, SecurityScanOutlined, BankOutlined,
    HourglassOutlined, ExportOutlined, DashboardOutlined, GlobalOutlined,
    CloseOutlined
} from '@ant-design/icons';

const smallFeatures = [
    { name: 'Attendance', icon: ClockCircleOutlined, description: 'Track employee attendance in real time with biometric integration, geo-fencing, shift management, and automated overtime calculations for accurate records.' },
    { name: 'Leave Mgmt', icon: CalendarOutlined, description: 'Simplify leave requests and approvals with configurable leave policies, holiday calendars, carry-forward rules, and automatic balance calculations.' },
    { name: 'Recruitment', icon: UserAddOutlined, description: 'Attract and hire top talent with job posting management, applicant tracking, interview scheduling, candidate scoring, and offer letter automation.' },
    { name: 'Onboarding', icon: LoginOutlined, description: 'Welcome new hires with structured onboarding workflows, document collection, task checklists, buddy assignments, and first-day orientation scheduling.' },
    { name: 'Offboarding', icon: LogoutOutlined, description: 'Manage employee exits professionally with clearance workflows, knowledge transfer plans, exit interviews, and final settlement processing.' },
    { name: 'Benefits', icon: GiftOutlined, description: 'Administer employee benefits including health plans, retirement contributions, flexible spending accounts, and voluntary benefit enrollments in one place.' },
    { name: 'Asset Mgmt', icon: LaptopOutlined, description: 'Track company assets assigned to employees—laptops, phones, access cards—with issuance records, maintenance logs, and return tracking.' },
    { name: 'Scheduling', icon: FieldTimeOutlined, description: 'Create and manage employee work schedules with shift planning, rotation patterns, availability management, and conflict detection.' },
    { name: 'Timesheets', icon: ContainerOutlined, description: 'Log and track work hours with project-based timesheets, approval workflows, and seamless integration with payroll and billing systems.' },
    { name: 'Org Chart', icon: NodeIndexOutlined, description: 'Visualize your organizational structure with interactive org charts showing reporting lines, departments, teams, and role hierarchies.' },
    { name: 'Documents', icon: FileOutlined, description: 'Centralize employee documents with secure storage, version control, e-signatures, expiration alerts, and category-based organization.' },
    { name: 'Expenses', icon: AuditOutlined, description: 'Streamline expense reporting with receipt capture, category tagging, policy enforcement, multi-level approvals, and reimbursement tracking.' },
    { name: 'Compliance', icon: AlertOutlined, description: 'Stay compliant with labor laws and regulations through automated alerting, policy enforcement, audit trails, and regulatory change tracking.' },
    { name: 'Safety', icon: SafetyOutlined, description: 'Ensure workplace safety with incident reporting, hazard tracking, safety training records, and compliance with occupational health standards.' },
    { name: 'Surveys', icon: QuestionCircleOutlined, description: 'Gather employee feedback through customizable surveys, pulse checks, engagement scoring, anonymous responses, and actionable insights.' },
    { name: 'Objectives', icon: AimOutlined, description: 'Set and track individual and team objectives with OKR frameworks, progress monitoring, alignment tracking, and quarterly review cycles.' },
    { name: 'Skills', icon: IdcardOutlined, description: 'Map and manage employee skills and competencies with proficiency levels, gap analysis, development recommendations, and succession planning.' },
    { name: 'Policies', icon: ReadOutlined, description: 'Create, distribute, and track acknowledgment of company policies with version management, digital sign-off, and compliance reporting.' },
    { name: 'Travel', icon: CarOutlined, description: 'Manage business travel requests with trip planning, booking integration, itinerary management, per diem tracking, and expense pre-approval.' },
    { name: 'Remote Work', icon: HomeOutlined, description: 'Support remote and hybrid work with check-in tracking, productivity monitoring, virtual collaboration tools, and remote work policy management.' },
    { name: 'Handbook', icon: BookOutlined, description: 'Maintain a centralized digital employee handbook with company policies, procedures, culture guidelines, and frequently asked questions.' },
    { name: 'Anniversary', icon: CrownOutlined, description: 'Celebrate work anniversaries with automated reminders, milestone recognition, reward distribution, and personalized messages to employees.' },
    { name: 'Birthdays', icon: SmileOutlined, description: 'Never miss an employee birthday with automated greetings, team notifications, celebration coordination, and optional gift management.' },
    { name: 'Appreciation', icon: HeartOutlined, description: 'Foster a culture of recognition with peer-to-peer appreciation, badge systems, reward points, public shout-outs, and recognition analytics.' },
    { name: 'Team Events', icon: ThunderboltOutlined, description: 'Plan and manage team activities with event scheduling, RSVP tracking, budget management, venue coordination, and post-event feedback.' },
    { name: 'Wellness', icon: MedicineBoxOutlined, description: 'Promote employee wellness with health programs, mental health resources, fitness challenges, wellness tracking, and well-being assessments.' },
    { name: 'Tax Filing', icon: FileDoneOutlined, description: 'Simplify tax compliance with automated tax form generation, filing assistance, year-end summaries, and statutory deduction management.' },
    { name: 'Insurance', icon: SecurityScanOutlined, description: 'Manage employee insurance plans with enrollment workflows, coverage details, claim tracking, dependent management, and renewal notifications.' },
    { name: 'Loans', icon: BankOutlined, description: 'Administer employee loan programs with application workflows, EMI calculations, payroll deduction integration, and outstanding balance tracking.' },
    { name: 'Overtime', icon: HourglassOutlined, description: 'Track and manage overtime hours with policy-based calculations, approval workflows, comp-off options, and integration with payroll processing.' },
    { name: 'Exits', icon: ExportOutlined, description: 'Handle employee separations smoothly with resignation workflows, notice period tracking, final settlements, and experience letter generation.' },
    { name: 'Training', icon: DashboardOutlined, description: 'Develop your workforce with course management, learning paths, certification tracking, training calendar, and skill development analytics.' },
];

const coreFeatures = [
    { key: 'profiles', name: 'Employee Central', icon: TeamOutlined, color: 'text-blue-500', description: 'A centralized employee management hub that stores all personnel data, organizational profiles, employment history, and personal details—providing a single source of truth for your entire workforce.' },
    { key: 'payroll', name: 'Payroll & Benefits', icon: MoneyCollectOutlined, color: 'text-emerald-500', description: 'End-to-end payroll processing with automated salary calculations, tax deductions, statutory compliance, multi-currency support, and comprehensive benefits administration for your team.' },
    { key: 'performance', name: 'Performance Hub', icon: RiseOutlined, color: 'text-amber-500', description: 'Drive employee growth with goal setting, performance reviews, 360-degree feedback, competency mapping, development plans, and data-driven insights to maximize team potential.' },
    { key: 'engagement', name: 'Culture & Engagement', icon: HeartOutlined, color: 'text-rose-500', description: 'Build a thriving workplace culture with recognition programs, engagement surveys, pulse checks, social feeds, team celebrations, and actionable insights to boost employee satisfaction.' },
];

interface SelectedFeature {
    name: string;
    icon: React.ElementType;
    description: string;
    color?: string;
}

export default function EESAppsGrid() {
    const [selectedFeature, setSelectedFeature] = useState<SelectedFeature | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const closeDialog = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => setSelectedFeature(null), 300);
    }, []);

    // Close on scroll
    useEffect(() => {
        if (!selectedFeature) return;

        const handleScroll = () => {
            closeDialog();
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [selectedFeature, closeDialog]);

    const handleFeatureClick = (feature: SelectedFeature) => {
        if (selectedFeature?.name === feature.name && isVisible) {
            closeDialog();
            return;
        }
        setSelectedFeature(feature);
        requestAnimationFrame(() => {
            setIsVisible(true);
        });
    };

    const handleCoreClick = (coreType: string) => {
        const core = coreFeatures.find(c => c.key === coreType);
        if (core) {
            handleFeatureClick({
                name: core.name,
                icon: core.icon,
                description: core.description,
                color: core.color,
            });
        }
    };

    const gridItems = [];
    let smallIndex = 0;
    for (let i = 0; i < 36; i++) {
        if (i === 10) gridItems.push({ type: 'core', coreType: 'profiles' });
        else if (i === 11) gridItems.push({ type: 'core', coreType: 'payroll' });
        else if (i === 20) gridItems.push({ type: 'core', coreType: 'performance' });
        else if (i === 21) gridItems.push({ type: 'core', coreType: 'engagement' });
        else gridItems.push({ type: 'small', feature: smallFeatures[smallIndex++] });
    }

    return (
        <section ref={sectionRef} className="w-full py-24 bg-white overflow-hidden relative border-t border-gray-50">
            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                        A Complete Digital Ecosystem for Your People
                    </h2>
                    <p className="text-[#6b7f9e] text-lg leading-relaxed">
                        Beyond basic HR, EES offers a modular suite of applications designed to enhance every touchpoint of the employee journey. Scalable, integrated, and ready to go.
                    </p>
                </div>

                <div className="relative w-full mx-auto pb-10">
                    {/* Left & Right Blurs */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-white/20 backdrop-blur-[1px] z-20 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent)', maskImage: 'linear-gradient(to right, black 20%, transparent)' }} />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-white/20 backdrop-blur-[1px] z-20 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent)', maskImage: 'linear-gradient(to left, black 20%, transparent)' }} />

                    <div
                        className="relative bg-[#f5f7fa] grid grid-cols-4 md:grid-cols-8 gap-[1px] shadow-sm overflow-hidden border border-[#f5f7fa]"
                        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                    >
                        {gridItems.map((item, index) => {
                            if (item.type === 'core') {
                                const isProfiles = item.coreType === 'profiles';
                                const isPayroll = item.coreType === 'payroll';
                                const isPerformance = item.coreType === 'performance';
                                const isEngagement = item.coreType === 'engagement';

                                return (
                                    <div key={index} className="col-span-2 row-span-2 hidden md:flex flex-col relative overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group/core cursor-pointer" onClick={() => handleCoreClick(item.coreType!)}>
                                        {/* Background Decor */}
                                        <div className={`absolute inset-0 bg-gradient-to-br opacity-5 pointer-events-none ${isProfiles ? 'from-blue-500' :
                                            isPayroll ? 'from-emerald-500' :
                                                isPerformance ? 'from-amber-500' : 'from-rose-500'
                                            }`} />

                                        {/* Mockup area */}
                                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 space-y-3 opacity-90 transition-transform duration-500 group-hover/core:-translate-y-2">
                                            {isProfiles && (
                                                <div className="w-full bg-white rounded-lg shadow-sm border border-blue-100 p-3 flex flex-col items-center">
                                                    <div className="w-12 h-12 rounded-full bg-blue-50 mb-3" />
                                                    <div className="w-24 h-2 bg-blue-100 rounded mb-2" />
                                                    <div className="w-16 h-1.5 bg-gray-100 rounded" />
                                                </div>
                                            )}
                                            {isPayroll && (
                                                <div className="w-full bg-white rounded-lg shadow-sm border border-emerald-100 p-3">
                                                    <div className="flex justify-between mb-3">
                                                        <div className="w-10 h-3 bg-emerald-50 rounded" />
                                                        <div className="w-12 h-3 bg-emerald-100 rounded" />
                                                    </div>
                                                    <div className="w-full h-8 bg-emerald-50/50 rounded flex items-center px-2">
                                                        <div className="w-20 h-2 bg-emerald-200 rounded" />
                                                    </div>
                                                </div>
                                            )}
                                            {isPerformance && (
                                                <div className="w-full bg-white rounded-lg shadow-sm border border-amber-100 p-3 flex justify-around items-end h-20 gap-1.5">
                                                    <div className="w-3 bg-amber-100 h-[30%] rounded-t" />
                                                    <div className="w-3 bg-amber-200 h-[60%] rounded-t" />
                                                    <div className="w-3 bg-amber-300 h-[45%] rounded-t" />
                                                    <div className="w-3 bg-amber-400 h-[85%] rounded-t" />
                                                </div>
                                            )}
                                            {isEngagement && (
                                                <div className="w-full bg-white rounded-lg shadow-sm border border-rose-100 p-3 flex flex-col gap-2">
                                                    <div className="flex gap-2">
                                                        <div className="w-4 h-4 rounded-full bg-rose-200" />
                                                        <div className="w-20 h-2 bg-rose-50 rounded mt-1" />
                                                    </div>
                                                    <div className="w-full h-6 bg-rose-50 rounded-full flex items-center px-2">
                                                        <HeartOutlined className="text-rose-400 text-xs" />
                                                        <div className="w-full ml-2 h-1 bg-rose-200 rounded-full overflow-hidden">
                                                            <div className="w-3/4 h-full bg-rose-500" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-center gap-2 mt-auto pb-8 relative z-10 px-4">
                                            {isProfiles && <TeamOutlined className="text-2xl text-blue-500" />}
                                            {isPayroll && <MoneyCollectOutlined className="text-2xl text-emerald-500" />}
                                            {isPerformance && <RiseOutlined className="text-2xl text-amber-500" />}
                                            {isEngagement && <HeartOutlined className="text-2xl text-rose-500" />}
                                            <span className="text-lg font-bold text-primary leading-tight">
                                                {isProfiles ? 'Employee Central' :
                                                    isPayroll ? 'Payroll & Benefits' :
                                                        isPerformance ? 'Performance Hub' : 'Culture & Engagement'}
                                            </span>
                                        </div>
                                    </div>
                                );
                            }

                            const feature = item.feature!;
                            const Icon = feature.icon as React.ElementType;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer group aspect-square"
                                    onClick={() => handleFeatureClick({
                                        name: feature.name,
                                        icon: feature.icon,
                                        description: feature.description,
                                        color: 'text-accent',
                                    })}
                                >
                                    <Icon className="text-2xl text-gray-300 group-hover:text-accent transition-colors duration-300" />
                                    <span className="text-[10px] font-bold text-gray-400 group-hover:text-primary transition-colors duration-300 text-center uppercase tracking-wider">
                                        {feature.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Dialog / Sheet */}
            {selectedFeature && (() => {
                const DialogIcon = selectedFeature.icon;
                return (
                    <div
                        className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
                        style={{ perspective: '800px' }}
                    >
                        <div
                            className="pointer-events-auto w-full max-w-2xl mx-4 mb-6 rounded-2xl bg-white border border-gray-200 shadow-[0_-8px_40px_rgba(0,0,0,0.12)] overflow-hidden"
                            style={{
                                transform: isVisible
                                    ? 'translateY(0) scale(1)'
                                    : 'translateY(100%) scale(0.95)',
                                opacity: isVisible ? 1 : 0,
                                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
                            }}
                        >
                            {/* Accent bar */}
                            <div className="h-1 w-full bg-gradient-to-r from-accent via-emerald-400 to-accent" />

                            <div className="p-5 md:p-6">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center">
                                        <DialogIcon className={`text-2xl ${selectedFeature.color || 'text-accent'}`} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-bold text-[#19253b] mb-1.5 leading-tight">
                                            {selectedFeature.name}
                                        </h3>
                                        <p className="text-sm text-[#6b7f9e] leading-relaxed">
                                            {selectedFeature.description}
                                        </p>
                                    </div>

                                    {/* Close button */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeDialog();
                                        }}
                                        className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200"
                                        aria-label="Close"
                                    >
                                        <CloseOutlined className="text-sm" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })()}
        </section>
    );
}

