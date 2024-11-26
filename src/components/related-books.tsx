import { useSearchBooksQuery } from "@/app/books.api.ts";
import SkeletonBookCard from "@/components/skeletons/skeleton-book-card.tsx";
import BookCard from "@/components/book-card.tsx";

type Props = {
  bookTitle: string;
};

export default function RelatedBooks(props: Readonly<Props>) {
  const { bookTitle } = props;
  const query = bookTitle.split(" ").join("+");
  const page = 1;
  const params = { query, page };
  const { data, isLoading } = useSearchBooksQuery(params);

  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-3 lg:gap-4 items-center lg:items-stretch justify-start py-3 lg:py-4">
      {isLoading && [1, 2, 3, 4].map((item) => <SkeletonBookCard key={item} />)}
      {data?.books
        ?.filter((item) => item.title !== bookTitle)
        ?.map((item) => <BookCard key={item.isbn13} book={item} />)}
    </div>
  );
}
