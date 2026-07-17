import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — OneCard",
  description: "Terms and conditions for using the OneCard system at Jinja SSS.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy pt-24 pb-16">
      <div className="container-custom max-w-3xl">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy dark:text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Last updated: July 2026
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              By accessing and using the OneCard system ("the Service"), you agree to be bound 
              by these Terms of Service. If you do not agree to these terms, please do not use 
              the Service. Jinja Senior Secondary School ("the School") and Herman Software 
              Solutions ("the Developer") reserve the right to update these terms at any time.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              2. Description of Service
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              OneCard is a smart student management system that provides digital student 
              identification, fee verification, attendance tracking, meal access control, 
              and related school management functions. The Service is provided as a web-based 
              platform accessible from any internet-connected device.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              3. User Accounts & Security
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Users are responsible for maintaining the confidentiality of their login 
              credentials. Each user role (Super Admin, Admin, Bursar, Gate Staff, Class 
              Teacher) has specific access levels. Users must not share their credentials 
              or access the system beyond their authorized role. The School and Developer 
              are not liable for unauthorized access resulting from user negligence.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              4. Data Privacy & Protection
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Student data is stored securely in a cloud-hosted MySQL database. All data 
              is encrypted in transit and at rest. Access is role-based and logged. The 
              School is the data controller; the Developer is the data processor. Personal 
              data is never shared with third parties without explicit consent, except as 
              required by law.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              5. Acceptable Use
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Users agree not to: (a) use the Service for any unlawful purpose; (b) attempt 
              to gain unauthorized access to any part of the system; (c) interfere with or 
              disrupt the Service; (d) upload malicious code or content; (e) violate any 
              applicable laws or regulations.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The Service is provided "as is" without warranties of any kind. The School 
              and Developer shall not be liable for any indirect, incidental, or consequential 
              damages arising from the use or inability to use the Service. This includes, 
              but is not limited to, data loss, service interruptions, or unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              7. Service Availability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              While we strive for 24/7 availability, the Service may be temporarily unavailable 
              for maintenance, upgrades, or reasons beyond our control. The scanning function 
              works offline and syncs when the connection is restored.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              8. Intellectual Property
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The OneCard system, including its code, design, branding, and documentation, 
              is the intellectual property of Herman Software Solutions. The OneCard name 
              and logo are proprietary marks. Unauthorized use, reproduction, or distribution 
              is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              9. Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The School reserves the right to suspend or terminate any user account for 
              violation of these terms, misuse of the system, or at the School&apos;s discretion. 
              Upon termination, the user&apos;s access to the Service ceases immediately.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-navy dark:text-white mb-3">
              10. Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              For questions about these Terms of Service, contact:
            </p>
            <div className="mt-3 space-y-1 text-gray-600 dark:text-gray-400">
              <p><strong>Herman Software Solutions</strong></p>
              <p>Email: jaingsalim@gmail.com</p>
              <p>Phone: 0772723188</p>
              <p>Jinja Senior Secondary School — P.O Box 255, Jinja</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}