import React from "react";



interface TwButtonProps {
  look?:
    | "primary-filled"
    | "primary-outlined"
    | "primary-minimal"
    | "secondary-filled"
    | "secondary-outlined"
    | "secondary-minimal"
    | "tertiary-filled"
    | "tertiary-outlined"
    | "tertiary-minimal";

  title: string;
}

const getButtonClasses = (look: string) => {
  switch (look) {
    case "primary-filled":
      return "bg-blue-500 text-white hover:bg-white hover:text-blue-500 transition border border-blue-500";
    case "primary-outlined":
      return "border border-blue-500 text-blue-500";
    case "primary-minimal":
      return "text-blue-500";
    case "secondary-filled":
      return "bg-indigo-700 text-white";
    case "secondary-outlined":
      return "border border-indigo-700 text-indigo-700";
    case "secondary-minimal":
      return "text-indigo-700";
    case "tertiary-filled":
      return "bg-slate-600 text-white";
    case "tertiary-outlined":
      return "border border-slate-600 text-slate-600";
    case "tertiary-minimal":
      return "text-slate-600";
    default:
      return "bg-blue-500 text-white";
  }
};

const TwButton: React.FC<TwButtonProps> = ({
  look = "primary-filled",
  title,
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 relative rounded-md ${getButtonClasses(look)}`}
      {...props}
    >
      {title}
      </button>
  );
};

export default TwButton;
