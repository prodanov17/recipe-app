import React, { useState } from "react";

const Slider = ({ id, children, className, unit, maxValue }) => {
  const [width, setWidth] = useState(50);
  const [rangeValue, setRangeValue] = useState(maxValue * (width / 100));
  const rangeHandler = (e) => {
    setWidth(e.target.value);
    setRangeValue(() => parseInt(maxValue * (e.target.value / 100)));
  };
  return (
    <div className={`text-neutral-800 w-full ${className}`}>
      <label htmlFor={id} className="flex items-center justify-between px-2">
        {children}
        <p>
          {rangeValue} {unit}
        </p>
      </label>
      <input
        id={id}
        name={id}
        type="range"
        onChange={rangeHandler}
        // onClick={rangeHandler}
        value={width}
        className="custom-slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-secondary"
      />
    </div>
  );
};

export default Slider;
