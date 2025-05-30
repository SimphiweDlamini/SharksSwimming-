import "./App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramSection";
import ScheduleSection from "./components/ScheduleSection";
import CoachesSection from "./components/CoachesSection";
import ContactSection from "./components/ContactSection";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "schedule", label: "Schedule" },
  { id: "coach", label: "Coach" },
  { id: "contact", label: "Contact" },
];

function App() {
  return (
    <>
      <Navbar sections={sections}></Navbar>
      <HomeSection />
      <AboutSection />
      <ProgramsSection />
      <ScheduleSection />
      <CoachesSection />
      <ContactSection />
    </>
  );
}

export default App;
