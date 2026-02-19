'use client';

import CaseStudyHero from './components/CaseStudyHero';
import CaseStudyContent from './components/CaseStudyContent';
import RelatedCaseStudies from './components/RelatedCaseStudies';

export default function CaseStudyPost() {
    return (
        <article className="bg-white min-h-screen pb-0">
            {/* Header / Hero */}
            <CaseStudyHero />

            {/* Main Content Layout */}
            <CaseStudyContent />

            {/* "More Case Studies" Bottom Section */}
            <RelatedCaseStudies />

        </article>
    );
}
