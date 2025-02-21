import { Suspense } from "react";
import ErrorContent from "./ErrorContent";

export default function AuthError() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorContent />
    </Suspense>
  );
}
