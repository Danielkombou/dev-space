import React, { useState } from "react";
import { priceBtn } from "..";

function OurPricing() {
  const [price, setPrice] = useState(priceBtn[0].id);

  const togglePrices = (id) => {
    setPrice(id);
  };

  const activeContent = priceBtn.find((button) => button.id === price)?.content

  return (
    <div className="my-24">
      {/* Head section */}
      <div className="flex justify-between items-end mb-10">
        <div className="">
          <p className="text-3xl font-semibold mb-2">Our Pricing</p>
        </div>
        <div className={`bg-white  px-4 py-2 rounded-md flex gap-2 `}>
          {priceBtn.map((button) => (
            <button
              key={button.id}
              className={`${
                price === button.id
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black"
              } px-2 py-2 rounded focus:outline-none transition-all duration-300`}
              onClick={() => togglePrices(button.id)}
            >
              {button.buttonName}
            </button>
          ))}
        </div>
        {/* price grid section */}
        <div>
            {activeContent.map((period, index) => (
                <PricingContent
                key={index}
                {...period}
                 />
            ))}
        </div>
      </div>
    </div>
  );
}

const PricingContent = ({plan, money, last, head, check, options, start}) => {
  return (
    <div>
      <div>
        <button>{plan}</button>
        <p>
          {money}
          <sub>{last}</sub>
        </p>
      </div>
      <div>
        <div>
          <h1>{head}</h1>
          <div>
            <span>{check}</span>
            <p>{options}</p>
          </div>
        </div>
        <div>{start}</div>
      </div>
    </div>
  );
};

export default OurPricing;
