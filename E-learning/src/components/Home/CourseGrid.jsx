import React, { useState } from "react";
import { courseGrid } from "..";

function CourseGrid() {
  const [viewAll, setViewAll] = useState(false);

  const toggleCourses = () => {
    setViewAll(!viewAll);
  };

  return (
    <div className="my-12">
      <div className="flex justify-between items-end mb-10">
        <div className="">
          <p className="text-3xl font-semibold mb-2">Our Courses</p>
          <span className="text-gray-500">
            Explore the opprtunities that make instant the perfect solution for
            connecting universities to companies
          </span>
        </div>
        <div className="bg-slate-50 hover:bg-slate-100 transition px-4 py-2 rounded-md">
          <button className="" onClick={toggleCourses}>
            {viewAll ? "Hide" : "View all"}
          </button>
        </div>
      </div>
      {/* Grid section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4 ">
        {(viewAll
          ? courseGrid
          : courseGrid.slice(0, 6)).map((course, index) => {
              return (
                <div key={index} className="bg-slate-50 p-5 flex flex-col gap-4 rounded justify-between ">
                  <div className="">
                    <img
                      src={course.image}
                      className="object-cover w-full h-72 rounded"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <button className="border rounded bg-slate-100 text-gray-600 p-1">
                        {course.btn1}
                      </button>
                      <button className="border p-1 text-gray-600 rounded bg-slate-100">
                        {course.btn2}
                      </button>
                    </div>
                    <div>
                      <h4 className="font-semibold">{course.stakeholder}</h4>
                    </div>
                  </div>
                  <div className="flex flex-col mb-2 justify-between leading-5">
                    <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                    <p className="text-sm text-gray-500">{course.desc}</p>
                  </div>
                  <div className="flex items-center p-2 bg-slate-200 justify-center rounded-md">
                    <button>{course.enroll}</button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default CourseGrid;
