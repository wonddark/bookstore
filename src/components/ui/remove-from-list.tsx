import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookSummary } from "@/types/book.ts";
import BookListItem from "@/components/book-list-item.tsx";
import { ScrollArea } from "@/components/ui/scroll-area";
import { remove } from "@/app/default-list.slice.ts";
import { useAppDispatch } from "@/app/hooks.ts";
import { toast } from "sonner";
import { useRef } from "react";

type Props = {
  book: BookSummary;
  hideLabel?: boolean;
};

export default function RemoveFromList({ book, hideLabel }: Readonly<Props>) {
  const dispatch = useAppDispatch();
  const closeRef = useRef<HTMLButtonElement>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={hideLabel ? "outline" : "default"}>
          <i className="fa-solid fa-bookmark"></i>
          {!hideLabel && (
            <span className="hidden md:inline">Remove from playlist</span>
          )}
        </Button>
      </DialogTrigger>
      <DialogClose hidden ref={closeRef} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose a list</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <ScrollArea className="h-fit max-h-40 space-y-2.5">
            <BookListItem
              name="Default"
              description="Temporal list good for anonymous users"
            />
          </ScrollArea>
        </div>
        <DialogFooter>
          <Button
            variant="secondary"
            onClick={() => {
              closeRef.current?.click();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              dispatch(remove(book.isbn13));
              toast("The book has been removed successfully.");
              closeRef.current?.click();
            }}
            variant="default"
          >
            <i className="fa-solid fa-check-circle" />
            Remove
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
