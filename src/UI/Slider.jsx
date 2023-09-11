import { useState } from "react";
import MultiRangeSlider from "./MultiRangeSlider";

const Slider = ({ id, children, className, unit, maxValue }) => {
    const [maxInput, setMaxInput] = useState(0);
    const [minInput, setMinInput] = useState(0);
  const rangeHandler = ({min, max}) => {
    setMaxInput(max);
    setMinInput(min);
  };
  return (
    <div className={`text-neutral-800 w-full ${className}`}>
      <label htmlFor={id} className="flex items-center justify-between px-2">
        {children}
      </label>
      <input type="hidden" value={maxInput} id={id + 'Max'}/>
      <input type="hidden" value={minInput} id={id + 'Min'}/>
      <MultiRangeSlider min={0} max={maxValue} onChange={rangeHandler} unit={unit}/>
    </div>
  );
};

export default Slider;
