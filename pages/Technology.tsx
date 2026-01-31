import React from 'react';
import { Server, Database, Zap, Shield, Cpu, Code } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* Hero */}
      <div className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Similize<sup className="text-2xl md:text-4xl text-amber-500">®</sup>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl leading-relaxed font-light">
            At Rozario Global, technology is not a support function. It is the product. We have engineered a proprietary, distributed computing environment capable of simulating decades of market history in minutes and executing trades in milliseconds.
          </p>
        </div>
      </div>

      {/* Section 1: Data Ingestion */}
      <div className="py-24 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
             <div className="flex items-center gap-3 mb-6">
               <Database className="text-amber-500" size={32} />
               <h2 className="text-3xl font-bold">The Data Lake</h2>
             </div>
             <p className="text-neutral-400 text-lg leading-relaxed mb-6">
               Our advantage begins with information. We ingest over 45 petabytes of data daily, ranging from structured market feeds (Tick data, L2/L3 order books) to unstructured alternative datasets.
             </p>
             <p className="text-neutral-400 text-lg leading-relaxed">
               This involves:
             </p>
             <ul className="list-disc pl-6 mt-4 space-y-2 text-neutral-300">
               <li><strong>Satellite Imagery:</strong> Tracking retail parking lots and crop health.</li>
               <li><strong>Natural Language Processing:</strong> Real-time sentiment analysis of 50,000+ news sources.</li>
               <li><strong>IoT Sensors:</strong> Supply chain logistics and shipping container tracking.</li>
             </ul>
           </div>
           <div className="bg-black p-8 rounded-xl border border-neutral-800 font-mono text-sm text-amber-500/80 leading-relaxed shadow-2xl">
             <div className="mb-2 text-neutral-500">// Ingestion Pipeline Status</div>
             <div>[STREAM_01] NYSE_ARCA: CONNECTED (Latency: 2ms)</div>
             <div>[STREAM_02] LSE_L1: CONNECTED (Latency: 24ms)</div>
             <div>[STREAM_03] ALT_SAT_V2: PROCESSING BATCH 9942</div>
             <div>[STREAM_04] SENTIMENT_ENGINE: ANALYZING...</div>
             <div className="mt-4 text-white">{`>>`} Cleaning and normalization protocols active.</div>
             <div className="text-white">{`>>`} Time-series alignment complete.</div>
           </div>
        </div>
      </div>

      {/* Section 2: Simulation & Compute */}
      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <Cpu className="mx-auto text-white mb-6" size={48} />
             <h2 className="text-4xl font-bold mb-4">The Simulation Grid</h2>
             <p className="text-neutral-400 max-w-2xl mx-auto">
               Before a dollar of capital is risked, every strategy must survive "The Gauntlet"—our historical simulation engine.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/30 transition-colors">
               <h3 className="text-xl font-bold text-white mb-3">Distributed Compute</h3>
               <p className="text-neutral-400">
                 We utilize a hybrid cloud/on-premise grid of 50,000+ cores to run parallel backtests, optimizing parameters across billions of permutations.
               </p>
             </div>
             <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/30 transition-colors">
               <h3 className="text-xl font-bold text-white mb-3">Realistic Market Impact</h3>
               <p className="text-neutral-400">
                 Our simulators account for our own footprint. We model slippage, market impact, and counter-party behavior to prevent overfitting.
               </p>
             </div>
             <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/30 transition-colors">
               <h3 className="text-xl font-bold text-white mb-3">Event Reconstruction</h3>
               <p className="text-neutral-400">
                 We replay historical anomalies (e.g., 2008 Crisis, 2020 Covid Crash) to ensure strategies remain robust during tail events.
               </p>
             </div>
           </div>
        </div>
      </div>

      {/* Section 3: Execution */}
      <div className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
           <div className="w-full md:w-1/2">
             <div className="flex items-center gap-3 mb-6">
               <Zap className="text-amber-500" size={32} />
               <h2 className="text-3xl font-bold">Execution Speed</h2>
             </div>
             <p className="text-neutral-400 text-lg leading-relaxed mb-6">
               In modern markets, being second is the same as being last. Our execution infrastructure is co-located in major exchange data centers globally.
             </p>
             <div className="space-y-4">
                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0 border border-neutral-800"><Code className="text-white" /></div>
                   <div>
                     <h4 className="font-bold text-white">FPGA Acceleration</h4>
                     <p className="text-sm text-neutral-400">Key logic is baked into hardware (Field Programmable Gate Arrays) to bypass operating system overhead.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0 border border-neutral-800"><Server className="text-white" /></div>
                   <div>
                     <h4 className="font-bold text-white">Microwave Transmission</h4>
                     <p className="text-sm text-neutral-400">We utilize line-of-sight microwave networks for inter-exchange communication, shaving milliseconds off fiber optic speeds.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shrink-0 border border-neutral-800"><Shield className="text-white" /></div>
                   <div>
                     <h4 className="font-bold text-white">Risk Wrappers</h4>
                     <p className="text-sm text-neutral-400">Independent risk checks sit on the wire, ensuring that no algorithmic error can violate our capital mandates.</p>
                   </div>
                </div>
             </div>
           </div>
           <div className="w-full md:w-1/2 relative h-96 bg-black rounded-2xl border border-neutral-800 overflow-hidden flex items-center justify-center">
              {/* Abstract Representation of Speed */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent"></div>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse absolute top-1/2"></div>
              <div className="text-center z-10">
                <div className="text-6xl font-black text-white mb-2">3<span className="text-lg text-amber-500 align-top">ms</span></div>
                <div className="text-neutral-500 uppercase tracking-widest text-sm">Tick-to-Trade Latency</div>
              </div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default Technology;