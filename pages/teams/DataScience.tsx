import React from 'react';
import { Database, Globe, Eye, FileText, Share2, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataScience: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Cyberpunk Data City" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-bold tracking-wider uppercase mb-8 border border-amber-500/20">
               Data Science at Rozario Global
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Structure the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
                Unseen.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light max-w-xl">
              The edge in modern finance is no longer found in the ticker tape. It is hidden in the noise of the real world—satellite images, shipping manifests, and billions of credit card swipes.
            </p>
          </div>
          <div className="hidden lg:block">
            {/* Visual: The Pipeline Abstract */}
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-700 rounded-xl p-8 shadow-2xl">
               <div className="flex justify-between items-center mb-6 text-sm text-neutral-500 font-mono">
                  <span>PIPELINE_ID: ALPHA_GEN_V9</span>
                  <span className="text-green-500">● LIVE</span>
               </div>
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700">
                        <Globe className="text-blue-400" size={24} />
                     </div>
                     <div className="flex-1">
                        <div className="h-2 bg-neutral-800 rounded-full w-full overflow-hidden">
                           <div className="h-full bg-blue-500 w-[90%] animate-pulse"></div>
                        </div>
                        <div className="text-xs text-neutral-400 mt-2 flex justify-between">
                           <span>Ingesting Geospatial</span>
                           <span>450 MB/s</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700">
                        <FileText className="text-purple-400" size={24} />
                     </div>
                     <div className="flex-1">
                        <div className="h-2 bg-neutral-800 rounded-full w-full overflow-hidden">
                           <div className="h-full bg-purple-500 w-[65%] animate-pulse"></div>
                        </div>
                         <div className="text-xs text-neutral-400 mt-2 flex justify-between">
                           <span>NLP Sentiment Analysis</span>
                           <span>Processing 50k Docs</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700">
                        <Database className="text-amber-500" size={24} />
                     </div>
                     <div className="flex-1">
                        <div className="h-2 bg-neutral-800 rounded-full w-full overflow-hidden">
                           <div className="h-full bg-amber-500 w-[88%] animate-pulse"></div>
                        </div>
                         <div className="text-xs text-neutral-400 mt-2 flex justify-between">
                           <span>Entity Resolution</span>
                           <span>99.9% Confidence</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. OUR DOMAINS */}
      <div className="py-32 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-bold mb-6">Beyond Price & Volume</h2>
             <p className="text-neutral-400 max-w-2xl mx-auto">
               We treat the entire global economy as a dataset. If it leaves a digital footprint, we ingest it, clean it, and model it.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             
             {/* Domain 1 */}
             <div className="flex gap-6 group">
                <div className="shrink-0">
                   <div className="w-16 h-16 bg-black border border-neutral-800 rounded-2xl flex items-center justify-center group-hover:border-amber-500 transition-colors">
                      <Globe className="text-amber-500" size={32} />
                   </div>
                </div>
                <div>
                   <h3 className="text-2xl font-bold mb-3 text-white">Geospatial Intelligence</h3>
                   <p className="text-neutral-400 leading-relaxed mb-4">
                      We analyze orbital imagery to track retail parking lots, oil storage tanks, and crop health indices. We know the supply chain status before the quarterly report is written.
                   </p>
                   <ul className="text-sm text-neutral-500 space-y-1">
                      <li>• Synthetic Aperture Radar (SAR)</li>
                      <li>• Computer Vision (YOLO/ResNet)</li>
                      <li>• Multi-spectral Analysis</li>
                   </ul>
                </div>
             </div>

             {/* Domain 2 */}
             <div className="flex gap-6 group">
                <div className="shrink-0">
                   <div className="w-16 h-16 bg-black border border-neutral-800 rounded-2xl flex items-center justify-center group-hover:border-amber-500 transition-colors">
                      <FileText className="text-white" size={32} />
                   </div>
                </div>
                <div>
                   <h3 className="text-2xl font-bold mb-3 text-white">Natural Language Understanding</h3>
                   <p className="text-neutral-400 leading-relaxed mb-4">
                      Markets move on words. We parse earnings calls, regulatory filings, and global news in real-time. Our models detect subtle shifts in executive tone and sentiment that humans miss.
                   </p>
                   <ul className="text-sm text-neutral-500 space-y-1">
                      <li>• Large Language Models (LLMs)</li>
                      <li>• Transformer Architectures</li>
                      <li>• Entity Recognition</li>
                   </ul>
                </div>
             </div>

             {/* Domain 3 */}
             <div className="flex gap-6 group">
                <div className="shrink-0">
                   <div className="w-16 h-16 bg-black border border-neutral-800 rounded-2xl flex items-center justify-center group-hover:border-amber-500 transition-colors">
                      <Layers className="text-neutral-400" size={32} />
                   </div>
                </div>
                <div>
                   <h3 className="text-2xl font-bold mb-3 text-white">Knowledge Graph</h3>
                   <p className="text-neutral-400 leading-relaxed mb-4">
                      Everything is connected. We map the complex web of relationships between companies, suppliers, executives, and subsidiaries to understand second and third-order risks.
                   </p>
                   <ul className="text-sm text-neutral-500 space-y-1">
                      <li>• Graph Neural Networks</li>
                      <li>• Neo4j / NetworkX</li>
                      <li>• Supply Chain Mapping</li>
                   </ul>
                </div>
             </div>

             {/* Domain 4 */}
             <div className="flex gap-6 group">
                <div className="shrink-0">
                   <div className="w-16 h-16 bg-black border border-neutral-800 rounded-2xl flex items-center justify-center group-hover:border-amber-500 transition-colors">
                      <Share2 className="text-green-500" size={32} />
                   </div>
                </div>
                <div>
                   <h3 className="text-2xl font-bold mb-3 text-white">Transactional Data</h3>
                   <p className="text-neutral-400 leading-relaxed mb-4">
                      We aggregate anonymized credit card and receipt data to build real-time revenue nowcasts for thousands of tickers, often predicting earnings surprises with high accuracy.
                   </p>
                   <ul className="text-sm text-neutral-500 space-y-1">
                      <li>• Consumer Behavior Modeling</li>
                      <li>• Panel Normalization</li>
                      <li>• Bias Correction</li>
                   </ul>
                </div>
             </div>

          </div>
        </div>
      </div>

      {/* 3. THE PIPELINE (Visual) */}
      <div className="py-32 px-6 bg-black">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">From Raw Noise to Alpha</h2>
            
            <div className="relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-neutral-800 -translate-y-1/2 -z-10"></div>
               
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Step 1 */}
                  <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 relative group hover:-translate-y-2 transition-transform duration-500">
                     <div className="w-12 h-12 bg-black text-neutral-500 rounded-full flex items-center justify-center font-bold mb-6 border border-neutral-800 group-hover:border-amber-500 group-hover:text-amber-500 transition-colors">01</div>
                     <h3 className="font-bold text-xl mb-3">Ingest</h3>
                     <p className="text-sm text-neutral-400">
                        Connecting to 500+ diverse APIs, S3 buckets, and FTP servers. Handling format chaos (PDF, JSON, CSV, binary).
                     </p>
                  </div>

                   {/* Step 2 */}
                  <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 relative group hover:-translate-y-2 transition-transform duration-500">
                     <div className="w-12 h-12 bg-black text-neutral-500 rounded-full flex items-center justify-center font-bold mb-6 border border-neutral-800 group-hover:border-white group-hover:text-white transition-colors">02</div>
                     <h3 className="font-bold text-xl mb-3">Resolve</h3>
                     <p className="text-sm text-neutral-400">
                        Mapping distinct identifiers (e.g., "AAPL", "Apple Inc.", "Apple Computers") to a single canonical entity ID (OpenFIGI).
                     </p>
                  </div>

                   {/* Step 3 */}
                  <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 relative group hover:-translate-y-2 transition-transform duration-500">
                     <div className="w-12 h-12 bg-black text-neutral-500 rounded-full flex items-center justify-center font-bold mb-6 border border-neutral-800 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">03</div>
                     <h3 className="font-bold text-xl mb-3">Enrich</h3>
                     <p className="text-sm text-neutral-400">
                        Joining datasets. Overlaying weather data on crop yields. Overlaying foot traffic on retail earnings.
                     </p>
                  </div>

                   {/* Step 4 */}
                  <div className="bg-amber-900/10 p-8 rounded-xl border border-amber-500/30 relative group hover:-translate-y-2 transition-transform duration-500">
                     <div className="w-12 h-12 bg-black text-amber-500 rounded-full flex items-center justify-center font-bold mb-6 border border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]">04</div>
                     <h3 className="font-bold text-xl mb-3 text-white">Signal</h3>
                     <p className="text-sm text-neutral-400">
                        Delivering a clean, point-in-time adjusted time series to Quant Research for backtesting.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 4. TEAM VOICES */}
      <div className="py-32 px-6 bg-neutral-900 border-y border-neutral-800">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Voices from the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
               <div className="bg-black p-8 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-full object-cover border border-neutral-700" alt="Profile" />
                     <div>
                        <div className="font-bold text-white">Elena R.</div>
                        <div className="text-amber-500 text-xs uppercase font-bold">NLP Specialist</div>
                     </div>
                  </div>
                  <p className="text-neutral-400 italic">
                     "The scale of text we process is insane. We aren't just doing keyword counting. We are training custom transformers to understand the nuance of 'cautiously optimistic' in a central bank press conference."
                  </p>
               </div>

               <div className="bg-black p-8 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-full object-cover border border-neutral-700" alt="Profile" />
                     <div>
                        <div className="font-bold text-white">Marcus T.</div>
                        <div className="text-neutral-500 text-xs uppercase font-bold">Data Engineer</div>
                     </div>
                  </div>
                  <p className="text-neutral-400 italic">
                     "At a tech firm, bad data means a bug report. Here, bad data means a bad trade. The standard for data integrity is absolute. It forces you to write incredibly robust pipelines."
                  </p>
               </div>

               <div className="bg-black p-8 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-full object-cover border border-neutral-700" alt="Profile" />
                     <div>
                        <div className="font-bold text-white">Sarah L.</div>
                        <div className="text-blue-500 text-xs uppercase font-bold">Alt Data Strategist</div>
                     </div>
                  </div>
                  <p className="text-neutral-400 italic">
                     "I spend my days hunting for new datasets. Last month I was evaluating maritime shipping transponders. This month it's app store download velocity. It's like being a digital detective."
                  </p>
               </div>

            </div>
         </div>
      </div>

      {/* 5. CTA */}
      <div className="py-32 px-6 bg-gradient-to-b from-black to-neutral-900 text-center">
        <div className="max-w-3xl mx-auto">
           <Eye className="text-amber-500 mx-auto mb-6" size={48} />
           <h2 className="text-5xl font-bold mb-8">See What Others Miss.</h2>
           <p className="text-xl text-neutral-400 mb-12">
             We are looking for data scientists, engineers, and strategists who can find the signal in the noise.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/careers" className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-full text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
               View Data Science Roles
             </Link>
           </div>
        </div>
      </div>

    </div>
  );
};

export default DataScience;