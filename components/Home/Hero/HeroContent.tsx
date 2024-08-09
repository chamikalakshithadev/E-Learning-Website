import React from "react";

const HeroContent = () => {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
        Best Online Platform For Education.
      </h1>
      <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque illum
        nostrum aut voluptatum repellendus commodi omnis cum possimus nam
        ducimus.
      </p>
      <div className="mt-8 flex items-center space-x-4">
        <button className="button__cls bg-green-700 hover:bg-green-900">
          Get Started
        </button>
        <button className="button__cls bg-yellow-700 hover:bg-yellow-900">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
