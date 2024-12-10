import BooksListing from "./features/books-listing";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import BookDetails from "./features/book-details";
import BookSearch from "./features/book-search";
import Layout from "@/components/layout.tsx";
import ListsListing from "@/features/list-listing/lists-listing.tsx";
import ListDetails from "@/features/list-details/list-details.tsx";
import { NuqsAdapter } from "nuqs/adapters/react-router";

function App() {
  return (
    <NuqsAdapter>
      <RouterProvider router={router} />
    </NuqsAdapter>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Layout />
      </Provider>
    ),
    children: [
      {
        index: true,
        element: <BooksListing />,
      },
      {
        path: "book/:isbn13",
        element: <BookDetails />,
      },
      {
        path: "search",
        element: <BookSearch />,
      },
      {
        path: "lists",
        element: <Outlet />,
        children: [
          { index: true, element: <ListsListing /> },
          {
            path: ":listId",
            element: <ListDetails />,
          },
        ],
      },
    ],
  },
]);

export default App;
