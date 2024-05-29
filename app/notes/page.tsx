"use client";
import { useCallback, useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { useSearchParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { useCopyToClipboard } from "usehooks-ts";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function NotesPage() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [noteContent, setNoteContent] = useState("");
  const [_, copy] = useCopyToClipboard();

  const fetchNote = useCallback(
    async (id: string | null) => {
      if (id) {
        try {
          const response = await axios.get(`/api/notes?id=${id}`);
          setNoteContent(response.data.content);
        } catch (error: any) {
          toast({
            variant: "destructive",
            title: "An error occurred",
            description: error?.response?.data || "Something went wrong",
          });
        } finally {
          setLoading(false);
        }
      }
    },
    [toast]
  );

  useEffect(() => {
    const id = searchParams.get("id");
    fetchNote(id);
  }, [searchParams, fetchNote]);

  const handleCopyToClipboard = async () => {
    if (!noteContent) return;

    try {
      await copy(noteContent);
      toast({
        title: "Content copied to clipboard",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An error occurred",
      });
    }
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 space-y-6">
      <div className="flex justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="text-gray-500 dark:text-gray-400">
            Share your notes securely with end-to-end encryption.
          </p>
        </div>
        <ThemeToggle />
      </div>
      {loading ? (
        <Skeleton className="bg-gray-100 dark:bg-gray-700 w-full h-40" />
      ) : (
        noteContent && (
          <div className="flex flex-col gap-2">
            <Textarea
              className="mt-1 w-full bg-white dark:bg-gray-700 dark:text-gray-300 h-40"
              value={noteContent}
            />
            <Button className="w-full" onClick={handleCopyToClipboard}>
              Copy to clipboard
            </Button>
          </div>
        )
      )}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <p>
          Your files are encrypted using RSA cryptography for end-to-end
          security. We do not have access to the contents of your files.
        </p>
      </div>
    </div>
  );
}
