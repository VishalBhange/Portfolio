'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EducationCard = ({ title, college, detail, gradient, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay, ease: 'easeOut' },
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
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`p-6 rounded-lg shadow-xl cursor-pointer text-white ${gradient}`}
    >
      <div className="text-4xl font-semibold mb-4">{title}</div>
      <div className="text-lg font-medium">
        <h3 className="mb-2">{college}</h3>
        <p>{detail}</p>
      </div>
    </motion.div>
  );
};

const EducationCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-16 py-12">
      <div className="text-center relative mb-6">
        <h2
          data-aos="fade-down"
          className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent inline-block pb-3 relative"
        >
          ACADEMIC EVOLUTION
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-[3px] bg-dotted-gradient bg-repeat-x bg-[length:10px_3px] animate-pulse"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <EducationCard
          title="10th"
          college="Gurudas Bhaskargiri Maharaj Mahavidyalay, Jalke"
          detail="SSC (2018) - 81.80%"
          gradient="bg-gradient-to-r from-blue-600 to-yellow-500"
          delay={0.1}
        />
        <EducationCard
          title="12th"
          college="Shri Dnyaneshwar Mahavidyalay, Newasa"
          detail="HSC- (Computer Science) (2020)  - 63.23%"
          gradient="bg-gradient-to-r from-blue-600 to-green-600"
          delay={0.3}
        />
        <EducationCard
          title="Graduation"
          college="Shri Dnyaneshwar Mahavidyalay, Newasa"
          detail="BCA (2023) - CGPA: 7.58"
          gradient="bg-gradient-to-r from-blue-600 to-pink-600"
          delay={0.5}
        />
      </div>
    </div>
  );
};

export default EducationCards;
