import React from "react";

 const Checkbox=({ label, Checked, handleChange ,className,id,disabled}) =>{

  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        disabled={disabled}
        id={id}
        name={label}
        value={id}
        className={`form-checkbox h-5 w-5 text-primary-600 ${className}`}
        checked={Checked}
        onChange={handleChange}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
}
export default Checkbox;