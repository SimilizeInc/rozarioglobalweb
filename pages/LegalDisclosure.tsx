import React, { useEffect } from 'react';

const LegalDisclosure: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-neutral-300 font-sans pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-b border-neutral-800 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">TERMS OF USE AND LEGAL DISCLOSURES</h1>
          <p className="text-amber-500 font-mono text-sm uppercase tracking-widest">Last Updated: January 14, 2026</p>
        </div>

        {/* Preamble */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <p className="font-bold text-white">PLEASE READ THESE TERMS OF USE CAREFULLY.</p>
          <p>
            Your use of the websites on which these terms reside (collectively, the “Site”), and the features at this Site are subject to these Terms of Use (the “Terms”). By accessing this Site in any way—including, without limitation, browsing this Site, using any information, and/or submitting information to us—you agree to and are bound by the terms, conditions, policies, and notices contained on this page.
          </p>
          <p className="text-white bg-neutral-900 p-4 border-l-4 border-amber-500 font-bold">
            IF YOU DO NOT AGREE TO BE BOUND BY THESE TERMS, YOU MUST CEASE ACCESSING OR USING THIS SITE IMMEDIATELY.
          </p>
          <p>
            The Site is owned or controlled by Rozario Global Management LLC (doing business as "Rozario Global") and its affiliates (collectively, “Rozario Global,” “we,” “us,” or “our”). This Site is intended for and applicable only to residents of the United States, age eighteen (18) or older.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-neutral-800">
              1. NO OFFER OF SECURITIES; NO ADVICE (THE "ERA" DISCLOSURE)
            </h2>
            <div className="bg-amber-950/20 border border-amber-900/50 p-6 rounded-lg mb-6">
              <p className="text-amber-500 font-bold text-sm uppercase tracking-wide mb-2">CRITICAL DISCLOSURE</p>
              <p className="text-white font-bold">
                THIS IS THE MOST CRITICAL SECTION OF THESE TERMS. PLEASE READ CAREFULLY.
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-white mt-8 mb-4">A. General Information Only</h3>
            <p className="text-neutral-400 leading-relaxed mb-6 uppercase text-sm font-medium">
              THIS SITE AND THE INFORMATION INCLUDED HEREIN ARE FOR GENERAL INFORMATIONAL PURPOSES ONLY. UNDER NO CIRCUMSTANCES SHOULD ANY MATERIAL AT THE SITE BE USED OR CONSIDERED AS AN OFFER TO SELL OR A SOLICITATION OF AN OFFER TO BUY ANY SECURITY, FUTURE, OR OTHER FINANCIAL PRODUCT OR INSTRUMENT, INCLUDING ANY INTEREST IN ANY INVESTMENT FUND SPONSORED OR MANAGED BY ROZARIO GLOBAL, OR ANY INVESTMENT ADVISORY SERVICES OFFERED BY ROZARIO GLOBAL.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">B. Private Offerings & Sophistication Requirements</h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              <span className="text-white font-bold">ROZARIO GLOBAL OPERATES AS AN EXEMPT REPORTING ADVISER ("ERA") WITH THE U.S. SECURITIES AND EXCHANGE COMMISSION.</span> ANY OFFER OR SOLICITATION REGARDING ROZARIO GLOBAL FUNDS CAN AND WILL BE MADE ONLY BY MEANS OF THE APPLICABLE CONFIDENTIAL OFFERING MEMORANDUM OF EACH SUCH INVESTMENT FUND, ONLY IN JURISDICTIONS IN WHICH SUCH AN OFFER WOULD BE LAWFUL, AND ONLY TO INVESTORS WHO MEET THE STRICT INVESTOR SUITABILITY AND SOPHISTICATION REQUIREMENTS DETERMINED BY ROZARIO GLOBAL IN ITS SOLE AND ABSOLUTE DISCRETION.
            </p>
            <p className="text-neutral-400 mb-4">Such requirements include, without limitation, qualifying as an:</p>
            <ul className="list-disc pl-6 text-neutral-400 space-y-2 mb-6">
              <li>“Accredited Investor” within the meaning of Regulation D of the U.S. Securities Act of 1933, as amended;</li>
              <li>“Qualified Client” within the meaning of the U.S. Investment Advisers Act of 1940, as amended; and/or</li>
              <li>“Qualified Purchaser” within the meaning of the U.S. Investment Company Act of 1940, as amended.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">C. No Fiduciary Duty Created</h3>
            <p className="text-neutral-400 leading-relaxed">
              This Site is not intended to provide any investment, financial, legal, regulatory, accounting, tax, or similar advice, and nothing on this Site should be construed as a recommendation by Rozario Global to acquire or dispose of any investment or security. Accessing this Site does not create a fiduciary relationship between you and Rozario Global.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-neutral-800">
              2. OWNERSHIP AND LIMITED LICENSE
            </h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed">
              <div>
                <strong className="text-white">A. Intellectual Property.</strong> Rozario Global owns and maintains this Site. All content, including but not limited to the Rozario Global name, logos, trademarks, code, software, text, graphics, and proprietary methodologies (collectively, “Rozario Content”), is the exclusive property of Rozario Global Management LLC and is protected by U.S. and international intellectual property laws.
              </div>
              <div>
                <strong className="text-white">B. Limited License.</strong> Rozario Global grants you a limited, revocable, nonexclusive, and nontransferable license to view, store, bookmark, and print pages from the Site solely for your personal and non-commercial use.
              </div>
              <div>
                <strong className="text-white">C. Strict Prohibitions.</strong> Unless expressly authorized in writing by Rozario Global, you may not:
                <ol className="list-decimal pl-6 mt-4 space-y-2">
                  <li>Copy, modify, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any Rozario Content;</li>
                  <li>Use any data mining, robots, spiders, scrapers, or similar data gathering and extraction tools to access the Site or extract data;</li>
                  <li>Decompile, reverse engineer, or disassemble any software or other products or processes accessible through the Site;</li>
                  <li>Use the Site in any manner that could damage, disable, overburden, or impair any Rozario Global server or the network(s) connected to any Rozario Global server.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-neutral-800">
              3. USER ACCESS AND MONITORING
            </h2>
             <div className="space-y-6 text-neutral-400 leading-relaxed">
               <p><strong className="text-white">A. Right to Terminate.</strong> Rozario Global reserves the right to restrict, suspend, or terminate your access to all or any part of the Site at any time, with or without cause, and without prior notice or liability.</p>
               <p><strong className="text-white">B. Usage Monitoring.</strong> Rozario Global reserves the right, but has no obligation, to access, archive, and monitor your use of this Site. By using the Site, you explicitly consent to Rozario Global’s right to monitor usage for security, analysis, and regulatory compliance purposes.</p>
             </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-neutral-800">
              4. PASSWORD-PROTECTED AREAS
            </h2>
             <p className="text-neutral-400 mb-4">Portions of the Site may be password-protected and accessed only by users who have been issued credentials by Rozario Global (typically current investors or authorized agents).</p>
             <ul className="list-disc pl-6 text-neutral-400 space-y-2">
               <li><strong className="text-white">Confidentiality:</strong> You are solely responsible for maintaining the confidentiality of your password and account.</li>
               <li><strong className="text-white">Liability:</strong> You are solely responsible for any and all activities that occur under your account. Rozario Global is not liable for any loss that you may incur as a result of unauthorized use of your password, either with or without your knowledge.</li>
               <li><strong className="text-white">Prohibition:</strong> You agree not to disseminate or disclose your credentials to any third party.</li>
             </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-neutral-800">
              5. NO WARRANTY (NUCLEAR DISCLAIMER)
            </h2>
             <div className="bg-neutral-900 p-8 rounded-lg text-sm font-medium tracking-wide leading-loose">
               <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW, ROZARIO GLOBAL DISCLAIMS ALL WARRANTIES.</p>
               <p className="mb-4">ROZARIO GLOBAL MANAGEMENT LLC AND ITS OFFICERS, DIRECTORS, MEMBERS, PRINCIPALS, INVESTORS, AGENTS, AND EMPLOYEES MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, REGARDING THIS SITE OR ROZARIO CONTENT.</p>
               <p className="mb-4">THIS SITE IS PROVIDED “AS IS” AND “AS AVAILABLE.”</p>
               <p className="mb-4">ROZARIO GLOBAL HEREBY EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:</p>
               <ol className="list-decimal pl-6 mb-4 space-y-2">
                 <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT;</li>
                 <li>WARRANTIES THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES, WORMS, OR OTHER HARMFUL COMPONENTS;</li>
                 <li>WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY INFORMATION CONTAINED THEREIN.</li>
               </ol>
               <p>YOU ACKNOWLEDGE THAT YOUR USE OF THE SITE IS AT YOUR SOLE RISK.</p>
             </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-neutral-800">
              6. LIMITATION OF LIABILITY AND INDEMNIFICATION
            </h2>
             <div className="space-y-6 text-neutral-400 leading-relaxed">
               <div>
                  <strong className="text-white">A. Cap on Liability.</strong>
                  <p className="mt-2 uppercase text-sm font-medium">
                    IN NO EVENT SHALL ROZARIO GLOBAL MANAGEMENT LLC OR ITS AFFILIATES BE LIABLE FOR ANY CLAIMS, LIABILITIES, LOSSES, COSTS, OR DAMAGES OF ANY KIND—INCLUDING DIRECT, INDIRECT, PUNITIVE, EXEMPLARY, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOST PROFITS)—ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR USE OF THIS SITE.
                  </p>
                  <p className="mt-4 uppercase text-sm font-medium">
                    THIS LIMITATION APPLIES REGARDLESS OF WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF ROZARIO GLOBAL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. IN NO EVENT SHALL ROZARIO GLOBAL’S TOTAL LIABILITY TO YOU EXCEED $100.00 USD.
                  </p>
               </div>
               <div>
                 <strong className="text-white">B. Indemnification.</strong> You agree to indemnify, defend, and hold harmless Rozario Global Management LLC, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses (including reasonable attorneys’ fees and costs) arising out of or in any way connected with your access to or use of the Site or your breach of these Terms.
               </div>
             </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-neutral-800">
              7. GOVERNING LAW AND JURISDICTION
            </h2>
             <div className="space-y-6 text-neutral-400 leading-relaxed">
               <p>These Terms shall be governed by and construed in accordance with the laws of the State of New York, without giving effect to its conflict of laws provisions.</p>
               <p>You agree that any legal action or proceeding between you and Rozario Global for any purpose concerning these Terms or the parties' obligations hereunder shall be brought exclusively in a federal or state court of competent jurisdiction sitting in the Borough of Manhattan, New York City. You hereby waive any objection you may now or hereafter have to the laying of venue of any such suit or proceeding in such court.</p>
             </div>
          </section>

           {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-neutral-800">
              8. ENTIRE AGREEMENT & NOTICES
            </h2>
             <div className="space-y-6 text-neutral-400 leading-relaxed">
               <p>These Terms constitute the entire agreement between you and Rozario Global regarding the subject matter hereof.</p>
               <p>Any notice to Rozario Global shall be given in writing and sent by registered mail to: <br/>
               <span className="text-white font-medium">Rozario Global Management LLC, 515 Madison Avenue, Suite 8116, New York, NY 10022</span></p>
             </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default LegalDisclosure;