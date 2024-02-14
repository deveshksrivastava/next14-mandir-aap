import React, { useEffect, useRef, useState } from "react";
import DonateModel from "./donatemodel";

const Donate = (props) => {
  const { val } = props;
  const [amount, setAmount] = useState(val);
  console.log(val, amount);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

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
  const handleButtonClick = (value) => {
    // Update the state and set the value of the input field
    const val = value;
    setAmount(val);
  };
  useEffect(() => {}, [amount]);

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
        <button
          className="sm:w-[100px] p-2  bg-white"
          onClick={() => handleButtonClick(10)}
        >
          $10
        </button>
        <button
          className="sm:w-[100px]  bg-white"
          onClick={() => handleButtonClick(20)}
        >
          $20
        </button>
        <button
          className="sm:w-[100px]  bg-white"
          onClick={() => handleButtonClick(30)}
        >
          $30
        </button>
        <button
          className="sm:w-[100px]  bg-white"
          onClick={() => handleButtonClick(200)}
        >
          $200
        </button>
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
