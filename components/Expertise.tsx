// components/Expertise.tsx
import React from "react";

export default function Expertise() {
    return (
        <section
            id="expertise"
            className="snap-start relative min-h-[100dvh] w-full flex flex-col items-center justify-start py-20"
            aria-label="Expertise"
            style={{
                backgroundColor: "#0d1a21",
                background: "radial-gradient(circle at 50% 0%, #0f1a22 0%, #0b141b 45%, #080d11 80%, #05090c 100%)"
            }}>
            {/* subtle top fade so this section blends with the hero above */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[160px] pointer-events-none blend-fade-top"
            />

            <div className="w-full max-w-6xl px-6">
                {/* Title */}
                <h2 className="text-center text-6xl sm:text-7xl font-extrabold text-white mb-12">My Expertise</h2>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <article className="border border-gray-400/20 rounded-sm p-8 bg-transparent">
                        <div className="flex items-center gap-4 mb-6">
                            {/* icon */}
                            <div className="flex-none w-12 h-12 rounded-md flex items-center justify-center text-teal-300">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">
                                    <span className="inline-block">Software</span>
                                    <br />
                                    <span className="inline-block">Development</span>
                                </h3>
                                {/* colored underline accent */}
                                <div className="mt-1 h-1 w-20 bg-pink-500/80 rounded-sm" />
                            </div>
                        </div>

                        <div className="pl-2 border-l-2 border-gray-500/20">
                            <p className="text-sm leading-7 text-gray-200/80">
                                Experienced in building clean, scalable software systems using
                                strong OOP, functional programming, and backend engineering principles.

                            </p>
                        </div>
                    </article>

                    {/* Card 2 */}
                    <article className="border border-gray-400/20 rounded-sm p-8 bg-transparent">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-none w-12 h-12 rounded-md flex items-center justify-center text-sky-400">
                                {/* React atom icon */}
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" /></svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">
                                    <span className="inline-block">Frontend Dev</span>
                                    <br />
                                    <span className="inline-block">React, NextJS</span>
                                </h3>
                                <div className="mt-1 h-1 w-20 bg-sky-400/90 rounded-sm" />
                            </div>
                        </div>

                        <div className="pl-2 border-l-2 border-gray-500/20">
                            <p className="text-sm leading-7 text-gray-200/80">
                                Skilled in creating fast, responsive, and intuitive web interfaces
                                using React, Next.js, and modern UI frameworks.
                            </p>
                        </div>
                    </article>

                    {/* Card 3 */}
                    <article className="border border-gray-400/20 rounded-sm p-8 bg-transparent">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-none w-12 h-12 rounded-md flex items-center justify-center text-orange-400">

                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="6" rx="2" />
                                    <rect x="3" y="10.5" width="18" height="6" rx="2" />
                                    <rect x="3" y="18" width="18" height="4" rx="2" />
                                    <circle cx="7" cy="6" r="1" />
                                    <circle cx="7" cy="13" r="1" />
                                </svg>

                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">
                                    <span className="inline-block">Backend </span>
                                    <br />
                                    <span className="inline-block">Node.js, APIs, Databases</span>
                                </h3>
                                <div className="mt-1 h-1 w-20 bg-orange-400/90 rounded-sm" />
                            </div>
                        </div>

                        <div className="pl-2 border-l-2 border-gray-500/20">
                            <p className="text-sm leading-7 text-gray-200/80">
                                Proficient in developing secure APIs, authentication flows,
                                and scalable backend architectures using Node.js, Express, and cloud services.

                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
