"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative bg-white">
      <section className="relative max-w-[1440px] mx-auto px-5 md:px-6 lg:px-12 md:pb-16 lg:pb-20 border-[#00000021] xl:border-x">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Something went wrong!</h1>
          <p className="text-muted-foreground">
            An error occurred. Please try again.
          </p>
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </section>
    </div>
  );
}
