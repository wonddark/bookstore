import useBookSearch from "./useBookSearch.ts";
import SkeletonBookCard from "@/components/skeletons/skeleton-book-card.tsx";
import BookCard from "../../components/BookCard.tsx";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function BookSearch() {
  const { data, isLoading, previous, next } = useBookSearch();

  return (
    <>
      <div className="flex flex-col lg:flex-row flex-wrap gap-3 lg:gap-4 items-center lg:items-stretch justify-start lg:justify-center py-3 lg:py-4">
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <SkeletonBookCard key={item} />
          ))}
        {!isLoading &&
          data?.books.map((item) => <BookCard key={item.isbn13} book={item} />)}
      </div>
      <Pagination className="justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious to="" onClick={previous} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext to="" onClick={next} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
