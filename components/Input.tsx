import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <div>
        <input
          onChange={onChange}
          type={type}
          value={value}
          id={id}
          className="block rounded-md px-6 pt-6 pb-1 w-full  text-black text-md bg-white appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
        />
        <label
          className="absolute text-md text-teal-950 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-teal-950 peer-focus:font-semibold"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Input;
