import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input.tsx";

export default function SearchForm() {
  return (
    <form
      method="GET"
      action="/search"
      className="flex items-center w-full max-w-3xl mx-auto"
    >
      <input type="text" readOnly hidden name="p" value="1" />
      <Input
        type="search"
        placeholder="Search"
        name="q"
        className="rounded-r-none"
      />
      <Button className="rounded-l-none">
        <i className="fa-solid fa-search"></i>
      </Button>
    </form>
  );
}
