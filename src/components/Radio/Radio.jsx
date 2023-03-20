import React from "react";
function RadioComponent({ optionsvalue,handleOptionChange ,selectedOption}) {
  return (
    <div>
      {optionsvalue.map((option) => (
        <label
          key={option}
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input
            type="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            value={option}
            checked={selectedOption === option}
            onChange={() =>handleOptionChange(option)}
          />
          <span className="ml-2 text-black-700">{option} </span>
        </label>
      ))}
    </div>
  );
}

export default RadioComponent;
