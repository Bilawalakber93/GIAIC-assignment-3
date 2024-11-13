// import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import YourWork from "./components/YourWork";
import Sponsors  from "./components/Sponsors";
import Footer from "./components/Footer";
import React from "react";

export default function Home() {
  return (
      <div>
        <Navbar />
        <Hero />
        <YourWork />
        <Sponsors />
        <Footer />
      </div>
  );
}
