"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Import EmailJS SDK

const PortfolioSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const containerRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "your_service_id", // Replace with your service ID from EmailJS
        "your_template_id", // Replace with your template ID from EmailJS
        formData,
        "your_user_id" // Replace with your user ID from EmailJS
      )
      .then(
        (response) => {
          console.log("Success:", response);
          setResponseMessage("Message sent successfully!");
          setFormData({ fullname: "", phone: "", email: "", requirement: "" });
        },
        (error) => {
          console.error("Error:", error);
          setResponseMessage("Failed to send message. Try again.");
        }
      );
  };

  // Radial background effect
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
      el.addEventListener("mousemove", handleMouseMove);
      return () => el.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section ref={containerRef} className="flex flex-col md:flex-row items-center md:py-32 py-20 relative">
        
      {/* Left Section */}
      <div className="md:w-1/3 lg:w-1/3 flex flex-col items-center md:items-start h-full relative">
        <motion.div
          className="absolute"
          animate={{
            y: [-600, 210],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Image src="/animateCicle.png" width={420} height={180} alt="Circular Animation" className="-ml-32" />
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 px-8 lg:px-32 -mt-20">
      <div className="text-center relative mb-10">
        <h2
          className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent inline-block pb-3 relative"
        >
          LET'S TALK
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-[3px] bg-dotted-gradient bg-repeat-x bg-[length:10px_3px] animate-pulse"></span>
        </h2>
      </div>
        <div className=" text-black p-8 ">
          <h3 className="text-3xl font-bold text-start mb-6 text-gray-800 tracking-wider">
            Get Your Quote <span className="text-purple-600">Today!</span>
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="fullname"
              placeholder="Your Name*"
              value={formData.fullname}
              onChange={handleChange}
              className="p-4 border-1 border-gray-300 rounded-xl w-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Mobile*"
              value={formData.phone}
              onChange={handleChange}
              className="p-4 border-1 border-gray-300 rounded-xl w-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              className="p-4 border-1 border-gray-300 rounded-xl w-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              name="requirement"
              placeholder="Describe your requirements*"
              value={formData.requirement}
              onChange={handleChange}
              className="p-4 border-1 border-gray-300 rounded-xl w-full h-32 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
            <button type="submit" className="bg-[#6328A6] text-white py-3 rounded-xl transition-all duration-300 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500">
              Send Message
            </button>
            {responseMessage && <p className="text-center text-green-600 mt-3">{responseMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
