import { DNA } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="absolute flex justify-center items-center h-full w-full backdrop-blur-xs bg-black/50">
      <DNA
        height="80"
        width="80"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
