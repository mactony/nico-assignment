import { Suspense } from "react";
import ErrorContent from "./ErrorContent";
import { Loader2 } from "lucide-react";

export default function AuthError() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen">
          <Loader2 className="animate-spin bg-[#12362e]" />
        </div>
      }
    >
      <ErrorContent />
    </Suspense>
  );
}
