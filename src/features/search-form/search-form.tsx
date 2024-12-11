import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input.tsx";
import { useSearchParams } from "react-router-dom";

export default function SearchForm() {
  const [params] = useSearchParams();
  const query = params.get("q") ?? "";

  return (
    <form
      method="GET"
      action="/search"
      className="flex items-center w-full max-w-screen-xl mx-auto"
    >
      <input type="text" readOnly hidden name="p" value="1" />
      <Input
        type="search"
        placeholder="Search tech books"
        name="q"
        className="rounded-r-none"
        defaultValue={query}
      />
      <Button className="rounded-l-none">
        <i className="fa-solid fa-search"></i>
      </Button>
    </form>
  );
}
