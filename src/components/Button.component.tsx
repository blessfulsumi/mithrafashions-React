import React, { useState } from "react";


const name="SALE";
const ButtonComponent = () => {
    const [quantity, setQuantity] = useState(0);
  
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      setQuantity(quantity - 1);
    };
    
  return (
    <div>
      <div>{quantity > 0 && (
        <div className="absolute top-0 left-0 text-center w-10 h-6 text-white rounded hover:bg-slate-700  m-1 bg-red-600">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      )}
      {quantity === 0 && (
        <button className="absolute top-0 left-0 w-10 h-6 text-white rounded hover:bg-slate-700  m-1 bg-red-600" onClick={() => handleIncrement()}>
         {name}
        </button>
      )}</div>

     
    </div>

  )
}

export default ButtonComponent