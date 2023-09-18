import React from "react";
import { useState } from "react";

const ProgressBar = ({ step, totalSteps }) => {
  const numToShow = 3; // Number of steps to show at a time

  // Calculate the range of steps to show
  const start = Math.max(1, step - Math.floor((numToShow - 1) / 2));
  const end = Math.min(totalSteps, start + numToShow - 1);

  const visibleSteps = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <ul className="flex w-full sm:flex-col sm:h-[250px] sm:w-max justify-between relative my-8 sm:my-0 sm:mr-16 sm:-left-1 min-w-[100px]">
      <div className="w-11/12 left-2 h-1 sm:h-[250px] sm:w-1 bg-secondary absolute top-2.5 sm:top-0 -z-10"></div>
      {visibleSteps.map((e, index) => (
        <li
          key={index}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-neutral-400"
        >
          <div className="w-6 h-6 grid place-content-center rounded-full bg-primary text-primary-text">
            {e}
          </div>
          <p className={`${step === e && "font-medium text-black"}`}>
            Step {e}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProgressBar;
