import React from 'react';
import { 
  Cpu, Server, Code, Zap, Shield, Database, 
  GitBranch, Terminal, Layers, ArrowRight, 
  MessageSquare, Coffee, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Engineering: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
            alt="Server Room Abstract" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-bold tracking-wider uppercase mb-8 border border-amber-500/20">
               Engineering at Rozario Global
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
                Engine.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light max-w-xl">
              We are a technology company that happens to trade. Our engineers don't support the business—they <em>are</em> the business. 
            </p>
          </div>
          <div className="hidden lg:block">
            {/* Abstract Code/Terminal Visual */}
            <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-700 rounded-xl p-6 font-mono text-sm shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="flex gap-2 mb-4">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="space-y-2 text-neutral-400">
                 <p><span className="text-purple-400">class</span> <span className="text-amber-400">ExecutionEngine</span> <span className="text-white">{`{`}</span></p>
                 <p className="pl-4"><span className="text-purple-400">public:</span></p>
                 <p className="pl-8"><span className="text-blue-400">void</span> <span className="text-amber-300">optimizeLatency</span>(<span className="text-blue-400">NetworkPacket</span>& pkt) <span className="text-white">{`{`}</span></p>
                 <p className="pl-12 text-green-400">// Kernel bypass logic active</p>
                 <p className="pl-12">solarflare::direct_access(pkt);</p>
                 <p className="pl-12">fpga_offload::process(pkt);</p>
                 <p className="pl-8"><span className="text-white">{`}`}</span></p>
                 <p className="pl-8"><span className="text-green-400">// Current Latency: 350ns</span></p>
                 <p><span className="text-white">{`}`}</span></p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PHILOSOPHY SECTION */}
      <div className="py-32 px-6 bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                 Scale without <br />
                 <span className="text-amber-500">Compromise.</span>
               </h2>
               <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                 The financial markets generate petabytes of noisy, unstructured data every day. To find the signal, we have built one of the world's most sophisticated distributed computing environments.
               </p>
               <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                 Our engineers solve problems usually reserved for national laboratories or hyperscale tech firms. We deal with nanosecond-level clock synchronization, kernel-bypass networking, and massive parallel simulation grids.
               </p>
               
               <div className="grid grid-cols-2 gap-6 mt-12">
                 <div className="border-l-4 border-amber-500 pl-6">
                   <div className="text-3xl font-bold text-white mb-1">45 PB</div>
                   <div className="text-sm text-neutral-500 uppercase tracking-wider">Data Ingested Daily</div>
                 </div>
                 <div className="border-l-4 border-white pl-6">
                   <div className="text-3xl font-bold text-white mb-1">50k+</div>
                   <div className="text-sm text-neutral-500 uppercase tracking-wider">Compute Cores</div>
                 </div>
               </div>
            </div>
            <div className="relative">
               <img 
                 src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=2070&auto=format&fit=crop" 
                 alt="Engineers Collaborating" 
                 className="rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
               />
               <div className="absolute -bottom-8 -left-8 bg-neutral-900 p-8 border border-neutral-800 rounded-lg max-w-xs hidden md:block">
                 <p className="text-amber-500 font-mono text-xs mb-2">System Status</p>
                 <p className="text-white font-bold text-lg">"We deploy to production 50+ times a day. We trust our test suite, and we trust our engineers."</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. THE TECH RADAR (Bento Grid) */}
      <div className="py-32 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Our Technical DNA</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              We are agnostic to tools but religious about performance. We use the right tool for the job, whether it's bare-metal C++ or cloud-native Kubernetes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Low Latency */}
            <div className="md:col-span-2 bg-black border border-neutral-800 p-10 rounded-2xl hover:border-amber-500/50 transition-colors group">
               <div className="w-12 h-12 bg-amber-900/20 text-amber-500 rounded-full flex items-center justify-center mb-6">
                 <Zap size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Ultra-Low Latency</h3>
               <p className="text-neutral-400 mb-6 max-w-lg">
                 In HFT, microseconds matter. We bypass the OS kernel using Solarflare NICs, optimize memory layout to hit cache lines, and utilize FPGA acceleration for tick-to-trade logic.
               </p>
               <div className="flex gap-3 flex-wrap">
                 {['C++20', 'Rust', 'Assembly', 'VHDL', 'SystemVerilog'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-neutral-900 text-neutral-300 text-xs font-mono rounded border border-neutral-700">{tag}</span>
                 ))}
               </div>
            </div>

            {/* Card 2: Distributed Systems */}
            <div className="bg-black border border-neutral-800 p-10 rounded-2xl hover:border-white/50 transition-colors group">
               <div className="w-12 h-12 bg-neutral-800 text-white rounded-full flex items-center justify-center mb-6">
                 <Server size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Distributed Grid</h3>
               <p className="text-neutral-400 mb-6">
                 Our simulation engine runs on a hybrid cloud grid, dynamically scaling to run billions of backtests.
               </p>
               <div className="flex gap-3 flex-wrap">
                 {['Kubernetes', 'Go', 'gRPC', 'AWS', 'Docker'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-neutral-900 text-neutral-300 text-xs font-mono rounded border border-neutral-700">{tag}</span>
                 ))}
               </div>
            </div>

            {/* Card 3: Data */}
            <div className="bg-black border border-neutral-800 p-10 rounded-2xl hover:border-neutral-500/50 transition-colors group">
               <div className="w-12 h-12 bg-neutral-800 text-neutral-400 rounded-full flex items-center justify-center mb-6">
                 <Database size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Data Platform</h3>
               <p className="text-neutral-400 mb-6">
                 Ingesting, cleaning, and normalizing data from 50+ exchanges and thousands of alternative sources in real-time.
               </p>
               <div className="flex gap-3 flex-wrap">
                 {['Python', 'Kafka', 'PostgreSQL', 'Parquet', 'Airflow'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-neutral-900 text-neutral-300 text-xs font-mono rounded border border-neutral-700">{tag}</span>
                 ))}
               </div>
            </div>

            {/* Card 4: Security */}
            <div className="md:col-span-2 bg-black border border-neutral-800 p-10 rounded-2xl hover:border-amber-500/50 transition-colors group">
               <div className="w-12 h-12 bg-neutral-800 text-green-500 rounded-full flex items-center justify-center mb-6">
                 <Shield size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-4">Reliability & Security</h3>
               <p className="text-neutral-400 mb-6 max-w-lg">
                 We operate with a "Zero Trust" architecture. Automated risk checks sit on the wire, ensuring that no bug can threaten the firm's capital. Observability is built into every service.
               </p>
               <div className="flex gap-3 flex-wrap">
                 {['Terraform', 'Vault', 'Prometheus', 'Grafana', 'eBPF'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-neutral-900 text-neutral-300 text-xs font-mono rounded border border-neutral-700">{tag}</span>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. VOICES FROM THE GRID (Testimonials) */}
      <div className="py-32 px-6 bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-4xl font-bold mb-16 text-center">Voices from the Grid</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Person 1 */}
             <div className="p-8 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Engineer" className="w-16 h-16 rounded-full object-cover border-2 border-amber-500" />
                  <div>
                    <h4 className="text-white font-bold">Maya P.</h4>
                    <p className="text-amber-500 text-xs uppercase tracking-wide">Senior FPGA Engineer</p>
                  </div>
                </div>
                <p className="text-neutral-300 italic leading-relaxed">
                  "I came from aerospace, where iteration cycles took years. Here, I design a circuit in the morning, verify it by lunch, and see it trading in Tokyo by the evening. The feedback loop is addictive."
                </p>
             </div>

             {/* Person 2 */}
             <div className="p-8 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Engineer" className="w-16 h-16 rounded-full object-cover border-2 border-white" />
                  <div>
                    <h4 className="text-white font-bold">David L.</h4>
                    <p className="text-neutral-400 text-xs uppercase tracking-wide">Principal Systems Architect</p>
                  </div>
                </div>
                <p className="text-neutral-300 italic leading-relaxed">
                  "Rozario isn't about maintaining legacy code. We are constantly rewriting our core stacks to leverage new hardware. If you want to work on the bleeding edge of C++, this is it."
                </p>
             </div>

             {/* Person 3 */}
             <div className="p-8 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:bg-neutral-900 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" alt="Engineer" className="w-16 h-16 rounded-full object-cover border-2 border-neutral-500" />
                  <div>
                    <h4 className="text-white font-bold">Sarah J.</h4>
                    <p className="text-neutral-400 text-xs uppercase tracking-wide">Head of Data Engineering</p>
                  </div>
                </div>
                <p className="text-neutral-300 italic leading-relaxed">
                  "The volume of data we process is staggering. The challenges here aren't just about finance; they are about distributed systems physics. How do you move 40PB without latency?"
                </p>
             </div>
           </div>
        </div>
      </div>

      {/* 5. OPEN SOURCE & COMMUNITY */}
      <div className="py-24 px-6 bg-neutral-900">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                 <Globe size={14} /> Community
               </div>
               <h2 className="text-4xl font-bold mb-6">We Don't Just Use Open Source. We Contribute.</h2>
               <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                 We believe that secretive, siloed development is a relic of the past. Rozario Global actively contributes to the libraries that power the modern web and data science ecosystems.
               </p>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3 text-neutral-300">
                   <GitBranch className="text-amber-500" size={20} />
                   <span>Core contributors to <strong className="text-white">Pandas</strong> and <strong className="text-white">Arrow</strong></span>
                 </li>
                 <li className="flex items-center gap-3 text-neutral-300">
                   <GitBranch className="text-amber-500" size={20} />
                   <span>Maintainers of internal high-performance C++ STL extensions</span>
                 </li>
                 <li className="flex items-center gap-3 text-neutral-300">
                   <GitBranch className="text-amber-500" size={20} />
                   <span>Sponsors of the Python Software Foundation</span>
                 </li>
               </ul>
               <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-bold border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors">
                 View our GitHub <ArrowRight size={16} />
               </a>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-black p-8 rounded-xl border border-neutral-800 font-mono text-sm relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                   <Code size={48} />
                 </div>
                 <div className="space-y-2 text-neutral-400">
                   <p className="text-neutral-600"># recent_contribution.py</p>
                   <p><span className="text-purple-400">def</span> <span className="text-blue-400">optimize_dataframe</span>(df):</p>
                   <p className="pl-4 text-green-500">"""</p>
                   <p className="pl-4 text-green-500">Merged upstream to pandas v2.1.0</p>
                   <p className="pl-4 text-green-500">Reduces memory footprint by 40% using zero-copy.</p>
                   <p className="pl-4 text-green-500">"""</p>
                   <p className="pl-4">arrow_table = pa.Table.from_pandas(df)</p>
                   <p className="pl-4"><span className="text-purple-400">return</span> arrow_table.to_pandas(self_destruct=<span className="text-amber-400">True</span>)</p>
                 </div>
              </div>
            </div>
         </div>
      </div>

      {/* 6. GROWTH & LEARNING */}
      <div className="py-24 px-6 bg-black border-y border-neutral-800">
        <div className="max-w-5xl mx-auto text-center">
           <Layers className="text-white mx-auto mb-6" size={48} />
           <h2 className="text-4xl font-bold mb-6">The Rozario Engineering Academy</h2>
           <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
             You never graduate from Rozario. We invest heavily in continuous education to ensure our team remains at the frontier of computer science.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-neutral-900 p-6 rounded-lg">
                <h4 className="text-amber-500 font-bold mb-2">Technical Deep Dives</h4>
                <p className="text-sm text-neutral-400">Weekly seminars led by principal engineers on topics like "Lock-free Queues" or "Kernel Networking."</p>
              </div>
              <div className="bg-neutral-900 p-6 rounded-lg">
                <h4 className="text-amber-500 font-bold mb-2">Conference Budget</h4>
                <p className="text-sm text-neutral-400">Unlimited budget to attend KubeCon, CppCon, PyData, or any conference relevant to your craft.</p>
              </div>
              <div className="bg-neutral-900 p-6 rounded-lg">
                <h4 className="text-amber-500 font-bold mb-2">Internal Hackathons</h4>
                <p className="text-sm text-neutral-400">Quarterly 24-hour events where engineers are encouraged to build wild, experimental tools.</p>
              </div>
           </div>
        </div>
      </div>

      {/* 7. CTA / JOB LISTING SHORTCUT */}
      <div className="py-32 px-6 bg-gradient-to-b from-neutral-900 to-black text-center">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-5xl font-bold mb-8">Ready to Build?</h2>
           <p className="text-xl text-neutral-400 mb-12">
             We are looking for engineers who are obsessed with performance, reliability, and scale. If that sounds like you, let's talk.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/careers" className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-full text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
               View Open Engineering Roles
             </Link>
             <Link to="/culture" className="px-10 py-4 border border-neutral-700 hover:border-white text-white font-bold rounded-full text-lg transition-all">
               Read Our Manifesto
             </Link>
           </div>
        </div>
      </div>

    </div>
  );
};

export default Engineering;