import React, { useState } from "react";
import { resolveTripleslashReference } from "typescript";

interface Props{
  children?:React.ReactNode;
  label:string;
  onClick:()=>void;
  variant?:string;
  className?:string;
}


const name="SALE";
const ButtonComponent :React.FC<Props>= ( {

   label,
   onClick,
   variant="default",
   className,
   ...rest})=>{
//border-x-2 align-middle w-40 h-6 text-white rounded hover:bg-slate-700  m-auto bg-red-600
    
  return (
    <button
      {...rest}
      className={`  text-white hover:bg-slate-700 bg-red-600${
        variant==="default"
        ? "border-slate-50 bg-red-600 text-white"
        : "border-slate-900 bg-slate-100 text-slate-950"
      }${className}`}
      onClick={onClick}
      >
        {label}

    </button>
  )
}

export default ButtonComponent