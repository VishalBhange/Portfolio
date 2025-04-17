'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RotatingCube = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // important: run on every scroll
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = bgRef.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      bgRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(231, 84, 128, 0.15), transparent 80%)`;
    };

    const refEl = bgRef.current;
    refEl.addEventListener("mousemove", handleMouseMove);
    return () => refEl.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={bgRef}
      className="relative  w-full overflow-hidden transition-all duration-500 backdrop-blur-xl"
    >
{/* Falling stars without config.js changes */}
<div className="absolute inset-0 z-0 overflow-hidden ">
  {[...Array(50)].map((_, i) => {
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 5 + Math.random() * 5;

    return (
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `-${size}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  })}
</div>


      {/* Heading */}
      <div className="text-center relative mt-16">
        <h2 className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent inline-block relative"data-aos="fade-down">
          TECHNICAL SKILLS
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-[3px] bg-dotted-gradient bg-repeat-x bg-[length:10px_3px] animate-pulse"></span>
        </h2>
      </div>

      {/* Main cubes */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center px-4 md:px-10 pt-20 md:-mt-20 md:py-40 min-h-screen gap-20 md:gap-24 flex-wrap">
        {/* Cube 1 */}
        <div className="scene sm:ml-20 "data-aos="fade-right">
          <div className="cube">
            <div className="face front">
              <Image width={350} height={250} src="/assets/html.png" alt="HTML" />
            </div>
            <div className="face right">
              <Image width={350} height={250} src="/assets/css.png" alt="CSS" />
            </div>
            <div className="face back">
              <Image width={350} height={250} src="/assets/js.png" alt="JS" />
            </div>
            <div className="face left">
              <Image width={350} height={250} src="/assets/tailwindcss.png" alt="Tailwind" />
            </div>
          </div>
        </div>

        {/* Cube 2 */}
        <div className="scene sm:ml-20 "data-aos="fade-up">
          <div className="cube">
            <div className="face front">
              <Image width={350} height={250} src="/assets/react js.png" alt="React" />
            </div>
            <div className="face right">
              <Image width={350} height={250} src="/assets/nextjs.png" alt="Next.js" />
            </div>
            <div className="face back">
              <Image width={350} height={250} src="/assets/nodejs.png" alt="Node.js" />
            </div>
            <div className="face left">
              <Image width={350} height={250} src="/assets/Mongodb.png" alt="MongoDB" />
            </div>
          </div>
        </div>

        {/* Cube 3 */}
        <div className="scene sm:ml-20"data-aos="fade-left">
          <div className="cube">
            <div className="face front">
              <Image width={350} height={250} src="/assets/github.png" alt="GitHub" />
            </div>
            <div className="face right">
              <Image width={350} height={250} src="/assets/express.png" alt="Express.js" />
            </div>
            <div className="face back">
              <Image width={350} height={250} src="/assets/json.png" alt="Json" />
            </div>
            <div className="face left">
              <Image width={350} height={250} src="/assets/xampp1.png" alt="Xampp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingCube;
