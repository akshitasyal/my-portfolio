"use client";
import React from 'react'

export default function HeroPage() {
  const heroArtUrl = "url('/hero-art.png')";
  const cssVars = ({ "--hero-art": heroArtUrl } as React.CSSProperties);

  return (
    <main className="relative h-screen w-screen overflow-hidden"
      style={{
        backgroundColor: "#0b1820",
        background: "radial-gradient(circle at 20% 30%, #10232d 0%, #0a141b 40%, #070d11 75%, #05090d 100%)"
      }}>

      {/* custom cursor at top level */}



      {/* background image */}
      <div className="absolute inset-0 hero-3d-art z-0" style={{ ...cssVars, backgroundSize: 'cover', filter: 'saturate(92%) contrast(0.95)' }} aria-hidden />

      {/* dark vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: [
            'radial-gradient(600px 420px at 36% 44%, rgba(2,6,12,0.75) 0%, rgba(2,6,12,0.55) 30%, rgba(2,6,12,0.18) 55%, transparent 75%)',
            'linear-gradient(to bottom, rgba(3,6,10,0.12), rgba(3,6,10,0.5) 60%)'
          ].join(',')
        }}
      />

      {/* top nav */}
      <header className="absolute inset-x-0 top-6 z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-lg sm:text-2xl font-semibold text-teal-200 nav-mono">Akshita Syal<span className="text-purple-300">._</span></div>
          <nav className="hidden md:flex gap-8 text-sm justify-center text-gray-200/80 nav-mono tracking-widest">
            <a className="hover:text-white font-extrabold interactive">// home</a>
            <a className="hover:text-white font-extrabold interactive">// expertise</a>
            <a className="hover:text-white font-extrabold interactive">// work</a>
            <a className="hover:text-white font-extrabold interactive">// contact</a>
          </nav>
        </div>
      </header>

      {/* hero content */}
      <section className="relative z-20 flex items-center justify-center h-full">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-start text-left relative">

          <div className="max-w-7xl mx-auto px-8 w-full flex flex-col items-center text-center relative z-20">
            <h1 className="h1-display text-[5.5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[9rem] leading-tight text-white font-extrabold drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]" style={{ letterSpacing: '-0.02em' }}>
              Akshita <span className="inline-block">Syal</span>
            </h1>

            <div className="mt-6 inline-block rounded-md px-4 py-2 backdrop-blur-sm"
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.18))', border: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="m-0 text-sm sm:text-base tracking-widest text-white nav-mono">Frontend Engineer with Full-Stack Expertise.</p>
</div>
              <div className="mt-10 flex items-center gap-6 flex-wrap">

                {/* View Projects */}
                <button
                  onClick={() => {
                    const section = document.getElementById("featured-work");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-gray-700 
             hover:bg-gray-800 transition-all duration-200 text-white text-base"
                >
                  View projects
                  <span className="text-xl">→</span>
                </button>


                {/* Download CV */}
                <a
                  href="/Akshita-Syal-CV.pdf"
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

                  {/* LinkedIn */}
                  <a href="https://linkedin.com/in/akshita-syal" target="_blank"
                    className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center 
                  text-white hover:bg-gray-800 transition">
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/akshitasyal" target="_blank"
                    className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center 
                  text-white hover:bg-gray-800 transition">
                    <i className="ri-github-line text-xl"></i>
                  </a>

                  {/* Instagram */}
                  <a href="https://instagram.com" target="_blank"
                    className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center 
                  text-white hover:bg-gray-800 transition">
                    <i className="ri-instagram-line text-xl"></i>
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
              background: "linear-gradient(180deg, rgba(126,227,214,1), rgba(167,139,250,1))",
            }}
          />
        </div>
      </div>

    </main>
  )
}
