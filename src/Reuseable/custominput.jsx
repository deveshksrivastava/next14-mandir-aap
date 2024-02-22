import React,{ChangeEvent,ReactNode} from 'react'

// interface CustomInputProps {
//     label?: ReactNode;
//     type?: string;
//     id: string;
//     name: string;
//     labelstyle?:string;
//     classname?:string;
//     onChange: (id: string, value: string) => void;
//     error?:string;
//     errorStyle?:string;
//   }
 const CustomInput= ({label,type,id,name,value,onChange,classname,labelstyle,error,errorStyle,placeholder}) => {

  return (
    <>
      {label && <label htmlFor={id} className={`${labelstyle}`}>{label}</label>}
      <input
       className={`${classname} p-2 `}
       placeholder={placeholder}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />      
      {error && <p className={`'mt-2 text-sm text-red-300' ${errorStyle}`}>{error}</p>}
    </>
  )
}

export default CustomInput;