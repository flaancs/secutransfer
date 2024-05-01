import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Logo } from "./logo";

export function UploadForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4 sm:p-8">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 space-y-6">
        <div className="flex justify-between">
          <div className="space-y-2">
            <Logo />
            <p className="text-gray-500 dark:text-gray-400">
              Share your files securely with end-to-end encryption.
            </p>
          </div>
          <ThemeToggle />
        </div>
        <div className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="file"
            >
              Upload Files (required)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md dark:border-gray-600">
              <div className="space-y-1 text-center">
                <UploadIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                  <label
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 dark:bg-gray-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                    htmlFor="file"
                  >
                    <span>Upload files</span>
                    <input
                      className="sr-only"
                      id="file"
                      name="file"
                      type="file"
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PDF, DOCX, XLSX files up to 50MB
                </p>
              </div>
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="message"
            >
              Message (required)
            </label>
            <Textarea
              className="mt-1 w-full bg-white dark:bg-gray-700 dark:text-gray-300"
              id="message"
              placeholder="Enter your message"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 space-y-2">
              <h3 className="text-lg font-bold">Free</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Basic file sharing with no password or one-view mode.
              </p>
              <div className="text-4xl font-bold">$0</div>
              <Button className="w-full bg-gray-900 text-gray-50 hover:bg-gray-800 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">
                Share Files
              </Button>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 space-y-4">
              <h3 className="text-lg font-bold">Secure</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Secure file sharing with password, one-view mode, and expiration
                date.
              </p>
              <div className="space-y-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="mt-1 flex items-center">
                    <TooltipProvider>
                      <Input
                        className="flex-1 bg-white dark:bg-gray-800 dark:text-gray-300"
                        id="password"
                        type="password"
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            className="ml-2 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
                            size="icon"
                            variant="outline"
                          >
                            <KeyIcon className="h-5 w-5" />
                            <span className="sr-only">Generate Password</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="space-y-2">
                            <h3 className="text-lg font-medium">
                              Generate Secure Password
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                              Generate a strong, random password for your file
                              sharing.
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Protect your files with a password. We recommend using a
                    strong, unique password.
                  </p>
                </div>
                <div>
                  <label
                    className="block text-sm mb-1 font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="expiration-date"
                  >
                    Expiration Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        className="w-full flex-col h-auto items-start bg-white dark:bg-gray-800 dark:text-gray-300"
                        variant="outline"
                      >
                        <span className="font-normal">
                          Select expiration date
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px]">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label
                    className="block text-sm mb-1 font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="share-method"
                  >
                    Share Method
                  </label>
                  <Select defaultValue="link">
                    <SelectTrigger className="w-full bg-white dark:bg-gray-800 dark:text-gray-300">
                      <SelectValue placeholder="Select share method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="link">Get Link to Share</SelectItem>
                      <SelectItem value="email">
                        Send Email with Link
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="email-title"
                  >
                    Email Title
                  </label>
                  <Input
                    className="mt-1 w-full bg-white dark:bg-gray-800 dark:text-gray-300"
                    id="email-title"
                    placeholder="Enter email title"
                  />
                </div>
                <div>
                  <label className="flex items-center" htmlFor="one-view">
                    <Checkbox
                      className="bg-white dark:bg-gray-800 dark:border-gray-600"
                      id="one-view"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      One-view mode
                    </span>
                  </label>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Limit access to the files and message to a single view.
                  </p>
                </div>
                <div className="text-4xl font-bold">$2</div>
                <Button className="w-full bg-gray-900 text-gray-50 hover:bg-gray-800 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500">
                  Share Files
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>
            Your files are encrypted using RSA cryptography for end-to-end
            security. We do not have access to the contents of your files.
          </p>
          <p className="mt-2">
            When you press the <span className="font-bold">Share Files</span>{" "}
            button, you will receive a secret key that you can share with others
            to allow them to download and view the content. If you also set a
            password, one-view mode, and expiration date, the other user will
            need to enter the secret key, password, and access the content
            before the expiration date.
          </p>
        </div>
        <div className="flex justify-center">
          <Button
            className="bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
            variant="outline"
          >
            <ChromeIcon className="mr-2 h-5 w-5" />
            Sign in with Google
          </Button>
        </div>
      </div>
      <Link
        className="pt-8 pb-2 flex gap-2 items-center text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        href="https://github.com/flaancs/secutransfer"
        target="_blank"
      >
        <GithubIcon />
        <span>
          View source on <span className="font-semibold">GitHub</span>
        </span>
      </Link>
    </div>
  );
}

function ChromeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function KeyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  );
}

function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M20 10.25c0 2.234-.636 4.243-1.908 6.027c-1.271 1.784-2.914 3.018-4.928 3.703c-.234.045-.406.014-.514-.093a.539.539 0 0 1-.163-.4V16.67c0-.863-.226-1.495-.677-1.895a8.72 8.72 0 0 0 1.335-.24c.394-.107.802-.28 1.223-.52a3.66 3.66 0 0 0 1.055-.888c.282-.352.512-.819.69-1.402c.178-.583.267-1.252.267-2.008c0-1.077-.343-1.994-1.028-2.75c.32-.81.286-1.717-.105-2.723c-.243-.08-.594-.03-1.054.147a6.94 6.94 0 0 0-1.198.587l-.495.32a9.03 9.03 0 0 0-2.5-.346a9.03 9.03 0 0 0-2.5.347a11.52 11.52 0 0 0-.553-.36c-.23-.143-.593-.314-1.088-.514c-.494-.2-.868-.26-1.12-.18c-.381 1.005-.412 1.912-.09 2.722c-.686.756-1.03 1.673-1.03 2.75c0 .756.09 1.423.268 2.002c.178.578.406 1.045.683 1.401a3.53 3.53 0 0 0 1.048.894c.421.24.83.414 1.224.52c.395.108.84.188 1.335.241c-.347.32-.56.779-.638 1.375a2.539 2.539 0 0 1-.586.2a3.597 3.597 0 0 1-.742.067c-.287 0-.57-.096-.853-.287c-.282-.192-.523-.47-.723-.834a2.133 2.133 0 0 0-.631-.694c-.256-.178-.471-.285-.645-.32l-.26-.04c-.182 0-.308.02-.378.06c-.07.04-.09.09-.065.153a.738.738 0 0 0 .117.187a.961.961 0 0 0 .17.16l.09.066c.192.09.38.259.567.508c.187.249.324.476.41.68l.13.307c.113.338.304.612.574.821c.269.21.56.343.872.4c.312.058.614.09.905.094c.29.004.532-.011.723-.047l.299-.053c0 .338.002.734.007 1.188l.006.72c0 .16-.056.294-.17.4c-.112.108-.286.139-.52.094c-2.014-.685-3.657-1.92-4.928-3.703C.636 14.493 0 12.484 0 10.25c0-1.86.447-3.574 1.341-5.145a10.083 10.083 0 0 1 3.64-3.73A9.6 9.6 0 0 1 10 0a9.6 9.6 0 0 1 5.02 1.375a10.083 10.083 0 0 1 3.639 3.73C19.553 6.675 20 8.391 20 10.25"
      />
    </svg>
  );
}
