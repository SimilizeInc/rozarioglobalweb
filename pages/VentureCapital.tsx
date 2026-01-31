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

       {/* Portfolio Mock */}
       <div className="py-24 px-6 bg-black border-t border-neutral-800">
          <div className="max-w-7xl mx-auto">
             <h2 className="text-3xl font-bold mb-12">Select Portfolio</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {['TensorFlow.ai', 'BlockStream', 'DataBricks', 'AlgoC', 'NeuralNet', 'QuantumSoft', 'EdgeCompute', 'SkyNet'].map((p, i) => (
                 <div key={i} className="h-32 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800 font-bold text-neutral-500 hover:text-white hover:border-amber-500 transition-all cursor-pointer">
                   {p}
                 </div>
               ))}
             </div>
          </div>
       </div>
    </div>
  )
}
export default VentureCapital;