import "./App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramSection";
//import ScheduleSection from "./components/ScheduleSection";
import CoachesSection from "./components/CoachesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import OpenWaterSection from "./components/OpenWaterSection";
import MasterSection from "./components/MasterSection";
import FacilitySection from "./components/FacilitySection";
import CharitySection from "./components/CharitySection";
import TeachersSection from "./components/TeachersSection";
import KitSection from "./components/KitSection";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "coach", label: "Coach" },
  {
    id: "gallery",
    label: "Gallery",
    subsections: [
      { id: "gallery", label: "View Gallery" },
      { id: "openwater", label: "Open Water" },
      { id: "master", label: "Masters / Adults" },
      { id: "facility", label: "Facility" },
      { id: "kit", label: "Kit and Uniform" },
    ],
  },
  { id: "teacher", label: "Teacher's course" },
  { id: "charity", label: "Charity" },
  { id: "contact", label: "Contact" },
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
        <CoachesSection />
        <GallerySection />
        <OpenWaterSection />
        <MasterSection />
        <FacilitySection />
        <KitSection />
        <TeachersSection />
        <CharitySection />
        <ContactSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
