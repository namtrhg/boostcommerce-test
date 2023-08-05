import React from "react";

export const ProductCard = ({ title, image, brand, price }) => {
  return (
    <div className="flex space-x-4 hover:bg-slate-100 px-2">
      <img className="w-20 h-20" src={image} alt={title} />
      <div className="text-sm">
        <p>{title}</p>
        <p className="text-slate-500">{brand}</p>
        <p className="font-bold">${price}</p>
      </div>
    </div>
  );
};
