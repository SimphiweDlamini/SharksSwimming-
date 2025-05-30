import "./App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function App() {
  return (
    <>
      <Navbar sections={sections}></Navbar>
      <HomeSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default App;
