import "./App.css";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";

const sections = [{ id: "home", label: "Home" }];

function App() {
  return (
    <>
      <Navbar sections={sections}></Navbar>
      <HomeSection />
    </>
  );
}

export default App;
