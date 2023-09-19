import React from "react";
import { useState } from "react";
import ProgressBar from "../../../UI/ProgressBar";
import { ChevronDown, ChevronUp } from "../../../assets/icons";

const RecipeInstructions = ({ totalSteps, steps, id }) => {
  const [step, setStep] = useState(1);
  const stepHandler = (direction) => {
    if (step === 1 && direction === -1) return;
    if (step === totalSteps && direction === 1) return;
    setStep((prev) => prev + direction);
  };
  return (
    <section className="flex flex-col items-center mb-9" id={id}>
      <h2 className="font-semibold text-xl mb-8 text-neutral-950">
        Step by step instructions
      </h2>
      <div className="flex flex-col sm:flex-row w-2/3">
        <ProgressBar step={step} totalSteps={totalSteps} />
        <div className="flex flex-col gap-8 text-neutral-800 ">
          <div className="">
            <h4 className="font-semibold mb-1 text-neutral-950">
              Instructions
            </h4>
            <p className="text-neutral-600">{steps[step - 1]?.step}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-neutral-950">
              Ingredients required
            </h4>
            <ul className="list-disc pl-8">
              {steps[step - 1]?.ingredients.length === 0 && (
                <p className="text-neutral-500">
                  no ingredients required for this step
                </p>
              )}
              {steps[step - 1]?.ingredients.map((e, index) => {
                return (
                  <li className="text-neutral-600" key={index}>
                    {e.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-neutral-950">Equipment</h4>
            <ul className="list-disc pl-8">
              {steps[step - 1]?.equipment.length === 0 && (
                <p className="text-neutral-500">
                  no equipment required for this step
                </p>
              )}
              {steps[step - 1]?.equipment.map((e, index) => {
                return (
                  <li className="text-neutral-600" key={index}>
                    {e.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row self-center mt-8 gap-2 sm:mt-0 ml-4">
          <button
            onClick={() => {
              stepHandler(-1);
            }}
            className="p-2 bg-secondary text-secondary-text rounded-lg"
          >
            <ChevronUp/>
          </button>
          <button
            onClick={() => {
              stepHandler(1);
            }}
            className="p-2 bg-secondary text-secondary-text rounded-lg"
          >
            <ChevronDown/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipeInstructions;
