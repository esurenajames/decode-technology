'use client';

import BlogPostHero from './components/BlogPostHero';
import BlogPostContent from './components/BlogPostContent';
import RelatedPosts from './components/RelatedPosts';

export default function BlogPost() {
    return (
        <article className="bg-white min-h-screen pb-0">
            <BlogPostHero />
            <BlogPostContent />
            <RelatedPosts />

        </article>
    );
}
