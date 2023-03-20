import React from "react";

function Dropdown({ options, onChange }) {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
