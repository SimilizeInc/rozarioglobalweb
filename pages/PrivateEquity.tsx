import React from 'react';
import { Briefcase, TrendingUp, Users, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivateEquity: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
       
       {/* Hero */}
       <div className="pt-40 pb-24 px-6 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/90"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
             <div className="inline-block px-3 py-1 bg-amber-900/30 text-amber-400 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber-500/20">
               Rozario Private Equity
             </div>
             <h1 className="text-5xl md:text-7xl font-bold mb-8">
               Transformational <span className="text-amber-500">Capital.</span>
             </h1>
             <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
               We partner with market-leading technology and data businesses to unlock long-term value through operational excellence and digital transformation.
             </p>
          </div>
       </div>

       {/* Philosophy */}
       <div className="py-24 px-6 bg-neutral-900">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Operational Thesis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: Settings, title: "Operational Rigor", desc: "We don't just provide capital. We deploy our proprietary technology stack to modernize operations, streamline costs, and improve data visibility." },
                 { icon: TrendingUp, title: "Long-Term Horizon", desc: "We are patient investors. We hold assets for 7-10 years, allowing for genuine compounding rather than short-term financial engineering." },
                 { icon: Users, title: "Management Partnership", desc: "We back existing management teams, providing them with the resources and strategic guidance to scale to the next level." }
               ].map((t, i) => (
                 <div key={i} className="p-8 bg-black rounded-xl border border-neutral-800 hover:border-amber-500/50 transition-colors group">
                    <t.icon className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                    <h3 className="text-xl font-bold mb-4">{t.title}</h3>
                    <p className="text-neutral-400">{t.desc}</p>
                 </div>
               ))}
            </div>
         </div>
       </div>

       {/* Focus Sectors */}
       <div className="py-24 px-6 bg-black border-t border-neutral-800">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Sector Focus</h2>
                <p className="text-neutral-400 leading-relaxed text-lg">
                   We invest where we have an edge. Our deep expertise in data science and financial technology allows us to identify undervalued assets in complex, technical verticals.
                </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border border-neutral-800 rounded-xl bg-neutral-900/50">
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="text-amber-500 shrink-0" size={24} />
                        <h4 className="font-bold text-white text-lg">Vertical Software</h4>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">Mission-critical software for niche industries with high retention and pricing power.</p>
                </div>

                <div className="p-6 border border-neutral-800 rounded-xl bg-neutral-900/50">
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="text-amber-500 shrink-0" size={24} />
                        <h4 className="font-bold text-white text-lg">FinTech</h4>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">Payment infrastructure, regulatory technology (RegTech), and institutional trading tools.</p>
                </div>

                <div className="p-6 border border-neutral-800 rounded-xl bg-neutral-900/50">
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="text-amber-500 shrink-0" size={24} />
                        <h4 className="font-bold text-white text-lg">Data & Analytics</h4>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">Proprietary data providers and analytics platforms serving enterprise clients.</p>
                </div>
             </div>
          </div>
       </div>

       {/* CTA */}
       <div className="py-24 px-6 bg-amber-900/10 border-t border-amber-900/30">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold mb-6">Partner with Rozario Private Equity</h2>
             <p className="text-xl text-neutral-400 mb-10">
               We work with founders and management teams to build generational companies.
             </p>
             <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-amber-600 text-black font-bold rounded-full hover:bg-amber-500 transition-colors">
               Contact Investment Team <ArrowRight size={18} />
             </Link>
          </div>
       </div>
    </div>
  )
}
export default PrivateEquity;