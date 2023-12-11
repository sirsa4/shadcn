import SkeletonComponent from "@/components/SkeletonComponent";
import React from "react";

const Loading = () => {
  return (
    <main>
      <div className="grid grid-cols-3 gap-3">
        {"12345678".split("").map((i) => {
          return <SkeletonComponent key={i} />;
        })}
      </div>
    </main>
  );
};

export default Loading;
