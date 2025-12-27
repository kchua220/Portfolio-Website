import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ProjectPage from "./components/Projects/ProjectPage";
import PortalTransition from "./components/Projects/PortalTransition";

const HomePage = ({ onNavigate }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to projects section when coming back from project page
    if (location.state?.scrollTo === 'projects') {
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <section id="projects">
        <Projects onNavigate={onNavigate} />
      </section>
      <Testimonials />
      <Skills />
      <Footer />  
    </>
  );
};

const App = () => {
  const [showTransition, setShowTransition] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const handleNavigate = (navigateFunction) => {
    setShowTransition(true);
    setPendingNavigation(() => navigateFunction);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
    if (pendingNavigation) {
      pendingNavigation();
      setPendingNavigation(null);
    }
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
        <Route path="/project/:projectId" element={<ProjectPage onNavigate={handleNavigate} />} />
      </Routes>
      
      <PortalTransition 
        isActive={showTransition} 
        onComplete={handleTransitionComplete}
      />
    </Router>
  );
};

export default App;