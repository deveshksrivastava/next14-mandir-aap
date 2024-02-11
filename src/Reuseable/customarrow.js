const CustomArrow = ({ direction,onClick }) => {
  
    return (
      <button
        className={`sm:flex hidden absolute ${direction === "prev" ? "left-0" : "right-0"} top-1/2 transform -translate-y-1/2 z-10`}
        onClick={onClick}
      >
      {direction === "prev" ?(<button className="bg-transparent border rounded text-white  p-1 ml-1 hover:bg-red-500">prev</button> ): (<button className="bg-transparent border rounded text-white p-1 mr-1 hover:bg-red-500">next</button>)}

      </button>
    );
  };
export default CustomArrow;