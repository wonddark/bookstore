import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { BookSummary } from "@/types/book.ts";
import AddRemoveBookmark from "@/components/add-remove-bookmark.tsx";

type Props = {
  book: BookSummary;
};

export default function BookCardHorizontal(props: Readonly<Props>) {
  const {
    book: { image, isbn13, title, subtitle },
  } = props;
  return (
    <Card className="w-full flex gap-2.5">
      <Link to="/">
        <img src={image} alt={title} className="max-w-20" />
      </Link>
      <div className="flex flex-col">
        <CardHeader>
          <CardTitle>
            <Link to={`/book/${isbn13}`}>{title}</Link>
          </CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>
        <CardFooter className="space-x-2.5">
          <Button asChild>
            <Link to={`/book/${isbn13}`}>More details</Link>
          </Button>
          <AddRemoveBookmark book={props.book} />
        </CardFooter>
      </div>
    </Card>
  );
}
