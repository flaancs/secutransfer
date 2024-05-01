import { LockIcon } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <LockIcon />
      <h1 className="text-2xl">
        <span className="font-semibold">Secu</span>transfer
      </h1>
    </div>
  );
}
