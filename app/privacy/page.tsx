import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 space-y-6">
      <h1 className="text-2xl">Privacy Policy</h1>
      <p>
        1. Introduction Secutransfer (&quot;Service&quot;) is committed to
        protecting your privacy. This Privacy Policy explains how we collect,
        use, and disclose information when you use our Service.
      </p>
      <p>
        2. Information Collection No Authentication Required: Users do not need
        to create an account or authenticate themselves to use the Service.
        Content: We collect the content of the notes you share through the
        Service. This content is encrypted end-to-end, meaning we do not have
        access to the unencrypted content.
      </p>
      <p>
        3. Use of Information Content: The encrypted content of the notes is
        stored on our servers to facilitate sharing between users. We do not
        access or use the unencrypted content of the notes. Service Improvement:
        We may use aggregated, non-identifiable information to improve the
        Service.
      </p>
      <p>
        4. Information Sharing and Disclosure Legal Requirements: We may
        disclose information if required to do so by law or in response to valid
        requests by public authorities (e.g., a court or a government agency).
        Security: We implement appropriate technical and organizational measures
        to protect the information we collect against unauthorized access,
        disclosure, alteration, or destruction.
      </p>
      <p>
        5. Data Retention Temporary Storage: Notes are stored for the duration
        specified by the user (if any) or until they are deleted as per the
        terms of the note (e.g., one-time view). Deletion: Once a note is
        deleted or expires, the encrypted content is removed from our servers.
      </p>
      <p>
        6. Security Encryption: All notes are encrypted end-to-end. Only the
        users who share and receive the notes have access to the unencrypted
        content. Data Security: We use industry-standard security measures to
        protect the data we store.
      </p>
      <p>
        7. Changes to Privacy Policy We may update this Privacy Policy from time
        to time. If we make significant changes, we will notify users by
        updating the date at the top of this policy and, if feasible, by
        providing additional notice (e.g., adding a statement to our homepage or
        sending an email notification).
      </p>
      <div className="flex justify-center my-4">
        <Link className="text-md font-bold" href="/">
          <ArrowLeft size={16} className="inline-block mr-2" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
