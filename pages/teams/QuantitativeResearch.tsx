import React from 'react';
import { Brain, Sigma, TrendingUp, Microscope, BookOpen, GitBranch, Target, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuantitativeResearch: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" 
            alt="Blackboard Math" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-bold tracking-wider uppercase mb-8 border border-amber-500/20">
               Quantitative Research
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              The Science <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                of Alpha.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light max-w-xl">
              We apply the rigor of the scientific method to financial markets. We are physicists, mathematicians, and statisticians decoding the complex behavior of the global economy.
            </p>
          </div>
          <div className="hidden lg:block">
            {/* Abstract Math Visual */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-8 font-mono text-sm shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-20"><Sigma size={100} /></div>
               <div className="space-y-4 relative z-10">
                 <p className="text-neutral-500">// Stochastic Volatility Model</p>
                 <p className="text-white"><span className="text-purple-400">d</span>S<sub className="text-neutral-500">t</sub> = μS<sub className="text-neutral-500">t</sub><span className="text-purple-400">d</span>t + √v<sub className="text-neutral-500">t</sub>S<sub className="text-neutral-500">t</sub><span className="text-purple-400">d</span>W<sup className="text-neutral-500">1</sup><sub className="text-neutral-500">t</sub></p>
                 <p className="text-white"><span className="text-purple-400">d</span>v<sub className="text-neutral-500">t</sub> = κ(θ - v<sub className="text-neutral-500">t</sub>)<span className="text-purple-400">d</span>t + σ√v<sub className="text-neutral-500">t</sub><span className="text-purple-400">d</span>W<sup className="text-neutral-500">2</sup><sub className="text-neutral-500">t</sub></p>
                 <div className="h-px bg-neutral-700 my-4"></div>
                 <p className="text-green-400">&gt; Simulating 10,000 paths...</p>
                 <p className="text-green-400">&gt; Convergence achieved (p &lt; 0.05)</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE PROCESS (Deep Dive) */}
      <div className="py-32 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20">
             <h2 className="text-4xl font-bold mb-6">The Research Cycle</h2>
             <p className="text-neutral-400 max-w-2xl mx-auto">
               Our researchers don't just "find patterns." They build robust theories about market mechanics and test them to destruction.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Card 1 */}
             <div className="bg-black border border-neutral-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group">
                <Brain className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold mb-4 text-white">1. Hypothesis</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Ideas originate from academic literature, market observation, or alternative data anomalies. We encourage intuition, but demand proof.
                </p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-neutral-900 text-xs text-neutral-500 rounded border border-neutral-800">Literature Review</span>
                   <span className="px-2 py-1 bg-neutral-900 text-xs text-neutral-500 rounded border border-neutral-800">Exploratory Data Analysis</span>
                </div>
             </div>

             {/* Card 2 */}
             <div className="bg-black border border-neutral-800 p-8 rounded-2xl hover:border-white/50 transition-colors group">
                <Microscope className="text-white mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold mb-4 text-white">2. Simulation</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  We replay the strategy against petabytes of historical data using our proprietary "Gauntlet" engine. We account for fees, slippage, and market impact.
                </p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-neutral-900 text-xs text-neutral-500 rounded border border-neutral-800">Backtesting</span>
                   <span className="px-2 py-1 bg-neutral-900 text-xs text-neutral-500 rounded border border-neutral-800">Event Reconstruction</span>
                </div>
             </div>

             {/* Card 3 */}
             <div className="bg-black border border-neutral-800 p-8 rounded-2xl hover:border-green-500/50 transition-colors group">
                <Target className="text-green-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold mb-4 text-white">3. Production</h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Once a model passes peer review, it is deployed to our live trading infrastructure. But the work isn't done; we constantly monitor for alpha decay.
                </p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-neutral-900 text-xs text-neutral-500 rounded border border-neutral-800">Live Execution</span>
                   <span className="px-2 py-1 bg-neutral-900 text-xs text-neutral-500 rounded border border-neutral-800">Performance Attr.</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 3. THE LAB (Environment) */}
      <div className="py-32 px-6 bg-black">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                 alt="Collaboration" 
                 className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
               />
               <div className="absolute -bottom-6 -right-6 bg-neutral-900 p-6 rounded-xl border border-neutral-800 hidden md:block">
                  <div className="text-4xl font-bold text-white mb-1">40%</div>
                  <div className="text-xs text-amber-500 uppercase font-bold tracking-wider">Employees with PhDs</div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <h2 className="text-4xl font-bold mb-6">A University Campus, <br/>With Capital.</h2>
               <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                  We have deliberately cultivated an academic culture. We don't have "traders" shouting across a floor. We have quiet, collaborative spaces where researchers solve hard problems together.
               </p>
               <ul className="space-y-6">
                  <li className="flex gap-4">
                     <BookOpen className="text-amber-500 shrink-0" size={24} />
                     <div>
                        <h4 className="font-bold text-white">Internal Journals</h4>
                        <p className="text-sm text-neutral-500">We publish our own internal research papers. Knowledge is shared, not siloed.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <GitBranch className="text-amber-500 shrink-0" size={24} />
                     <div>
                        <h4 className="font-bold text-white">Collaborative Codebase</h4>
                        <p className="text-sm text-neutral-500">Our research library is a shared resource. You stand on the shoulders of giants.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <PenTool className="text-amber-500 shrink-0" size={24} />
                     <div>
                        <h4 className="font-bold text-white">Whiteboards Everywhere</h4>
                        <p className="text-sm text-neutral-500">Walk through our office and you'll see equations scrawled on glass walls, napkins, and desks.</p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>

      {/* 4. TEAM VOICES */}
      <div className="py-32 px-6 bg-neutral-900 border-y border-neutral-800">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Voices from the Lab</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
               <div className="bg-black p-8 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-full object-cover border border-neutral-700" alt="Profile" />
                     <div>
                        <div className="font-bold text-white">Dr. Aris K.</div>
                        <div className="text-amber-500 text-xs uppercase font-bold">PhD, Theoretical Physics</div>
                     </div>
                  </div>
                  <p className="text-neutral-400 italic">
                     "I used to model particle collisions at CERN. Now I model liquidity collisions in fragmented markets. The math is surprisingly similar, but the feedback loop is much faster."
                  </p>
               </div>

               <div className="bg-black p-8 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-full object-cover border border-neutral-700" alt="Profile" />
                     <div>
                        <div className="font-bold text-white">Wei L.</div>
                        <div className="text-neutral-500 text-xs uppercase font-bold">PhD, Statistics</div>
                     </div>
                  </div>
                  <p className="text-neutral-400 italic">
                     "The data here is cleaner than anything I saw in academia. The engineering team treats data as a first-class citizen, which lets me focus on the modeling, not the munging."
                  </p>
               </div>

               <div className="bg-black p-8 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop" className="w-14 h-14 rounded-full object-cover border border-neutral-700" alt="Profile" />
                     <div>
                        <div className="font-bold text-white">Priya S.</div>
                        <div className="text-neutral-500 text-xs uppercase font-bold">PhD, Computer Science</div>
                     </div>
                  </div>
                  <p className="text-neutral-400 italic">
                     "I love that we are encouraged to publish. We don't give away our secret sauce, but we contribute to the broader scientific community. It keeps us sharp."
                  </p>
               </div>

            </div>
         </div>
      </div>

      {/* 5. CTA */}
      <div className="py-32 px-6 bg-gradient-to-b from-black to-neutral-900 text-center">
        <div className="max-w-3xl mx-auto">
           <Sigma className="text-amber-500 mx-auto mb-6" size={48} />
           <h2 className="text-5xl font-bold mb-8">Solve the Unsolvable.</h2>
           <p className="text-xl text-neutral-400 mb-12">
             We are looking for researchers who aren't afraid of hard problems.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/careers" className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-full text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
               View Research Roles
             </Link>
           </div>
        </div>
      </div>

    </div>
  );
};

export default QuantitativeResearch;