import React, { useState } from "react";
import { testimonials } from "..";

function TestimonialGrid() {
  const [writeAll, setWriteAll] = useState(false);

  const toggleTestimonials = () => {
    setWriteAll(!writeAll);
  };

  return (
    <div className="my-12">
      <div className="flex justify-between items-end mb-10">
        <div className="">
          <p className="text-3xl font-semibold mb-2">Our Testimonials</p>
          <span className="text-gray-500">
            Have more info on our great testimonials and success stories.
          </span>
        </div>
        <div className="bg-slate-50 hover:bg-slate-100 transition px-4 py-2 rounded-md">
          <button className="" onClick={toggleTestimonials}>
            {writeAll ? "Hide" : "View all"}
          </button>
        </div>
      </div>
      {/* Grid section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {(writeAll ? testimonials : testimonials.slice(0, 4)).map(
          (testimonial, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded"
              >
                <div className="text-gray-500 mb-4 p-4 bg-slate-50">{testimonial.text}</div>
                  <hr />
                <div className="bg-slate-100 p-4 flex items-center justify-between rounded"> 
                  <div className="flex items-center gap-4">
                        <img
                          src={testimonial.profile}
                          className="object-cover w-10 h-10"
                          />
                      <h1>{testimonial.userName}</h1>
                          </div> 
                  <button className="bg-slate-200 rounded">{testimonial.all}</button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default TestimonialGrid;
