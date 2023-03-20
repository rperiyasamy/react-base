import { CheckIcon, XMarkIcon ,PencilIcon, TrashIcon} from "@heroicons/react/20/solid";
import React from "react";

const Badge = ({ value, variant }) => {
  let textVisibility = false;
  const batchTheme = () => {
    switch (variant) {
      case "GrayBlue":
        return "bg-gray-100 text-primary px-2 py-0 ";
      case "GrayGreen":
        return "bg-gray-100 text-green-500 px-2 py-0 ";
      case "GrayYellow":
        return "bg-gray-100 text-yellow-500 px-2 py-0 ";
      case "CircleSuccess":
        textVisibility = true;
        return "bg-green-100 text-green-500 rounded-full w-6 h-6 flex items-center justify-center ";
      case "CircleFail":
        textVisibility = true;
        return "bg-red-100 text-red-500 rounded-full w-6 h-6 flex items-center justify-center ";
      case "PencilIcon":
        textVisibility = true;
        return "w-6 cursor-pointer";
      case "TrashRed":
        textVisibility = true;
        return "text-red-500 w-6 h-6 flex items-center justify-center cursor-pointer"; 
      default:
        return variant;
    }
  };
  const IconHandler = () => {
    if (variant === "CircleSuccess") {
      return <CheckIcon className="w-4  " />;
    } else if (variant === "CircleError") {
      return <XMarkIcon className="w-4" />;
    } else if (variant === "PencilIcon") {
      return <PencilIcon/>;
    }   else if (variant === "TrashRed") {
         return <TrashIcon/>;
    }
  };
  return (
    <div className={`rounded text-sm ${batchTheme()}`}>
      {textVisibility ? IconHandler() : value}
    </div>
  );
};

export default Badge;
