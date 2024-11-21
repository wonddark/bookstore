import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  name: string;
  description: string;
  checked?: boolean;
};

export default function BookListItem({
  name,
  description,
  checked,
}: Readonly<Props>) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" defaultChecked={checked} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {name}
        </label>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
