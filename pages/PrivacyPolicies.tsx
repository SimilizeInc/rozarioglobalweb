import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// --- DATA CONTENT ---

const ROZARIO_PRIVACY_TEXT = (
  <div className="space-y-8 text-neutral-300 leading-relaxed">
    <div className="border-b border-neutral-800 pb-8">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">PRIVACY POLICY</h1>
      <p className="text-amber-500 font-mono text-sm uppercase tracking-widest">Last Updated and Effective Date: January 14, 2026</p>
    </div>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">1. INTRODUCTION AND SCOPE</h2>
      <p className="mb-4">This Privacy Policy describes how Rozario Global Management LLC (doing business as "Rozario Global") and its affiliates (collectively, “Rozario Global,” “we,” “our,” or “us”) treat personal information, including personal information collected on the websites where this Privacy Policy is located (the “Site”) or other platforms that direct to this Privacy Policy.</p>
      <div className="bg-neutral-900 border-l-4 border-amber-500 p-4 mb-4">
        <strong className="text-white">Important Note regarding Investor Data:</strong> This Privacy Policy applies to the use of our public-facing Site. It does not apply to current investors in Rozario Global funds. The collection, use, and disclosure of personal information for investors are governed by our Investor Privacy Notice and the specific subscription documents provided at the time of investment.
      </div>
      <p>By using the Site, you acknowledge that you have read and understood this Privacy Policy.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">2. WE COLLECT PERSONAL INFORMATION FROM AND ABOUT YOU</h2>
      <p className="mb-4">We collect personal information to operate our business, recruit talent, and comply with regulatory obligations. We collect this data from you directly, passively through your use of the Site, and from third parties.</p>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-white font-bold">A. Personal Identifiers</h3>
          <p><strong>Data Collected:</strong> Name, address, phone number, email address, IP address, and log-in credentials (for password-protected investor portals).</p>
          <p><strong>Sources:</strong> Directly from you (forms, emails), recruiting agencies, and background check providers.</p>
        </div>
        <div>
          <h3 className="text-white font-bold">B. Professional or Employment Information</h3>
          <p><strong>Data Collected:</strong> Employment history, CV/resume data, educational background, and professional references.</p>
          <p><strong>Sources:</strong> Job applications, LinkedIn, recruiters, and reference checks.</p>
        </div>
        <div>
          <h3 className="text-white font-bold">C. Internet or Other Electronic Network Activity</h3>
          <p><strong>Data Collected:</strong> Browsing history, search history, interaction with our Site, device type, operating system, and duration of visit.</p>
          <p><strong>Sources:</strong> Cookies, web beacons, and server logs.</p>
        </div>
         <div>
          <h3 className="text-white font-bold">D. Commercial Information</h3>
          <p><strong>Data Collected:</strong> Inquiries regarding investment strategies or specific requests for information.</p>
          <p><strong>Sources:</strong> Direct communication from you.</p>
        </div>
         <div>
          <h3 className="text-white font-bold">E. Geolocation Information</h3>
          <p><strong>Data Collected:</strong> General location data derived from your IP address.</p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">3. HOW WE USE YOUR INFORMATION</h2>
      <p className="mb-4">We process personal information only where we have a lawful basis to do so, including legitimate business interests, contractual necessity, or legal compliance.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-white">Regulatory Compliance & Security (The ERA Mandate):</strong> As an SEC Exempt Reporting Adviser, we use personal information to comply with applicable legal and regulatory requirements (e.g., Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations), to respond to court orders, and to cooperate with law enforcement or regulatory inquiries.</li>
        <li><strong className="text-white">Service Provision:</strong> To provide you with access to the Site, including the secure Investor Portal.</li>
        <li><strong className="text-white">Recruiting:</strong> To evaluate candidates for employment or partnership opportunities.</li>
        <li><strong className="text-white">Security & Fraud Prevention:</strong> To detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, and prosecute those responsible for that activity.</li>
        <li><strong className="text-white">Business Operations:</strong> For internal research, technical debugging, and auditing.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">4. SHARING OF PERSONAL INFORMATION</h2>
      <p className="mb-4">We do not sell your personal information. However, we may share your information with the following categories of third parties for business purposes:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-white">Rozario Global Affiliates:</strong> We may share information within the Rozario Global corporate family for operational efficiency.</li>
        <li><strong className="text-white">Service Providers:</strong> We disclose information to third-party vendors, consultants, and other service providers who perform functions on our behalf (e.g., IT support, cloud hosting, background checks, legal counsel, and fund administrators).</li>
        <li><strong className="text-white">Legal & Regulatory Authorities:</strong> We will disclose information if we believe in good faith that such disclosure is necessary to (a) comply with relevant laws or to respond to subpoenas or warrants served on us; (b) protect or defend the rights, property, or safety of Rozario Global or any third party; or (c) assist in an investigation of fraud or other illegal activity.</li>
        <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, reorganization, bankruptcy, or other sale of all or a portion of our assets, user information may be among the assets transferred.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">5. INTERNATIONAL DATA TRANSFERS</h2>
      <p className="mb-4">Rozario Global is headquartered in the United States. If you are accessing the Site from outside the United States, please be aware that your information may be transferred to, stored, and processed in the U.S. where our servers are located. The data protection laws in the U.S. may differ from those of your country of residence.</p>
      <p>By using the Site, you consent to the transfer of your information to the United States and the use and disclosure of your information as described in this Privacy Policy.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">6. SECURITY MEASURES (LIMITATION OF LIABILITY)</h2>
      <p className="mb-4">We employ "Standard of Care" security measures designed to protect your personal information. However, no electronic transmission or storage of information can be guaranteed to be 100% secure.</p>
      <p>You acknowledge that: (a) there are security and privacy limitations of the Internet which are beyond our control; and (b) the security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">7. RIGHTS FOR INDIVIDUALS IN EUROPE (EEA) AND THE UK</h2>
      <p className="mb-4">If you are located in the European Economic Area (“EEA”) or the United Kingdom (“UK”), you have specific rights under the GDPR and UK GDPR, including:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className="text-white">Right of Access:</strong> To request copies of your personal data.</li>
        <li><strong className="text-white">Right to Rectification:</strong> To correct inaccurate data.</li>
        <li><strong className="text-white">Right to Erasure:</strong> To request that we delete your data ("Right to be Forgotten").</li>
        <li><strong className="text-white">Right to Restriction:</strong> To limit the way we use your data.</li>
      </ul>
      <p className="mt-4">
        <strong className="text-white">Controller:</strong> For the purposes of EEA and UK data protection laws, Rozario Global Management LLC is the data controller.
        <br/>
        <strong className="text-white">Contact:</strong> To exercise these rights, please contact us at legal@rozarioglobal.com (or your designated privacy email).
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">8. RIGHTS FOR INDIVIDUALS IN CALIFORNIA (CCPA/CPRA)</h2>
      <p className="mb-4">If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights regarding your personal information.</p>
      <div className="space-y-4">
        <p><strong className="text-white">A. No Sale or Sharing:</strong> Rozario Global does not sell your personal information. We do not "share" your personal information for cross-context behavioral advertising.</p>
        <div>
          <strong className="text-white">B. Your Rights:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-1">
             <li><strong className="text-white">Right to Know:</strong> You may request that we disclose what personal information we collect, use, disclose, and sell.</li>
             <li><strong className="text-white">Right to Delete:</strong> You may request the deletion of your personal information, subject to certain legal exceptions (e.g., data required for regulatory record-keeping).</li>
             <li><strong className="text-white">Right to Correct:</strong> You may request that we correct inaccurate personal information.</li>
             <li><strong className="text-white">Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
          </ul>
        </div>
        <p><strong className="text-white">C. Verification:</strong> To protect your privacy, we will take steps to verify your identity before fulfilling your request. This may involve matching data points you provide with data we maintain.</p>
        <p>To exercise these rights, email us at legal@rozarioglobal.com.</p>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">9. CHILDREN’S PRIVACY</h2>
      <p>The Site is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">10. THIRD-PARTY LINKS</h2>
      <p>The Site may contain links to third-party websites. This Privacy Policy does not apply to those websites. We are not responsible for the privacy practices or content of third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">11. RECAPTCHA AND FRAUD PREVENTION</h2>
      <p>We may use the reCAPTCHA service provided by Google Inc. to protect our Site from spam and abuse. This includes the sending of your IP address and other data required by Google for the reCAPTCHA service. By using the reCAPTCHA service, you consent to the processing of data about you by Google in the manner and for the purposes set out in Google's privacy policy.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">12. CONTACT INFORMATION</h2>
      <p className="mb-2">If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
      <address className="not-italic bg-neutral-900 p-6 rounded border border-neutral-800">
        <strong className="text-white block mb-1">Rozario Global Management LLC</strong>
        515 Madison Avenue, Suite 8116<br />
        New York, NY 10022<br />
        <span className="block mt-2">Attention: General Counsel / Privacy Officer</span>
        <span className="block mt-1">Email: <a href="mailto:legal@rozarioglobal.com" className="text-amber-500 hover:underline">legal@rozarioglobal.com</a></span>
      </address>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">13. UPDATES TO THIS POLICY</h2>
      <p>Rozario Global reserves the right to modify this Privacy Policy at any time. If we make material changes, we will notify you by updating the date at the top of this policy and posting the revised version on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Privacy Policy.</p>
    </section>
  </div>
);

