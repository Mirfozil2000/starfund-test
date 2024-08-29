import { render, screen } from "@testing-library/react";
import ProductCard from "../components/ProductCard";

const mockProduct: Product = {
  id: 1,
  title: "Тестовый продукт",
  description: "Это тестовый продукт",
  price: 19.99,
  image: "https://via.placeholder.com/150",
  currency: "USD",
  rating: 4.5,
};

describe("ProductCard", () => {
  it("корректно отображает информацию о продукте", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toHaveAttribute(
      "src",
      mockProduct.image
    );
  });
});
