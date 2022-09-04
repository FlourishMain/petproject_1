import React from "react";
import Hero from "../components/Hero";
import OurProducts from "../components/OurProducts";
import TrustedBy from "../components/TrustedBy";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <TrustedBy />
      <OurProducts />
    </div>
  );
}
