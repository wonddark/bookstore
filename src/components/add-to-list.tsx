import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookSummary } from "@/types/book.ts";
import BookListItem from "@/components/book-list-item.tsx";
import { ScrollArea } from "@/components/ui/scroll-area";
import { add } from "@/app/default-list.slice.ts";
import { useAppDispatch } from "@/app/hooks.ts";
import { toast } from "sonner";
import { useRef } from "react";

type Props = {
  book: BookSummary;
  hideLabel?: boolean;
};

export default function AddToList({ book, hideLabel }: Readonly<Props>) {
  const dispatch = useAppDispatch();
  const closeRef = useRef<HTMLButtonElement>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={hideLabel ? "outline" : "default"}>
          <i className="fa-regular fa-bookmark"></i>
          {!hideLabel && <span>Add to playlist</span>}
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
          <DialogDescription>Login to create new book list.</DialogDescription>
        </div>
        <DialogFooter className="gap-3 lg:gap-5">
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
              dispatch(add(book));
              toast("The book has been added successfully.");
              closeRef.current?.click();
            }}
            variant="default"
          >
            <i className="fa-solid fa-check-circle" />
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
