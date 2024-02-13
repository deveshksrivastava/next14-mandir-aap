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
import { SiCentos } from "react-icons/si";
import Mysvg from "@/Reuseable/mysvg";
import Krisna from "@/Reuseable/Krisna";
import YourComponent from "@/Reuseable/slider";
import CardLayout from "@/Reuseable/cardsectionlayout";

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
      title: "Retuals",
    },
    {
      icon: SiCentos,
      desc: "Sed do eiusm od tempor",
      title: "Temples",
    },
    {
      icon: Krisna,
      desc: "Sed do eiusm od tempor",
      title: "Excursions",
    },
    {
      title: "Trips",
      desc: "Sed do eiusm od tempor",
      icon: Mysvg,
    },
  ];
  
  const seccardData = [
    {
      id: 1,
      icon: "/card/card1.jpg",
      desc: "Sed do eiusm od tempor",
      title: "Retuals",
    },
    {
      id:2,
      icon: "/card/card2.jpg",
      desc: "Sed do eiusm od tempor",
      title: "Temples",
    },
    {
      id:3,
      icon: "/card/card3.jpg",
      desc: "Sed do eiusm od tempor",
      title: "Excursions",
    }

  ];


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
   
      <CardLayout 
        title="Krisna Temples"
        desc="Hare Krisna Temple Tours"
        data={cardData}
      />
      <section className="text-black ">
        <div className="w-full sm:p-20 p-5 leading-none min-h-[100vh] bg-white flex flex-col gap-10   ">
          <h1 className="font-medium">SPIRITUAL EXCURSIONS</h1>
          <div className="sm:flex  w-full gap-3 justify-between">
            <div className="sm:w-[50%] w-full font-bold ">
              <h1 className=" lg:text-[3rem] text-[2rem]">
                We Do Tours to Hare Krishna Temples
              </h1>
            </div>
            <div className="sm:w-[50%] w-full sm:flex flex-col  mt-5 font-medium  leading-7">
              <p className="text-[#888888] font-light  ">
                Adipiscing elit, sed do euismod tempor incidunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitacion ullamco.
              </p>
              <br />
              <p className="text-[#888888] font-light">
                Adipiscing elit, sed do euismod tempor incidunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <div className="mt-2">
                <p className={`${styles.coollink} font-bold  `}>Read More</p>
              </div>
            </div>
          </div>

          <YourComponent />
        </div>
      </section>
      <CardLayout 
        title="DONATION & HELP"
        desc="Help Save Spiritual Heritage"
        cardData={seccardData}
      />
     </>
  );
};

export default Home;
