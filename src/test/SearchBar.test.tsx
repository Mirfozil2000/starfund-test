import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  it("вызывает onSearch с введенным значением при изменении", () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Поиск продуктов");
    fireEvent.change(input, { target: { value: "Тестовый запрос" } });

    expect(mockOnSearch).toHaveBeenCalledWith("Тестовый запрос");
  });
});
