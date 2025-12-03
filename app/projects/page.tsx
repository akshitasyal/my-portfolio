// app/projects/page.tsx
import React from "react";
import Link from "next/link";
import ProjectCard, { Project } from "@/components/ProjectCard";

const PROJECTS: Project[] = [
    {
        id: "calm-llama",
        title: "Calm Llama - AI Chatbot",
        subtitle: "Wellness booking platform",
        description:
            "A modern web platform that enables users to discover and book premium wellness experiences. Real-time availability, secure payments and instant confirmations. Built as a full-stack solution.",
        image: "/projects/calm-llama.png",
        href: "/projects/calm-llama",
    },
    {
        id: "mini-otio",
        title: "Mini Otio - AI Research Assistant",
        subtitle: "Intelligent research & summarization",
        description:
            "AI-powered research assistant combining web search and intelligent response generation. Produces structured answers, step-by-step guides, and multiple output formats.",
        image: "/projects/mini-otio.png",
        href: "/projects/mini-otio",
    },
    {
        id: "ec2-cost",
        title: "EC2 Cloud Cost Analyzer",
        subtitle: "AWS cost visibility",
        description:
            "Tool to analyze and visualize AWS EC2 costs. Compare instances, drill into time ranges and export reports. Designed for cloud finance & ops teams.",
        image: "/projects/ec2-cost.png",
        href: "/projects/ec2-cost",
    },
    {
        id: "oias",
        title: "Online Interview Assessment System (OIAS)",
        subtitle: "Online interview & assessment",
        description:
            "A fully functional Online Interview Assessment System for Students and Professionals enabling real-time interviews, automated assessments, and secure communication.",
        image: "/projects/oias.png",
        href: "https://your-live-site.example/oias",

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
