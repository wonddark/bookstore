import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BookDetails, BookSummary } from "../types/book";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.itbook.store/1.0/" }),
  endpoints: (builder) => ({
    recentBooks: builder.query<
      { total: string; books: BookSummary[] },
      undefined
    >({
      query: () => "new",
    }),
    searchBooks: builder.query<
      { total: string; books: BookSummary[] },
      { query: string; page?: number }
    >({
      query: ({ query, page = 1 }) => `search/${query}/${page}`,
    }),
    bookDetails: builder.query<BookDetails, string>({
      query: (isbn13) => `books/${isbn13}`,
    }),
  }),
});

export const { useRecentBooksQuery, useSearchBooksQuery, useBookDetailsQuery } =
  booksApi;
