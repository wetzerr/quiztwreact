import React, { useState } from 'react';

 const VerticalRangeSlider = () => {
 const [value, setValue] = useState(0);

 const handleChange = (event) => {
    setValue(event.target.value);
 };


 const steps = 5; // Anzahl der Schritte
 const sliderHeight = 208; // Höhe des Sliders in Pixeln
 const stepHeight = sliderHeight / (steps - 1); // Höhe eines Schritts

 return (
    <div>
        <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={value}
            onChange={handleChange}
            className="absolute w-52 h-32 mt-16 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 z-30"
            style={{'--thumb-color': '#5a67d8', transform: 'rotate(90deg)'}}
        />
        <div className="text-center">{value}</div>
        <div class="flex flex-row mt-40 ml-10 sm:h-0 h-4 rotate-90 text-lg">
            <span className='sm:ml-0 ml-2 mt-6 sm:mt-1'>|</span>
            <span className='sm:ml-[44px] ml-11 mt-6 sm:mt-1'>|</span>
            <span className='sm:ml-[44px] ml-11 mt-6 sm:mt-1'>|</span>
            <span className='sm:ml-[44px] ml-10 mt-6 sm:mt-1'>|</span>
            <span className='sm:ml-[44px] ml-9 mt-6 sm:mt-1'>|</span>
        </div>
        <div class="flex flex-col ml-32 sm:h-0 h-4 text-lg">
            <span className='sm:ml-[44px] ml-20 mt-6 sm:mt-1'>Figurbetont</span>
            <span className='sm:ml-[44px] ml-11 mt-6 sm:mt-1'>Etwas Enger</span>
            <span className='sm:ml-[44px] ml-11 mt-6 sm:mt-1'>Regulär</span>
            <span className='sm:ml-[44px] ml-10 mt-6 sm:mt-1'>etwas Lockerer</span>
            <span className='sm:ml-[44px] ml-9 mt-6 sm:mt-1'>Oversized</span>
        </div>
    </div>
 )
}

export default VerticalRangeSlider;