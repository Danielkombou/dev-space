import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
