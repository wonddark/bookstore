import { isBookInList } from "@/app/default-list.slice.ts";
import { BookSummary } from "@/types/book.ts";
import { useAppSelector } from "@/app/hooks.ts";
import RemoveFromList from "@/components/ui/remove-from-list.tsx";
import AddToList from "@/components/add-to-list.tsx";

type Props = {
  book: BookSummary;
  hideLabel?: boolean;
};

export default function AddRemoveBookmark(props: Readonly<Props>) {
  const { book } = props;
  const isInList = useAppSelector((state) => isBookInList(state, book.isbn13));
  return (
    <>{isInList ? <RemoveFromList {...props} /> : <AddToList {...props} />}</>
  );
}
