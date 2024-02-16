import React, { useEffect, useRef, useState } from "react";
import DonateModel from "./donatemodel";

const Donate = (props) => {
  const { val } = props;
  const [amount, setAmount] = useState(val);
  
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [active,setActive]=useState(0);
  const openDonate = () => {
    setIsDonateOpen(true);
  };

  const closeDonate = () => {
    setIsDonateOpen(false);
  };
  const inputRef = useRef(null);
  const handleClick = () => {
    // Focus on the input element when the button is clicked
    setAmount("");
    inputRef.current.focus();
  };
  const handleButtonClick = (value,index) => {
    // Update the state and set the value of the input field
    const val = value;
    setAmount(val);
    setActive(index)
  };
  useEffect(() => {}, [amount]);
  const arr=[10,20,30,200]
  console.log(active);
  return (
    <>
      <div className="flex bg-white  justify-center text-center">
        <label className=" w-[50px] p-2  bg-orange-400  ">$</label>
        <input
          className="w-[150px] outline-none ml-2 "
          name={amount}
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          ref={inputRef}
        />
      </div>
      <div className="sm:flex  gap-2  grid grid-cols-3 px-4">
        {arr.map((val,index)=>{
          return(
            <button key={index}
          className={`sm:w-[100px] p-2  bg-white  hover:bg-red-500 ${active === index ? 'border-2':''}  `}
          onClick={() => handleButtonClick(val,index)}
        >
          ${val}
        </button>            
          )
        })}
        {/* <button
          className="sm:w-[100px] p-2  bg-white  hover:bg-red-500"
          onClick={() => handleButtonClick(10)}
        >
          $10
        </button>
        <button
          className="sm:w-[100px] p-2  bg-white  hover:bg-red-500"
          onClick={() => handleButtonClick(20)}
        >
          $20
        </button>
        <button
          className="sm:w-[100px] p-2   bg-white  hover:bg-red-500"
          onClick={() => handleButtonClick(30)}
        >
          $30
        </button>
        <button
          className="sm:w-[100px]  bg-white"
          onClick={() => handleButtonClick(200)}
        >
          $200
        </button> */}
        <button
          className="sm:w-[200px] w-[150px]  bg-white p-2"
          onClick={handleClick}
        >
          Custom Amount
        </button>
      </div>
      <div className="flex bg-white  justify-center text-center">
        <label className=" w-[200px] p-2  bg-orange-400  "           onClick={openDonate}>Donate</label>
      </div>
      <DonateModel isOpen={isDonateOpen} onClose={closeDonate} donate={amount}/>
    </>
  );
};

export default Donate;
