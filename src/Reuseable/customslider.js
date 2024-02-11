const CustomSlide = (props) => {
    const { index, imgurl, title, label } = props;
    return (
      <>
        {/* <div className=" bg-blend-screen w-full z-0"> */}
        <div key={index} className="relative  sm:h-[100vh] h-[60vh]    w-full">
          <div
            className={`absolute insert-0   top-0 z-10 sm:h-[100vh] h-[60vh]   overflow-hidden w-full bg-no-repeat bg-cover flex flex-col justify-center items-center  `}
            style={{
              backgroundImage: `url(${imgurl})`,
              opacity: "60%",
            }}
          ></div>
          <div className="absolute  bg-transparent z-10 sm:h-[100vh] h-[50vh] font-serif  overflow-hidden w-full bg-no-repeat bg-cover flex flex-col justify-center items-center ">
            <h2 className=" font-bold  text-white sm:text-[4rem] leading-tight text-2xl flex justify-center sm:p-0  p-5 z-20  ">
              {title}
            </h2>
            <p className="sm:p-10 hidden sm:flex">{label}</p>
            <button className="bg-red-500 bg:hover sm:w-[10rem] p-2">
              Read More
            </button>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  };
  export default CustomSlide;