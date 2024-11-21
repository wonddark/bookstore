import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookSummary } from "@/types/book.ts";

type ListType = BookSummary[];
const initialState: ListType = [];

const defaultListSlice = createSlice({
  name: "default-list",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<BookSummary>) =>
      state.concat(action.payload),
    remove: (state, action: PayloadAction<string>) =>
      state.filter((item) => item.isbn13 !== action.payload),
  },
  selectors: {
    selectBooks: (state) => state,
    isBookInList: (state, isbn13: string) =>
      state.some((item) => item.isbn13 === isbn13),
  },
});

export const {
  actions: { add, remove },
  selectors: { selectBooks, isBookInList },
} = defaultListSlice;

export default defaultListSlice;
