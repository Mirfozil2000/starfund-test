"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 w-full flex justify-between items-center z-10">
      <h1 className="text-2xl font-bold">Магазин</h1>
      <div className="flex items-center space-x-4">
        <span>Товаров: {cart.items.length}</span>
        <span>Сумма: ${cart.totalPrice.toFixed(2)}</span>
      </div>
    </header>
  );
};

export default Header;
