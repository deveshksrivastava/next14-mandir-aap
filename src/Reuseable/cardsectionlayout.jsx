import Image from 'next/image';
import React from 'react'
import SecCustomCard from './seccustomcard';
import CustomCard from './customcard';
import Donate from './donate';

const CardLayout =(props) => {
    const {title,desc,cardData,info,data,donate}=props;

  return (
    <>
    <section className=" sm:p-0  text-center ">
    <div className="w-full  py-10  min-h-[100vh] bg-yellow-50 text-black flex flex-col justify-center items-center ">
      <Image
        src="/Logo-retina-inverse.png"
        height={50}
        width={50}
        alt="logo"
        className=''
      />

      <h1 className="text-[2rem]  font-size-head">{title}</h1>
      <h2 className="md:text-[3rem] font-family-h2 text-[2rem] sm:p-0 leading-10 text-center max-w-['768px']   ">
      {desc}      
      </h2>
      <p className='my-5'>{info}</p>
      {cardData &&
      <SecCustomCard data={cardData}/>
      }
      {data &&
      <CustomCard data={data}/>
      }
      {donate && 


      <Donate val={donate}/>

      }

    </div>
  </section>
    </>
  )
}

export default CardLayout;