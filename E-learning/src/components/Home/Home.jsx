import React, { useState } from "react";
import lines from "../../assets/Line.png";
import thunder from "../../assets/thunder.png";
import { Link } from "react-router-dom";
import imgContainer from "../../assets/container.png";
import GridBenefit from "./GridBenefit";
import CourseGrid from "./CourseGrid";
import TestimonialGrid from "./TestimonialGrid";
import OurPricing from "./OurPricing";
import Faqs from "./Faqs";
import SlideAnimate from "./SlideAnimate";
import { motion } from "framer-motion";
import ParallaxScrolling from "./ParallaxScrolling";

function BenefitContent() {
  const heroVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 }, repeat: Infinity },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={heroVariant}
      className="py-16 px-4 md:px-20 lg:px-40 xl:px-60"
    >
      <BenefitSection />
    </motion.div>
  );
}

const BenefitSection = () => {
  return (
    <div className="space-y-6 ">
      {/* Main title section */}
      <div className="relative flex items-center lg:w-[700px] bg-white py-2.5 px-1 rounded justify-center">
        <div className="absolute -top-4 -left-4">
          <img src={lines} className="w-8 h-8" />
        </div>
        <span className="p-2 bg-orange-100 rounded">
          <img src={thunder} className="w-6 h-6" />
        </span>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold ml-4 text-center md:text-left leading-snug mt-4 md:mt-0">
          <span className="text-orange-500">Unlock</span> your potential with
          instant
        </h1>
      </div>
      {/* Subtitle section */}
      <div className="flex flex-col items-center text-center">
        <p className="leading-loose text-lg md:text-xl lg:text-2xl">
          with internships, career orientation and jop offers.
        </p>
        <p className="text-sm md:text-base lg:text-lg text-gray-500">
          Learn form Industry Expert and Enhance Your Skills
        </p>
      </div>
      {/* Action button */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
        <button className="bg-orange-500 text-white py-2 px-4 rounded">
          Explore internships
        </button>
        <button className="bg-white rounded py-2 px-4">View pricing</button>
      </div>
    </div>
  );
};

const BenefitImage = () => {
  return (
    <div className="rounded-md ">
      <img src={imgContainer} className="object-cover w-full h-full" />
    </div>
  );
};

const Home = () => {
  return (
    <div className="px-20 overflow-hidden">
      <BenefitContent />
      {/* <SlideAnimate direction="top"> */}
      <ParallaxScrolling>
        <BenefitImage />
      </ParallaxScrolling>
      {/* </SlideAnimate> */}
      <SlideAnimate direction="left">
        <GridBenefit />
      </SlideAnimate>
      <SlideAnimate direction="top">
        <CourseGrid />
      </SlideAnimate>
      <SlideAnimate direction="right">
        <TestimonialGrid />
      </SlideAnimate>
      <OurPricing />
      <SlideAnimate direction="top">
        <Faqs />
      </SlideAnimate>
    </div>
  );
};

export default Home;
