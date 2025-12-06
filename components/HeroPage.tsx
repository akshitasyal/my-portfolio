"use client";

import React, { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "// home", index: "01" },
  { id: "expertise", label: "// expertise", index: "02" },
  { id: "featured-work", label: "// work", index: "03" },
  { id: "contact", label: "// contact", index: "05" },
];

export default function HeroPage() {
  const heroArtUrl = "url('/hero-art.png')";
  const cssVars = { "--hero-art": heroArtUrl } as React.CSSProperties;

  const [onHero, setOnHero] = useState(true);

  // track whether we are on the hero section to toggle the left name
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // if at least 60% of hero is visible, treat as "on hero"
        setOnHero(entry.isIntersecting && entry.intersectionRatio > 0.6);
      },
      { threshold: [0.0, 0.6, 1.0] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  return (
    <main
      id="home"
      className="snap-start relative min-h-screen w-screen overflow-hidden"
      style={{
        backgroundColor: "#0b1820",
        background:
          "radial-gradient(circle at 20% 30%, #10232d 0%, #0a141b 40%, #070d11 75%, #05090d 100%)",
      }}
    >
      {/* background image */}
      <div
        className="absolute inset-0 hero-3d-art z-0"
        style={{
          ...cssVars,
          backgroundSize: "cover",
          filter: "saturate(92%) contrast(0.95)",
        }}
        aria-hidden
      />

      {/* dark vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: [
            "radial-gradient(600px 420px at 36% 44%, rgba(2,6,12,0.75) 0%, rgba(2,6,12,0.55) 30%, rgba(2,6,12,0.18) 55%, transparent 75%)",
            "linear-gradient(to bottom, rgba(3,6,10,0.12), rgba(3,6,10,0.5) 60%)",
          ].join(","),
        }}
      />

      {/* top nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-6 pt-6 flex items-start justify-between">
          {/* left name — visible only on hero */}
          <div
            className={`
              nav-mono text-teal-200 text-xl sm:text-2xl font-semibold
              transition-all duration-300
              ${onHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
            `}
          >
            Akshita Syal<span className="text-purple-300">._</span>
          </div>

          {/* centered numbered nav - always visible */}
          <div className="flex flex-col items-center gap-1 mx-auto">
            {/* numbers row */}


            {/* labels row */}
            <nav className="flex gap-6 sm:gap-8 text-xs sm:text-sm text-gray-200/85 nav-mono tracking-widest">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-white font-medium interactive"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* right spacer so nav stays centered */}
          <div className="w-[120px] sm:w-[160px]" />
        </div>
      </header>

      {/* hero content */}
      <section className="relative z-20 flex items-center justify-center h-full">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-start text-left relative">
          <div className="max-w-7xl mx-auto px-8 w-full flex flex-col items-center text-center relative z-20">
            <h1
              className="h1-display text-[5.5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[9rem] leading-tight text-white font-extrabold drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Akshita <span className="inline-block">Syal</span>
            </h1>

            <div
              className="mt-6 inline-block rounded-md px-4 py-2 backdrop-blur-sm"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.18))",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <p className="m-0 text-sm sm:text-base tracking-widest text-white nav-mono">
                Frontend Engineer with Full-Stack Expertise.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6 flex-wrap">
              {/* View Projects */}
              <button
                onClick={() => scrollToSection("featured-work")}
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-gray-700 
             hover:bg-gray-800 transition-all duration-200 text-white text-base"
              >
                View projects
                <span className="text-xl">→</span>
              </button>


              {/* Download CV */}
              <a
                href="/Akshita Syal CV.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-gray-700 
                           hover:bg-gray-800 transition-all duration-200 text-white text-base"
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-4 ml-2">
                <a
                  href="https://www.linkedin.com/in/akshita-syal-b2b489267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center 
             text-white hover:bg-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1s2.5 1.12 2.5 2.5zM0 8.98h5V24H0V8.98zM7.98 8.98h4.78v2.05h.07c.66-1.25 2.27-2.56 4.67-2.56 5 0 5.92 3.29 5.92 7.56V24h-5v-6.8c0-1.62-.03-3.71-2.26-3.71-2.27 0-2.62 1.77-2.62 3.6V24h-5V8.98z" />
                  </svg>
                </a>



              </div>
            </div>
          </div>
        </div>
      </section>

      {/* scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
        <div className="scroll-indicator">
          <div
            className="scroll-dot accent-pulse"
            style={{
              background:
                "linear-gradient(180deg, rgba(126,227,214,1), rgba(167,139,250,1))",
            }}
          />
        </div>
      </div>
    </main>
  );
}
