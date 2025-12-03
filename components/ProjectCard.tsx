// components/ProjectCard.tsx
import React from "react";
import Link from "next/link";

export type Project = {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string; // path under /public
    href?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group bg-transparent">
            <div className="rounded-md overflow-hidden bg-[#0b0b0d] shadow-[0_6px_30px_rgba(2,6,12,0.6)]">
                {/* thumbnail */}
                <div className="w-full h-44 sm:h-52 md:h-56 lg:h-44 bg-gray-900 relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full block"
                        loading="lazy"
                    />
                </div>

                {/* content */}
                <div className="px-6 py-5">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    {project.subtitle && (
                        <div className="text-sm text-gray-300 mb-3">{project.subtitle}</div>
                    )}
                    <p className="text-sm leading-7 text-gray-300/90">{project.description}</p>

                    <div className="mt-5 flex items-center justify-between">
                        <Link
                            href={project.href ?? "#"}
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

                        <span className="text-xs text-gray-400">Full-stack</span>
                    </div>
                </div>
            </div>
        </article>
    );
}
