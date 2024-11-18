import { useState } from "react";
import { gridBenefits } from "..";

const GridBenefit = () => {
  const [viewAll, setViewAll] = useState(false);

  const toggleBenefits = () => {
    setViewAll(!viewAll);
  };

  return (
    <div className="my-12">
      <div className="flex justify-between items-end mb-10">
        <div className="">
          <p className="text-3xl font-semibold mb-2">Benefits</p>
          <span className="text-gray-500">
            Instant distinguishes herself from the others by offering some
            unique facilities.
          </span>
        </div>
        <div className="bg-slate-50 hover:bg-slate-100 transition px-4 py-2 rounded-md">
          <button className="" onClick={toggleBenefits}>
            {viewAll ? "Hide" : "View all"}
          </button>
        </div>
      </div>
      {/* Grid section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {(viewAll ? gridBenefits : gridBenefits.slice(0, 6)).map(
          (item, index) => {
            // some js here
            return (
              <div key={index} className="bg-white p-5 rounded-md flex flex-col justify-between gap-4">
                <div className="flex items-center justify-end">
                  <span className="text-4xl font-bold">{item.number}</span>
                </div>
                <div>
                  <h2 className="font-semibold mb-4">{item.heading}</h2>
                  <p className="text-gray-500">{item.description}</p>
                </div>
                <div className="flex items-center justify-end">
                  <span className="bg-slate-50 p-2 rounded cursor-pointer">
                    <img
                      src={item.icon}
                      alt={item.number}
                      className="w-6 h-6 object-cover"
                    />
                  </span>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default GridBenefit;
