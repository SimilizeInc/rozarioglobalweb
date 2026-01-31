import React from 'react';
import { Lock, ArrowRight, ExternalLink } from 'lucide-react';

const CITCO_URL = "https://ndcdyn.interactivebrokers.com/sso/Login?RL=1&locale=en_US";

const InvestorCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col pt-20">
       <div className="flex-1 flex flex-col md:flex-row">
          {/* Left Side - Info */}
          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-neutral-900 border-r border-neutral-800">
             <h1 className="text-4xl md:text-5xl font-bold mb-8">Investor Center</h1>
             <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
               Welcome to the Rozario Global Investor Portal. This secure resource provides our limited partners with access to monthly performance reports, tax documents, and market commentary.
             </p>
             <div className="p-6 bg-black rounded-xl border border-neutral-800 mb-8">
               <h3 className="font-bold mb-2 text-amber-500">New Investor?</h3>
               <p className="text-neutral-400 text-sm mb-4">
                 Access to Rozario Global funds is restricted to qualified purchasers. To inquire about investment opportunities, please contact our Investor Relations team.
               </p>
               <a href="mailto:ir@rozarioglobal.com" className="text-white font-bold underline decoration-amber-500 hover:text-amber-400">Contact IR &rarr;</a>
             </div>
          </div>

          {/* Right Side - Login Action */}
          <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-black">
             <div className="max-w-md mx-auto w-full text-center">
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 bg-amber-900/20 rounded-full flex items-center justify-center border border-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                    <Lock className="text-amber-500" size={36} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Secure Client Access</h2>
                <p className="text-neutral-400 mb-10 leading-relaxed">
                  You are about to be redirected to our secure client portal provided by Interactive Brokers. Please ensure you have your multi-factor authentication device ready.
                </p>
                
                <a 
                  href={CITCO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-amber-600 hover:bg-amber-500 text-black font-bold text-lg py-4 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg"
                >
                  Proceed to Login <ExternalLink size={20} />
                </a>
                
                <p className="mt-8 text-xs text-neutral-500">
                  By clicking above, you agree to our Terms of Use and Privacy Policy. Unauthorized access is prohibited.
                </p>
             </div>
          </div>
       </div>
    </div>
  )
}
export default InvestorCenter;