import { BookSummary } from "../types/book.ts";
import { Button } from "./ui/button.tsx";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import AddRemoveBookmark from "@/components/add-remove-bookmark.tsx";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton.tsx";

type Props = {
  book: BookSummary;
};
export default function BookCard(props: Readonly<Props>) {
  const { book } = props;
  const { image, title, subtitle, isbn13 } = book;
  const [imgReady, setImgReady] = useState<boolean>(false);
  return (
    <Card className="flex flex-col w-full max-w-[300px]">
      <CardContent className="flex-1">
        <Link to={`/book/${isbn13}`}>
          <Skeleton
            className={`w-full aspect-square ${imgReady ? "hidden" : "block"}`}
          />
          <img
            src={image}
            alt={title}
            className={`hover:scale-110 transition-transform duration-700 ease-in-out ${imgReady ? "block" : "hidden"}`}
            onLoad={() => setImgReady(true)}
          />
        </Link>
        <Link to={`/book/${isbn13}`} className="font-medium">
          {title}
        </Link>
        <p className="text-sm font-light">{subtitle}</p>
      </CardContent>
      <CardFooter className="gap-2.5">
        <Button asChild className="flex-1">
          <Link to={`/book/${isbn13}`}>More details</Link>
        </Button>
        <AddRemoveBookmark book={book} hideLabel />
      </CardFooter>
    </Card>
  );
}
