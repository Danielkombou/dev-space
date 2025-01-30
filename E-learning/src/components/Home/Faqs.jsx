import React, { useState } from "react";
import { ArrowRight, Plus, X } from "lucide-react";

const allFaqs = [
  {
    id: 1,
    question: "Can I enroll in multiples courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convinience.",
  },
  {
    question: "What kind of support can I expect from instructors?",
    answer:
      "Our instructors provide timely support through live sessions, emails, and a dedicated Q&A section.",
  },
  {
    question:
      "Are the courses self-paced or do they have specific start and end dates?",
    answer:
      "Courses are designed to be self-paced, but they also include suggested schedules to help you stay on track.",
  },
  {
    id: 4,
    question: "Can I enroll in multiples courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convinience.",
  },
  {
    id: 5,
    question: "Can I enroll in multiples courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convinience.",
  },
  {
    id: 5,
    question: "Are there any prerequisites for the course?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convinience.",
  },
  {
    id: 5,
    question: "Can I download the course material for offline access?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convinience.",
  },

];

const FaqHearder = () => {
  return (
    <div className="leading-snug p-2">
      <h1 className="font-semibold text-xl md:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="text-slate-600 pb-4">
        Still you have any questions? Contact our team via
        support@skillbridge.com
      </p>
      <button className="border rounded p-2 font-semibold">
        See all FAQ's
      </button>
    </div>
  );
};

const FaqItem = ({ question, answer, isActive, onToggle }) => {
  return (
    <div className="border rounded-lg px-6 py-8 shadow-sm ">
      {/* Question and Toggle */}
      <div className="flex justify-between items-center cursor-pointer">
        <p className="font-medium">{question}</p>
        <div className="bg-orange-100 px-2.5 py-0.5 rounded-md">

        <button
          className={` transform transition-transform ${
            isActive ? "rotate-45" : "rotate-0"
          } text-3xl duration-300`}
          onClick={onToggle}
        >
          +
        </button>
          </div>
      </div>

      {/* Answer Section */}
      {isActive && (
        <div className="mt-4">
          <hr className="py-4"/>
          <p className="text-gray-700 pb-4">{answer}</p>
          <div className="mt-2 flex items-center justify-between rounded p-4 bg-slate-200">
            <p>Enrollment Process for Different Courses</p>
          <div className="rounded-full bg-white p-2 cursor-pointer">
            <ArrowRight className="w-5 h-5" />
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Check and toggle the active index
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white flex flex-col md:flex-row gap-2 px-8 py-14 mb-20">
      <FaqHearder />

      <div className="grid grid-cols-1 gap-4 flex-2 ">
        {allFaqs.map((faq, index) => {
          // some js here
          return (
            <div key={index} className="">
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isActive={activeIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faqs;
