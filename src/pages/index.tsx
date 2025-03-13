import { Manrope } from "next/font/google";

import { Box } from "@mui/material";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Section8/Footer";
import Hero from "@/components/Section1/Hero";
import About from "@/components/Section2/About";
import Gallery from "@/components/Section5/Gallery";
import Message from "@/components/Section7/Message";
import Offer from "@/components/Section4/Offer";
import Features from "@/components/Section6/Features";
import WhyChoose from "@/components/Section3/WhyChoose";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Box className={manrope.className}>
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <Offer />
      <Gallery />
      <Features />
      <Message />
      <Footer />
    </Box>
  );
}
