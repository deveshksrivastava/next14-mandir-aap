"use client";
import Image from "next/image";
import styles from "./home.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlide from "@/Reuseable/customslider";
import Slider from "react-slick";
import { useState, useRef } from "react";
import CustomArrow from "@/Reuseable/customarrow";
import { FaEllipsisH } from "react-icons/fa";
import { MdFrontHand } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";

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
  const goToSlide = (direction) => {
    if (sliderRef.current) {
      direction === "prev"
        ? sliderRef.current.slickPrev()
        : sliderRef.current.slickNext();
    }
  };
  const cardData = [
    {
      icon: MdFrontHand,
      desc: "Sed do eiusm od tempor",
      title: "Card 1",
    },
    {
      icon: MdFrontHand,
      desc: "Sed do eiusm od tempor",
      title: "Card 2",
    },
    {
      icon: GiByzantinTemple,
      desc: "Sed do eiusm od tempor",
      title: "Card 3",
    },
    {
      title: "Card 4",
      desc: "Sed do eiusm od tempor",
      icon: GiByzantinTemple,
    },
  ];


  const [isHovered, setIsHovered] = useState(false);
  const iconRef = useRef(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const CustomCard = ({ data }) => {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-20 px-5 gap-5 items-center w-full ">
          {data.map((item, index) => (
            <div
              key={index}
              className="sm:p-4 p-2  w-[100%]   bg-white border text-black "
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="min-w-full  items-center text-center flex flex-col gap-10 ">
                <item.icon
                  className={`text-[2rem]   ${
                    isHovered === index ? "fill-gray-200" : "fill-yellow-400"
                  } `}
                  ref={iconRef}
                />
                <div>
                <h1 className="sm:text-[2rem] text-2xl font-bold">{item.title}</h1>
                <p className="text-gray-300">{item.desc}</p>
                </div>
                <FaEllipsisH
                  className={`text-[2rem] ${
                    isHovered === index ? "fill-yellow-400" : "fill-gray-200"
                  } `}
                  ref={iconRef}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <section className="text-center">
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
        <CustomArrow direction="prev" onClick={goToSlide} />
        <CustomArrow direction="next" onClick={goToSlide} />
      </section>
      <section className=" sm:p-0  ">
        <div className="w-full py-20 gap-10 min-h-[100vh] bg-yellow-50 text-black flex flex-col justify-center items-center ">
          <Image
            src="/Logo-retina-inverse.png"
            height={50}
            width={50}
            alt="logo"
          />
          <h1 className="text-[2rem] font-medium">Krisna Temples</h1>
          <h1 className="md:text-[4rem]  text-[2rem] sm:p-0 text-center w-full   font-extrabold">
            Hare Krisna Temple Tours
          </h1>

          <CustomCard data={cardData} />
        </div>
      </section>
    </>
  );
};

export default Home;
