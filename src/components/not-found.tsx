import FeelingBlue from "@/components/feeling-blue.tsx";
import SearchForm from "@/features/search-form/search-form.tsx";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-5 px-4 lg:px-5 py-5">
      <div className="w-full max-w-xl">
        <FeelingBlue />
      </div>
      <div className="w-full max-w-2xl flex flex-col gap-3 items-center">
        <p className="font-medium text-center">
          The page you are looking for does not seems to exists
        </p>
        <p className="text-sm text-muted-foreground">
          Please make sure the url is well typed and up to date. You can use the
          search form below to find books of your interest
        </p>
        <SearchForm />
        <p>
          <span className="text-muted-foreground me-1.5">or</span>
          <Link to="/">go back to home</Link>
        </p>
      </div>
    </div>
  );
}
