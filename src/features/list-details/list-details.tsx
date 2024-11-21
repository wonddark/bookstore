import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBooks } from "@/app/default-list.slice.ts";
import BookCardHorizontal from "@/components/book-card-horizontal.tsx";

export default function ListDetails() {
  const { listId } = useParams();
  const books = useSelector(selectBooks);
  if (listId === "0") {
    document.title = `Default | Lists | BookStore`;
  }
  return (
    <div className="py-3 lg:py-4">
      {listId === "0" && (
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold">Default</h3>
          <p className="text-lg lg:text-xl text-muted-foreground">
            This is the default list for anonymous users. It will be emptied
            after you leave the site.
          </p>
          <div className="my-3 lg:my-4 space-y-2 lg:space-y-3">
            {books.map((item) => (
              <BookCardHorizontal key={item.isbn13} book={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
