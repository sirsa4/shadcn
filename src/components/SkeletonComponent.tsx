import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const SkeletonComponent = () => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="h-6 flex-grow" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 flex-grow" />
        <Skeleton className="h-4 flex-grow" />
        <Skeleton className="h-4 w-1/2 flex-grow" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-28" />
      </CardFooter>
    </Card>
  );
};

export default SkeletonComponent;
