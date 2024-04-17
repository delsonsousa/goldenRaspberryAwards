import { InputMask, MaskEvent } from "@react-input/mask";
import { Main, Table } from "../Dashboard/styled";
import { useEffect, useState } from "react";
import { getMovieList } from "../../service/api";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import Pagination from "../Pagination";

interface Movie {
  id: number;
  title: string;
  winner: boolean;
  year: number;
}

export default function () {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState<number>(0);
  const [movies, setMovies] = useState<Movie[]>();

  async function handleYearMask(event: MaskEvent) {
    if (event.detail?.value.length === 4 || event.detail?.value.length === 0) {
      setSearchParams((prev) => {
        if (event.detail?.value.length === 0) prev.delete("year");
        else prev.set("year", event.detail?.value);

        prev.set("page", "1");

        return prev;
      });
    }
  }

  async function handleWinnerChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const isWinner =
      e?.target?.value === "null" ? null : e?.target?.value === "true";

    setSearchParams((prev) => {
      if (isWinner === null) prev.delete("winner");
      else prev.set("winner", String(isWinner));

      prev.set("page", "1");

      return prev;
    });
  }

  useEffect(() => {
    (async () => {
      const resMovieList = await getMovieList(
        searchParams.get("winner"),
        searchParams.get("year"),
        searchParams.get("page")
      );
      setMovies(resMovieList.data.content);
      setPages(resMovieList.data.totalPages);
    })();
  }, [location, searchParams]);

  if (searchParams.get("page") === null) return <Navigate to="/list?page=1" />;

  return (
    <Main>
      <div className="list">
        <Table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>
                <div>
                  <p>Year</p>
                  <InputMask
                    mask="____"
                    replacement={{ _: /\d/ }}
                    id="year"
                    name="year"
                    type="text"
                    onMask={handleYearMask}
                    defaultValue={searchParams.get("year")?.toString()}
                  />
                </div>
              </th>
              <th>Title</th>
              <th>
                <div>
                  <p>Winner?</p>
                  <select
                    id="winner"
                    name="winner"
                    onChange={handleWinnerChange}
                    defaultValue={searchParams.get("winner")?.toString()}
                  >
                    <option value="null">Yes/No</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </th>
            </tr>

            {movies?.map((movie) => {
              return (
                <tr key={`movie-${movie.id}`}>
                  <td>{movie.id}</td>
                  <td>{movie.year}</td>
                  <td>{movie.title}</td>
                  <td>{movie.winner ? "Yes" : "No"}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Pagination totalPages={pages} />
      </div>
    </Main>
  );
}
