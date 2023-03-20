import React from "react";

const Button = ({
  className = "",
  variant = "",
  size = "md",
  onClick = () => {},
  value = "",
}) => {
  const variantHandler = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white";
      case "secondary":
        return "bg-secondary text-white";
      case "success":
        return "bg-green-500 text-white";
      case "danger":
        return "bg-red-500 text-white";
      case "primary-outline":
        return "border-primary border text-primary";
      case "transparent":
        return "bg-transparent text-dark";
      default:
        return variant;
    }
  };
  const sizeHandler = () => {
    switch (size) {
      case "sm":
        return "px-2 py-0.5";
      case "md":
        return "px-5 py-1";
      case "lg":
        return "px-6 py-2";
      default:
        return size;
    }
  };
  return (
    <button
      className={
        "rounded p-2" +
        " " +
        variantHandler() +
        " " +
        className +
        " " +
        sizeHandler()
      }
      onClick={onClick}
      value={value}
    >
      {value}
    </button>
  );
};

export default Button;
