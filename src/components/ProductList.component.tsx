import React from 'react'
import ButtonComponent from './Button.component';

const ProductListComponent = () => {
  return (
    <div className="flex-1 flex-col h-52 w-48  p-2">
      <div className="relative">
        <ButtonComponent />

        <p>
          <img className="h-42 w-40 rounded-md" src="dress.jpg" alt="dress_img" />
        </p>
      </div>
      <div className="flex px-2 space-x-6 text-neutral-600">
        <p>Autumn dress</p>
        <p className="font-bold">$85</p>
      </div>
      <div className="flex px-2 space-x-20 text-xs text-neutral-300">
        <p>2 colors</p>
        <p className="text-decoration: line-through">$124</p>
      </div>
    </div>
  );
};

export default ProductListComponent