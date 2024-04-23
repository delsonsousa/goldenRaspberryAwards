import axios from "axios";

const api = axios.create({
  baseURL: "https://tools.texoit.com/backend-java/api/movies",
});

export async function getYears() {
  return api.get("?projection=years-with-multiple-winners");
}

export async function getStudios() {
  return api.get("?projection=studios-with-win-count");
}

export async function getProducers() {
  return api.get("?projection=max-min-win-interval-for-producers");
}

export async function getWinner(year: string | undefined = undefined) {
  const yearParam = year ? `&year=${year}` : "";
  return api.get(`?winner=true${yearParam}`);
}

export async function getMovieList(
  winner: string | null = null,
  year: string | null = null,
  page: string | null = "1"
) {
  const winnerParam = winner !== null ? `&winner=${winner}` : "";
  const yearParam = year !== null ? `&year=${year}` : "";
  const pageParam = page === null ? 0 : Number(page) - 1;
  const params = `?page=${pageParam}&size=10${winnerParam}${yearParam}`;

  return api.get(params);
}
