import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — OneCard",
  description: "Privacy policy for the OneCard system at Jinja SSS.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy pt-24 pb-16">
      <div className="container-custom max-w-3xl">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Last updated: July 2026
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              OneCard collects and stores the following information:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li>Student names, photos, and identification numbers</li>
              <li>Fee payment records and balances</li>
              <li>Attendance logs (date, time, location)</li>
              <li>Meal access records</li>
              <li>Student movement records (entry/exit times)</li>
              <li>Staff user accounts (name, role, login credentials)</li>
              <li>System usage logs for security and auditing</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              2. How We Use Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The information collected is used exclusively for:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li>Student identification and verification</li>
              <li>Fee management and payment tracking</li>
              <li>Attendance monitoring and reporting</li>
              <li>Meal program administration</li>
              <li>School security and student safety</li>
              <li>Generating administrative reports</li>
              <li>Improving school operations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              3. Data Storage & Security
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              All data is stored in a secure, cloud-hosted MySQL database (Render). 
              Security measures include: encryption of data in transit (HTTPS) and at rest, 
              role-based access control, regular automated backups, audit logging of all 
              access, and secure authentication protocols.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              4. Data Sharing
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We do not sell, trade, or share student data with third parties. Data is 
              only accessible to authorized school staff through role-based accounts. 
              Parents can view their child&apos;s fee balance via the school website using a 
              unique payment code — no personal data is publicly exposed.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              5. Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The OneCard landing page uses essential cookies for session management and 
              security. Analytics cookies may be used to understand site usage and improve 
              the service. Users can control cookie preferences through the cookie banner 
              displayed on their first visit.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              6. Data Retention
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Student data is retained for the duration of the student&apos;s enrollment at 
              Jinja Senior Secondary School plus a reasonable period thereafter for 
              administrative and legal purposes. Staff accounts are retained while the 
              staff member is employed at the school.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              7. Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Students and parents have the right to: request access to their personal 
              data, request correction of inaccurate data, request deletion of data (subject 
              to legal obligations), and withdraw consent for data processing. To exercise 
              these rights, contact the school administration.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This privacy policy may be updated periodically. Users will be notified of 
              significant changes. Continued use of the OneCard system after changes 
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              9. Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              For privacy-related inquiries, contact:
            </p>
            <div className="mt-3 space-y-1 text-gray-600 dark:text-gray-400">
              <p><strong>Data Protection Officer</strong></p>
              <p>Jinja Senior Secondary School</p>
              <p>P.O Box 255, Jinja</p>
              <p>Phone: 0772404055</p>
              <p>Email: jinjass1948@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}