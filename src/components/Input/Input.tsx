import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      value,
      onChange,
      className,
      placeholder,
      icon,
      iconAlignment = "right",
      isValid,
      label,
      errorMessage,
      ...props
    }: {
      value?: string;
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
      className?: string;
      placeholder?: string;
      icon?: React.ReactNode;
      iconAlignment?: "left" | "right";
      isValid?: boolean;
      label?: string;
      errorMessage?: string;
    } & React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div>
        {label && (
          <label className="text-sm md:text-base dark:text-gray-200">
            {label}
          </label>
        )}
        <div className="relative flex flex-wrap items-stretch w-full mt-1">
          <input
            ref={ref}
            value={value}
            onChange={onChange}
            className={`relative w-full bg-gray-100 dark:bg-gray-900 dark:text-white rounded-md border dark:border-gray-500 outline-none placeholder-gray-400 dark:placeholder-gray-500 py-3 px-2 ${
              iconAlignment === "left" && isValid
                ? "px-10"
                : iconAlignment === "left"
                ? "pl-10"
                : ""
            } ${className}`}
            placeholder={placeholder}
            {...props}
          />

          {icon && (
            <Icon
              className={`text-gray-400 ${
                iconAlignment === "right" ? "right-0" : "left-0"
              }`}
              icon={icon}
            />
          )}

          {icon && isValid && iconAlignment === "left" && (
            <Icon
              className="right-0"
              icon={<i className="text-green-700 fas fa-check"></i>}
            />
          )}
        </div>
      </div>
    );
  }
);

const Icon = ({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`absolute z-10 py-1 px-5 w-8 h-full leading-snug rounded text-base font-normal text-center flex items-center justify-center ${className}`}
    >
      {icon}
    </span>
  );
};

export default Input;
