interface FilterOption {
  text: string;
  value?: string;
}

interface FilterGroupProps {
  title: string;
  inputType: "checkbox" | "radio";
  options: FilterOption[];
  selectedValues: string[];
  onChange: (value: string) => void;
}

export default function FilterGroup({
  title,
  inputType,
  options,
  selectedValues,
  onChange,
}: FilterGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[14px] text-dark-gray-2 font-bold uppercase mb-1">
        {title}
      </h3>

      {options.map((option, index) => {
        const optionValue = option.value || option.text;
        const isChecked = selectedValues.includes(optionValue);

        return (
          <label
            key={index}
            className="flex items-center gap-3 text-[14px] text-dark-gray-3 cursor-pointer"
          >
            <input
              type={inputType}
              value={optionValue}
              checked={isChecked}
              onChange={() => onChange(optionValue)}
              className="w-[22px] h-[22px] accent-primary rounded cursor-pointer"
            />
            {option.text}
          </label>
        );
      })}
    </div>
  );
}
