import { useState } from 'react';

const HeightSlider = () => {
  const [unit, setUnit] = useState('cm');
  const [valueCM, setValueCM] = useState(170);
  const [valueFT, setValueFT] = useState(5);
  const [valueIN, setValueIN] = useState(9);

  const handleSliderChange = (e) => {
    if (unit === 'cm') {
      const totalInches = e.target.value / 2.54; // Convert cm to inches
      setValueCM(e.target.value);
      setValueFT(Math.floor(totalInches / 12)); // Calculate feet
      setValueIN(Math.round(totalInches % 12)); // Calculate inches
    } else {
      const totalCM = e.target.value * 2.54; // Convert ft/in to cm
      setValueFT(Math.floor(totalCM / 30.48)); // Calculate feet
      setValueIN(Math.round(((totalCM / 30.48) - Math.floor(totalCM / 30.48)) * 12)); // Calculate inches
      setValueCM(totalCM); // Set value in cm
    }
  }

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  return (
    <div className="w-3/4 mx-auto sm:mt-3 mt-5 font-nunito-sans relative">
        <div className="flex mt-1 ml-40 mb-10">
            <button
            className={`px-4 py-2 rounded-lg mr-1 ${
                unit === 'cm' ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-600'
            }`}
            onClick={() => handleUnitChange('cm')}
            >
            cm
            </button>
            <button
            className={`px-4 py-2 rounded-lg ml-1 ${
                unit === 'ft' ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-600'
            }`}
            onClick={() => handleUnitChange('ft')}
            >
            ft
            </button>
        </div>
        <div className="flex justify-center items-center mb-1 mt-6">
            <span className="text-lg font-bold font-nunito-sans cursor-default">
            {unit === 'cm' ? `${valueCM} cm` : `${valueFT} ft ${valueIN} in`}
            </span>
        </div>
            <input
                type="range"
                min={unit === 'cm' ? "140" : "55"}
                max={unit === 'cm' ? "230" : "90"}
                value={unit === 'cm' ? valueCM : valueFT * 12 + valueIN}
                onChange={handleSliderChange}
                className="w-full sm:h-5 h-7 rounded-lg overflow-hidden appearance-none bg-gray-300 focus:outline-none cursor-pointer"
                style={{'--thumb-color': '#5a67d8'}}
            />
            {/* Wertanzeige über dem Slider */}
            <div className="flex justify-between text-xs">
                <span className='font-nunito-sans font-bold cursor-default'>{unit === 'cm' ? '140 cm' : '4ft 7in'}</span>
                <span className='font-nunito-sans font-bold cursor-default'>{unit === 'cm' ? '230 cm' : '7ft 6in'}</span>
            </div>       
        
        </div>
  );
};

export default HeightSlider;
