import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonBookCard() {
  return (
    <div className="rounded-md p-3 lg:p-4 w-full max-w-[324px] lg:max-w-[332px] border border-slate-300">
      <Skeleton className="w-[300px] h-[350px]" />
      <div className="flex flex-col gap-2.5">
        <Skeleton className="w-full h-3.5" />
        <div className="flex flex-col gap-1 5">
          <Skeleton className="h-2 w-full" />
          <Skeleton className="h-2 w-4/5" />
        </div>
      </div>
      <Skeleton className="w-6 h-2" />
      <div className="flex gap-2">
        <Skeleton className="h-5 lg:h-7 flex-[3] rounded-md" />
        <Skeleton className="h-5 lg:h-7 flex-1 rounded-md" />
      </div>
    </div>
  );
}
