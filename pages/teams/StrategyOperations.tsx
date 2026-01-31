import React from 'react';
import { Scale, Users, FileCheck, Anchor, Globe, Briefcase, ShieldCheck, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const StrategyOperations: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-bold tracking-wider uppercase mb-8 border border-amber-500/20">
               Strategy & Operations
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              The Backbone <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
                of Agility.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light max-w-xl">
              We ensure that the massive machine of Rozario Global runs with precision. We are the architects of our corporate structure, the guardians of our compliance, and the stewards of our talent.
            </p>
          </div>
          <div className="hidden lg:block">
            {/* Visual: Strategic Map */}
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-700 rounded-xl p-8 shadow-2xl relative">
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/50 rounded border border-neutral-700">
                     <div className="flex items-center gap-2 mb-2 text-amber-500 font-bold text-xs uppercase">
                        <Globe size={14} /> New Market Entry
                     </div>
                     <div className="h-1 bg-neutral-700 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-[75%]"></div>
                     </div>
                     <div className="text-right text-xs text-neutral-400 mt-1">Status: Regulatory Approval</div>
                  </div>
                  <div className="p-4 bg-black/50 rounded border border-neutral-700">
                     <div className="flex items-center gap-2 mb-2 text-green-500 font-bold text-xs uppercase">
                        <Users size={14} /> Global Hiring
                     </div>
                     <div className="h-1 bg-neutral-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[92%]"></div>
                     </div>
                     <div className="text-right text-xs text-neutral-400 mt-1">Status: On Target</div>
                  </div>
                  <div className="col-span-2 p-4 bg-black/50 rounded border border-neutral-700">
                     <div className="flex items-center gap-2 mb-2 text-blue-500 font-bold text-xs uppercase">
                        <Scale size={14} /> Compliance Audit
                     </div>
                     <div className="flex justify-between items-center text-sm text-neutral-300">
                        <span>SEC Filings</span>
                        <span className="text-green-400">Complete</span>
                     </div>
                     <div className="flex justify-between items-center text-sm text-neutral-300 mt-1">
                        <span>FCA Reporting</span>
                        <span className="text-green-400">Complete</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE FUNCTIONS */}
      <div className="py-32 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-bold mb-6">More Than Support</h2>
             <p className="text-neutral-400 max-w-2xl mx-auto">
               In many firms, operations is a back-office function. At Rozario Global, it is a competitive advantage. We move faster because our foundation is stronger.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Function 1 */}
             <div className="bg-black p-10 rounded-2xl border border-neutral-800 hover:border-amber-500/50 transition-colors group">
                <Scale className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold mb-4">Legal & Compliance</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                   We view regulation not as a blocker, but as a framework for innovation. Our legal team works side-by-side with engineers to design trading systems that are compliant by code, enabling us to enter new markets with confidence.
                </p>
                <div className="flex gap-4 text-sm font-bold text-neutral-500">
                   <span className="flex items-center gap-2"><ShieldCheck size={16}/> Regulatory Strategy</span>
                   <span className="flex items-center gap-2"><Briefcase size={16}/> IP Protection</span>
                </div>
             </div>

             {/* Function 2 */}
             <div className="bg-black p-10 rounded-2xl border border-neutral-800 hover:border-white/50 transition-colors group">
                <Users className="text-white mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold mb-4">People & Talent</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                   Our intellectual capital is our only asset that matters. The Talent team isn't just filling seats; they are curating a community of the world's brightest minds. We invest heavily in culture, learning, and retention.
                </p>
                <div className="flex gap-4 text-sm font-bold text-neutral-500">
                   <span className="flex items-center gap-2"><Trophy size={16}/> Recruitment</span>
                   <span className="flex items-center gap-2"><Briefcase size={16}/> L&D</span>
                </div>
             </div>

             {/* Function 3 */}
             <div className="bg-black p-10 rounded-2xl border border-neutral-800 hover:border-neutral-500/50 transition-colors group">
                <FileCheck className="text-neutral-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold mb-4">Finance & Treasury</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                   Managing the lifeblood of the firm. Our treasury team optimizes capital efficiency, ensuring we have the liquidity to seize opportunities the moment they arise, anywhere in the world.
                </p>
             </div>

             {/* Function 4 */}
             <div className="bg-black p-10 rounded-2xl border border-neutral-800 hover:border-neutral-500/50 transition-colors group">
                <Anchor className="text-neutral-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold mb-4">Investor Relations</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                   We are stewards of capital for pension funds, endowments, and sovereign wealth funds. Our IR team maintains transparency and alignment with our partners, translating complex strategies into clear insights.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* 3. CULTURE SECTION */}
      <div className="py-32 px-6 bg-black">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
             <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold mb-6">Service to the Firm.</h2>
                <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                   In Strategy & Operations, our "client" is the firm itself. We measure our success by the friction we remove for others.
                </p>
                <div className="space-y-6">
                   <div className="p-6 bg-neutral-900 rounded-lg border-l-4 border-amber-500">
                      <h4 className="font-bold text-white mb-1">Operational Excellence</h4>
                      <p className="text-sm text-neutral-400">We sweat the details so the researchers don't have to. Payroll, visa sponsorship, office logistics—it all happens seamlessly.</p>
                   </div>
                   <div className="p-6 bg-neutral-900 rounded-lg border-l-4 border-white">
                      <h4 className="font-bold text-white mb-1">Strategic Agility</h4>
                      <p className="text-sm text-neutral-400">When we decided to open our Singapore office, the Ops team had the entity formed, space leased, and licenses approved in record time.</p>
                   </div>
                </div>
             </div>
             <div className="w-full md:w-1/2 relative">
                <img 
                   src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                   alt="Modern Office" 
                   className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
             </div>
         </div>
      </div>

      {/* 4. TEAM VOICES */}
      <div className="py-32 px-6 bg-neutral-900 border-y border-neutral-800">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Voices from Operations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
               <div className="bg-black p-8 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-full object-cover border border-neutral-700" alt="Profile" />
                     <div>
                        <div className="font-bold text-white">James F.</div>
                        <div className="text-amber-500 text-xs uppercase font-bold">General Counsel</div>
                     </div>
                  </div>
                  <p className="text-neutral-400 italic">
                     "Legal here isn't the 'Department of No'. We are strategic partners. My job is to find the path that lets us execute a new strategy while staying bulletproof on compliance."
                  </p>
               </div>

               <div className="bg-black p-8 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-full object-cover border border-neutral-700" alt="Profile" />
                     <div>
                        <div className="font-bold text-white">Maria G.</div>
                        <div className="text-neutral-500 text-xs uppercase font-bold">Head of People</div>
                     </div>
                  </div>
                  <p className="text-neutral-400 italic">
                     "Hiring quant talent is incredibly competitive. We win because we treat recruitment like a high-touch concierge service. Every candidate experience reflects our brand."
                  </p>
               </div>

               <div className="bg-black p-8 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-full object-cover border border-neutral-700" alt="Profile" />
                     <div>
                        <div className="font-bold text-white">Alan W.</div>
                        <div className="text-neutral-500 text-xs uppercase font-bold">Treasury Associate</div>
                     </div>
                  </div>
                  <p className="text-neutral-400 italic">
                     "The speed at which we move capital is thrilling. Optimizing our collateral across three continents in real-time saves the firm millions. It's high stakes every day."
                  </p>
               </div>

            </div>
         </div>
      </div>

      {/* 5. CTA */}
      <div className="py-32 px-6 bg-gradient-to-b from-black to-neutral-900 text-center">
        <div className="max-w-3xl mx-auto">
           <Trophy className="text-amber-500 mx-auto mb-6" size={48} />
           <h2 className="text-5xl font-bold mb-8">Build the Business.</h2>
           <p className="text-xl text-neutral-400 mb-12">
             We are looking for operators, lawyers, and strategists who thrive in complexity.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/careers" className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-full text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
               View Operations Roles
             </Link>
           </div>
        </div>
      </div>

    </div>
  );
};

export default StrategyOperations;