const ROZARIO_COOKIE_TEXT = (
  <div className="space-y-8 text-neutral-300 leading-relaxed">
    <div className="border-b border-neutral-800 pb-8">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">COOKIE POLICY</h1>
      <p className="text-amber-500 font-mono text-sm uppercase tracking-widest">Last Updated and Effective Date: January 14, 2026</p>
    </div>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">1. SCOPE AND APPLICATION</h2>
      <p className="mb-4">This Cookie Policy ("Policy") describes how Rozario Global Management LLC (doing business as "Rozario Global", “we”, “our”, or “us”) uses cookies and similar tracking technologies (collectively, "Cookies") on our websites, investor portals, and digital platforms (collectively, the “Site”).</p>
      <p>By accessing or using the Site, you consent to the use of Cookies as described in this Policy. This Policy is incorporated into and subject to the Terms of Use and Privacy Policy of the Site.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">2. WHAT ARE COOKIES?</h2>
      <p className="mb-4">A Cookie is a small text file or data string that a website stores on your computer, mobile device, or web browser when you visit a website. It enables the Site to remember your actions, credentials, and preferences (such as login status, language, font size, and display settings) over a period of time, eliminating the need to re-enter details upon returning to the Site.</p>
      <p className="mb-2">We use Cookies to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong className="text-white">Verify Authority:</strong> Ensure you are authorized to access the Investor Portal.</li>
        <li><strong className="text-white">Ensure Security:</strong> Detect and prevent fraudulent activity and unauthorized access.</li>
        <li><strong className="text-white">Analyze Performance:</strong> Understand how users navigate the Site to improve functionality.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">3. TYPES OF COOKIES WE USE</h2>
      <p className="mb-4">We use both Session Cookies (which expire once you close your web browser) and Persistent Cookies (which stay on your device for a set period or until you delete them). We classify these Cookies into the following categories of necessity:</p>
      
      <div className="space-y-4">
        <div className="bg-neutral-900 p-6 rounded border-l-4 border-amber-500">
          <h3 className="text-white font-bold text-lg mb-2">A. Strictly Necessary Cookies (The "Nuclear" Essentials)</h3>
          <p className="mb-2">These Cookies are essential for the operation of the Site and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</p>
          <p className="text-sm"><strong>Impact:</strong> You can set your browser to block or alert you about these Cookies, but some parts of the Site (specifically the Investor Portal) will not work. These Cookies do not store any personally identifiable information.</p>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-2">B. Performance and Analytics Cookies</h3>
          <p className="mb-2">These Cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Site. They help us to know which pages are the most and least popular and see how visitors move around the Site.</p>
          <p className="text-sm"><strong>Impact:</strong> All information these Cookies collect is aggregated and therefore anonymous. If you do not allow these Cookies, we will not know when you have visited our Site, and will not be able to monitor its performance.</p>
        </div>

        <div>
           <h3 className="text-white font-bold text-lg mb-2">C. Functional Cookies</h3>
          <p className="mb-2">These Cookies enable the Site to provide enhanced functionality and personalization (e.g., remembering your region). They may be set by us or by third-party providers whose services we have added to our pages.</p>
          <p className="text-sm"><strong>Impact:</strong> If you do not allow these Cookies, then some or all of these services may not function properly.</p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">4. THIRD-PARTY COOKIES AND LIABILITY SHIELD</h2>
      <p className="mb-4">We may utilize third-party service providers (such as Google Analytics or investor portal administrators) who may place Cookies on your device on our behalf.</p>
      <p className="mb-4"><strong className="text-white">Disclaimer of Liability:</strong> These third-party service providers are responsible for the Cookies they set on our Site. Rozario Global does not control these third-party Cookies and assumes no liability for the data collection practices of these third parties. We strongly encourage you to review the privacy and cookie policies of these third-party providers.</p>
      <p>For Google Analytics, please visit: <a href="https://analytics.google.com" target="_blank" rel="noreferrer" className="text-amber-500 hover:underline">analytics.google.com</a></p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">5. HOW TO CONTROL AND MANAGE COOKIES</h2>
      <p className="mb-4">You have the right to accept or reject Cookies. You can exercise your cookie rights by setting your preferences in your web browser.</p>
      <p className="mb-4"><strong className="text-white">Browser Controls:</strong> Most web browsers automatically accept Cookies, but you can usually modify your browser setting to decline Cookies if you prefer. Please note that if you choose to decline Cookies, you may not be able to sign in or use other interactive features of the Site (specifically password-protected areas).</p>
      <ul className="list-none space-y-1 mb-4 font-mono text-sm bg-neutral-900 p-4 rounded">
        <li>Chrome: Settings &gt; Privacy and security &gt; Cookies and other site data</li>
        <li>Safari: Preferences &gt; Privacy &gt; Block all cookies</li>
        <li>Edge: Settings &gt; Cookies and site permissions</li>
      </ul>
      <p><strong className="text-white">Do Not Track Signals:</strong> Some web browsers may transmit "do not track" signals to the websites and other online services with which the browser communicates. There is no standard that governs what, if anything, websites should do when they receive these signals. Rozario Global currently does not take action in response to these signals.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">6. CHANGES TO THIS POLICY</h2>
      <p>Rozario Global reserves the right to amend this Cookie Policy at any time and without prior notice. Any changes will be effective immediately upon the posting of the revised Policy on the Site. Your continued use of the Site following the posting of changes constitutes your acceptance of such changes.</p>
    </section>

    <section>
      <h2 className="text-2xl font-bold text-white mb-4">7. CONTACT US</h2>
      <p>If you have questions regarding this Cookie Policy, please contact our Legal Department:</p>
      <div className="mt-4 bg-neutral-900 p-6 rounded border border-neutral-800">
        <strong className="text-white block">Rozario Global Management LLC</strong>
        <span className="block mt-1">Attn: Legal / Privacy Matters</span>
        <span className="block mt-1">Email: <a href="mailto:legal@rozarioglobal.com" className="text-amber-500 hover:underline">legal@rozarioglobal.com</a></span>
      </div>
    </section>
  </div>
);

