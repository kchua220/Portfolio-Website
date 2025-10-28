import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Projects onNavigate={onNavigate} />
      <Testimonials />
      <Skills />
      <Footer />  
    </>
  );
};

const App = () => {
  const [showTransition, setShowTransition] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);

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