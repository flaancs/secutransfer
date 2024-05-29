"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Logo } from "./logo";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, CopyIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import moment from "moment";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useCopyToClipboard } from "usehooks-ts";
import axios from "axios";

const ShareFormSchema = z.object({
  content: z
    .string({
      required_error: "Content is required",
    })
    .min(1, "Content is too short")
    .max(1000, "Content is too long"),
  oneTime: z.boolean().optional(),
  expiresAt: z.date().optional(),
});

type FormValues = z.infer<typeof ShareFormSchema>;

export function ShareForm() {
  const { toast } = useToast();
  const [_, copy] = useCopyToClipboard();
  const [createdNoteUrl, setCreatedNoteUrl] = useState("");
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(ShareFormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async ({
    content,
    oneTime,
    expiresAt,
  }) => {
    try {
      const shareUrl = await axios.post(
        "/api/notes",
        {
          content,
          oneTime,
          expiresAt,
        },
        {
          headers: {
            "Api-Key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      form.reset();
      setCreatedNoteUrl(shareUrl.data);
      setSuccessDialogOpen(true);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: error?.response?.data || "Something went wrong",
      });
    }
  };

  const handleCopyToClipboard = async () => {
    if (!createdNoteUrl) return;

    try {
      await copy(createdNoteUrl);
      toast({
        title: "Link copied to clipboard",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An error occurred",
      });
    }
  };

  return (
    <>
      <AlertDialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Your notes have been shared successfully!
            </AlertDialogTitle>
            <AlertDialogDescription>
              Share the link below with the recipient:
              <div className="pl-4 pr-2 py-2 my-2 rounded-md border flex items-center gap-2">
                <span>{createdNoteUrl}</span>
                <Button
                  type="button"
                  size="icon"
                  onClick={handleCopyToClipboard}
                >
                  <CopyIcon className="w-4 h-4" />
                </Button>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={form.formState.isSubmitting}
                      className="mt-1 w-full bg-white dark:bg-gray-700 dark:text-gray-300 h-40"
                      placeholder="Enter your message"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Content is encrypted using RSA cryptography.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expiresAt"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Expires at</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          disabled={form.formState.isSubmitting}
                          variant={"outline"}
                          className={cn(
                            "text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            moment(field.value).format("LL")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(e) => {
                          field.onChange(e);
                          form.setValue("oneTime", false);
                        }}
                        disabled={form.formState.isSubmitting}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                  <FormDescription>
                    The link will expire at the end of the day.
                  </FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="oneTime"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
                  <FormControl>
                    <Checkbox
                      disabled={form.formState.isSubmitting}
                      checked={field.value}
                      onCheckedChange={(e) => {
                        field.onChange(e);
                        form.setValue("expiresAt", undefined);
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>One time link</FormLabel>
                    <FormMessage />
                    <FormDescription>
                      The link will expire after the first use.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <Button
              disabled={form.formState.isSubmitting}
              className="w-full"
              type="submit"
            >
              Share notes
            </Button>
            <p className="text-xs text-muted-foreground">
              By sharing notes, you agree to our{" "}
              <Link href="/terms" className="text-blue-500 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-500 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </form>
        </Form>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>
            Your files are encrypted using RSA cryptography for end-to-end
            security. We do not have access to the contents of your files.
          </p>
        </div>
      </div>
    </>
  );
}
