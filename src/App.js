import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GlobalStyles from './styles/GlobalStyles';
import ScreenCheck from './components/ScreenCheck';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

// Create page components that combine relevant sections
const HomePage = () => (
  <>
    <Hero />
  </>
);

const AboutPage = () => (
  <>
    <About />
  </>
);

const SkillsPage = () => (
  <>
    <Skills />
  </>
);

const ProjectsPage = () => (
  <>
    <Projects />
  </>
);

const ContactPage = () => (
  <>
    <Contact />
  </>
);

function App() {
  return (
     <ScreenCheck>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
    </ScreenCheck>
  );
}

export default App; 