const SIMILIZE_PRIVACY_TEXT = (
  <div className="space-y-8 text-neutral-300 leading-relaxed">
    <div className="border-b border-neutral-800 pb-8">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">PRIVACY POLICY</h1>
      <p className="text-amber-500 font-mono text-sm uppercase tracking-widest">Entity: Similize Inc | Last Updated: January 01, 2026</p>
    </div>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">1. OVERVIEW</h2>
      <p>Similize Inc ("Similize"), a technology subsidiary of Rozario Global, is committed to protecting your privacy. This policy covers data collected through our proprietary simulation platforms and SaaS offerings.</p>
    </section>
    <section>
        <h2 className="text-2xl font-bold text-white mb-4">2. DATA COLLECTION</h2>
        <p>Unlike our parent company, Similize focuses on B2B technology provision. We collect:</p>
        <ul className="list-disc pl-6 mt-2">
            <li>API Usage Logs</li>
            <li>System Performance Metrics</li>
            <li>Client Administrative Contact Information</li>
        </ul>
    </section>
    <section>
        <h2 className="text-2xl font-bold text-white mb-4">3. CONTACT</h2>
        <p>For inquiries specific to Similize technology platforms: <a href="mailto:privacy@similize.tech" className="text-amber-500">privacy@similize.tech</a></p>
    </section>
  </div>
);

