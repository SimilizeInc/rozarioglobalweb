import React, { useState } from 'react';
import { 
  Layers, Zap, Search, Database, Shield, 
  TrendingUp, Microscope, Target, Cpu, 
  GitMerge, CheckCircle, ArrowRight, BarChart2,
  Lock, RefreshCw
} from 'lucide-react';
import { 
  ResponsiveContainer, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Area, AreaChart
} from 'recharts';

// --- DATA: LIFECYCLE ---
const LIFECYCLE_STEPS = [
  { 
    id: 1, 
    title: 'Observation', 
    icon: Search,
    desc: 'The spark of an idea.',
    details: `It begins with curiosity. A researcher notices a pattern in satellite data, a discrepancy in options pricing, or a latency arb opportunity between exchanges. We observe the market not as a casino, but as a complex physical system with governed rules waiting to be discovered.`,
    tech: "Tools: Python, Jupyter, Pandas, SQL"
  },
  { 
    id: 2, 
    title: 'Hypothesis', 
    icon: Microscope,
    desc: 'Formulating the theory.',
    details: `We formalize the observation into a mathematical hypothesis. "If X happens in the supply chain, Y should happen to the stock price within Z milliseconds." This hypothesis must be falsifiable, statistically rigorous, and economically intuitive.`,
    tech: "Tools: LaTeX, Stochastic Calculus, Game Theory"
  },
  { 
    id: 3, 
    title: 'Simulation', 
    icon: Database,
    desc: 'The "Gauntlet".',
    details: `The model enters our simulation grid. We replay history using petabytes of tick-level data. We test for overfitting, look-ahead bias, and regime robustness. 95% of models fail here. That is a feature, not a bug. Only the strongest signals survive.`,
    tech: "Tools: C++, Distributed Grid, Historical Replay Engine"
  },
  { 
    id: 4, 
    title: 'Optimization', 
    icon: Layers,
    desc: 'Sizing the bet.',
    details: `A good signal is useless if it exposes us to unwanted risk. Our mean-variance optimizer blends the new signal with thousands of existing strategies, maximizing the Sharpe ratio while neutralizing factor exposures (Beta, Sector, Momentum).`,
    tech: "Tools: Convex Optimization, Python, Risk Models"
  },
  { 
    id: 5, 
    title: 'Execution', 
    icon: Zap,
    desc: 'The final mile.',
    details: `The trade is handed to our execution algorithms. Using FPGA-accelerated hardware, we slice orders to minimize market impact and hide our footprint from predatory high-frequency traders. We fight for every basis point of spread.`,
    tech: "Tools: FPGA, VHDL, Microwave Networks"
  }
];

// --- DATA: RISK RADAR ---
const RISK_DATA = [
  { subject: 'Market Beta', Exposure: 10, Limit: 100, fullMark: 100 },
  { subject: 'Sector Drift', Exposure: 25, Limit: 100, fullMark: 100 },
  { subject: 'Momentum', Exposure: 15, Limit: 100, fullMark: 100 },
  { subject: 'Volatility', Exposure: 30, Limit: 100, fullMark: 100 },
  { subject: 'Liquidity', Exposure: 20, Limit: 100, fullMark: 100 },
  { subject: 'Value', Exposure: 10, Limit: 100, fullMark: 100 },
];

// --- DATA: ALPHA DECAY ---
const ALPHA_DATA = [
  { month: 'Jan', Static: 100, Adaptive: 100 },
  { month: 'Feb', Static: 95, Adaptive: 102 },
  { month: 'Mar', Static: 88, Adaptive: 105 },
  { month: 'Apr', Static: 82, Adaptive: 108 },
  { month: 'May', Static: 75, Adaptive: 112 },
  { month: 'Jun', Static: 65, Adaptive: 115 },
  { month: 'Jul', Static: 58, Adaptive: 119 },
  { month: 'Aug', Static: 50, Adaptive: 124 },
  { month: 'Sep', Static: 42, Adaptive: 128 },
  { month: 'Oct', Static: 35, Adaptive: 135 },
];

