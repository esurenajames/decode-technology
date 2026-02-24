'use client';

import React from 'react';
import {
    TeamOutlined, MoneyCollectOutlined, RiseOutlined, HeartOutlined,
    ClockCircleOutlined, CalendarOutlined, UserAddOutlined, LoginOutlined,
    LogoutOutlined, GiftOutlined, LaptopOutlined, FieldTimeOutlined,
    ContainerOutlined, NodeIndexOutlined, FileOutlined, AuditOutlined,
    AlertOutlined, SafetyOutlined, QuestionCircleOutlined, AimOutlined,
    IdcardOutlined, ReadOutlined, CarOutlined, HomeOutlined,
    BookOutlined, CrownOutlined, SmileOutlined, ThunderboltOutlined,
    MedicineBoxOutlined, FileDoneOutlined, SecurityScanOutlined, BankOutlined,
    HourglassOutlined, ExportOutlined, DashboardOutlined, GlobalOutlined
} from '@ant-design/icons';

const smallFeatures = [
    { name: 'Attendance', icon: ClockCircleOutlined },
    { name: 'Leave Mgmt', icon: CalendarOutlined },
    { name: 'Recruitment', icon: UserAddOutlined },
    { name: 'Onboarding', icon: LoginOutlined },
    { name: 'Offboarding', icon: LogoutOutlined },
    { name: 'Benefits', icon: GiftOutlined },
    { name: 'Asset Mgmt', icon: LaptopOutlined },
    { name: 'Scheduling', icon: FieldTimeOutlined },
    { name: 'Timesheets', icon: ContainerOutlined },
    { name: 'Org Chart', icon: NodeIndexOutlined },
    { name: 'Documents', icon: FileOutlined },
    { name: 'Expenses', icon: AuditOutlined },
    { name: 'Compliance', icon: AlertOutlined },
    { name: 'Safety', icon: SafetyOutlined },
    { name: 'Surveys', icon: QuestionCircleOutlined },
    { name: 'Objectives', icon: AimOutlined },
    { name: 'Skills', icon: IdcardOutlined },
    { name: 'Policies', icon: ReadOutlined },
    { name: 'Travel', icon: CarOutlined },
    { name: 'Remote Work', icon: HomeOutlined },
    { name: 'Handbook', icon: BookOutlined },
    { name: 'Anniversary', icon: CrownOutlined },
    { name: 'Birthdays', icon: SmileOutlined },
    { name: 'Appreciation', icon: HeartOutlined },
    { name: 'Team Events', icon: ThunderboltOutlined },
    { name: 'Wellness', icon: MedicineBoxOutlined },
    { name: 'Tax Filing', icon: FileDoneOutlined },
    { name: 'Insurance', icon: SecurityScanOutlined },
    { name: 'Loans', icon: BankOutlined },
    { name: 'Overtime', icon: HourglassOutlined },
    { name: 'Exits', icon: ExportOutlined },
    { name: 'Training', icon: DashboardOutlined },
];

export default function EESAppsGrid() {
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
        <section className="w-full py-24 bg-white overflow-hidden relative border-t border-gray-50">
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
                                    <div key={index} className="col-span-2 row-span-2 hidden md:flex flex-col relative overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group/core">
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

                            const Icon = item.feature?.icon as React.ElementType;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer group aspect-square"
                                >
                                    <Icon className="text-2xl text-gray-300 group-hover:text-accent transition-colors duration-300" />
                                    <span className="text-[10px] font-bold text-gray-400 group-hover:text-primary transition-colors duration-300 text-center uppercase tracking-wider">
                                        {item.feature?.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
