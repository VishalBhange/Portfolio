'use client';
import React, { useEffect, useRef } from 'react';

import { FaAddressBook, FaPhoneAlt, FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactCard = ({ icon, title, desc, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, delay, ease: 'easeOut' },
      });
    } else {
      controls.start({ opacity: 0, scale: 0.8 });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0.8 }}
      className="group p-6 bg-white/70 dark:bg-gray-900/40 backdrop-blur rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer border border-white/30"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="mb-4 flex justify-center items-center"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
        {title}
      </h3>
      {desc.map((line, i) => (
        <p key={i} className="text-sm text-gray-600 dark:text-gray-300">
          {line}
        </p>
      ))}
    </motion.div>
  );
};

const ContactMe = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect || !containerRef.current) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(255, 105, 180, 0.1), transparent 80%)`;
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
      return () => el.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const items = [
    {
      icon: <FaAddressBook className="text-5xl text-pink-500 drop-shadow-lg" />,
      title: 'Address',
      desc: [<div className="text-lg">Swargate, Pune, 411042</div>],
    },
    {
      icon: <FaPhoneAlt className="text-5xl text-pink-500 drop-shadow-lg" />,
      title: 'Contact Number',
      desc: [
        <a href="tel:+918459471443" className="hover:underline text-lg">
          +91 8459471443
        </a>,
      ],
    },
    {
      icon: <FaEnvelope className="text-5xl text-pink-500 drop-shadow-lg" />,
      title: 'Email Address',
      desc: [
        <a href="mailto:vishalbhange@gmail.com" className="hover:underline text-lg">
          vishalbhange333@gmail.com
        </a>,
      ],
    },
    {
      icon: <FaDownload className="text-5xl text-pink-500 drop-shadow-lg" />,
      title: 'Resume',
      desc: [
        <a
          href="/Vishal Bhange (CV).pdf"  // make sure the filename matches exactly
          download
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-lg"
        >
          Click here to download
        </a>,
      ],
    },
    
  ];

  return (
    <div
      ref={containerRef}
      className="relative z-10 w-full py-16 px-4 md:px-10  transition-all duration-300"
    >
      <div className="text-center relative mb-6">
        <h2
          className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent inline-block pb-3 relative"
        >
          CONTACT ME
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-[3px] bg-dotted-gradient bg-repeat-x bg-[length:10px_3px] animate-pulse"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {items.map((item, index) => (
          <ContactCard key={index} {...item} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
