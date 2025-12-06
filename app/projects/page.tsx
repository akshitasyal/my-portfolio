// app/projects/page.tsx
import React from "react";
import Link from "next/link";
import ProjectCard, { Project } from "@/components/ProjectCard";

const PROJECTS: Project[] = [
    {
        id: 'ai-resume-analyzer',
        title: 'AI Resume Analyzer',
        subtitle: 'Smart Resume Screening Tool',
        description:
            'An AI-powered web application that analyzes resumes for ATS compatibility, skill matching, and job relevance. Built to help users optimize resumes with real-time feedback, structured insights, and smart recommendations.',
        image: '/ai-resume-analyzer.png',
        href: 'https://airesume-analyzer-eight.vercel.app/',
    },
    {
        id: 'news-portal',
        title: 'News Portal Web App',
        subtitle: 'Live News Aggregation Platform (Demo)',
        description:
            'A responsive news portal demo that displays live-style headlines across categories with search and clean UI.',
        image: '/news-portal.png',
        href: 'https://news-portal-rmgb.vercel.app/',
    },
    {
        id: 'calm-llama',
        title: 'Calm Llama - AI Chatbot',
        subtitle: 'Wellness booking platform',
        description:
            " Worked as a Full Stack Freelance developer and developed a modern web platform that enables users to discover and book premium wellness experiences. Real-time availability, secure payments and instant confirmations.",
        image: '/calm-llama.png',
        href: 'https://calmllama.life',
    },
    {
        id: 'netflix-clone',
        title: 'Netflix Clone',
        subtitle: 'Streaming UI Web App',
        description:
            'A responsive Netflix clone built with ReactJS and Sass, featuring real-time data from APIs and dynamic movie content rendering.',
        image: '/free-netflix-clone.png',
        href: 'https://free-netflix-clone.vercel.app/',

    },
    {
        id: "ecommerce-site",
        title: "Ecommerce / Business Site",
        subtitle: "Corporate website UI",
        description:
            "A modern corporate website with marketing pages, contact flows, and CMS powered content, built for a logistics client.",
        image: "/projects/ecommerce.png",
        href: "https://your-live-site.example/ecommerce",

    },
    {
        id: "project-6",
        title: "Another Showcase Project",
        subtitle: "Utility / Dashboard",
        description:
            "Dashboard style app with charts and analytics, exportable reports and role based access control.",
        image: "/projects/dashboard.png",
        href: "https://your-live-site.example/dashboard",

    },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen text-white"
            style={{
                backgroundColor: "#0b1820",
                background: "radial-gradient(circle at 20% 30%, #10232d 0%, #0a141b 40%, #070d11 75%, #05090d 100%)"
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Breadcrumb + Back Button */}
                <div className="mb-8">

                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-300 flex items-center gap-2">
                        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                        <span className="text-gray-500">›</span>
                        <span className="font-semibold text-white">Projects</span>
                    </nav>

                    {/* Back to Home Button BELOW breadcrumb */}
                    <div className="mt-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-gray-200  hover:bg-white/5 transition-all duration-200 text-sm">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>

                </div>



                {/* header */}
                <header className="text-center mt-6 mb-12">
                    <h1 className="text-5xl sm:text-6xl md:text-5xl font-extrabold">My Projects</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        A collection of projects I've worked on, showcasing my skills in frontend and full-stack development.
                    </p>
                </header>

                {/* projects grid */}
                <section className="mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((p) => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
