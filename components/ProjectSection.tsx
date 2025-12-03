// components/ProjectsSection.tsx
'use client'
import React, { useEffect, useRef, useState } from 'react'
import ProjectCard, { Project } from './ProjectCard' // adjust path if needed
import Link from 'next/link'

const PROJECTS: Project[] = [
  {
    id: 'calm-llama',
    title: 'Calm Llama - AI Chatbot',
    subtitle: 'Wellness booking platform',
    description:
      "A modern web platform that enables users to discover and book premium wellness experiences. Real-time availability, secure payments and instant confirmations.",
    image: '/projects/calm-llama.png',
    href: '/projects/calm-llama',

  },
  {
    id: 'mini-otio',
    title: 'Mini Otio - AI Research Assistant',
    subtitle: 'Intelligent research & summarization',
    description:
      'AI research assistant combining real-time web search with intelligent response generation and structured output formats.',
    image: '/projects/mini-otio.png',
    href: '/projects/mini-otio',

  },
  {
    id: 'ec2-cost',
    title: 'EC2 Cloud Cost Analyzer',
    subtitle: 'AWS cost visibility',
    description:
      'Tool to analyze and visualize AWS EC2 costs. Compare instances, drill into time ranges and export reports.',
    image: '/projects/ec2-cost.png',
    href: '/projects/ec2-cost',

  },
  // add more projects here...
]

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="snap-start relative min-h-screen w-full flex flex-col items-center justify-start py-14"
      aria-labelledby="projects-title"
    >
      <div className="w-full max-w-7xl px-6">

        {/* grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className={`transform transition duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
        {/* View More Projects button */}
        <div className="mt-5 flex items-center justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-between gap-2 px-5 py-3 rounded-full text-white text-[15px]   border border-white/10
    bg-transparent font-medium shadow-md hover:bg-white/10 hover:border-white/25 transition-all duration-200"
          >
            <svg
              className="w-4 h-4 opacity-90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
            View More Projects
          </Link>


        </div>

      </div>
    </section>
  )
}
