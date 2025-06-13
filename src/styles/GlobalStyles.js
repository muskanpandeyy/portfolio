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
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0a192f;
  }

  ::-webkit-scrollbar-thumb {
    background: #64ffda;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4db3a4;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-position: inside;
    margin-left: 1rem;
  }

  .section-heading {
    color: #ccd6f6;
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 2px;
      background-color: #64ffda;
    }
  }
`;

export default GlobalStyles; 