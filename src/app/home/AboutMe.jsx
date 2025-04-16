"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLanguage,
  FaTools,
  FaHeart,
} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProfileSection() {
  const [animateProfile, setAnimateProfile] = useState(true);
  const roles = ["Web Developer", "React Magician", "Next.js Developer"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const bgRef = useRef(null);

   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false, // important: run on every scroll
      });
    }, []);

    
  // Animate image once
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateProfile(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  // Typing effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < roles[index].length) {
        setDisplayedText((prev) => prev + roles[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setDisplayedText("");
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, index, roles]);

  // Mousemove glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = bgRef.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;

      bgRef.current.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(255, 0, 255, 0.15), transparent 80%)`;
    };

    const bgEl = bgRef.current;
    bgEl.addEventListener("mousemove", handleMouseMove);
    return () => bgEl.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* LEFT SIDEBAR */}
      <div className="w-full md:w-1/3 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none shadow-xl text-white space-y-6">
        <div className="text-center">
          <div
            className={`w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg ${
              animateProfile ? "animate-spinOnce" : ""
            }`}
          >
            <Image
              src="/Vishalimg.jpg"
              alt="Vishal Bhange"
              width={112}
              height={112}
              className="object-cover"
            />
          </div>

          <h1 className="text-2xl font-semibold text-white drop-shadow">
            <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 bg-clip-text text-transparent animate-shine">
              VISHAL BHANGE
            </span>
          </h1>
          <p className="text-lg font-mono text-cyan-300 animate-pulse tracking-wider">
            {displayedText}|
          </p>
        </div>

        <div className="space-y-4">
          <InfoRow
            icon={<FaGraduationCap />}
            title="Education"
            content="Bachelor of Computer Application (BCA)"
          />
          <InfoRow
            icon={<FaBriefcase />}
            title="Profile"
            content="Web Development Intern at VM3 Tech Solution, Wagholi"
          />
          <InfoRow
            icon={<FaLanguage />}
            title="Languages"
            content="English, Hindi, Marathi"
          />
          <InfoRow
            icon={<FaMapMarkerAlt />}
            title="Address"
            content="Swargate, Pune - 411042"
          />
          <InfoRow
            icon={<FaTools />}
            title="Other Skills"
            content="MS Word, Excel"
          />
          <InfoRow
            icon={<FaHeart />}
            title="Hobbies"
            content={
              <ul className="list-inside space-y-1">
                <li>💻 Coding</li>
                <li>✈️ Travelling</li>
                <li>🌍 I want to explore the whole world</li>
              </ul>
            }
          />
        </div>
      </div>

      {/* RIGHT: ABOUT SECTION with animated background */}
      <div
        ref={bgRef}
        className="md:w-2/3 relative overflow-hidden  backdrop-blur-xl p-8  text-gray-800 px-10 md:px-20   transition-all duration-500 "
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
        <div className="absolute inset-0 pointer-events-none z-0 transition-all duration-500 space-y-6" />
        <div className="relative z-10">
         <div className="text-center relative mt-6">
        <h2 className="text-4xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent inline-block relative"data-aos="fade-down">
          ABOUT ME
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-[3px] bg-dotted-gradient bg-repeat-x bg-[length:10px_3px] animate-pulse"></span>
        </h2>
      </div>


          <p className="text-md leading-relaxed  mt-5" data-aos="fade-up">
            Hello! I’m <strong>Vishal Sanjay Bhange</strong>. I was born on{" "}
            <strong>13th December 2002</strong>, and I come from{" "}
            <strong>Newasa, Ahmednagar, Maharashtra (414603)</strong>.
            Currently, I’m based in <strong>Swargate, Pune</strong>. I’ve
            completed my graduation in{" "}
            <strong>Bachelor of Computer Applications (BCA)</strong> from{" "}
            <strong>Shri Dnyaneshwar Mahavidyalay, Newasa</strong> under the{" "}
            <strong>Savitribai Phule Pune University (SPPU)</strong>.
          </p>

          <p className="text-md leading-relaxed mt-4" data-aos="fade-up">
            I'm currently working as a{" "}
            <strong>Web Development Intern at VM3 Tech Solution</strong>. I’m
            passionate about building clean, responsive, and interactive web
            applications. I’ve completed a professional{" "}
            <strong>
              web development course from Seven Mentor Institute, Pune
            </strong>{" "}
            where I learned to bring frontend and backend technologies together.
          </p>

          <p className="text-md leading-relaxed mt-4" data-aos="fade-up">
            My tech stack includes{" "}
            <strong>
              JavaScript, Tailwind CSS, React.js, Next.js, Node.js, MongoDB
            </strong>
            , and <strong>GitHub</strong>. I also have strong communication
            skills and a love for learning new things. I create user-friendly
            and mobile-responsive designs, always aiming for pixel perfection
            and smooth UX.
          </p>

          <p className="text-md leading-relaxed mt-4" data-aos="fade-up">
            During my internship, I’ve contributed to real-world projects like{" "}
            <strong>SSG Global, Alta Futuris, Measure, and Vikas Nursery</strong>. These
            experiences have given me practical exposure and taught me teamwork,
            deadlines, and scalable coding.
          </p>

          <p className="text-md leading-relaxed mt-4" data-aos="fade-up">
            Apart from these, I’ve built several practice projects like a{" "}
            <strong>
              Calculator, Online Coffee Product Store, Fresh Shop, Tic Tac Toe
            </strong>{" "}
            game, and <strong>Ninestar</strong> UI design. Each project helped
            me sharpen a new skill—from logic to layout.
          </p>

          <p className="text-md leading-relaxed mt-4" data-aos="fade-up">
            Feel free to connect with me at{" "}
            <strong>vishalbhange333@gmail.com</strong> or{" "}
            <strong>+91 8459471443</strong>. Let’s build something amazing
            together!
          </p>
        </div>
      </div>
    </div>
  );
}

// Info Row Component
const InfoRow = ({ icon, title, content }) => (
  <div className="flex items-start space-x-4">
    <div className="text-yellow-400 mt-1">{icon}</div>
    <div>
      <p className="text-sm text-gray-400">{title}</p>
      <div className="text-md font-medium">{content}</div>
    </div>
  </div>
);
