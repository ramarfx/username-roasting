import { CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const Loader = () => {
  return (
    <>
      <CardHeader>
        <Skeleton className="w-[160px] h-4" />
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 flex-wrap">
          <Skeleton className="w-full h-6" />
          <div className="w-full flex gap-2">
            <Skeleton className="flex-1 h-6" />
            <Skeleton className="flex-1 h-6" />
          </div>
          <Skeleton className="w-[200px] h-6" />
          <Skeleton className="w-[300px] h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-2/3 h-6" />
        </div>
      </CardContent>
    </>
  );
};

export default Loader;
