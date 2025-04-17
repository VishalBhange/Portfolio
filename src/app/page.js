import AboutMe from "./home/AboutMe";
import ContactMe from "./home/ContactMe";
import Educations from "./home/Educations";
import GetInTouch from "./home/GetInTouch";
import Projects from "./home/Projects";
import Skillbar from "./home/Skillbar";
import TechnicalSkills from "./home/TechnicalSkills";


export default function Home() {
  return (
    <div>

      <AboutMe/>
      <TechnicalSkills/>
      <Skillbar/>
      <Educations/>
      <Projects/>
      <ContactMe/>
      <GetInTouch/>
    </div>
  );
}
