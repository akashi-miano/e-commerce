import {
  FaAffiliatetheme,
  FaArrowLeft,
  FaArrowUpFromBracket,
} from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Hero = () => {
  const [currentSLide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSLide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSLide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <section className="w-full">
      <div className="w-screen h-[630px] relative">
        <div
          className="w-[400vw] h-full flex items-center duration-1000"
          style={{ transform: `translateX(-${currentSLide * 100}vw)` }}
        >
          <img
            src={data[0]}
            alt="Image one"
            className="w-full h-full object-cover"
            loading="priority"
          />
          <img
            src={data[1]}
            alt="Image two"
            className="w-full h-full object-cover"
            loading="priority"
          />
          <img
            src={data[2]}
            alt="Image three"
            className="w-full h-full object-cover"
            loading="priority"
          />
          <img
            src={data[3]}
            alt="Image four"
            className="w-full h-full object-cover"
            loading="priority"
          />
        </div>
        <div className="arrow-wrapper absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 ">
          <FaArrowLeft
            className="border-2 border-gray-700 hover:bg-gray-700 hover:text-white duration-300 cursor-pointer focus:bg-gray-700 focus:text-white p-4  text-6xl "
            onClick={prevSlide}
          />
          <FaArrowRight
            className="border-2 border-gray-700 hover:bg-gray-700 hover:text-white duration-300 cursor-pointer focus:bg-gray-700 focus:text-white p-4  text-6xl"
            onClick={nextSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
