import React from 'react';

const EmailDisclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 border-b border-neutral-800 pb-6">Email Disclaimer</h1>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">CONFIDENTIALITY & DISCLAIMER NOTICE</h2>
            <p>
              This e-mail message and any attachments are intended solely for the addressee(s) and may contain confidential, proprietary, or legally privileged information. Any unauthorized review, use, disclosure, distribution, modification, or copying of this communication by any person other than the intended recipient is strictly prohibited. If you have received this communication in error, please notify the sender immediately by reply e-mail and permanently delete the original and all copies.
            </p>
          </section>

          <section>
            <p>
              Rozario Global Management LLC, its subsidiaries, and affiliates (collectively, "Rozario Global") disclaim all responsibility and accept no liability whatsoever for any consequences arising from any unauthorized person acting, or refraining from acting, based on the information contained in this message.
            </p>
          </section>

          <section>
            <p>
              E-mail transmission cannot be guaranteed to be secure or error-free, as information could be intercepted, corrupted, lost, destroyed, arrive late or incomplete, or contain viruses. Rozario Global therefore does not accept liability for any errors or omissions in the contents of this message which arise as a result of e-mail transmission. If verification is required, please request a hard-copy version. Rozario Global makes no representation or warranty as to the absence of viruses in this e-mail or any attachments.
            </p>
          </section>

          <section>
            <p>
              Please note that to ensure regulatory compliance and for the protection of its clients and business, Rozario Global may monitor, review, and retain e-mails sent to and from its systems.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmailDisclaimer;