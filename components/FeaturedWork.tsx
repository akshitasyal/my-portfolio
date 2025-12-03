// components/FeaturedWork.tsx
import React from "react";
import Link from "next/link";


export default function FeaturedWork() {
    return (
        <section id="featured-work"
            className="relative min-h-screen w-full flex items-center justify-between px-6 py-20 max-w-7xl mx-auto"
            aria-labelledby="featured-work-title"
        >
            {/* Left column - big heading + description */}
            <div className="w-full lg:w-1/2 pr-8">
                <h2 id="featured-work-title" className="text-[6.5rem] leading-tight font-extrabold text-white">
                    My<br />Work
                </h2>

                <div className="mt-8 max-w-xl">
                    <p className="font-mono text-lg text-gray-300 leading-8">
                        During my internship at <strong>Innerstep</strong> Designed and developed the complete frontend for Innerstep’s web platform,
                        including responsive UI, dashboard components, and the full chatbot system built
                        to streamline user interactions.
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                        <Link
                            href="https://innerstepjourneys.com"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-medium shadow-md hover:scale-[1.03] transition"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            View Project
                        </Link>
                        </div>
                </div>
            </div>

            {/* Right column - screenshot + arrow + label */}
            <div className="hidden lg:flex flex-col items-center w-1/2 pl-8 relative">
                {/* arrow (decorative) */}
                <svg className="absolute -left-12 top-32 w-36 h-36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 70 C30 10, 70 10, 90 30" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M75 15 L90 30 L70 30" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* featured label */}
                <div className="mb-4 text-left text-sm text-gray-300">Featured Project</div>
                <h3 className="text-2xl font-bold text-white mb-6">Innerstep Web App</h3>

                {/* screenshot container */}
                <div className="w-[520px] h-[320px] rounded-xl overflow-hidden shadow-2xl bg-[#0b0b0d]">
                    {/* put your exported screenshot here: public/projects/innerstep.png */}
                    <img src="/innerstep.png" alt="Innerstep web app screenshot" className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110" />
                </div>
            </div>

            {/* mobile fallback - show image below text on small screens */}
            <div className="lg:hidden mt-8 w-full">
                <div className="w-full rounded-md overflow-hidden shadow-lg">
                    <img src="/innerstep.png" alt="Innerstep web app screenshot" className="w-full h-auto object-cover" />
                </div>
            </div>
        </section>
    );
}
