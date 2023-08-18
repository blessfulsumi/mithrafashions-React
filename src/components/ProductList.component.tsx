import React from 'react'
import ButtonComponent from './Button.component';
import { useNavigate } from 'react-router';

const ProductListComponent = () => {
  const navigate=useNavigate();
  return (
    <div className=" flex-1  h-52 w-48  p-2">
      <div className="absolute flex flex-col-reverse">
        <ButtonComponent
        label="BUY"
        onClick={()=>{
          navigate("/product")
        }} 
        className='border-x-2 rounded-xl align-middle w-9 h-6 px-1 text-xs'
        />
        </div>
        <div>
        <p>
          <img className="h-42 w-40 rounded-md" src="dress.jpg" alt="dress_img" />
        </p>
      </div>
      <div className="flex px-2 space-x-8 text-neutral-600">
        <p>Ethnic dress</p>
        <p className="font-bold">$85</p>
      </div>
      <div className="flex px-2 space-x-20 text-xs text-slate-600">
        <p>2 colors</p>
        <p className="text-decoration: line-through">$124</p>
      </div>
    </div>
  );
};

export default ProductListComponent