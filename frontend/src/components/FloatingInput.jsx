import React from "react";

const FloatingInput = ({type, placeholder, value, onChange, id}) => {
    let uniqueIdentifier = Math.random().toString(16).slice(2);

  return (
    <>
      <input
        type={type}
        className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
        id={`floatingInput${id}${uniqueIdentifier}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default FloatingInput;
