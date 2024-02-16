import { useState, useRef } from "react";
import Slider from "react-slick";
import { BiCaretDown, BiSolidQuoteAltRight } from "react-icons/bi";

const Yourcomponent = (props) => {
  const {cardData,cards}=props;
  // console.log(cardData);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

 
  const settings = {
    // centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
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
          <ul className="">
            {dots.map((dot, index) => (
              <li
                className={`w-[10px] h-[10px] border rounded-full hover:bg-red-400 ${
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

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {/* Your slide components */}
        {cards && cards?.map((item, index) => (
          <div
            key={item.title}
            className="sm:p-4 p-2  w-[100%] mb-10    bg-white  text-black "
          >
            <div>
              <div className={` bg-orange-500 p-10 flex flex-col gap-3  `}>
                <div className="w-full flex justify-center sm:text-3xl">
                  <BiSolidQuoteAltRight />
                </div>
                <p className="gap-3 leading-loose">
               {item.info}
                </p>
              </div>
              <span className="flex justify-center items-center overflow-visible mt-[-12px] text-3xl">
                <BiCaretDown className="fill-orange-500" />
              </span>
            </div>
            <div className="min-w-full  items-center text-center flex flex-col gap-1 ">
              <img
                className="w-50 h-[100px] rounded-full overflow-hidden"
                src="https://e-learning-tech.netlify.app/images/team3.jpg"
                alt="logo"
              />

              <h1 className="sm:text-[1.3rem] text-2xl font-bold">
                {item?.title}
              </h1>
              <p className="text-[#888888]">{item?.desc}</p>
            </div>
          </div>
        ))}
        {cardData && cardData?.map((item) => (
          <div
            key={item.title}
            className="sm:p-4 p-2  w-[100%] mb-10    bg-white  text-black "
          >
          
            <div>
              <div className={` bg-orange-500 p-10 flex flex-col gap-3  `}>
                <div className="w-full flex justify-center sm:text-3xl">
                  <BiSolidQuoteAltRight />
                </div>
                <p className="gap-3 leading-loose">
                  {item.info}
                  </p>
              </div>
              <span className="flex justify-center items-center overflow-visible mt-[-12px] text-3xl">
                <BiCaretDown className="fill-orange-500" />
              </span>
            </div>
            <div className="min-w-full  items-center text-center flex flex-col gap-1 ">
              <img
                className="w-50 h-[100px] rounded-full overflow-hidden"
                src="https://e-learning-tech.netlify.app/images/team3.jpg"
                alt="logo"
              />

              <h1 className="sm:text-[1.3rem] text-2xl font-bold">
                {item?.title}
              </h1>
              <p className="text-[#888888]">{item?.desc}</p>
            </div>
          </div>
        ))}
        
      </Slider>

    </>
  );
};

export default Yourcomponent;
