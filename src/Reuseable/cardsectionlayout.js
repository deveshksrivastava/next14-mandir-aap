import Image from 'next/image';
import React from 'react'
import SecCustomCard from './seccustomcard';
import CustomCard from './customcard';

const CardLayout =(props) => {
    const {title,desc,cardData,data}=props;

  return (
    <>
    <section className=" sm:p-0  ">
    <div className="w-full py-20 gap-10 min-h-[100vh] bg-yellow-50 text-black flex flex-col justify-center items-center ">
      <Image
        src="/Logo-retina-inverse.png"
        height={50}
        width={50}
        alt="logo"
      />
      <h1 className="text-[2rem] font-medium">{title}</h1>
      <h1 className="md:text-[4rem]  text-[2rem] sm:p-0 text-center w-full   font-extrabold">
      {desc}      
      </h1>
      {cardData &&
      <SecCustomCard data={cardData}/>
      }
      {data &&
      <CustomCard data={data}/>
      }
    </div>
  </section>
    </>
  )
}

export default CardLayout;