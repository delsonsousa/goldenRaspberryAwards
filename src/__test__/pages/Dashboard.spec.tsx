import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../../pages/Dashboard";
import {
  getYears,
  getStudios,
  getProducers,
  getWinner,
} from "../../service/api";

jest.mock("../../service/api", () => ({
  getYears: jest.fn(),
  getStudios: jest.fn().mockResolvedValue({
    data: { studios: [{ name: "Studio A", winCount: 10 }] },
  }),
  getProducers: jest.fn(),
  getWinner: jest.fn(),
}));

describe("Dashboard component", () => {
  beforeEach(() => {
    (getYears as jest.Mock).mockResolvedValue({
      data: { years: [{ year: 2020, winnerCount: 5 }] },
    });
    (getStudios as jest.Mock).mockResolvedValue({
      data: { studios: [{ name: "Studio A", winCount: 10 }] },
    });
    (getProducers as jest.Mock).mockResolvedValue({
      data: { max: [], min: [] },
    });
    (getWinner as jest.Mock).mockResolvedValue({
      data: [{ id: 1, year: 2020, title: "Movie A" }],
    });
  });

  it("renders correctly", async () => {
    render(<Dashboard />);

    expect(screen.getByText("Top 3 studios with winners")).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();

    const form = screen.getByTestId("search-form");
    const searchButton = form.querySelector("button[type=submit]");
    expect(searchButton).toBeInTheDocument();
  });

  it("fetches and displays movies winners by year", async () => {
    render(<Dashboard />);

    const form = screen.getByTestId("search-form");
    const searchInput = screen.getByPlaceholderText("Search");

    fireEvent.change(searchInput, { target: { value: "2020" } });
    fireEvent.submit(form);

    expect(getWinner).toHaveBeenCalledTimes(1);
    await waitFor(() =>
      expect(screen.getByText("Movie A")).toBeInTheDocument()
    );
  });
});
