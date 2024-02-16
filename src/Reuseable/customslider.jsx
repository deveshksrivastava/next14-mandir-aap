const CustomSlide = (props) => {
    const { index, imgurl, title, label } = props;
    return (
      <>
        {/* <div className=" bg-blend-screen w-full z-0"> */}
        <div key={index} className="relative  sm:h-[100vh] h-[60vh]   w-full">
          <div
            className={`absolute insert-0 animate-zoomOut  top-0 z-10 sm:h-[100vh] h-[60vh]   overflow-hidden w-full bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center  `}
            style={{
              backgroundImage: `url(${imgurl})`,
              opacity: "60%",
            }}
          ></div>
          <div className="absolute  bg-transparent z-10 sm:h-[100vh] 2xl:top-10 h-[50vh] font-serif  overflow-hidden w-full bg-no-repeat bg-cover flex flex-col justify-center items-center ">
            <h2 className=" font-bold animate-slideIn text-white sm:text-[4rem] lg:[3rem] 2xl:text-[7rem]  leading-tight text-2xl flex justify-center sm:p-0  p-5 z-20  ">
              {title}
            </h2>
            <p className="sm:p-10 hidden sm:flex tracking-wide animate-slideIn">{label}</p>
            <div
            //  className="bg-red-500 bg:hover sm:w-[10rem]  p-2"
             className="flex sm:w-[200px] animate-slideIn  justify-center items-center  bg-red-600 sm:p-4 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Read More
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  };
  export default CustomSlide;