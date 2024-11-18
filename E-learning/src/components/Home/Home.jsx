import React, { useState } from "react";
import lines from "../../assets/Line.png";
import thunder from "../../assets/thunder.png";
import { Link } from "react-router-dom";
import imgContainer from "../../assets/container.png"
import GridBenefit from "./GridBenefit";
import CourseGrid from "./CourseGrid";
import TestimonialGrid from "./TestimonialGrid";

function BenefitContent() {
  return (
    <div className="py-16 px-4 md:px-20 lg:px-40 xl:px-60">
      <BenefitSection />
    </div>
  );
}

const BenefitSection = () => {
  return (
    <div className="space-y-6">
      {/* Main title section */}
      <div className="relative flex items-center bg-white p-4 rounded justify-center">
        <div className="absolute -top-4 -left-4">
          <img src={lines} className="w-8 h-8" />
        </div>
        <span className="p-2 bg-orange-100 rounded">
          <img src={thunder} className="w-6 h-6" />
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ml-4 text-center md:text-left leading-snug">
          <span className="text-orange-500">Unlock</span> your potential with
          instant
        </h1>
      </div>
      {/* Subtitle section */}
      <div className="flex flex-col items-center">
        <p className="leading-loose text-2xl ">
          with internships, career orientation and jop offers.
        </p>
        <p className="text-sm text-center">
          Learn form Industry Expert and Enhance Your Skills
        </p>
      </div>
      {/* Action button */}
      <div className="flex justify-center items-center mt-4 gap-4">
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
    <div className="rounded-md " >
      <img src={imgContainer} className="object-cover w-full h-full" />
    </div>
  );
};





const Home = () => {
  return (
    <div className="px-20">
      <BenefitContent />
      <BenefitImage />
      <GridBenefit />
      <CourseGrid />
      <TestimonialGrid />
    </div>
  );
};

export default Home;
