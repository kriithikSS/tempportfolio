'use client';

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import PhoneModel from "@/components/sub/phone-model";
import { Typewriter } from 'react-simple-typewriter';
import YouTube3DModel from "@/components/sub/YouTube3DModel";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 pointer-events-none" />

      <h1 className="text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 relative z-10">
        My Projects
      </h1>

      {/* Featured Project - CampusLink */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8 lg:order-1 order-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
                  Featured Project
                </span>
              </div>
              
              {/* Fixed typewriter container with stable width */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Campus-
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 inline-block min-w-[200px] lg:min-w-[280px]">
                  <Typewriter
                    words={['Link', 'Events', 'Hackathons', 'Internships', 'Clubs', 'Workshops', 'Opportunities']}
                    loop={true}
                    cursor={true}
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={60}
                    delaySpeed={1000}
                    cursorColor="white"
                  />
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                An innovative mobile application connecting students to clubs, hackathons, internships, and workshops based on their interests.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Key Features</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Club Connectivity</h4>
                  <p className="text-sm text-gray-300">Explore Clubs and Join them</p>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Smart Matching</h4>
                  <p className="text-sm text-gray-300">Interest-based recommendations for opportunities</p>
                </div>

                <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-4 hover:border-green-500/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Secure Auth</h4>
                  <p className="text-sm text-gray-300">FireAuth authentication with role management</p>
                </div>

                <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 hover:border-orange-500/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Event Management</h4>
                  <p className="text-sm text-gray-300">Admin panels for posting and managing events</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "React Native", color: "from-blue-500 to-cyan-500" },
                  { name: "JavaScript", color: "from-purple-500 to-pink-500" },
                  { name: "FireAuth", color: "from-orange-500 to-red-500" },
                  { name: "Firebase", color: "from-yellow-500 to-orange-500" },
                  { name: "TypeScript", color: "from-blue-600 to-blue-500" }
                ].map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${tech.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Phone Model Side */}
          <div className="lg:order-2 order-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <PhoneModel />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project - StreamXtract */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model Side */}
          <div className="lg:order-1 order-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-md">
              {/* Replace this div with your 3D model component */}
              <YouTube3DModel />

            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 lg:order-2 order-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-red-400 uppercase tracking-wider">
                  Experimental Work
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Stream-Xtract<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                A powerful web application for downloading YouTube videos and audio, plus Spotify songs in highest quality - supporting 4K video and high-fidelity MP3 audio formats.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Key Features</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm border border-red-500/20 rounded-xl p-4 hover:border-red-500/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">4K Video Download</h4>
                  <p className="text-sm text-gray-300">Download YouTube videos in ultra-high 4K quality</p>
                </div>

                <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 backdrop-blur-sm border border-pink-500/20 rounded-xl p-4 hover:border-pink-500/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Spotify Integration</h4>
                  <p className="text-sm text-gray-300">Extract and download Spotify tracks in high quality</p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Multiple Formats</h4>
                  <p className="text-sm text-gray-300">Support for MP4, MP3, and various quality options</p>
                </div>

                <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 hover:border-orange-500/40 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Fast Processing</h4>
                  <p className="text-sm text-gray-300">Lightning-fast download and conversion speeds</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "React", color: "from-blue-500 to-cyan-500" },
                  { name: "Node.js", color: "from-green-500 to-emerald-500" },
                  { name: "Express", color: "from-gray-600 to-gray-500" },
                  { name: "FFmpeg", color: "from-red-500 to-pink-500" },
                  { name: "YouTube API", color: "from-red-600 to-red-500" },
                  { name: "Spotify API", color: "from-green-600 to-green-500" }
                ].map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${tech.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Project Cards */}
      <div className="w-full max-w-7xl mx-auto px-6">
      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS?.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};