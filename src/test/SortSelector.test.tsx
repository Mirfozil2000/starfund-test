import { render, screen, fireEvent } from "@testing-library/react";
import SortSelector from "../app/page";

describe("SortSelector", () => {
  it("вызывает onSortChange с выбранным значением", () => {
    const mockOnSortChange = jest.fn();
    render(<SortSelector onSortChange={mockOnSortChange} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "desc" } });

    expect(mockOnSortChange).toHaveBeenCalledWith("desc");
  });
});
