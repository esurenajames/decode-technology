
import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';
import blogHeader from '../assets/blog-header.jpg';
import imgBlog1 from '../../Landing/assets/blog1.png';

export default function BlogHero() {
    return (
        <section className="relative w-full pb-20">
            {/* Background Top Half */}
            <div className="absolute top-0 left-0 w-full h-[65%] z-0 overflow-hidden">
                <Image
                    src={blogHeader}
                    alt="Office Background"
                    fill
                    className="object-cover mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-primary/90" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">

                {/* Header Text */}
                <div className="text-center text-white mb-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">
                        Blog
                    </h1>
                    <p className="text-lg text-gray-300 tracking-tight">
                        Explore expert-driven articles from your trusted IT solutions provider and technology partner.
                        From ERP and HRIS guides to tax compliance updates and AI innovations.
                    </p>
                </div>

                {/* Featured Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100  flex flex-col md:flex-row min-h-[400px]">
                    {/* Image Side */}
                    <div className="relative w-full md:w-3xl md:min-h-full min-h-[300px]">
                        <Image
                            src={imgBlog1}
                            alt="Featured Blog Post"
                            fill
                            className="object-fit"
                            placeholder="blur"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start ">
                        <div className="flex items-center gap-3 text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                            <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">Customer Feedback</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>Jan 08, 2025</span>
                        </div>

                        <h2 className="text-2xl font-bold text-primary leading-tight mb-6">
                            10 Best Nolt.io Alternatives & Competitors for Feedback Management Tool
                        </h2>

                        <p className="text-gray-500 text-base leading-relaxed mb-8">
                            Explore 10 top Nolt alternatives: Supahub, Canny.io, Savio, FeatureOS, Productboard, Aha!, Upvoty, Fider, Feedbear, and Sleekplan.
                        </p>

                        <button className="text-accent font-bold text-base flex items-center gap-2 group hover:text-accent-light transition-colors">
                            Read Article
                            <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
