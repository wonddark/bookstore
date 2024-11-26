import { useRecentBooksQuery } from "@/app/books.api.ts";
import BookCard from "../../components/book-card.tsx";
import SkeletonBookCard from "@/components/skeletons/skeleton-book-card.tsx";

export default function BooksListing() {
  const { data, isLoading } = useRecentBooksQuery(undefined);
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-3 lg:gap-4 items-center lg:items-stretch justify-start lg:justify-center py-3 lg:py-4">
      {isLoading &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <SkeletonBookCard key={item} />
        ))}
      {data?.books?.map((item) => <BookCard key={item.isbn13} book={item} />)}
    </div>
  );
}
