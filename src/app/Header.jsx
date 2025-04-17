"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
  FaGithub,
} from "react-icons/fa";

const roles = ["Web Developer", "React Magician", "", "Next.js Developer"];

export default function Navbar() {
  // const [index, setIndex] = useState(0);
  // const [displayedText, setDisplayedText] = useState("");
  // const [charIndex, setCharIndex] = useState(0);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (charIndex < roles[index].length) {
  //       setDisplayedText((prev) => prev + roles[index][charIndex]);
  //       setCharIndex((prev) => prev + 1);
  //     } else {
  //       setTimeout(() => {
  //         setCharIndex(0);
  //         setDisplayedText("");
  //         setIndex((prev) => (prev + 1) % roles.length);
  //       }, 1500);
  //     }
  //   }, 100);

  //   return () => clearTimeout(timeout);
  // }, [charIndex, index, roles]);

  return (
    <nav className="z-50 w-full relative top-0 bg-black/70 backdrop-blur-xl border-b border-white/20 shadow-md overflow-hidden space-x-4 sm:px-6 py-4 flex items-center justify-between transition-all duration-500">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#ff0080,transparent_40%),radial-gradient(circle_at_80%_80%,#7928ca,transparent_40%)] opacity-20 animate-pulse blur-xl" />

      {/* Logo */}
      <div className="text-4xl font-bold tracking-wide animate-pulse">
        <Link
          href="/"
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:underline"
        >
          Portfolio
        </Link>
      </div>

      {/* Center Text (optional) */}
      {/* <div className="text-center hidden md:block ">
        <h1 className="text-2xl font-semibold text-white drop-shadow">
          Hey, I'm{" "}
          <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 bg-clip-text text-transparent animate-shine">
            Vishal⚡
          </span>
        </h1>
        <p className="text-lg font-mono text-cyan-300 animate-pulse tracking-wider">
          {displayedText}|
        </p>
      </div> */}

      {/* Right Icons and CV */}
      <div className="flex items-center space-x-1 sm:space-x-4 text-white text-lg">
        <HoverIcon
          link="tel:+918459471443"
          icon={<FaPhoneAlt />}
          hoverColor="from-yellow-500 to-blue-500 "
        />
        <HoverIcon
          link="mailto:vishalbhange333@gmail.com"
          icon={<FaEnvelope />}
          hoverColor="from-yellow-500 to-blue-500"
        />
        <HoverIcon
          link="https://www.linkedin.com/in/vishal-bhange-356257284/"
          icon={<FaLinkedin />}
          hoverColor="from-blue-500 to-yellow-500"
        />
        <HoverIcon
          link="https://github.com/VishalBhange"
          icon={<FaGithub />}
          hoverColor="from-yellow-500 to-blue-800"
          className="hidden sm:block"
        />
        <HoverIcon
          link="https://www.instagram.com/_vishal.xiii.xii_/"
          icon={<FaInstagram />}
          hoverColor="from-blue-500 to-yellow-500"
        />
        <HoverIcon
          link="https://www.facebook.com/share/1VWsTVEyKT/?mibextid=qi2Omg"
          icon={<FaFacebook />}
          hoverColor="from-blue-500 to-yellow-500"
          className="hidden sm:block"
        />

        {/* CV Download Button */}
        <Link href="/assets/vishal(cv).pdf" download
          target="_blank"
          rel="noopener noreferrer"> 
          <button className="bg-gradient-to-r from-yellow-300 to-purple-600 text-white px-4 py-1 rounded-lg shadow-md hover:shadow-purple-500/70 text-sm font-semibold transition duration-300 transform hover:scale-110 hover:rotate-1 animate-glow">
            <div className="flex items-center gap-1">
              <FaDownload />
              CV
            </div>
          </button>
        </Link>
      </div>
    </nav>
  );
}

// Reusable hover icon component with support for additional className
function HoverIcon({ link, icon, hoverColor, className = "" }) {
  return (
    <Link href={link} target="_blank">
      <div
        className={`group transition transform hover:scale-125 bg-gradient-to-br ${hoverColor} text-white p-2 rounded-full shadow-md hover:shadow-xl ${className}`}
      >
        <div className="text-xl transition-transform duration-300 group-hover:rotate-[360deg]">
          {icon}
        </div>
      </div>
    </Link>
  );
}

