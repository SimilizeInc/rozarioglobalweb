import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-neutral-400 pt-20 pb-10 border-t border-neutral-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
        
        {/* Brand Column */}
        <div className="lg:col-span-1">
          <h3 className="text-white text-2xl font-bold mb-6">ROZARIO GLOBAL</h3>
          <p className="text-neutral-500 mb-8 leading-relaxed text-sm">
            We apply the scientific method to finance. By leveraging advanced data analysis, engineering, and machine learning, we seek to uncover value in the world's data.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-amber-600 hover:text-black transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-neutral-900 rounded-full hover:bg-amber-600 hover:text-black transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Businesses Column */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Businesses</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/investment-management" className="hover:text-amber-400 transition-colors">Investment Management</Link></li>
            <li><Link to="/private-equity" className="hover:text-amber-400 transition-colors">Private Equity</Link></li>
            <li><Link to="/ventures" className="hover:text-amber-400 transition-colors">Ventures</Link></li>
            <li><Link to="/technology" className="hover:text-amber-400 transition-colors">Similize®</Link></li>
          </ul>
        </div>

        {/* Careers Column */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Careers</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/careers#open-roles" className="hover:text-amber-400 transition-colors">Open Roles</Link></li>
            <li><Link to="/internships" className="hover:text-amber-400 transition-colors">Internships</Link></li>
            <li><Link to="/careers" className="hover:text-amber-400 transition-colors">Interviewing at Rozario</Link></li>
            <li><Link to="/teams/engineering" className="hover:text-amber-400 transition-colors">Engineering</Link></li>
            <li><Link to="/teams/quantitative-research" className="hover:text-amber-400 transition-colors">Quant Research & Data</Link></li>
          </ul>
        </div>

        {/* Explore Column */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/approach" className="hover:text-amber-400 transition-colors">Our Approach</Link></li>
            <li><Link to="/about" className="hover:text-amber-400 transition-colors">Leadership</Link></li>
             <li><Link to="/values" className="hover:text-amber-400 transition-colors">Our Values</Link></li>
            <li><Link to="/insights" className="hover:text-amber-400 transition-colors">Insights</Link></li>
            <li><Link to="/legal" className="hover:text-amber-400 transition-colors">Legal & Compliance</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
          <div className="space-y-4 text-sm text-neutral-500">
            <p className="text-white font-medium">Rozario Global Management LLC</p>
            <p>
              515 Madison Avenue<br />
              Suite 8116<br />
              New York, NY 10022
            </p>
            <p className="pt-4">
              <a href="mailto:media@rozarioglobal.com" className="hover:text-amber-400 transition-colors">
                media@rozarioglobal.com
              </a>
            </p>
            <Link to="/contact" className="inline-block mt-2 text-amber-500 hover:text-amber-400 font-bold">
               Contact Us &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Regulatory / Legal Block */}
      <div className="max-w-7xl mx-auto px-6 border-t border-neutral-900 pt-12">
        <h5 className="text-white font-bold mb-4 text-sm">Rozario Global®</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px] leading-relaxed text-neutral-600 text-justify">
          <div>
            <p className="mb-4">
              Rozario Global Management LLC is an Exempt Reporting Adviser filed with the Securities and Exchange Commission. Registration as an Exempt Reporting Adviser does not imply a certain level of skill or training.
            </p>
            <p>
              This website is for informational purposes only and is intended solely for the use of authorized investors and existing clients. Nothing herein constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation for any security or investment advisory service. Access to this website is restricted, and no information contained herein should be construed as investment, legal, or tax advice.
            </p>
          </div>
          <div>
            <p className="mb-4">
              Any historical returns, expected returns, or projections are hypothetical in nature and may not reflect actual future performance. Past performance is not a guarantee of future results.
            </p>
            <p>
              For more information, see our disclosure. Contact: media@rozarioglobal.com. Information provided by Rozario Global is for informational and general educational purposes only and is not investment or financial advice.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-neutral-900 text-[11px] text-neutral-600 flex justify-between flex-col md:flex-row gap-4">
        <p>© 2026 Rozario Global Management LLC. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy-policies" className="hover:text-neutral-400 transition-colors">Privacy Policy</Link>
          <Link to="/legal" className="hover:text-neutral-400 transition-colors">Terms of Use</Link>
          <Link to="/legal" className="hover:text-neutral-400 transition-colors">Disclosure</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;