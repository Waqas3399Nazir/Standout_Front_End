import React from "react";

type Props = {
  heading: string;
};

const FormHeading = ({ heading }: Props) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <hr className="bg-[#EA001E] w-[03%] h-[0.5rem]" />
      <h1 className="text-formHeading w-[70%] text-center  text-white font-bold uppercase font-heading items-center">
        {heading}
      </h1>
      <hr className="bg-[#EA001E] w-[03%] h-[0.5rem]" />
    </div>
  );
};

export default FormHeading;
