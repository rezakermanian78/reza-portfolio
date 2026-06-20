import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import BackgroundOrbs from "./components/BackgroundOrbs/BackgroundOrbs";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";
import Research from "./pages/Research/Research";
import Trading from "./pages/Trading/Trading";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="app">
      <BackgroundOrbs />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}

export default App;