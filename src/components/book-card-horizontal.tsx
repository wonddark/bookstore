import { Card } from "@/components/ui/card.tsx";
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
    <Card className="w-full flex gap-2.5 p-3 lg:p-5">
      <Link to="/" viewTransition>
        <img src={image} alt={title} className="max-w-20" />
      </Link>
      <div className="flex flex-col">
        <Link
          to={`/book/${isbn13}`}
          viewTransition
          className="font-medium leading-tight"
        >
          {title}
        </Link>
        <p className="text-muted-foreground mb-4 text-xs">{subtitle}</p>
        <div className="space-x-2.5">
          <AddRemoveBookmark book={props.book} />
          <Button asChild variant="secondary">
            <Link to={`/book/${isbn13}`} viewTransition>
              More details
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
