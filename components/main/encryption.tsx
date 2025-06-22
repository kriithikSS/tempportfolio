"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

const experienceData = [
  {
    title: "React Native & ML Developer",
    company: "Project Intern SRM Technologies",
    period: "Jun 2025 – Present",
    logo: "/srmtech.png", // You'll need to add this image
    responsibilities: [
      "Building and maintaining React Native mobile applications integrated with secure CMS APIs for a leading US-based pharmaceutical company.",
      "Developed a price analysis dashboard with real-time visualizations to support strategic decision-making in pharma markets.",
      "Implemented machine learning models for price trend prediction, anomaly detection, and business insights."
    ]
  },
   {
    title: "Machine Learning Associate",
    company: "Liftoff, SRM University",
    period: "February 2025 – Present",
    logo: "/liftoffsrm_logo.jpeg", 
    responsibilities: [
      "Contributed to building scalable tech products using machine learning and automation tools, targeting real-world business use cases.",
      "Worked on product features from ideation to delivery, including client-focused customizations and data-backed improvements.",
      "Participated in product pitching and selling strategies to early-stage clients and startups.",
      "Applied ML techniques such as classification, clustering, and predictive analytics to drive functionality and insight."
    ]
  },
];

export const Encryption = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full py-20">
      {/* Header */}
<div 
id="experience"
className="absolute w-auto h-auto top-20 z-[5]">
  <motion.div
    variants={slideInFromTop}
    className="text-[20px] font-medium text-left text-gray-200 mb-4 ml-4"
  >
    WHAT I HAVE DONE SO FAR
  </motion.div>
  <motion.div
    variants={slideInFromTop}
    className="text-[60px] font-bold text-center text-white"
  >
    Work{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      Experience.
    </span>
  </motion.div>
</div>


      {/* Timeline Container */}
      <div className="flex flex-col items-center justify-center mt-40 z-[20] w-full max-w-6xl px-8">
        <div className="relative w-full">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>
          
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`relative flex items-center w-full mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Experience Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-[#1a1a2e] border border-[#7042F88B] rounded-lg p-6 opacity-90 hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg text-gray-300 mb-4">
                    {experience.company}
                  </h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative">
                  {/* Company Logo Circle */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-[#7042F88B]">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={55}
                      height={55}
                      className="rounded-full"
                    />
                  </div>
                  
                  {/* Date */}
                  <div className={`absolute top-20 whitespace-nowrap ${
                    index % 2 === 0 ? 'left-1/2 transform -translate-x-1/2' : 'left-1/2 transform -translate-x-1/2'
                  }`}>
                    <span className="text-gray-400 text-sm font-medium">
                      {experience.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full -z-10">
  <video
    loop
    muted
    autoPlay
    playsInline
    preload="none"
    className="w-full h-full object-cover opacity-20"
  >
    <source src="/videos/Matrix orange.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

    </div>
  );
};