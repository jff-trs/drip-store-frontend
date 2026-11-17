import { useState } from "react";

interface ProductOptionsProps {
  options: string[];
  shape: "square" | "circle";
  type: "text" | "color";
  radius?: string;
}

export default function ProductOptions({
  options,
  shape,
  type,
  radius = "4px",
}: ProductOptionsProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="flex gap-3 flex-wrap mt-2">
      {options.map((option) => {
        const isSelected = selectedOption === option;

        const baseClass =
          shape === "circle"
            ? "w-[31px] h-[31px] rounded-full"
            : `h-[46px] px-4 rounded-[${radius}]`;

        const typeClass =
          type === "color"
            ? ""
            : "bg-white text-dark-gray-2 text-[24px] flex items-center justify-center";

        return (
          <button
            key={option}
            onClick={() => setSelectedOption(option)}
            style={{
              backgroundColor: type === "color" ? option : undefined,
              borderRadius: shape === "circle" ? "50%" : radius,
            }}
            className={`
              ${baseClass} 
              ${typeClass} 
              border-2 transition-all duration-200
              ${isSelected ? "border-primary" : "border-light-gray-2 hover:border-dark-gray-3"}
            `}
          >
            {type === "text" ? option : ""}
          </button>
        );
      })}
    </div>
  );
}
