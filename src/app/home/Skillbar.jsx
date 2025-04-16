'use client';
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML5', percent: 80 },
  { name: 'CSS', percent: 75 },
  { name: 'Tailwind CSS', percent: 85 },
  { name: 'JavaScript', percent: 68 },
  { name: 'Bootstrap 5', percent: 70 },
  { name: 'React JS', percent: 73 },
  { name: 'Next JS', percent: 70 },
  { name: 'Express JS', percent: 60 },
  { name: 'Node JS', percent: 60 },
  { name: 'JSON', percent: 60 },
  { name: 'MongoDB', percent: 60 },
  { name: 'GitHub', percent: 70 },
];

const SkillBar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Radial background effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      containerRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(231, 84, 128, 0.15), transparent 80%)`;
    };

    const refEl = containerRef.current;
    refEl.addEventListener("mousemove", handleMouseMove);
    return () => refEl.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Skillbar scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.remove('opacity-0');
            target.classList.add('animate-slideUp');
          } else {
            target.classList.remove('animate-slideUp');
            target.classList.add('opacity-0');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    const items = containerRef.current.querySelectorAll('.skill-item');
    items.forEach((item) => observer.observe(item));

    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative z-10 py-20 px-4 md:px-10 sm:mt-0 mt-5 transition-all duration-500 backdrop-blur-xl overflow-hidden"
    >
      {/* Falling stars */}
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

      <div className="absolute inset-0 -z-10 rounded-lg blur-2xl" />
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/40 dark:bg-gray-400/40 p-10 rounded-3xl shadow-2xl">
        <div className="text-center relative mb-6">
          <h2
            className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent inline-block pb-3 relative"
            data-aos="fade-down"
          >
            SKILLBAR
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-[3px] bg-dotted-gradient bg-repeat-x bg-[length:10px_3px] animate-pulse"></span>
          </h2>
        </div>
        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-item opacity-0 transition-opacity duration-500"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-md font-semibold text-gray-700 dark:text-black">
                  {skill.name}
                </span>
                <span className="text-md font-semibold text-gray-700 dark:text-black">
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 transition-all duration-1000"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
