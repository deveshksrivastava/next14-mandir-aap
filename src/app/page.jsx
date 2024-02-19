"use client";
import styles from "./home.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlide from "@/Reuseable/customslider";
import Slider from "react-slick";
import { useState, useRef } from "react";
import CustomArrow from "@/Reuseable/customarrow";

import { MdFrontHand } from "react-icons/md";
import { SiCentos } from "react-icons/si";
import Mysvg from "@/Reuseable/mysvg";
import Krisna from "@/Reuseable/Krisna";
import YourComponent from "@/Reuseable/slider";
import CardLayout from "@/Reuseable/cardsectionlayout";
import VideoModal from "@/Reuseable/videomodel";
import CustomBusiness from "@/Reuseable/custombusiness";

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
    // lazyLoad: 'ondemand',
    fade: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (current, next) => {
      const slides = document.querySelectorAll('.mnb');
      const slideslabel = document.querySelectorAll('.label-p');
      const slidesl = document.querySelectorAll('.label-b');
      const slidestitle = document.querySelectorAll('.moveRightToLeft');
      slides[current]?.classList.remove('animate-zoomOut');
      slidesl[current]?.classList.remove('animate-slidedown');
      slidestitle[current]?.classList.remove('animate-moveRightToLeft');
      slideslabel[current]?.classList.remove('animate-slidedown');

    },
    afterChange: (current) => {
      setCurrentSlide(current)
      const slides = document.querySelectorAll('.mnb');
      const slideslabel = document.querySelectorAll('.label-p,label-b');
      const slidesl = document.querySelectorAll('.label-b');
      const slidestitle = document.querySelectorAll('.moveRightToLeft');
      

      slidestitle[current]?.classList.add('animate-moveRightToLeft');
      slides[current]?.classList.add('animate-zoomOut');
      setTimeout(()=>{
        slideslabel[current]?.classList.add('animate-slidedown');
        slidesl[current]?.classList.add('animate-slidedown');
      },1000)

    },
    // afterChange: (current) => setCurrentSlide(current),
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
          <ul className="mb-5">
            {dots.map((dot, index) => (
              <li
                // style={{width:"10px",height:"10px"}}
                className={` ${
                  styles.bullet
                } border rounded-full hover:bg-red-400 ${
                  index === currentSlide ? "bg-red-400 " : "bg-white"
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
  const cardtample = [
    {
      info: "Thanks for a wonderful tour! I have long dreamed of visiting the Hindu monasteries of India.",
      icon: "https://e-learning-tech.netlify.app/images/team3.jpg",
      desc: "UK",
      title: "Jams Gordon",
    },
    {
      info: "Went on this tour with the whole family. Super! Everyone liked the ancient temples!",
      icon: "https://e-learning-tech.netlify.app/images/team3.jpg",
      desc: "New yark",
      title: "David Bowman",
    },
    {
      info: "It was the best tour ever! I got a lot of impressions of beautiful places and breathtaking views.",
      icon: "https://e-learning-tech.netlify.app/images/team3.jpg",
      desc: "Australiya",
      title: "Jone smith",
    },
    {
      info: "I also visited the most beautiful temples and monasteries in India.",
      title: "Trips",
      desc: "Sed do eiusm od tempor",
      icon: "https://e-learning-tech.netlify.app/images/team3.jpg",
    },
  ];
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
      id: 2,
      icon: "/card/card2.jpg",
      desc: "Sed do eiusm od tempor",
      title: "Temples",
    },
    {
      id: 3,
      icon: "/card/card3.jpg",
      desc: "Sed do eiusm od tempor",
      title: "Excursions",
    },
  ];
  const studentreview = [
    {
      info: "I learned a lot from these yoga courses and meditation lessons. I began to feel better!",
      icon: "https://e-learning-tech.netlify.app/images/team2.jpg",
      desc: "Redding, CA",
      title: "Jennifer Lee",
    },
    {
      info: "I am a beginner. It was great to learn more about meditation and yoga. Thank you!",
      icon: "https://e-learning-tech.netlify.app/images/team3.jpg",
      desc: "New yark",
      title: "Gorge Gorden",
    },
    {
      info: "Lately, I have been practicing meditation. I did not expect such great results. Thanks!",
      icon: "https://e-learning-tech.netlify.app/images/team3.jpg",
      desc: "Chicago, IL ",
      title: "John More",
    },
    {
      info: "It is the best meditation course! Thanks to you, I learned to relax and feel my body.",
      title: "Piter Bowman",
      desc: "Austin, TX",
      icon: "https://e-learning-tech.netlify.app/images/team3.jpg",
    },
  ];
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  // ref={sliderRef}
  return (
    <>
      <section className="">
        <Slider {...settings} ref={sliderRef} className=""  >
          {/* Slide content */}
          {elastic.map((item) => 
             <CustomSlide
              index={item.id}
              title={item.title}
              label={item.label}
              imgurl={item.imageUrl}
             
            />
          )}
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
          <h1 className="font-size-head">SPIRITUAL EXCURSIONS</h1>
          <div className="sm:flex  w-full gap-3 justify-between">
            <div className="sm:w-[50%] w-full font-family-h2 ">
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
          {<YourComponent cardData={cardtample} />}
        </div>
      </section>
      <CardLayout
        title="DONATION & HELP"
        desc="Help Save Spiritual Heritage"
        cardData={seccardData}
      />
      <section className=" flex items-center sm:h-[100vh] 2xl:h-[50vh] h-[50vh]   justify-center ">
        <div className="absolute bg-play-back sm:h-[100vh] 2xl:h-[50vh] h-[50vh] w-full bg-cover bg-no-repeat bg-center bg-black opacity-[0.5] "></div>
        <span className="animate-ping  absolute inline-flex h-10 w-[4rem] rounded-full bg-sky-400 opacity-75"></span>
        <p
          className=" text-[1rem] z-10 uppercase font-extralight border-2 rounded-3xl border-r-cyan-300 cursor-pointer border-lime-200 p-3"
          onClick={openVideo}
        >
          play
        </p>
        <VideoModal isOpen={isVideoOpen} onClose={closeVideo} />
      </section>
      <CardLayout
        title="TEMPLE MAINTENANCE"
        desc="Donate to Support Hare Krishna Temples and Monasteries"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing"
        donate="10"
      />
      <section className="text-black ">
        <div className="w-full sm:p-20 p-5 leading-none min-h-[100vh] bg-white flex flex-col gap-10   ">
          <h1 className="font-medium">FEEDBACK</h1>
          <div className="sm:flex  w-full gap-3 justify-between">
            <div className="sm:w-[30%] w-full font-family-h2 ">
              <h1 className=" lg:text-[3rem] text-[2rem]">
                What Our Students Say
              </h1>
            </div>
            <div className="sm:w-[70%] w-full sm:flex flex-col  mt-5 font-medium  leading-7">
              <YourComponent cards={studentreview} />
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <CustomBusiness />
      </div>
    </>
  );
};

export default Home;
