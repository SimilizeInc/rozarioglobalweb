import React, { useState } from 'react';
import { 
  Globe, Database, Cpu, Users, TrendingUp, 
  MapPin, ChevronRight,
  Code, Binary, BarChart3, ChevronDown
} from 'lucide-react';

const FOUNDER = {
    name: "Calvin D’Rozario",
    role: "Founder & CIO",
    // This short bio is shown when collapsed
    shortBio: "Calvin D’Rozario serves as the Founder and Chief Investment Officer of Rozario Global Management, LLC. He is responsible for the design, development, and execution of the Fund’s quantitative trading strategies, including the oversight of the proprietary algorithmic infrastructure and risk management protocols.",
    // This full bio is shown when expanded. Note the \n\n for paragraphs.
    fullBio: `Calvin D’Rozario serves as the Founder and Chief Investment Officer of Rozario Global Management, LLC. He is responsible for the design, development, and execution of the Fund’s quantitative trading strategies, including the oversight of the proprietary algorithmic infrastructure and risk management protocols.

Mr. D’Rozario brings a unique dual-competency in institutional software architecture and financial modeling. Prior to founding Rozario Global Management, he served as a Quantitative Developer at Loomis, Sayles & Company, where he specialized in the implementation of data-driven investment tools. Subsequently, as a Senior Software Engineer at Fidelity Investments, he engineered large-scale financial systems, gaining deep expertise in the structural dynamics of modern electronic markets and high-availability architecture.

From 2020 to 2022, Mr. D’Rozario served as the Principal of Caltech Capital LLC, a long / short trading vehicle where he successfully designed and deployed complex trading architectures capable of processing real-time market data to identify pricing inefficiencies across equity and derivative markets.

Mr. D’Rozario holds a Bachelor of Science in Software Engineering with a minor in Finance from the Rochester Institute of Technology (RIT). His technical proficiency extends to the development of "Risk-First" systems, including the proprietary "Kill Switch" and "Gap Protection" protocols utilized by the Fund to mitigate tail risk. Unlike traditional discretionary managers, Mr. D’Rozario approaches investment management through an engineering lens, prioritizing systematic repeatability and data-driven decision making over subjective forecasting.`
};

const MILESTONES = [
  { year: "2020", title: "Founded Caltech Capital", desc: "Caltech Capital opens the first office in Midtown with a principal Portfolio Manager." },
  { year: "2025", title: "Rozario Global Expansion", desc: "Opened London and Hong Kong offices to trade 24/7 across Asian and European markets." },
  { year: "2025", title: "Licensed 'Similize IP’", desc: "Launched 100+ proprietary simulation models for data ingestion pipeline, and generating alpha. This strategic acquisition reinforced our quantitative edge." },
  { year: "2026", title: "AUM Milestone", desc: "Surpassed significant assets under management benchmarks, cementing status as a global quant firm." }
];

const About: React.FC = () => {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-40 pb-32 px-6 overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
             <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
               Decoding the <br />
               <span className="text-amber-500">Global Economy.</span>
             </h1>
             <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light border-l-4 border-amber-500 pl-6">
               Rozario Global is not just an investment firm. We are a technology company that happens to trade. We apply the scientific method to financial markets to discover value where others see noise.
             </p>
          </div>
        </div>
      </div>

      {/* 2. BY THE NUMBERS */}
      <div className="py-16 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Founded", value: "2020" },
            { label: "Simulations", value: "100+" },
            { label: "Offices", value: "3" },
            { label: "Daily Predictions", value: "1K+" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-amber-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LEADERSHIP (Updated) */}
      <div className="py-24 px-6 bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Engineering discipline meets financial expertise.
            </p>
          </div>
          
          {/* Founder Card */}
          <div className="max-w-5xl mx-auto bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl hover:border-amber-500/30 transition-all duration-500">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{FOUNDER.name}</h3>
                <div className="text-amber-500 text-lg font-bold uppercase tracking-widest mb-8">{FOUNDER.role}</div>
                
                <div className={`text-neutral-300 text-lg leading-relaxed space-y-4 transition-all duration-500 ease-in-out`}>
                  {isBioExpanded ? (
                    FOUNDER.fullBio.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4">{paragraph}</p>
                    ))
                  ) : (
                    <p>{FOUNDER.shortBio}</p>
                  )}
                </div>

                <button 
                  onClick={() => setIsBioExpanded(!isBioExpanded)}
                  className="mt-8 text-amber-400 font-bold uppercase tracking-wide flex items-center gap-2 hover:text-amber-300 transition-colors group"
                >
                  {isBioExpanded ? "Show Less" : "Read Full Bio"} 
                  {isBioExpanded ? (
                    <ChevronDown className="rotate-180 transition-transform duration-300" /> 
                  ) : (
                    <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. QUANT TRADING EXPLAINED */}
      <div className="py-24 px-6 bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Inside the Glass Box</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              How does a quantitative hedge fund actually work? It is a continuous loop of data ingestion, hypothesis testing, and automated execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-900 rounded-xl border border-neutral-800 relative group hover:border-amber-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Database className="text-amber-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3">1. Ingest Everything</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We don't just look at stock prices. We ingest weather patterns, shipping manifests, credit card transaction data, and satellite imagery. If it can be digitized, we analyze it.
              </p>
            </div>

            <div className="p-8 bg-neutral-900 rounded-xl border border-neutral-800 relative group hover:border-white/50 transition-colors">
               <div className="absolute top-0 left-0 w-full h-1 bg-white rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Binary className="text-white mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3">2. Simulate the World</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We use thousands of servers to "replay" history. We test our strategies against decades of market data to ensure they are robust enough to withstand market shocks.
              </p>
            </div>

            <div className="p-8 bg-neutral-900 rounded-xl border border-neutral-800 relative group hover:border-neutral-500/50 transition-colors">
               <div className="absolute top-0 left-0 w-full h-1 bg-neutral-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Code className="text-neutral-500 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3">3. Execute in Milliseconds</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Once a signal is found, speed is everything. Our FPGA-powered execution systems can send orders to exchanges in the time it takes light to travel a few meters.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. HISTORY / TIMELINE */}
      <div className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Evolution</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
            {MILESTONES.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                
                {/* Icon Marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-neutral-800 group-hover:bg-amber-500 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-xl">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/30 transition-all shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-amber-400 text-xl">{item.year}</span>
                    <TrendingUp size={16} className="text-neutral-600" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. GLOBAL PRESENCE */}
      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Global Footprint</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {[
              { city: "New York", desc: "Global HQ & Trading" },
              { city: "London", desc: "European Markets" },
              { city: "Hong Kong", desc: "Asia Pacific Markets" }
            ].map((loc, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-800 group-hover:border-amber-500 group-hover:bg-amber-900/10 transition-all mb-4">
                  <MapPin className="text-neutral-500 group-hover:text-amber-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white">{loc.city}</h3>
                <p className="text-neutral-500 text-sm">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;