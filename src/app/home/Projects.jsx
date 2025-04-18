'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const projects = [
  {
    name: "Alta Futuris",
    desc: "A Next.js-based responsive website with dynamic sections, animations, and optimized SEO.",
    link: "https://altafuturis.com/",
    image: "/assets/alta.png",
  },
  {
    name: "Sai Shakti Sanstan",
    desc: "Religious organization's site with gallery, donation & blog. Built with React.js.",
    link: "https://www.saishaktisant.org/",
    image: "/assets/ssssg.png",
  },
  {
    name: "Measure Interiors",
    desc: "Internal tool for tracking and measurement. Built using modern frontend tools.",
    link: "https://measureinteriors.com/product-details.html?id=153",
    image: "/assets/measure.webp",
  },
  {
    name: "Youtax",
    desc: "A modern single-page tax filing and advisory website built using Next.js. Designed for responsive performance and seamless user experience.",
    link: "https://vishal-youtax.netlify.app/",
    image: "/assets/Youtax.png",
  },
  {
    name: "Vikas Nursery",
    desc: "Nursery portfolio with image gallery & enquiry form. Built with React & Tailwind.",
    link: "#",
    image: "/assets/vikas.jpg",
  },
  {
    name: "Hairnic",
    desc: "A hair care and hair-related product site built using React. Clean UI with product cards and categories.",
    link: "https://vishal-hainic.netlify.app/",
    image: "/assets/Hairnic.avif",
  },  
   {
    name: "Tic Tac Toe",
    desc: "Classic 2-player Tic Tac Toe using JavaScript state and winning logic.",
    link: "https://vishal-tictactoe-game.netlify.app/",
    image: "/assets/tictoc.png",
  },
  {
    name: "Calculator",
    desc: "JavaScript-based calculator with basic arithmetic logic and clean UI.",
    link: "https://vishalbcalculator.netlify.app/",
    image: "/assets/calculator.png",
  },
  {
    name: "Fresh Shop",
    desc: "Grocery store UI with cart simulation. Responsive and neat layout.",
    link: "https://vishal-freshshop.netlify.app/",
    image: "/assets/freshshop.jpg",
  },
  {
    name: "Ninestar",
    desc: "Agency template site built using HTML, CSS, Bootstrap. Fully responsive.",
    link: "https://vishal-ninestar.netlify.app/",
    image: "/assets/ninestar.jpg",
  },
  {
    name: "Online Coffee Shop",
    desc: "Modern UI for coffee store with product filters & cards. Made in React.",
    link: "#",
    image: "/assets/coffee.png",
  },
];

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="w-full pb-20 sm:py-10 px-4 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center relative mb-6">
          <h2
            className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent inline-block pb-3 relative"
            data-aos="fade-down"
          >
            MY PROJECTS
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-[3px] bg-dotted-gradient bg-repeat-x bg-[length:10px_3px] animate-pulse"></span>
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 z-10 relative">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="rounded-2xl overflow-hidden shadow-lg border border-purple-200 transform transition-all duration-300 hover:scale-105 group bg-gradient-to-tr from-purple-100 via-yellow-50 to-blue-100 dark:from-[#323d2b] dark:via-[#342c14] dark:to-[#490f60]"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className="object-cover group-hover:brightness-105 transition-all"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-extrabold text-gray-800 dark:text-yellow-400 mb-2 group-hover:text-purple-700 transition italic">
                  {proj.name}
                </h3>
                <p className="text-md text-gray-700 dark:text-gray-300 mb-5">
                  {proj.desc}
                </p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-purple-600 to-yellow-400 text-white shadow-md hover:from-yellow-500 hover:to-purple-700 transition-all duration-300"
                >
                  🔗 View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
