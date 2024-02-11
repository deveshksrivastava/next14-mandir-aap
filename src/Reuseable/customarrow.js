const CustomArrow = ({ direction, onClick }) => {
  return (
    <div
      className={`sm:flex hidden absolute ${
        direction === "prev" ? "left-0" : "right-0"
      } top-1/2 transform -translate-y-1/2 z-10`}
    >
      {direction === "prev" ? (
        <button
          className="bg-transparent border rounded text-white  p-1 ml-1 hover:bg-red-500"
          onClick={() => onClick("prev")}
        >
          prev
        </button>
      ) : (
        <button
          className="bg-transparent border rounded text-white p-1 mr-1 hover:bg-red-500"
          onClick={() => onClick("next")}
        >
          next
        </button>
      )}
    </div>
  );
};
export default CustomArrow;
