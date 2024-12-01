import { DollarSign, Eye, Phone, TrendingUp } from "lucide-react";
import CirclePattern from "../CirclePatter";
import { FaUsers } from "react-icons/fa";
import { TfiAngleDown } from "react-icons/tfi";
const HeroContent = () => {
  return (
    <div className="relative z-10 ">
      <div className="text-center space-y-8">
        <HeroTitle title="From Concept to Code" subtitle="We Make IT Happen" />

        <HeroDescription text="We Help Brands And B2B Enterprises Build Amazing Websites That Convert Their Visitors To Paying Customers." />

        <div className="flex justify-center gap-4 pt-4">
          <button className=" bg-red-600 flex text-white hover:bg-red-700 hover:scale-10 px-8 py-3 rounded-full font-semibold shadow-xl shadow-red-900">
          <Phone className="me-4" />Lets have a call
        </button>
        </div>

        <ScrollIndicator />
      </div>

      <HeroIcons />
    </div>
  );
};

export default HeroContent;

const HeroTitle = ({ title, subtitle }) => {
  return (
    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
      {title}
      <span className="block text-red-500 mt-3 text-5xl sm:text-7xl">
        {subtitle}
      </span>
    </h1>
  );
};

const HeroDescription = ({ text }) => {
  return (
    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">{text}</p>
  );
};

const HeroIcons = () => {
  return (
    <>
      <div className="absolute top-72 lg:top-48 lg:left-40 -z-10">
        <div className="relative">
          <div className="bg-red-900 p-4 rounded-full shadow-inner shadow-red-100">
            <FaUsers className="lg:text-7xl text-white" />
          </div>
          <CirclePattern className="-rotate-[72deg] top-0 -left-24" />
        </div>
      </div>
      <div className="absolute top-96 lg:top-8 right-0 opacity-50 lg:right-8 text-white">
        <div className="relative">
          <div className="absolute right-20 bg-red-900 p-4 rounded-full shadow-inner shadow-red-100">
            <TrendingUp className="h-8 w-8" />
          </div>
          <div className="absolute right-40 top-16  bg-red-900/60 p-5 shadow-inner shadow-red-100 rounded-full">
            <DollarSign className="w-3 h-3 text-white opacity-80" />
          </div>
          <div className="absolute right-40 top-1 shadow-inner shadow-red-100  bg-red-900 p-4 rounded-full ">
            <Eye className="h-4 w-4" />
          </div>
        </div>
        <CirclePattern className="rotate-[72deg] top-0 -left-4" />
      </div>
    </>
  );
};

const ScrollIndicator = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center text-white gap-4 ">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce mt-2" />
        </div>
        <div className="relative flex flex-col items-center ">
          <div className="w-[1px] h-40 bg-gray-600/40"></div>
          <TfiAngleDown className="absolute -bottom-3 text-gray-600/50" />
        </div>
      </div>
    </div>
  );
};
