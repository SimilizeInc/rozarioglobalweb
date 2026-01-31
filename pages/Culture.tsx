import React from 'react';
import { Lightbulb, Users, Zap, Scale } from 'lucide-react';

const Culture: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* Hero */}
      <div className="relative pt-40 pb-32 px-6">
         <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-transparent"></div>
         <div className="max-w-4xl mx-auto relative z-10">
           <h1 className="text-5xl md:text-7xl font-bold mb-8">
             The <span className="text-amber-500">Manifesto</span>
           </h1>
           <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
             We do not believe in hierarchy. We believe in the best idea. At Rozario Global, titles are irrelevant when the data speaks.
           </p>
         </div>
      </div>

      {/* Principles */}
      <div className="py-24 px-6 bg-neutral-900 border-y border-neutral-800">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
               <h2 className="text-3xl font-bold mb-8">Our Operating System</h2>
               <div className="space-y-12">
                  <div className="flex gap-4">
                     <Scale className="text-amber-500 shrink-0" size={32} />
                     <div>
                       <h3 className="text-xl font-bold text-white mb-2">Radical Truth</h3>
                       <p className="text-neutral-400 leading-relaxed">
                         We value accuracy over comfort. If a model is failing, we kill it. If a junior engineer finds a flaw in a partner's code, they are expected to speak up.
                       </p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Zap className="text-amber-500 shrink-0" size={32} />
                     <div>
                       <h3 className="text-xl font-bold text-white mb-2">Relentless Iteration</h3>
                       <p className="text-neutral-400 leading-relaxed">
                         The market is a moving target. Yesterday's alpha is today's beta. We operate in a state of perpetual beta, constantly refining our systems.
                       </p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="bg-black p-12 border border-neutral-800 rounded-xl">
               <h3 className="text-2xl font-bold mb-6 text-white">The Anti-Portfolio</h3>
               <p className="text-neutral-400 mb-6">Things we explicitly avoid:</p>
               <ul className="space-y-4 text-neutral-300">
                 <li className="flex items-center gap-3"><span className="text-red-500">×</span> Gut-feel investing</li>
                 <li className="flex items-center gap-3"><span className="text-red-500">×</span> Office politics</li>
                 <li className="flex items-center gap-3"><span className="text-red-500">×</span> Information silos</li>
                 <li className="flex items-center gap-3"><span className="text-red-500">×</span> Resting on past performance</li>
               </ul>
            </div>
         </div>
      </div>

      {/* The Lab */}
      <div className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
           <Lightbulb className="mx-auto text-white mb-6" size={48} />
           <h2 className="text-4xl font-bold mb-6">The Laboratory Model</h2>
           <p className="text-xl text-neutral-400 leading-relaxed mb-12">
             We view our office not as a trading floor, but as a research laboratory. It is a quiet, intense environment where hypotheses are tested with scientific rigor.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
             <div className="p-6 bg-neutral-900 rounded-lg">
                <h4 className="font-bold text-amber-500 mb-2">Open Source</h4>
                <p className="text-sm text-neutral-400">We contribute to major open source libraries and encourage our engineers to publish non-proprietary research.</p>
             </div>
             <div className="p-6 bg-neutral-900 rounded-lg">
                <h4 className="font-bold text-amber-500 mb-2">Academic Roots</h4>
                <p className="text-sm text-neutral-400">40% of our staff hold PhDs. We maintain close ties with top universities and research institutes.</p>
             </div>
             <div className="p-6 bg-neutral-900 rounded-lg">
                <h4 className="font-bold text-amber-500 mb-2">Peer Review</h4>
                <p className="text-sm text-neutral-400">Every line of code and every trading model undergoes a rigorous peer review process before deployment.</p>
             </div>
           </div>
        </div>
      </div>

    </div>
  );
};

export default Culture;