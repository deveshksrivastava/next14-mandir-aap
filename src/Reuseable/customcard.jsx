import { useRef, useState } from "react";
import { FaEllipsisH } from "react-icons/fa";


const CustomCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconRef = useRef(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-20 px-5 gap-5 items-center w-full ">
          {data?.map((item, index) => (
            <div
              key={index}
              className="sm:p-4 p-2  w-[100%]   bg-white border text-black "
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="min-w-full  items-center text-center flex flex-col gap-10 ">
                <item.icon 
                  className={`text-[6rem] sm:w-[5rem] sm:h-[5rem] w-[50px] h-[50px]  ${
                    isHovered === index ? "fill-gray-200" : "fill-yellow-400"
                  } `}
                  ref={iconRef}
                />
               
                <div>
                <h1 className="sm:text-[1.3rem] text-2xl font-bold">{item?.title}</h1>
                <p className="text-[#888888]">{item?.desc}</p>
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
  export default CustomCard;