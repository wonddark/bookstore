export default function SkeletonBookCard() {
  return (
    <div className="rounded-md p-3 lg:p-4 w-full max-w-[324px] lg:max-w-[332px] border border-slate-300 hover:shadow-md">
      <div className="animate-pulse space-y-4">
        <div className="w-[300px] h-[350px] bg-slate-300"></div>
        <div className="flex flex-col gap-2.5">
          <div className="h-3.5 w-full bg-slate-300"></div>
          <div className="flex flex-col gap-1 5">
            <div className="h-2 w-full bg-slate-300"></div>
            <div className="h-2 w-4/5 bg-slate-300"></div>
          </div>
        </div>
        <div className="w-6 h-2 bg-slate-300"></div>
        <div className="flex gap-2">
          <div className="h-5 lg:h-7 flex-[3] rounded-md bg-slate-300"></div>
          <div className="h-5 lg:h-7 flex-1 rounded-md bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
}
