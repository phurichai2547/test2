"use client";

import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/Section1/About";
import WhatWeDo from "../../components/Section2/WhatWeDo"
import Galleries from "../../components/Section3/Galleries";
const Page = () => {
  return (
    <div>
      <Navbar />
      <About />
      <WhatWeDo />
      <Galleries />
    </div>
  );
};

export default Page;
