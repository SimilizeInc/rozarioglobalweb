import React from 'react';
import { Rocket, Code, Database } from 'lucide-react';

const VentureCapital: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
       {/* Hero */}
       <div className="pt-40 pb-24 px-6 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/90"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
             <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber-500/20">
               Rozario Ventures
             </div>
             <h1 className="text-5xl md:text-7xl font-bold mb-8">
               Backing the <span className="text-amber-500">Data-Driven</span> Future.
             </h1>
             <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
               We invest in early-stage companies that leverage data science, AI, and advanced computing to transform industries.
             </p>
          </div>
       </div>

       {/* Thesis */}
       <div className="py-24 px-6 bg-neutral-900">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Investment Thesis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: Database, title: "Data Infrastructure", desc: "Tools that enable the storage, processing, and analysis of massive datasets." },
                 { icon: Code, title: "ML Ops & AI", desc: "Platforms that operationalize machine learning and bring AI to the enterprise." },
                 { icon: Rocket, title: "Fintech", desc: "Next-generation financial infrastructure and decentralized finance protocols." }
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
                        <Database className="text-amber-500 shrink-0" size={24} />
                        <h4 className="font-bold text-white text-lg">AI & ML</h4>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">Foundational models, inference infrastructure, and vertical AI applications.</p>
                </div>

                <div className="p-6 border border-neutral-800 rounded-xl bg-neutral-900/50">
                    <div className="flex items-center gap-3 mb-4">
                        <Rocket className="text-amber-500 shrink-0" size={24} />
                        <h4 className="font-bold text-white text-lg">DeFi & Web3</h4>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">Decentralized protocols, tokenized assets, and blockchain scalability solutions.</p>
                </div>

                <div className="p-6 border border-neutral-800 rounded-xl bg-neutral-900/50">
                    <div className="flex items-center gap-3 mb-4">
                        <Code className="text-amber-500 shrink-0" size={24} />
                        <h4 className="font-bold text-white text-lg">Dev Tools</h4>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">Next-gen IDEs, CI/CD pipelines, and developer productivity platforms.</p>
                </div>
             </div>
          </div>
       </div>

    </div>
  )
}
export default VentureCapital;