import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import CustomTextArea from "./customarea";
import CustomButton from "./custombutton";
import CustomInput from "./custominput";
const DonateModel = ({ isOpen, onClose, donate }) => {
  const [data, setData] = useState({
    first: "",
    last: "",
    email: "",
    messsage: "",
  });
  const { first, last, email, message } = data;
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};

    if (!first.trim()) {
      newErrors.first = "First Name is required";
    }

    if (!last.trim()) {
      newErrors.last = "Last Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }
    // if (!role.trim()) {
    //   newErrors.role = 'Role is required';
    // }

    setErrors(newErrors);

    // Use Object.keys to get an array of error keys, and check if the array is empty
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(id,value);
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("form submitted", data);
    } else {
      console.log("form Validation fails");
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gray-900 opacity-75"
        onClick={onClose}
      ></div>
      <div className="absolute z-50 border sm:w-[60%] sm:h-[90vh] bg-[#faf7ed] h-[90vh] overflow-auto  ">
        <button className="absolute top-0 right-0 m-2" onClick={onClose}>
          <AiOutlineCloseCircle className="text-[2rem] hover:rotate-180 transition-all delay-150" />
        </button>
        <div className=" p-5 flex flex-col text-start h-full gap-3">
          <h1 className="text-[2rem]  ">Personal Info</h1>

          <CustomInput
            id="first"
            value={first}
            type="text"
            label="First Name"
            name="first"
            onChange={handleChange}
            labelstyle="block text-sm font-medium leading-6 text-gray-900 mb-2"
            classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            errorStyle="text-red-400 "
            error={errors.first}
          />
          <CustomInput
            id="last"
            value={last}
            type="text"
            label="last Name"
            name="last"
            errorStyle="text-red-400 "
            error={errors.last}
            onChange={handleChange}
            labelstyle="block text-sm font-medium leading-6 text-gray-900 mb-2"
            classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <CustomInput
            id="email"
            value={email}
            type="email"
            label="Enter Email"
            name="email"
            onChange={handleChange}
            labelstyle="block text-sm font-medium leading-6 text-gray-900 mb-2"
            classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            errorStyle="text-red-400 "
            error={errors.email}
          />
          <CustomTextArea
            classname="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
            label="Leave a Message "
            id="message"
            name={"message"}
            value={message}
            onChange={handleChange}
          />
          <div className="flex">
            <p>Already have an account ?</p>
            <span>Login</span>
          </div>

          <div className="flex  border-2  border-white  sm:w-[200px]  justify-start text-center">
            <label className="  p-2  bg-orange-500  ">Donation Total</label>
            <input
              className="w-[30px] bg-transparent outline-none m-auto "              
              value={'$'+donate}
            />
          </div>

          <CustomButton
            text="Donate"
            onClick={(e) => {
              handleSubmit(e);
            }}
            classname="flex sm:w-[200px]  justify-center items-center  bg-red-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            icon={<FaAngleRight />}
          />

        </div>
      </div>
    </div>
  );
};

export default DonateModel;
