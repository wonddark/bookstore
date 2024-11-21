import { useParams } from "react-router-dom";
import { useBookDetailsQuery } from "@/app/books.api.ts";
import Rating from "react-rating";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import AddRemoveBookmark from "@/components/add-remove-bookmark.tsx";

export default function BookDetails() {
  const { isbn13 } = useParams();
  const { data, isLoading } = useBookDetailsQuery(isbn13 ?? "");

  return (
    <>
      <div className="py-1 lg:py-2 px-4 lg:px-6 flex gap-1 lg:gap-2 bg-slate-100">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink to="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{data?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="space-y-1 py-2.5 lg:py-4 px-4 lg:px-6">
        {!isLoading ? (
          <>
            <h3 className="text-xl lg:text-2xl font-bold">{data?.title}</h3>
            <h5 className="text-lg lg:text-xl font-medium">{data?.subtitle}</h5>
            <p className="font-semibold">{data?.authors}</p>
          </>
        ) : (
          <>
            <Skeleton className="h-5 lg:h-6 max-w-md w-full" />
            <Skeleton className="h-[18px] lg:h-5 max-w-lg w-full" />
            <Skeleton className="h-4 w-full max-w-28" />
          </>
        )}
      </div>
      <div className="flex flex-col lg:flex-row px-4 lg:px-6 mt-2 lg:mt-4">
        <div className="space-y-2 w-full max-w-[300px]">
          {!isLoading ? (
            <>
              <img src={data?.image} alt={data?.title} />
              <strong>{data?.publisher}</strong>
              <p>{data?.year}</p>
              <p>{data?.pages} pages</p>
              {/* @ts-expect-error Types */}
              <Rating
                placeholderRating={Number(data?.rating ?? 0)}
                emptySymbol={<i className="fa-regular fa-star" />}
                fullSymbol={<i className="fa-solid fa-star text-blue-400" />}
                placeholderSymbol={
                  <i className="fa-solid fa-star text-blue-600" />
                }
              />
            </>
          ) : (
            <>
              <Skeleton className="h-[350px] w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-1/5" />
            </>
          )}
        </div>
        <div className="space-y-3 lg:space-y-6">
          {!isLoading ? (
            <>
              <p>{data?.desc}</p>
              <strong className="block">{data?.price}</strong>
              {data && <AddRemoveBookmark book={data} />}
            </>
          ) : (
            <div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