const SIMILIZE_COOKIE_TEXT = (
  <div className="space-y-8 text-neutral-300 leading-relaxed">
    <div className="border-b border-neutral-800 pb-8">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">COOKIE POLICY</h1>
      <p className="text-amber-500 font-mono text-sm uppercase tracking-widest">Entity: Similize Inc | Last Updated: January 01, 2026</p>
    </div>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">1. TECHNOLOGY COOKIES</h2>
      <p>Similize uses essential session cookies to maintain API authentication states during high-frequency data transmission. We do not use tracking or advertising cookies on our dashboard interfaces.</p>
    </section>
  </div>
);

// --- CONFIGURATION ---

type EntityKey = 'rozario' | 'similize';
type DisclosureKey = 'privacy' | 'cookie';

const ENTITIES = [
  { id: 'rozario', label: 'Rozario Global Management LLC' },
  { id: 'similize', label: 'Similize Inc' },
];

const DISCLOSURES = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'cookie', label: 'Cookie Policy' },
];

const CONTENT_MAP: Record<EntityKey, Record<DisclosureKey, React.ReactNode>> = {
  rozario: {
    privacy: ROZARIO_PRIVACY_TEXT,
    cookie: ROZARIO_COOKIE_TEXT,
  },
  similize: {
    privacy: SIMILIZE_PRIVACY_TEXT,
    cookie: SIMILIZE_COOKIE_TEXT,
  },
};

