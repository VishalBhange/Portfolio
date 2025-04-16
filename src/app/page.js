import AboutMe from "./home/AboutMe";
import ContactMe from "./home/ContactMe";
import Projects from "./home/Projects";
import Skillbar from "./home/Skillbar";
import TechnicalSkills from "./home/TechnicalSkills";


export default function Home() {
  return (
    <div>

      <AboutMe/>
      <TechnicalSkills/>
      <Skillbar/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}
