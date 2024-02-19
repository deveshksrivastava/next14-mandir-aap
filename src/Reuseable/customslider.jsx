
import styles from "../app/home.module.css";
const CustomSlide = (props) => {
  const { index, imgurl, title, label } = props;

  return (
    <div key={index} className={`sm:h-screen ${styles.sliderhight} `} >
      <div
        className={`absolute insert-0  mnb  top-0 z-10 sm:h-screen ${styles.sliderhight}  overflow-hidden w-full bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center  `}
        style={{
          backgroundImage: `url(${imgurl})`,
          opacity: "60%",
        }}
      ></div>
      <div className="relative  w-[100%] flex justify-center text-center">
        <div className="absolute  bg-transparent z-10 sm:h-[100vh] 2xl:top-10 h-[60vh] sm:w-[50%]  overflow-hidden  bg-no-repeat bg-cover flex flex-col justify-center items-center m-auto ">
          <h2 className=" font-family-h2  moveRightToLeft text-white sm:text-[4rem] lg:[3rem] 2xl:text-[7rem]  leading-tight text-2xl flex justify-center sm:p-0   p-5 z-20   ">
            {title}
          </h2>
          <p className="sm:p-10 hidden sm:flex tracking-wide  label-p">
            {label}
          </p>

          <div className="flex   sm:w-[200px] label-b  justify-center items-center  bg-red-600 sm:p-4 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomSlide;
