import React, { useState } from "react";

const ProductItemComponent = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="flex flex-row justify-center mt-10">
      <div className="w-auto ">
        <img src="dress.jpg" alt="img_not loaded" />
      </div>
      <div className="flex flex-col justify-center text-center">
        <p className="text-lg text-red-600 font-extrabold">Autumn Dress</p>
        <p className="flex flex-col w-60 mt-4 content-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam vero
          omnis fuga tempore debitis reiciendis aliquid eum minima culpa quasi.
        </p>
        <p className="border-x-2 align-middle w-40 h-6 text-white rounded hover:bg-slate-700  m-auto bg-red-600">
          <div>
            {quantity > 0 && (
              <div>
                <button onClick={handleDecrement}>-</button>
                <button>{quantity}</button>
                <button onClick={handleIncrement}>+</button>
              </div>
            )}
            {quantity === 0 && (
              <button onClick={() => handleIncrement()}>Add to Cart</button>
            )}
          </div>
        </p>
      </div>
    </div>
  );
};

export default ProductItemComponent;
