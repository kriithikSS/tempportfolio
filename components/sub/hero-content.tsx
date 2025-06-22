"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter';

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-extrabold text-white max-w-[800px] w-auto h-auto leading-tight tracking-tight"
        >
          <span className="flex flex-wrap items-center">
            Today, you scroll. Tomorrow, you grow —
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 inline-block min-w-[420px] ml-2">
              <Typewriter
                words={[
                  "I'm Kriithik SS.",
                  "I'm building that bridge."
                ]}
                loop={true}
                cursor={true}
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1200}
                cursorColor="#ffffff"
              />
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Product Engineer focused on building lean, scalable solutions with business impact.
          I specialize in rapidly prototyping MVPs, validating ideas with real users, and scaling products with both performance and design in mind. I understand the urgency of startup timelines and the importance of delivering measurable value early.
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};