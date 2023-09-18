import React from "react";
import LineFill from "../../../UI/LineFill";

const CaloricBreakdown = ({ calories, carbs, protein, fat, breakdown }) => {
  return (
    <div className="w-min min-w-[300px] lg:min-w-[250px] flex flex-col gap-4 sm:self-start lg:self-center self-center ">
      <div>
        <div className="w-full flex justify-between">
          <p>calories</p>
          <p>{parseInt(calories)} kcal</p>
        </div>
        <LineFill fill={100} />
      </div>
      <div>
        <div className="w-full flex justify-between">
          <p>carbs</p>
          <p>{parseInt(carbs)} g</p>
        </div>
        <LineFill fill={breakdown.percentCarbs} color="bg-red-500" />
      </div>
      <div>
        <div className="w-full flex justify-between">
          <p>protein</p>
          <p>{parseInt(protein)} g</p>
        </div>
        <LineFill fill={breakdown.percentProtein} color="bg-purple-500" />
      </div>
      <div>
        <div className="w-full flex justify-between">
          <p>fat</p>
          <p>{parseInt(fat)} g</p>
        </div>
        <LineFill fill={breakdown.percentFat} color="bg-yellow-500" />
      </div>
    </div>
  );
};

export default CaloricBreakdown;
