import React from "react";
import Hero from "../components/Hero";
import LetsTalk from "../components/LetsTalk";
import News from "../components/News";
import OurProducts from "../components/OurProducts";
import ThoughtLeaderShip from "../components/ThoughtLeaderShip";
import TrustedBy from "../components/TrustedBy";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <TrustedBy />
      <OurProducts />
      <News />
      <ThoughtLeaderShip />
      <LetsTalk />
    </div>
  );
}
