"use client";
import React from "react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import useProducts from "../hooks/useProducts";
import { SortOrder } from "@/interface/types";

const HomePage = () => {
  const {
    products,
    totalPages,
    currentPage,
    handleSearch,
    handleSortChange,
    setCurrentPage,
  } = useProducts("asc", "");

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <SearchBar onSearch={handleSearch} />
      <SortSelector onSortChange={handleSortChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};

const SortSelector: React.FC<{ onSortChange: (order: SortOrder) => void }> = ({
  onSortChange,
}) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <select
        onChange={(e) => onSortChange(e.target.value as SortOrder)}
        className="border p-2 rounded"
      >
        <option value="asc">Сначала дешевые</option>
        <option value="desc">Сначала дорогие</option>
      </select>
    </div>
  );
};

export default HomePage;
