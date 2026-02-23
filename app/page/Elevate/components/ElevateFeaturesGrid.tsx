'use client';

import React from 'react';
import Image from 'next/image';
import {
    PlayCircleFilled,
    ReadOutlined, VideoCameraOutlined, QuestionCircleOutlined, TrophyOutlined, GlobalOutlined, DeploymentUnitOutlined,
    BookOutlined, LaptopOutlined, CheckSquareOutlined, FileTextOutlined, TeamOutlined, RiseOutlined,
    NotificationOutlined, MessageOutlined, InteractionOutlined, ShareAltOutlined, CloudOutlined, SafetyOutlined,
    SearchOutlined, SettingOutlined, EyeOutlined, StarOutlined, CalendarOutlined, ClockCircleOutlined,
    IdcardOutlined, ContactsOutlined, SolutionOutlined, CustomerServiceOutlined, AuditOutlined, BarChartOutlined,
    PieChartOutlined, LineChartOutlined, ExportOutlined
} from '@ant-design/icons';

const smallFeatures = [
    { name: 'Video Courses', icon: VideoCameraOutlined, img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop' },
    { name: 'Quizzes', icon: QuestionCircleOutlined, img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop' },
    { name: 'Certificates', icon: TrophyOutlined, img: 'https://images.unsplash.com/photo-1523240715637-89123b7e7351?q=80&w=400&auto=format&fit=crop' },
    { name: 'Multi-language', icon: GlobalOutlined, img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Adaptive Paths', icon: DeploymentUnitOutlined, img: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=400&auto=format&fit=crop' },
    { name: 'Resource Library', icon: BookOutlined, img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400&auto=format&fit=crop' },
    { name: 'Live Webinars', icon: LaptopOutlined, img: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=400&auto=format&fit=crop' },
    { name: 'Assessments', icon: CheckSquareOutlined, img: 'https://images.unsplash.com/photo-1454165833767-0e9ed683792b?q=80&w=400&auto=format&fit=crop' },
    { name: 'E-books', icon: FileTextOutlined, img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&auto=format&fit=crop' },
    { name: 'Social Learning', icon: TeamOutlined, img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop' },
    { name: 'Gamification', icon: RiseOutlined, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop' },
    { name: 'Push Alerts', icon: NotificationOutlined, img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=400&auto=format&fit=crop' },
    { name: 'Feedback', icon: MessageOutlined, img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=400&auto=format&fit=crop' },
    { name: 'Roleplay', icon: InteractionOutlined, img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=400&auto=format&fit=crop' },
    { name: 'Peer Review', icon: ShareAltOutlined, img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&auto=format&fit=crop' },
    { name: 'Cloud Storage', icon: CloudOutlined, img: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=400&auto=format&fit=crop' },
    { name: 'Compliance', icon: SafetyOutlined, img: 'https://images.unsplash.com/photo-1510511459019-5dee9954889c?q=80&w=400&auto=format&fit=crop' },
    { name: 'Content Search', icon: SearchOutlined, img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop' },
    { name: 'LMS Settings', icon: SettingOutlined, img: 'https://images.unsplash.com/photo-1454162853966-4e71580cbd58?q=80&w=400&auto=format&fit=crop' },
    { name: 'Proctoring', icon: EyeOutlined, img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&auto=format&fit=crop' },
    { name: 'Badges', icon: StarOutlined, img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400&auto=format&fit=crop' },
    { name: 'Scheduling', icon: CalendarOutlined, img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=400&auto=format&fit=crop' },
    { name: 'Time Tracking', icon: ClockCircleOutlined, img: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=400&auto=format&fit=crop' },
    { name: 'Skill Passports', icon: IdcardOutlined, img: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=400&auto=format&fit=crop' },
    { name: 'Mentorship', icon: ContactsOutlined, img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop' },
    { name: 'Onboarding', icon: SolutionOutlined, img: 'https://images.unsplash.com/photo-1533750516457-a7f992034fce?q=80&w=400&auto=format&fit=crop' },
    { name: 'Support', icon: CustomerServiceOutlined, img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Audit Logs', icon: AuditOutlined, img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&auto=format&fit=crop' },
    { name: 'Analytics', icon: BarChartOutlined, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop' },
    { name: 'Dashboard', icon: PieChartOutlined, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop' },
    { name: 'Growth Maps', icon: LineChartOutlined, img: 'https://images.unsplash.com/photo-1504868584819-f8eec1843b3d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Data Export', icon: ExportOutlined, img: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=400&auto=format&fit=crop' },
];

export default function ElevateFeaturesGrid() {
    const gridItems = [];
    let smallIndex = 0;
    for (let i = 0; i < 36; i++) {
        if (i === 10) gridItems.push({ type: 'core', coreType: 'courses' });
        else if (i === 11) gridItems.push({ type: 'core', coreType: 'skills' });
        else if (i === 20) gridItems.push({ type: 'core', coreType: 'teams' });
        else if (i === 21) gridItems.push({ type: 'core', coreType: 'insights' });
        else gridItems.push({ type: 'small', feature: smallFeatures[smallIndex++] });
    }

    return (
        <section className="w-full py-24 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight">
                        A Complete Ecosystem for Professional Growth
                    </h2>
                    <p className="text-[#6b7f9e] text-lg font-medium leading-relaxed">
                        Elevate provides all the tools you need to create, deliver, and measure high-impact training programs.
                    </p>
                </div>

                <div className="relative w-full mx-auto pb-10">
                    <div
                        className="relative bg-gray-100 grid grid-cols-4 md:grid-cols-8 gap-[1px] shadow-sm overflow-hidden border border-gray-100 rounded-3xl"
                    >
                        {gridItems.map((item, index) => {
                            if (item.type === 'core') {
                                const isCourses = item.coreType === 'courses';
                                const isSkills = item.coreType === 'skills';
                                const isTeams = item.coreType === 'teams';
                                const isInsights = item.coreType === 'insights';

                                let coreTitle = "";
                                let coreImg = "";
                                if (isCourses) { coreTitle = "Course Authoring"; coreImg = "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop"; }
                                if (isSkills) { coreTitle = "Skill Management"; coreImg = "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=800&auto=format&fit=crop"; }
                                if (isTeams) { coreTitle = "Team Learning"; coreImg = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"; }
                                if (isInsights) { coreTitle = "Data Insights"; coreImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"; }

                                return (
                                    <div key={index} className="col-span-2 row-span-2 hidden md:flex flex-col relative overflow-hidden bg-white group cursor-pointer">
                                        <Image src={coreImg} alt={coreTitle} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                                        <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-300" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                                            <PlayCircleFilled className="text-4xl text-white mb-auto opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100" />
                                            <h3 className="text-xl font-black text-white leading-tight">{coreTitle}</h3>
                                            <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mt-1">Featured Module</p>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <div
                                    key={index}
                                    className="relative bg-white flex flex-col items-center justify-center group cursor-pointer aspect-square overflow-hidden"
                                >
                                    <Image
                                        src={item.feature?.img || ""}
                                        alt={item.feature?.name || "feature"}
                                        fill
                                        className="object-cover opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300" />

                                    <div className="relative z-10 flex flex-col items-center gap-2 p-2">
                                        <PlayCircleFilled className="text-xl text-primary group-hover:text-white transition-colors duration-300 shadow-sm" />
                                        <span className="text-[10px] font-black text-primary/60 group-hover:text-white transition-colors duration-300 text-center uppercase tracking-tighter">
                                            {item.feature?.name}
                                        </span>
                                    </div>

                                    {/* Video Play Overlay for small items */}
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-accent/20">
                                        <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-[3000ms] ease-linear" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
