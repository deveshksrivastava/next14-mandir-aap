import React from "react";

const SecCustomCard = (props) => {
  const { data } = props;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:px-10 p-5 gap-5 items-center w-full ">
        {data?.map((item) => (
          <div
            key={item.id}
            className="max-w-sm  rounded overflow-hidden shadow-lg bg-white"
          >
            <img
              className="w-full  transition-transform ease-in-out duration-500 transform hover:scale-110 cursor-pointer"
              src={item.icon}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-[#4444446e] text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SecCustomCard;
