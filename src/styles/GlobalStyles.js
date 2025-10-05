import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #0a192f;
    color: #8892b0;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Responsive typography */
  html {
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 15px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  /* Improved scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0a192f;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #64ffda;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4db3a4;
  }

  /* Mobile scrollbar */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 6px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-position: inside;
    margin-left: 1rem;
  }

  /* Responsive section headings */
  .section-heading {
    color: #ccd6f6;
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 2px;
      background-color: #64ffda;
      
      @media (max-width: 768px) {
        width: 50px;
        bottom: -8px;
      }
      
      @media (max-width: 480px) {
        width: 40px;
        bottom: -6px;
      }
    }
  }

  /* Mobile-first responsive utilities */
  .mobile-only {
    display: block;
    
    @media (min-width: 769px) {
      display: none;
    }
  }

  .desktop-only {
    display: none;
    
    @media (min-width: 769px) {
      display: block;
    }
  }

  /* Touch-friendly button sizing for mobile */
  @media (max-width: 768px) {
    button, 
    [role="button"] {
      min-height: 44px;
      min-width: 44px;
    }
  }

  /* Improved focus states for accessibility */
  *:focus {
    outline: 2px solid #64ffda;
    outline-offset: 2px;
  }

  /* Smooth scrolling for better mobile experience */
  html {
    scroll-behavior: smooth;
  }

  /* Prevent horizontal overflow on mobile */
  .container {
    max-width: 100%;
    overflow-x: hidden;
  }

  /* Better text rendering on mobile */
  @media (max-width: 768px) {
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }
  }
`;

export default GlobalStyles; 