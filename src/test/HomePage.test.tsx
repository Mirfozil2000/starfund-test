import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "../app/page";
import useProducts from "../hooks/useProducts";

jest.mock("../hooks/useProducts");

describe("HomePage", () => {
  (useProducts as jest.Mock).mockReturnValue({
    products: [],
    totalPages: 1,
    currentPage: 1,
    handleSearch: jest.fn(),
    handleSortChange: jest.fn(),
    setCurrentPage: jest.fn(),
  });

  it("отображает заголовок и компоненты", () => {
    render(<HomePage />);
    expect(screen.getByText("Product Listing")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Поиск продуктов")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("вызывает handleSearch при обновлении поискового запроса", async () => {
    const mockHandleSearch = jest.fn();
    (useProducts as jest.Mock).mockReturnValue({
      products: [],
      totalPages: 1,
      currentPage: 1,
      handleSearch: mockHandleSearch,
      handleSortChange: jest.fn(),
      setCurrentPage: jest.fn(),
    });

    render(<HomePage />);

    fireEvent.change(screen.getByPlaceholderText("Поиск продуктов"), {
      target: { value: "Тестовый запрос" },
    });

    await waitFor(() =>
      expect(mockHandleSearch).toHaveBeenCalledWith("Тестовый запрос")
    );
  });

  it("вызывает handleSortChange при изменении порядка сортировки", async () => {
    const mockHandleSortChange = jest.fn();
    (useProducts as jest.Mock).mockReturnValue({
      products: [],
      totalPages: 1,
      currentPage: 1,
      handleSearch: jest.fn(),
      handleSortChange: mockHandleSortChange,
      setCurrentPage: jest.fn(),
    });

    render(<HomePage />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "desc" },
    });

    await waitFor(() =>
      expect(mockHandleSortChange).toHaveBeenCalledWith("desc")
    );
  });
});
