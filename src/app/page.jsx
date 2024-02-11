"use client";
import Image from "next/image";
import styles from "./home.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlide from "@/Reuseable/customslider";
import Slider from "react-slick";
import { useState,useRef } from "react";
import CustomArrow from "@/Reuseable/customarrow";

const elastic = [
  {
    id: 1,
    title: "Bright Holi Festival Of Colors",
    label: "folk festival of color and Annual spring Festival",
    imageUrl: "/slider/slider1.jpg",
  },
  {
    id: 2,
    title: "Krisna Gaura Purnima Celebration",
    label: "one of the mail holiday in gaura purnima",
    imageUrl: "/slider/slider2.jpg",
  },
  {
    id: 4,
    title: "The Incredible Temples Of Pattadakal",
    label: "the famous complex of ancient indian temples",
    imageUrl: "/slider/slider3.jpg",
  },
];
// const CustomSlide = (props) => {
//   const { index, imgurl, title, label } = props;
//   return (
//     <>
//       {/* <div className=" bg-blend-screen w-full z-0"> */}
//       <div key={index} className="relative  sm:h-[100vh] h-[60vh]    w-full">
//         <div
//           className={`absolute insert-0   top-0 z-10 sm:h-[100vh] h-[60vh]   overflow-hidden w-full bg-no-repeat bg-cover flex flex-col justify-center items-center  `}
//           style={{
//             backgroundImage: `url(${imgurl})`,
//             opacity: "60%",
//           }}
//         ></div>
//         <div className="absolute  bg-transparent z-10 sm:h-[100vh] h-[50vh] font-serif  overflow-hidden w-full bg-no-repeat bg-cover flex flex-col justify-center items-center ">
//           <h2 className=" font-bold  text-white sm:text-[4rem] leading-tight text-2xl flex justify-center sm:p-0  p-5 z-20  ">
//             {title}
//           </h2>
//           <p className="sm:p-10 hidden sm:flex">{label}</p>
//           <button className="bg-red-500 bg:hover sm:w-[10rem] p-2">
//             Read More
//           </button>
//         </div>
//       </div>
//       {/* </div> */}
//     </>
//   );
// };
 

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
    appendDots: (dots) => {
      const handleDotClick = (index) => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(index);
        }
      };
      return (
        <div
          style={{
            position: "absolute",
            bottom: "0px",
          }}
        >
          <ul className="p-5 border-1">
            {dots.map((dot, index) => (
              <li
                className={`w-[10px] h-[10px]   border rounded-full hover:bg-red-400 ${
                  index === currentSlide ? "bg-red-400" : ""
                }`}
                key={dot.key}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </ul>
        </div>
      );
    },
  };
  const goToSlide = () => {
    if (sliderRef.current) {
      direction === "prev" ? sliderRef.current.slickPrev() : sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          {elastic.map((item) => (
            <CustomSlide
              key={item.id}
              title={item.title}
              label={item.label}
              imgurl={item.imageUrl}
            />
          ))}
        </Slider>
        <CustomArrow direction="prev" onClick={goToSlide}/>
        <CustomArrow direction="next" onClick={goToSlide}/>
 
      </div>
    </>
  );
};

export default Home;
