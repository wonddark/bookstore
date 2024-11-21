import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchBooksQuery } from "../../app/books.api.ts";
import { MouseEventHandler } from "react";

export default function useBookSearch() {
  const [searchParams] = useSearchParams();
  const { data, isLoading, isError } = useSearchBooksQuery({
    query: searchParams.get("q") ?? "",
    page: Number(searchParams.get("p") ?? "1"),
  });
  const navigate = useNavigate();
  const previous: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const currPage = Number(searchParams.get("p") ?? "1");
    if (currPage > 1) {
      searchParams.set("p", String(currPage - 1));
    }
    navigate(`/search?${searchParams}`);
  };
  const next: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const currPage = Number(searchParams.get("p") ?? "1");
    if (currPage < 100) {
      searchParams.set("p", String(currPage + 1));
    }
    navigate(`/search?${searchParams}`);
  };
  return { data, isLoading, isError, previous, next };
}
