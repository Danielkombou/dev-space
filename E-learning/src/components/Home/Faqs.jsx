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
    id: 2,
    question: "Can I enroll in multiples courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convinience.",
  },
  {
    id: 3,
    question: "Can I enroll in multiples courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convinience.",
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
];

function Faqs() {
  return (
    <div className="bg-white flex gap-10 px-10 py-10 mb-10">
      {/* Faqs text */}
      <div className="leading-snug">
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
      {/* Faqs items */}
      <div>
        <Questions />
      </div>
    </div>
  );
}

function QuestionHeader({ question, onClick, isActive }) {
  return (
    <div onClick={onClick} className={`border rounded p-4 cursor-pointer `}>
      <div className="flex flex-col ">
        <div className="flex justify-between py-4 items-center">
          <h2 className="font-semibold">{question} </h2>
          <button className=" bg-pink-100 rounded p-2 outline-none">
            {/* {isActive ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />} */}
            <Plus
              className={`transform ${
                isActive ? "rotate-45 opacity-100 " : "rotate-0"
              } transition-transform duration-300`}
            />
          </button>
        </div>
        <hr className={` flex ${isActive ? "block " : "hidden"}`} />
        <div className={`flex justify-between items-center bg-slate-100 p-4 rounded ${isActive ? "flex" : "hidden"}`}>
          <p>Enroll Process for Different Courses</p>
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="px-4 bg">
      {allFaqs.map((question, index) => {
        // some js here
        return (
          <div className="w-full grid grid-cols-1 gap-5" key={index}>
            <div className="" key={question.id}>
              <QuestionHeader
                question={question.question}
                onClick={() => handleQuestionClick(index)}
                isActive={activeIndex === index}
              />
              {/* <p>{question.answer}</p> */}
            </div>
            <div
              className={`overflow-hidden transition max-h-0 duration-300 ${
                activeIndex === index ? "max-h-[500px]" : ""
              }`}
            >
              {question.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
