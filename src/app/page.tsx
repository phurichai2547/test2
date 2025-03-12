"use client";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/Section1/About";
import WhatWeDo from "./components/Section2/WhatWeDo";
import Galleries from "./components/Section3/Galleries";
import GalleriesResponsive from "./components/Section3/GalleriesResponsive";
import Project from "./components/Section4/Project";
import Contact from "./components/Section5/Contact";
import Footer from "./components/Section6/Footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <About />
      <WhatWeDo />
      <Galleries />
      <GalleriesResponsive />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
