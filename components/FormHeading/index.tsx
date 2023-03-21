import React from "react";

type Props = {
  heading: string;
};

const FormHeading = ({ heading }: Props) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <hr className="bg-[#EA001E] sm:w-[03%] h-[0.5rem]" />
      <h1 className=" text-[1.25rem] sm:text-[1.5rem] lg:text-formHeading w-[100%] sm:w-[85%] lg:w-[70%] text-center  text-white font-bold uppercase font-heading items-center">
        {heading}
      </h1>
      <hr className="bg-[#EA001E] sm:w-[03%] h-[0.5rem]" />
    </div>
  );
};

export default FormHeading;
