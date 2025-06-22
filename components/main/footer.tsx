"use client";

import Link from "next/link";
import PlanetModel from "@/components/sub/planet-model";
import { FOOTER_DATA } from "@/constants";
import type { FooterColumn } from "@/constants";

import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] flex flex-col items-center justify-center">
      {/* Top Row: Contact Left, Earth Right */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start justify-between gap-10 px-6 py-10">
        {/* Contact Section on Left */}
        <div className="flex flex-col items-start w-full lg:w-1/2 max-w-md">
          <div className="mb-6">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">GET IN TOUCH</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Contact.</h2>
          </div>
          {/* Contact Options */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <MdEmail className="text-gray-400" />
              <Link
                href="mailto:kriithik05@gmail.com"
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                kriithik05@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Globe on Right */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] overflow-visible flex justify-center lg:justify-end">
          <div className="w-full max-w-[700px] h-full">
            <PlanetModel />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="w-full flex flex-wrap justify-center gap-10 mt-10">
        {FOOTER_DATA.map((column) => (
          <div
            key={column.title}
            className="min-w-[200px] h-auto flex flex-col items-center"
          >
            <h3 className="font-bold text-[16px]">{column.title}</h3>
            {column.data.map(({ icon: Icon, name, link }) => (
              <Link
                key={`${column.title}-${name}`}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row items-center my-[10px]"
              >
                {Icon && <Icon />}
                <span className="text-[15px] ml-[6px]">{name}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Copyright at Bottom */}
      <div className="mt-8 mb-2 text-[14px] text-center text-gray-400">
        &copy; Kriithik SS {new Date().getFullYear()} Inc. All rights reserved.
      </div>
    </div>
  );
};