import { Notes } from "@/components/notes";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function NotesPage() {
  return (
    <Suspense fallback={<Skeleton className="w-full h-60" />}>
      <Notes />
    </Suspense>
  );
}
