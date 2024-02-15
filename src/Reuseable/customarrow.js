import {  BiCaretLeft, BiCaretRight } from "react-icons/bi";

const CustomArrow = ({ direction, onClick }) => {
  return (
    <div
      className={`sm:flex hidden absolute ${
        direction === "prev" ? "left-5" : "right-5"
      } top-1/2 transform -translate-y-1/2 z-10`}
    >
      {direction === "prev" ? (
        <button
          className="bg-transparent border rounded-full text-white  p-1 ml-1 hover:bg-red-500"
          onClick={() => onClick("prev")}
        >
        <BiCaretLeft />
          {/* prev */}
        </button>
      ) : (
        <button
          className="bg-transparent border rounded-full text-white p-1 mr-1 hover:bg-red-500"
          onClick={() => onClick("next")}
        >
          <BiCaretRight />
        </button>
      )}
    </div>
  );
};
export default CustomArrow;
