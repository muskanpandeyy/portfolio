import React, { useEffect, useState } from "react";

const ScreenCheck = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop ? (
    children
  ) : (
    <div style={{ 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      padding: "20px", 
      textAlign: "center" 
    }}>
      <h2>This portfolio is best viewed on a laptop or desktop screen.</h2>
    </div>
  );
};

export default ScreenCheck;
