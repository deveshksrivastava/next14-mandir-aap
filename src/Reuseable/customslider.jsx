import styles from "../app/home.module.css";
const CustomSlide = (props) => {
  const { index, imgurl, title, label } = props;

  return (
    <div key={index} className={`relative h-screen  ${styles.sliderhight}`}>
      <div
        className={`absolute insert-0  animate-zoomOut    top-0 z-10 h-screen  overflow-hidden w-full bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center  `}
        style={{
          backgroundImage: `url(${imgurl})`,
          opacity: "60%",
        }}
      ></div>
      <div className="relative sm:w-[60%] m-auto ">
        <div className="absolute  bg-transparent z-10 sm:h-[100vh] 2xl:top-10 h-[60vh]   overflow-hidden  bg-no-repeat bg-cover flex flex-col justify-center items-center  ">
          <h2 className=" font-family-h2 animate-moveRightToLeft text-white sm:text-[4rem] lg:[3rem] 2xl:text-[7rem]  leading-tight text-2xl flex justify-center sm:p-0   p-5 z-20   ">
            {title}
          </h2>
          <p className="sm:p-10 hidden sm:flex tracking-wide animate-slidedown">
            {label}
          </p>

          <div className="flex sm:w-[200px] animate-slidedown  justify-center items-center  bg-red-600 sm:p-4 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomSlide;
