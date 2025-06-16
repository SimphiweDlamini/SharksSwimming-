import "./App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramSection";
import ScheduleSection from "./components/ScheduleSection";
import CoachesSection from "./components/CoachesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import OpenWaterSection from "./components/OpenWaterSection";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "schedule", label: "Schedule" },
  { id: "coach", label: "Coach" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
  { id: "openwater", label: "Open Water" },
];

function App() {
  return (
    <>
      <header>
        <Navbar sections={sections}></Navbar>
      </header>

      <main>
        <HomeSection />
        <AboutSection />
        <ProgramsSection />
        <ScheduleSection />
        <CoachesSection />
        <GallerySection />
        <OpenWaterSection />
        <ContactSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
