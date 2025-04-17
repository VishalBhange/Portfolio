import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-600 to-yellow-500 text-white py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Info Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Vishal Sanjay Bhange</h2>
          <p className="text-md mb-2">Web Developer | Frontend Specialist | Innovator</p>

          <a
            href="mailto:vishalbhange333@gmail.com"
            className="flex items-center gap-2 mb-1  hover:text-yellow-200 transition-all"
          >
            <FaEnvelope /> vishalbhange333@gmail.com
          </a>

          <a
            href="tel:+918459471443"
            className="flex items-center gap-2 mb-1  hover:text-yellow-200 transition-all"
          >
            <FaPhoneAlt /> +91 8459471443
          </a>

          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Swargate, Pune, Maharashtra
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start justify-center md:items-center">
          <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
          <div className="flex space-x-5 text-2xl">
            <HoverFooterIcon
              link="https://www.linkedin.com/in/vishal-bhange-356257284/"
              icon={<FaLinkedin />}
            />
            <HoverFooterIcon
              link="https://github.com/VishalBhange"
              icon={<FaGithub />}
            />
            <HoverFooterIcon
              link="mailto:vishalbhange333@gmail.com"
              icon={<FaEnvelope />}
            />
          </div>
        </div>

        {/* CV Download Section */}
        <div className="flex flex-col items-start md:items-end justify-center">
          <h3 className="text-xl font-semibold mb-4">Download Resume</h3>
          <Link
            href="/assets/vishal(cv).pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl hover:bg-yellow-100 flex items-center gap-2 transition-all">
              <FaDownload /> CV / Resume
            </button>
          </Link>
        </div>
      </div>

      <div className="text-center mt-10 text-sm border-t border-white/30 pt-4">
        © 2025 Vishal Sanjay Bhange. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// Reusable Footer Icon Button
function HoverFooterIcon({ link, icon }) {
  return (
    <Link href={link} target="_blank">
      <div className="transition transform hover:scale-125 bg-white text-purple-700 p-2 rounded-full shadow-md hover:shadow-xl">
        <div className="transition-transform duration-300 hover:rotate-[360deg]">
          {icon}
        </div>
      </div>
    </Link>
  );
}
