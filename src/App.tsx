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
import JsonLd from "./JsonLd";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "openwater", label: "Open Water" },
  { id: "master", label: "Masters" },
  { id: "facility", label: "Facility" },
  { id: "kit", label: "Kit" },
  { id: "teacher", label: "Teaching" },
  { id: "charity", label: "Charity" },
  { id: "contact", label: "Contact" },
];

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.sharks-swim-club-eswatini.com",
    },
  ],
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sharks Swim Club Eswatini",
  url: "https://www.sharks-swim-club-eswatini.com",
};

function App() {
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <JsonLd data={organizationData} />

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
