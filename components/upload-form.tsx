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

export function UploadForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4 sm:p-8">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 space-y-6">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Secure File Sharing</h1>
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

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
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
