"use client";
import Banner from "@/Reuseable/banner";
import CustomTextArea from "@/Reuseable/customarea";
import CustomButton from "@/Reuseable/custombutton";
import CustomInput from "@/Reuseable/custominput";
import Image from "next/image";
import { useState } from "react";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

// const metadata = {
//   title: "Contact Page",
//   description: "Contact description",
// };

const ContactPage = () => {
  // const a = Math.random();
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:'',
    massage:""
  })
  const { firstName, lastName, email,phone, massage } = formData;
  // console.log(a);
  const handleInputChange = (e) => {
    const {name,value}=e.target;
    setFormData((prev)=>({ ...prev, [name]: value }));
    
  };
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }



    setErrors(newErrors);

    // Use Object.keys to get an array of error keys, and check if the array is empty
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('form submitted', formData);
    } else {
      console.log('form Validation fails',formData);
    }

  };
  return (
    <>
      <section>
        <Banner />
      </section>
      <div className={`${styles.container} bg-white p-10`}>
        <div className={styles.imgContainer}>
          <div className="map-iframe">
            <iframe
              frameborder="1|0"
              width="1140"
              title="map"
              height="541.25"
              src="https://maps.google.com/maps?q=maudaha&t=&z=11&ie=UTF8&iwloc=&output=embed"
              style={{
                border: 0,
                width: "100% ",
                height: 500,
              }}
            ></iframe>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className="w-full  px-3  min-h-full bg-yellow-50 text-black flex flex-col justify-center items-center ">
            <h1 className="text-[2rem]  font-size-head">CONTACT US</h1>
            <h2 className="md:text-[3rem] font-family-h2 text-[2rem] sm:p-0 leading-10 text-center max-w-['768px']   ">
              Have Questions? Get in Touch!
            </h2>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              noValidate
              className="mt-10 w-full  flex flex-col  gap-2 "
            >
              <div className="w-[100%] sm:flex gap-3">
                <div className="sm:w-[50%]">
                  <CustomInput
                    labelstyle="mb-2"
                    classname="block w-full  border-b-2  hover:border-b-black hover:transition-all  duration-1000  py-1.5 bg-inherit mb-1   text-gray-900 shadow-sm   placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none"
                    // label="firstName:"
                    id="firstName"
                    type="text"
                    placeholder={"FirstName"}
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    errorStyle="text-red-400 "
                    error={errors.firstName}
                  />
                </div>
                <div className="sm:w-[50%]">
                  <CustomInput
                    labelstyle="mb-2 "
                    placeholder={"LastName"}
                    classname="block w-full  border-b-2 hover:border-b-black hover:transition-all  duration-1000  py-1.5 bg-inherit mb-1   text-gray-900 shadow-sm   placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none"
                    // label="lastName:"
                    id="lastName"
                    type="text"
                    name={"lastName"}
                    value={lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                    errorStyle="text-red-400 "
                  />
                </div>
              </div>
              <div className="w-[100%] sm:flex gap-3">
                <div className="sm:w-[50%]">
                  <CustomInput
                    labelstyle="mb-2"
                    classname="block w-full  border-b-2  hover:border-b-black hover:transition-all  duration-1000  py-1.5 bg-inherit mb-1   text-gray-900 shadow-sm   placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none"
                    // label="email:"
                    id="email"
                    type="email"
                    placeholder={"email"}
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    errorStyle="text-red-400 "
                    error={errors.email}
                  />
                </div>
                <div className="sm:w-[50%]">
                  <CustomInput
                    labelstyle="mb-2 "
                    placeholder={"phone"}
                    classname="block w-full  border-b-2 hover:border-b-black hover:transition-all  duration-1000  py-1.5 bg-inherit mb-1   text-gray-900 shadow-sm   placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none"
                    // label="phone:"
                    id="phone"
                    name={"phone"}
                    type="text"
                    value={phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                    errorStyle="text-red-400 "
                  />
                </div>
              </div>
              <CustomTextArea
                    labelstyle="mb-2 "
                    classname="block w-full  border-b-2 hover:border-b-black hover:transition-all  duration-1000  py-1.5 bg-inherit mb-1   text-gray-900 shadow-sm   placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none"
                    // label="massage:"
                    id="massage"
                    placeholder={"Massage"}
                    name="massage"
                    value={massage}
                    onChange={handleInputChange}
                    error={errors.massage}
                    errorStyle="text-red-400 "
                  />
                  <CustomButton 
                              text="Get In Tuch"
                              classname="flex w-2/6 m-auto justify-center items-center  bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500  "
                              // icon={< /> }
                  />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
