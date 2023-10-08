import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import "./App.css";
import Services from "./components/Services/Services";
import Calltoaction from "./components/Calltoaction/Calltoaction";
import Pricing from "./components/Pricing/Pricing";
import Accordian from "./components/Accordian/Accordian";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <About />
      <Services />
      <Calltoaction />
      <Pricing />
      <Accordian />
      <Footer />
    </>
  );
}

export default App;
