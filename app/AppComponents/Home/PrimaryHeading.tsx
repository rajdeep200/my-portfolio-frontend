import React from "react";

interface PrimaryHeadingProps {
  firstTitle: string;
  secondTitle: string;
  textCentered?: boolean;
}

const PrimaryHeading: React.FC<PrimaryHeadingProps> = ({
  firstTitle,
  secondTitle,
  textCentered
}) => {
  return (
    <h1 className={`text-[52px] lg:text-[70px] xl:text-[90px] flex flex-col justify-center items-center xl:${ textCentered ? 'items-center' : 'items-start'} leading-[55px] lg:leading-[65px] xl:leading-[75px]`}>
      <span className="font-poppins font-extrabold text-white">
        {firstTitle}
      </span>
      <span className="font-poppins font-extrabold text-zinc-600">
        {secondTitle}
      </span>
    </h1>
  );
};

export default PrimaryHeading;
