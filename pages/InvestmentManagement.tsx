import React from 'react';
import { TrendingUp, Shield, Globe, Cpu, Users, BarChart, Search, Binary, ArrowRight, Rocket, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const CITCO_URL = "https://ndcdyn.interactivebrokers.com/sso/Login?RL=1&locale=en_US";

const InvestmentManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
       
       {/* 1. HERO SECTION */}
       <div className="relative pt-40 pb-32 px-6 bg-gradient-to-b from-neutral-900 to-black overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-900/5 blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
             <div className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-bold tracking-wider uppercase mb-8 border border-amber-500/20">
               What We Do
             </div>
             <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
               Multi-Strategy. <br />
               <span className="text-amber-500">Single Standard.</span>
             </h1>
             <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
               We deploy capital across four primary pillars: <strong>Fundamental Equities</strong>, <strong>Quantitative Systematic</strong>, <strong>Venture Capital</strong>, and <strong>Private Equity</strong>. While our approaches differ, our commitment to rigorous research and risk management is absolute.
             </p>
          </div>
       </div>

       {/* 2. OVERVIEW STATS */}
       <div className="py-12 bg-black border-y border-neutral-800">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
               <Globe className="mx-auto text-neutral-500" size={24} />
               <div className="text-2xl font-bold text-white">Global</div>
               <div className="text-xs text-neutral-500 uppercase">Asset Coverage</div>
            </div>
            <div className="space-y-2">
               <Users className="mx-auto text-neutral-500" size={24} />
               <div className="text-2xl font-bold text-white">Sector Specialists</div>
               <div className="text-xs text-neutral-500 uppercase">Fundamental Teams</div>
            </div>
            <div className="space-y-2">
               <Binary className="mx-auto text-neutral-500" size={24} />
               <div className="text-2xl font-bold text-white">Systematic</div>
               <div className="text-xs text-neutral-500 uppercase">Algorithmic Execution</div>
            </div>
            <div className="space-y-2">
               <Shield className="mx-auto text-neutral-500" size={24} />
               <div className="text-2xl font-bold text-white">Market Neutral</div>
               <div className="text-xs text-neutral-500 uppercase">Risk Framework</div>
            </div>
         </div>
       </div>

       {/* 3. FUNDAMENTAL EQUITIES */}
       <div id="fundamental" className="py-24 px-6 bg-black scroll-mt-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
             <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-white/10 rounded-lg text-white"><Search size={24} /></div>
                   <h2 className="text-3xl md:text-4xl font-bold">Fundamental Equities</h2>
                </div>
                <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                  Our discretionary business is built on deep, bottom-up research. We organize our investment professionals into sector-specialized "Pods"—autonomous teams that operate like independent boutiques within the larger firm.
                </p>
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  We don't just analyze tickers; we analyze businesses. Our teams meet with management, interview suppliers, and dissect regulatory filings to build variant views that differ from the consensus.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                      <h4 className="text-amber-500 font-bold mb-1">Deep Diligence</h4>
                      <p className="text-sm text-neutral-400">Primary research involving customers, competitors, and supply chains.</p>
                   </div>
                   <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                      <h4 className="text-amber-500 font-bold mb-1">Sector Focus</h4>
                      <p className="text-sm text-neutral-400">Healthcare, TMT, Consumer, Industrials, and FinTech specialization.</p>
                   </div>
                </div>
             </div>
             
             <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-amber-500 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform opacity-20"></div>
                {/* Image: Diverse Team (Indian, Chinese, White) in a meeting */}
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Fundamental Research Team Meeting" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-6 py-4 rounded-lg border border-neutral-700">
                   <div className="text-white font-bold">The Consensus View</div>
                   <div className="text-amber-500 text-sm">Is usually priced in. We look elsewhere.</div>
                </div>
             </div>
          </div>
       </div>

       {/* 4. GLOBAL QUANTITATIVE SYSTEMATIC (Cubist Style) */}
       <div id="quantitative" className="py-24 px-6 bg-neutral-900 border-y border-neutral-800 scroll-mt-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
             <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-amber-900/20 rounded-lg text-amber-500"><Cpu size={24} /></div>
                   <h2 className="text-3xl md:text-4xl font-bold">Global Quantitative Systematic</h2>
                </div>
                <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                  Our systematic business operates at the intersection of data science and finance. We view the market as a noisy dataset where subtle signals—imperceptible to the human eye—can be extracted using advanced statistics.
                </p>
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  We trade across horizons ranging from microseconds to months, utilizing machine learning to adapt to changing market regimes. Our process is automated, disciplined, and scalable.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Binary className="text-amber-500 mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-bold">Signal Generation</h4>
                      <p className="text-sm text-neutral-400">Ingesting alternative data (satellite, weather, credit) to forecast price movements.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="text-amber-500 mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-bold">Portfolio Optimization</h4>
                      <p className="text-sm text-neutral-400">Balancing thousands of positions to maximize Sharpe ratio while neutralizing factor risks.</p>
                    </div>
                  </li>
                </ul>
             </div>

             <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl transform -rotate-2 group-hover:-rotate-1 transition-transform opacity-10"></div>
                {/* Image: Diverse Tech/Quant Team (Asian/Indian focus) */}
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop" 
                  alt="Quantitative Systematic Lab" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                 <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md px-6 py-4 rounded-lg border border-neutral-700 text-right">
                   <div className="text-white font-bold">Automation</div>
                   <div className="text-amber-500 text-sm">Removes emotion from execution.</div>
                </div>
             </div>
          </div>
       </div>

       {/* 5. VENTURE CAPITAL (New Section) */}
       <div id="venture-capital" className="py-24 px-6 bg-black border-b border-neutral-800 scroll-mt-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
             <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-amber-900/20 rounded-lg text-amber-500"><Rocket size={24} /></div>
                   <h2 className="text-3xl md:text-4xl font-bold">Venture Capital</h2>
                </div>
                <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                  Rozario Ventures backs the next generation of data-driven startups. We invest in early-stage companies leveraging AI, machine learning, and advanced computing to transform industries.
                </p>
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  We bring more than capital; we bring our firm's engineering DNA and data infrastructure to help portfolio companies scale their technical edge.
                </p>
                <Link to="/ventures" className="inline-flex items-center gap-2 text-amber-500 font-bold hover:text-white transition-colors uppercase tracking-wide">
                   Explore Ventures <ArrowRight size={16} />
                </Link>
             </div>
             
             <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-amber-500 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Venture Capital" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>
       </div>

       {/* 6. PRIVATE EQUITY (New Section) */}
       <div id="private-equity" className="py-24 px-6 bg-neutral-900 scroll-mt-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
             <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-amber-900/20 rounded-lg text-amber-500"><Briefcase size={24} /></div>
                   <h2 className="text-3xl md:text-4xl font-bold">Private Equity</h2>
                </div>
                <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                  Our Private Equity arm focuses on long-term value creation. We acquire and partner with mature, cash-flow positive businesses in the technology and data sectors, applying our operational expertise to drive growth.
                </p>
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  We are patient capital. Unlike traditional funds driven by short-term IRR, we build enduring market leaders through technological transformation.
                </p>
                <Link to="/private-equity" className="inline-flex items-center gap-2 text-amber-500 font-bold hover:text-white transition-colors uppercase tracking-wide">
                   Explore Private Equity <ArrowRight size={16} />
                </Link>
             </div>

             <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-amber-500 rounded-2xl transform -rotate-2 group-hover:-rotate-1 transition-transform opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                  alt="Private Equity" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>
       </div>

       {/* 7. RISK MANAGEMENT */}
       <div className="py-24 px-6 bg-black border-t border-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
             <Shield className="mx-auto text-white mb-6" size={48} />
             <h2 className="text-3xl md:text-4xl font-bold mb-6">The Shield: Risk Management</h2>
             <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
               Across all our businesses, we believe that alpha generation is impossible without capital preservation. Our independent Risk Management team has the authority to reduce positions or shut down trading strategies that exceed defined volatility or liquidity limits.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
                   <h4 className="text-amber-500 font-bold mb-2">Real-Time Limits</h4>
                   <p className="text-sm text-neutral-400">Positions are monitored continuously. Breaches trigger automated reduction protocols.</p>
                </div>
                <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
                   <h4 className="text-amber-500 font-bold mb-2">Stress Testing</h4>
                   <p className="text-sm text-neutral-400">Portfolios are subjected to historical crisis scenarios (2008, 2020) daily.</p>
                </div>
                <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
                   <h4 className="text-amber-500 font-bold mb-2">Correlation Checks</h4>
                   <p className="text-sm text-neutral-400">We ensure that our "diversified" bets are not secretly correlated to a single factor.</p>
                </div>
             </div>
          </div>
       </div>
       
       {/* 8. CTA */}
       <div className="py-24 px-6 bg-amber-900/10 border-t border-amber-900/30">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
               <h2 className="text-3xl font-bold mb-2">Partner with Us</h2>
               <p className="text-neutral-400">
                 Institutional investors can access detailed performance attribution through our portal.
               </p>
             </div>
             <div className="flex gap-4">
                <a href={CITCO_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-amber-600 text-black font-bold rounded-full hover:bg-amber-500 transition-colors flex items-center gap-2">
                  Investor Login <ArrowRight size={18} />
                </a>
             </div>
          </div>
       </div>
    </div>
  )
}
export default InvestmentManagement;