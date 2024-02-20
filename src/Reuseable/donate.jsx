import React, { useEffect, useRef, useState } from "react";
import DonateModel from "./donatemodel";

const Donate = (props) => {
  const { val } = props;
  const [amount, setAmount] = useState(val);
  
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [active,setActive]=useState(0);
  const arr=[10,20,30,200]
  const openDonate = () => {
    setIsDonateOpen(true);
  };

  const closeDonate = () => {
    setIsDonateOpen(false);
  };
  const inputRef = useRef(null);
  const handleClick = () => {
    // Focus on the input element when the button is clicked
    setActive('');
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
  const handleInput=(e)=>{      
    const inputValue = e.target.value;        
      setAmount(inputValue);
      setTimeout(() => {
         // Check if the amount exists in the array
        const index = arr.findIndex(item => item.toString() === inputValue);

        if (index !== -1) {
            // Amount found in the array
            setActive(index)
        }else{
          setActive('')
        }
    }, 2000);
     
  }

  return (
    <>
      <div className="flex py-3   justify-center text-center">
        <label className=" w-[50px]  bg-orange-400  ">$</label>
        <input
          className="w-[150px] outline-none text-center "
          name={amount}
          value={amount}
          onChange={handleInput}
          ref={inputRef}
        />
      </div>
      <div className="sm:flex  py-4 gap-2  grid grid-cols-3 px-4">
        {arr.map((val,index)=>{
          return(
            <button key={index}
          className={`sm:w-[100px]   bg-white  hover:bg-red-500 ${active === index ? 'border-2':''}  `}
          onClick={() => handleButtonClick(val,index)}
        >
          ${val}
        </button>            
          )
        })}
 
        <button
          className={`sm:w-[200px] w-[150px]  bg-white p-2 ${active === '' ? "border-2":""}`}
          onClick={handleClick}
        >
          Custom Amount
        </button>
      </div>
      <div className="flex bg-white  justify-center text-center">
        <label className={` w-[200px] p-2  bg-orange-400  `} onClick={openDonate}>Donate</label>
      </div>
      <DonateModel isOpen={isDonateOpen} onClose={closeDonate} donate={amount}/>
    </>
  );
};

export default Donate;
