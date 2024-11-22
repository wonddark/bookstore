import { BookSummary } from "../types/book.ts";
import { Button } from "./ui/button.tsx";
import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import AddRemoveBookmark from "@/components/add-remove-bookmark.tsx";

type Props = {
  book: BookSummary;
};
export default function BookCard(props: Readonly<Props>) {
  const { book } = props;
  const { image, title, subtitle, isbn13 } = book;
  return (
    <Card className="flex flex-col w-full max-w-[300px]">
      <Link to={`/book/${isbn13}`}>
        <img
          src={image}
          alt={title}
          className="hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </Link>
      <CardHeader className="flex-1">
        <CardTitle>
          <Link to={`/book/${isbn13}`}>{title}</Link>
        </CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-2.5">
        <Button asChild className="flex-1">
          <Link to={`/book/${isbn13}`}>More details</Link>
        </Button>
        <AddRemoveBookmark book={book} hideLabel />
      </CardFooter>
    </Card>
  );
}
