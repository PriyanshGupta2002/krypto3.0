import React from 'react'

const Input = ({placeholder,type,name,value,handleChange}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} step="0.0001" value={value}  onChange={(e) => handleChange(e, name)} className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none  text-sm white-glassmorphism" />
  )
}

export default Input