const Approach: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-40 pb-32 px-6 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-fixed bg-center">
         <div className="absolute inset-0 bg-black/90"></div>
         <div className="max-w-7xl mx-auto relative z-10 text-center">
            <div className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-bold tracking-wider uppercase mb-8 border border-amber-500/20">
              Our Methodology
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
               The Scientific <span className="text-amber-500">Method.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light">
               We do not guess. We hypothesize, test, and validate. Our investment process is a rigorous, repeatable machine designed to extract signal from noise.
            </p>
         </div>
      </div>

      {/* 2. INTERACTIVE LIFECYCLE */}
      <div className="py-24 px-6 bg-neutral-900 border-y border-neutral-800">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Lifecycle of a Trade</h2>
               <p className="text-neutral-400">Click through the stages of our quantitative process.</p>
            </div>

            {/* Stepper Navigation */}
            <div className="grid grid-cols-5 gap-2 md:gap-4 mb-12">
               {LIFECYCLE_STEPS.map((step, index) => (
                  <button 
                     key={step.id}
                     onClick={() => setActiveStep(index)}
                     className={`flex flex-col items-center p-4 rounded-xl border transition-all duration-300 ${
                        activeStep === index 
                        ? 'bg-amber-600 border-amber-500 text-white shadow-lg scale-105' 
                        : 'bg-black border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:bg-neutral-800'
                     }`}
                  >
                     <step.icon size={24} className={`mb-2 ${activeStep === index ? 'text-white' : 'text-neutral-500'}`} />
                     <div className="text-xs md:text-sm font-bold uppercase tracking-wider hidden md:block">{step.title}</div>
                  </button>
               ))}
            </div>

            {/* Content Area */}
            <div className="bg-black border border-neutral-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center min-h-[400px]">
               <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
                  <div className="flex items-center gap-4">
                     <div className="text-amber-500 font-mono text-xl">0{activeStep + 1}</div>
                     <h3 className="text-3xl md:text-4xl font-bold text-white">{LIFECYCLE_STEPS[activeStep].title}</h3>
                  </div>
                  <h4 className="text-xl text-amber-500 font-medium">{LIFECYCLE_STEPS[activeStep].desc}</h4>
                  <p className="text-neutral-300 text-lg leading-relaxed">
                     {LIFECYCLE_STEPS[activeStep].details}
                  </p>
                  <div className="pt-6 border-t border-neutral-800">
                     <div className="text-sm font-mono text-neutral-500 flex items-center gap-2">
                        <Cpu size={14} /> {LIFECYCLE_STEPS[activeStep].tech}
                     </div>
                  </div>
               </div>
               
               {/* Dynamic Visual per Step */}
               <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-neutral-900/50 rounded-xl border border-neutral-800 p-8">
                  {activeStep === 0 && <Search size={120} className="text-amber-900/50 animate-pulse" />}
                  {activeStep === 1 && <Microscope size={120} className="text-amber-900/50 animate-bounce-slow" />}
                  {activeStep === 2 && <Database size={120} className="text-amber-900/50 animate-pulse" />}
                  {activeStep === 3 && <Target size={120} className="text-amber-900/50 animate-spin-slow" />}
                  {activeStep === 4 && <Zap size={120} className="text-amber-900/50 animate-pulse" />}
               </div>
            </div>
         </div>
      </div>

      {/* 3. RISK MANAGEMENT RADAR */}
      <div className="py-24 px-6 bg-black">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-900/20 text-amber-500 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <Shield size={14} /> Risk Framework
               </div>
               <h2 className="text-4xl font-bold mb-6">Risk is the Constraint.</h2>
               <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                  We are not gamblers. We are risk managers. Our goal is to isolate <strong>Alpha</strong> (skill) by systematically removing <strong>Beta</strong> (market risk).
               </p>
               <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  Our portfolio construction engine treats risk limits as hard constraints. We aim to be market-neutral, sector-neutral, and factor-neutral, ensuring that our returns are driven by our unique insights, not by the rising tide.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-neutral-900 rounded border border-neutral-800">
                     <div className="text-2xl font-bold text-white mb-1">0.02</div>
                     <div className="text-xs text-neutral-500 uppercase">Target Beta</div>
                  </div>
                  <div className="p-4 bg-neutral-900 rounded border border-neutral-800">
                     <div className="text-2xl font-bold text-white mb-1">100%</div>
                     <div className="text-xs text-neutral-500 uppercase">Systematic Hedges</div>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-1/2 h-[400px] bg-neutral-900/50 rounded-2xl border border-neutral-800 p-4 relative">
               <h3 className="absolute top-6 left-6 text-sm font-bold text-neutral-500 uppercase tracking-widest z-10">Live Factor Exposure</h3>
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={RISK_DATA}>
                     <PolarGrid stroke="#333" />
                     <PolarAngleAxis dataKey="subject" tick={{ fill: '#999', fontSize: 12 }} />
                     <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                     <Radar
                        name="Portfolio Exposure"
                        dataKey="Exposure"
                        stroke="#f59e0b"
                        strokeWidth={2}
                        fill="#f59e0b"
                        fillOpacity={0.4}
                     />
                     <Tooltip 
                        contentStyle={{ backgroundColor: '#000', borderColor: '#333', color: '#fff' }}
                        itemStyle={{ color: '#f59e0b' }}
                     />
                  </RadarChart>
               </ResponsiveContainer>
               <div className="absolute bottom-6 right-6 text-xs text-neutral-600 italic">
                  * Visualization of neutral positioning
               </div>
            </div>
         </div>
      </div>

      {/* 4. ALPHA DECAY CHART */}
      <div className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <RefreshCw className="mx-auto text-amber-500 mb-6" size={48} />
               <h2 className="text-4xl font-bold mb-6">The Alpha Decay Problem</h2>
               <p className="text-neutral-400 max-w-2xl mx-auto">
                  Markets are adaptive. A profitable strategy today will be arbitraged away tomorrow. Innovation isn't a luxury; it's a survival requirement.
               </p>
            </div>

            <div className="h-[400px] w-full bg-black rounded-xl border border-neutral-800 p-8 shadow-2xl">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={ALPHA_DATA}>
                     <defs>
                        <linearGradient id="colorAdaptive" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorStatic" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#525252" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#525252" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                     <XAxis dataKey="month" stroke="#666" tick={{fill: '#666'}} />
                     <YAxis stroke="#666" tick={{fill: '#666'}} />
                     <Tooltip 
                        contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                     />
                     <Legend verticalAlign="top" height={36}/>
                     <Area 
                        type="monotone" 
                        dataKey="Adaptive" 
                        name="Rozario Adaptive Model" 
                        stroke="#f59e0b" 
                        fillOpacity={1} 
                        fill="url(#colorAdaptive)" 
                        strokeWidth={3}
                     />
                     <Area 
                        type="monotone" 
                        dataKey="Static" 
                        name="Static Strategy" 
                        stroke="#525252" 
                        fillOpacity={1} 
                        fill="url(#colorStatic)" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                     />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>

      {/* 5. DATA SOURCES GRID */}
      <div className="py-24 px-6 bg-black">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">The Fuel: Alternative Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                  { title: "Geospatial", desc: "Satellite imagery of parking lots, crop fields, and oil tanks.", ex: "Predicts Retail Revenue" },
                  { title: "Transactional", desc: "Anonymized credit card swipes and e-receipts.", ex: "Predicts Consumer Demand" },
                  { title: "Textual", desc: "NLP analysis of earnings calls, news, and filings.", ex: "Predicts Sentiment Shifts" },
                  { title: "Supply Chain", desc: "Bill of lading and shipping container tracking.", ex: "Predicts Inventory Shocks" },
                  { title: "App Traffic", desc: "Download velocity and active user metrics.", ex: "Predicts Tech Growth" },
                  { title: "Weather", desc: "Hyper-local climate data and storm tracking.", ex: "Predicts Commodity Prices" },
               ].map((item, i) => (
                  <div key={i} className="group p-8 bg-neutral-900 border border-neutral-800 rounded-xl hover:bg-neutral-800 transition-colors cursor-default">
                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{item.title}</h3>
                     <p className="text-neutral-400 text-sm mb-4 min-h-[40px]">{item.desc}</p>
                     <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-wide border-t border-neutral-800 pt-4">
                        <ArrowRight size={12} className="text-amber-500" /> {item.ex}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* 6. COLLABORATION / CULTURE */}
      <div className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
               <div className="relative w-48 h-48">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
                  <GitMerge size={120} className="relative z-10 text-white" />
               </div>
            </div>
            <div className="w-full md:w-2/3">
               <h2 className="text-3xl font-bold mb-6">The Pod Model</h2>
               <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                  We organize our teams into autonomous "Pods." A typical pod functions like a mini-startup, consisting of:
               </p>
               <ul className="space-y-4">
                  <li className="flex items-center gap-4 p-4 bg-black rounded-lg border border-neutral-800">
                     <div className="bg-amber-500 w-2 h-2 rounded-full"></div>
                     <span className="text-white font-bold">1 Portfolio Manager</span>
                     <span className="text-neutral-500 text-sm ml-auto">Strategy Lead</span>
                  </li>
                  <li className="flex items-center gap-4 p-4 bg-black rounded-lg border border-neutral-800">
                     <div className="bg-blue-500 w-2 h-2 rounded-full"></div>
                     <span className="text-white font-bold">2 Quantitative Researchers</span>
                     <span className="text-neutral-500 text-sm ml-auto">Modeling</span>
                  </li>
                  <li className="flex items-center gap-4 p-4 bg-black rounded-lg border border-neutral-800">
                     <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                     <span className="text-white font-bold">2 Data Engineers</span>
                     <span className="text-neutral-500 text-sm ml-auto">Infrastructure</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Approach;