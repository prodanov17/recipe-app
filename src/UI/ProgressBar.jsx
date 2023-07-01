import React from "react";
import { useState } from "react";

const ProgressBar = ({ step }) => {
  const [steps, setSteps] = useState([1, 2, 3]);
  if (step > steps[2]) setSteps((prev) => [...prev.map((e) => e + 3)]);
  if (step < steps[0]) setSteps((prev) => [...prev.map((e) => e - 3)]);
  return (
    <ul className="flex w-full sm:flex-col sm:h-[250px] sm:w-max justify-between relative my-8 sm:my-0 sm:mr-16 sm:-left-1 min-w-[100px]">
      <div className="w-11/12 left-2 h-1 sm:h-[250px] sm:w-1 bg-secondary absolute top-2.5 sm:top-0 -z-10"></div>
      <li className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-neutral-400">
        <div className="w-6 h-6 grid place-content-center rounded-full bg-primary text-primary-text">
          {steps[0]}
        </div>
        <p className={`${step === steps[0] && "font-medium text-black"}`}>
          Step {steps[0]}
        </p>
      </li>
      <li className="flex gap-6 flex-col sm:flex-row items-center sm:items-start text-neutral-400">
        <div className="w-6 h-6 grid place-content-center rounded-full bg-primary text-primary-text">
          {steps[1]}
        </div>
        <p className={`${step === steps[1] && "font-medium text-black"}`}>
          Step {steps[1]}
        </p>
      </li>
      <li className="flex gap-6 flex-col sm:flex-row items-center sm:items-end text-neutral-400">
        <div className="w-6 h-6 grid place-content-center rounded-full bg-primary text-primary-text">
          {steps[2]}
        </div>
        <p className={`${step === steps[2] && "font-medium text-black"}`}>
          Step {steps[2]}
        </p>
      </li>
    </ul>
  );
};

export default ProgressBar;
