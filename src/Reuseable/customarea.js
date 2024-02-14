import React, { ChangeEvent, ReactNode } from 'react';

// interface CustomTextAreaProps {
//     label?: ReactNode;
//     id: string;
//     name: string;
//     classname?:string,
//     onChange: (id: string, value: string) => void;
//   }

const CustomTextArea = ({label,id,name,value,onChange,classname}) => {
    // const handleChange=(e)=>{
    //   onChange(id,e.target.value)
    // }
    return (
      <div className={` `}>
        {label && <label htmlFor={id}>{label}</label>}
        <textarea
         className={`${classname}  `}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    )
  };
  export default CustomTextArea;