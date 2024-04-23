import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import List from "../../pages/List";
import { getMovieList as mockGetMovieList } from "../../service/api";
import { AxiosResponse } from "axios";

jest.mock("../../service/api");

const getMovieList = mockGetMovieList as jest.MockedFunction<
  typeof mockGetMovieList
>;

describe("ListPage component", () => {
  beforeEach(() => {
    getMovieList.mockResolvedValue({
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
      data: {
        content: [
          { id: 1, title: "Movie 1", winner: true, year: 2000 },
          { id: 2, title: "Movie 2", winner: false, year: 2005 },
        ],
        totalPages: 2,
      },
    } as AxiosResponse);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders table with movie data", async () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter initialEntries={["/list"]}>
        <List />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getMovieList).toHaveBeenCalledWith(null, null, "1");
    });

    expect(getByTestId("year-input")).toHaveValue("");
    expect(getByTestId("winner")).toHaveValue("null");
    expect(getByText("Movie 1")).toBeInTheDocument();
    expect(getByText("Movie 2")).toBeInTheDocument();
  });

  it("filters movies by winner", async () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/list"]}>
        <List />
      </MemoryRouter>
    );

    const winnerSelect = getByTestId("winner");
    fireEvent.change(winnerSelect, { target: { value: "true" } });

    await waitFor(() => {
      expect(getMovieList).toHaveBeenCalledWith("true", null, "1");
    });
  });

  it("navigates to page 1 if page query parameter is missing", async () => {
    const { container, findByText } = render(
      <MemoryRouter initialEntries={["/list"]}>
        <List />
      </MemoryRouter>
    );

    await findByText("1", { selector: "a" });
    expect(
      container.querySelector('a[href="/list?page=1"]')
    ).toBeInTheDocument();
  });

  it("clears year filter when input is empty", async () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/list?year=2000"]}>
        <List />
      </MemoryRouter>
    );

    const yearInput = getByTestId("year-input");
    fireEvent.change(yearInput, { target: { value: "" } });

    await waitFor(() => {
      expect(getMovieList).toHaveBeenCalledWith(null, null, "1");
    });
  });

  it("filters movies by winner status", async () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/list"]}>
        <List />
      </MemoryRouter>
    );

    const winnerSelect = getByTestId("winner");
    fireEvent.change(winnerSelect, { target: { value: "true" } });

    await waitFor(() => {
      expect(getMovieList).toHaveBeenCalledWith("true", null, "1");
    });
  });
});
