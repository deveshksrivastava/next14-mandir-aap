import React, { useRef } from "react";
import Slider from "react-slick";

const CustomBusiness = () => {
  const sliderRef = useRef(null);
 
  const goToSlide = (direction) => {
    if (sliderRef.current) {
      direction === "prev"
        ? sliderRef.current.slickPrev()
        : sliderRef.current.slickNext();
    }
  };
  const cardData = [
    {
      info: "I also visited the most beautiful temples and monasteries in India.",
      icon: "https://e-learning-tech.netlify.app/images/team3.jpg",
      desc: "Sed do eiusm od tempor",
      title: "Retuals",
    },
    {
      info: "I also visited the most beautiful temples and monasteries in India.",
      icon: "https://e-learning-tech.netlify.app/images/team3.jpg",
      desc: "Sed do eiusm od tempor",
      title: "Temples",
    },
    {
      info: "I also visited the most beautiful temples and monasteries in India.",
      icon: "https://e-learning-tech.netlify.app/images/team3.jpg",
      desc: "Sed do eiusm od tempor",
      title: "Excursions",
    },
    {
      info: "I also visited the most beautiful temples and monasteries in India.",
      title: "Trips",
      desc: "Sed do eiusm od tempor",
      icon: "https://e-learning-tech.netlify.app/images/team3.jpg",
    },
  ];

  const settingsbox = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
        },
      },
      {
        breakpoint: 444,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };


  return (
    <div className="mx-auto max-w-screen-2xl bg-white  ">
      <div className="w-full relative sm:h-[100vh] h-[100vh] py-28 overflow-hidden ">
        <div className="absolute right-16 top-56 h-96 p-2 w-96 border-dashed border-[#000000] border-[1px] rounded-full"></div>
        <div className="max-w-7xl mr-3 w-full sm:h-[578px] h-[500px] bg-[#ECF7FF] rounded-tr-[137px] sm:rounded-tr-[400px] absolute top-0 z-10"></div>
        <div className="z-30 absolute top-0 h-full w-full flex flex-col  py-12">
          <div className=" flex flex-col sm:gap-16 md:gap-24 gap-12">
            <div className="mx-auto md:text-5xl text-4xl text-[#331B3B]  -tracking-[0.01] leading-[106.3%]">
              <h1 className=" font-bold self-center text-center">What We Do</h1>
              <span className="font-light self-center">
                For Your
                <span className="relative ml-1">
                  Business
                  <span className="bg-[#FDC221] md:h-2.5 h-2 bottom-1.5 md:bottom-2 -z-[1] right-0 absolute md:w-48 w-[145px]" />
                </span>
              </span>
            </div>
          </div>
          <div className="max-w-[100%]  sm:flex    justify-around p-5 ">
            <div className=" sm:max-w-[20%] sm:flex justify-center  mt-10  gap-4  hidden">
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180 cursor-pointer"
                onClick={(e) => {
                  goToSlide("prev");
                }}
              >
                <path
                  d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M15 10L23 17.3443L15 24"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                //   onClick={() => moveRight(settingsbox)}
                onClick={(e) => {
                  goToSlide("next");
                }}
              >
                <path
                  d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M15 10L23 17.3443L15 24"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="sm:max-w-[80%] ">
              <Slider {...settingsbox} ref={sliderRef}>
                {/* Your slide components */}
                {cardData.map((item, index) => (
                  <div
                    key={index}
                    className="sm:p-4 p-2   w-[100%] mb-10  text-black "
                  >
                    <div className="min-w-full  rounded-xl bg-white p-3 items-center text-center flex flex-col gap-1 ">
                      <img
                        className="w-50 h-[100px] rounded-full overflow-hidden"
                        src="https://e-learning-tech.netlify.app/images/team3.jpg"
                        alt="logo"
                      />

                      <h1 className="sm:text-[1.3rem] text-2xl font-bold">
                        {item?.title}
                      </h1>
                      <p className="text-[#888888]">{item?.info}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBusiness;
