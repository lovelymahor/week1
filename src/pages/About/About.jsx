// src/pages/About.jsx
import React from "react";
import Home from "../Home/Home";  // Import Home component if you are using it here

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <Home /> {/* You can remove this if not required */}
    </div>
  );
};

export default About;
