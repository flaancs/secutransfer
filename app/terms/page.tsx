import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 space-y-6">
      <h1 className="text-2xl">Terms & Conditions</h1>
      <p>
        1. Acceptance of Terms: By accessing or using Secutransfer
        (&quot;Service&quot;), you agree to be bound by these Terms & Conditions
        (&quot;Terms&quot;). If you do not agree to these Terms, please do not
        use the Service.
      </p>
      <p>
        2. Service Description: Secutransfer allows users to share notes
        securely using end-to-end encryption. Users do not need to create an
        account or authenticate themselves to use the Service.
      </p>
      <p>
        3. User Responsibilities: Users are solely responsible for the content
        they share using the Service. Users must ensure that their use of the
        Service complies with all applicable laws and regulations. Users must
        not share content that is illegal, harmful, threatening, defamatory,
        obscene, infringing, or otherwise objectionable.
      </p>
      <p>
        4. Disclaimer of Warranties: The Service is provided &quot;as is&quot;
        and &quot;as available&quot; without any warranties of any kind, either
        express or implied. We do not guarantee that the Service will be
        uninterrupted, secure, or error-free.
      </p>
      <p>
        5. Limitation of Liability: To the fullest extent permitted by law,
        Secutransfer shall not be liable for any indirect, incidental, special,
        consequential, or punitive damages, or any loss of profits or revenues,
        whether incurred directly or indirectly, or any loss of data, use,
        goodwill, or other intangible losses, resulting from (i) your use or
        inability to use the Service; (ii) any unauthorized access to or use of
        our servers and/or any personal information stored therein; (iii) any
        content obtained from the Service; and (iv) any content shared by users.
      </p>
      <p>
        6. Changes to Terms: We reserve the right to modify these Terms at any
        time. If we make changes, we will provide notice by updating the date at
        the top of these Terms. By continuing to use the Service after the
        changes become effective, you agree to be bound by the revised Terms.
      </p>
      <p>
        7. Governing Law: These Terms shall be governed by and construed in
        accordance with the laws of the jurisdiction in which Secutransfer
        operates, without regard to its conflict of law provisions.
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
