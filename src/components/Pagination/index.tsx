import { Link, useSearchParams } from "react-router-dom";
import { Pagination } from "./styled";

interface Props {
  totalPages: number;
}

export default function ({ totalPages }: Props) {
  const [searchParams] = useSearchParams();

  function createPagination() {
    const list: number[] = [];
    const currentPage = Number(searchParams.get("page"));

    if (currentPage === 0) return list;

    if (currentPage >= totalPages - 3) {
      for (let i = 0; i <= 3; i++) {
        if (totalPages - 3 + i <= 0) continue;
        list.push(totalPages - 3 + i);
      }
    } else {
      for (let i = 0; i <= 3; i++) {
        list.push(currentPage + i);
      }
    }

    if (list[0] === 1 && list.length > 3) list.push(5);
    else if (list[0] > 1) list.unshift(list[0] - 1);

    return list;
  }

  function getLink(pageNumber: number): string {
    let link = `/list?page=${pageNumber}`;

    searchParams.forEach((value, key) => {
      if (key !== "page") link += `&${key}=${value}`;
    });

    return link;
  }

  function active(pageNumber: number): string {
    return pageNumber === Number(searchParams.get("page")) ? "active" : "";
  }

  return (
    <Pagination>
      {createPagination().map((pageNumber) => {
        return (
          <Link
            to={getLink(pageNumber)}
            key={`page-${pageNumber}`}
            className={active(pageNumber)}
          >
            {pageNumber}
          </Link>
        );
      })}
    </Pagination>
  );
}