// --- COMPONENT ---

const PrivacyPolicies: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Initialize state from URL or defaults
  const [selectedEntity, setSelectedEntity] = useState<EntityKey>(
    (searchParams.get('entity') as EntityKey) || 'rozario'
  );
  const [selectedDisclosure, setSelectedDisclosure] = useState<DisclosureKey>(
    (searchParams.get('disclosure') as DisclosureKey) || 'privacy'
  );

  // Update URL when state changes
  useEffect(() => {
    setSearchParams({ entity: selectedEntity, disclosure: selectedDisclosure });
  }, [selectedEntity, selectedDisclosure, setSearchParams]);

  const handleEntityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEntity(e.target.value as EntityKey);
  };

  const handleDisclosureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDisclosure(e.target.value as DisclosureKey);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Controls Section */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 mb-16 shadow-2xl">
           <h2 className="text-xl font-bold mb-6 text-white border-b border-neutral-800 pb-4">
             Select Entity & Policy
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
             {/* Entity Dropdown */}
             <div>
               <label htmlFor="entity-select" className="block text-sm font-bold text-amber-500 uppercase tracking-wider mb-3">
                 Entity
               </label>
               <div className="relative">
                 <select
                   id="entity-select"
                   value={selectedEntity}
                   onChange={handleEntityChange}
                   className="w-full bg-black border border-neutral-700 text-white py-4 px-4 pr-8 rounded-lg appearance-none focus:outline-none focus:border-amber-500 transition-colors cursor-pointer text-lg"
                 >
                   {ENTITIES.map(e => (
                     <option key={e.id} value={e.id}>{e.label}</option>
                   ))}
                 </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
                   <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                 </div>
               </div>
             </div>

             {/* Disclosure Type Dropdown */}
             <div>
               <label htmlFor="disclosure-select" className="block text-sm font-bold text-amber-500 uppercase tracking-wider mb-3">
                 Disclosure Type
               </label>
               <div className="relative">
                 <select
                   id="disclosure-select"
                   value={selectedDisclosure}
                   onChange={handleDisclosureChange}
                   className="w-full bg-black border border-neutral-700 text-white py-4 px-4 pr-8 rounded-lg appearance-none focus:outline-none focus:border-amber-500 transition-colors cursor-pointer text-lg"
                 >
                   {DISCLOSURES.map(d => (
                     <option key={d.id} value={d.id}>{d.label}</option>
                   ))}
                 </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
                   <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                 </div>
               </div>
             </div>

           </div>
        </div>

        {/* Content Display Area */}
        <div className="max-w-4xl mx-auto animate-fade-in">
           {CONTENT_MAP[selectedEntity]?.[selectedDisclosure] || (
             <div className="text-center py-20 text-neutral-500">Content not available</div>
           )}
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicies;