"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cardSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-500">{product.description.slice(0, 100)}...</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold">${product.price}</span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
