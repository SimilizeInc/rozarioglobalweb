import React, { useEffect, useState } from 'react';
import { ArrowRight, BarChart2, Cpu, Globe } from 'lucide-react';
import { generateVisionStatement } from '../services/geminiService';
import DataBackground from '../components/DataBackground';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [vision, setVision] = useState<string>("Finding value in the world's noise.");

  useEffect(() => {
    generateVisionStatement().then(setVision);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <DataBackground />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight animate-fade-in-up">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">
                Data
              </span> meets Discipline.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-light mb-12 max-w-3xl mx-auto">
              {vision}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/approach" className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-full transition-all flex items-center justify-center gap-2 group">
                Our Approach <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
              <Link to="/careers" className="px-8 py-4 border border-neutral-600 hover:bg-neutral-800 text-white font-semibold rounded-full transition-all">
                Join Us
              </Link>
            </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-black relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <Link to="/technology" className="p-8 border border-neutral-800 bg-neutral-900/50 hover:border-amber-500/50 transition-colors group block">
              <Cpu className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-4">Technology First</h3>
              <p className="text-neutral-400 leading-relaxed">
                We build our own distributed systems to process petabytes of data daily. Our platform is our edge.
              </p>
              <div className="mt-4 text-amber-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Explore our Stack <ArrowRight size={14} />
              </div>
            </Link>

            <Link to="/approach" className="p-8 border border-neutral-800 bg-neutral-900/50 hover:border-white/50 transition-colors group block">
              <BarChart2 className="text-white mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-4">Scientific Rigor</h3>
              <p className="text-neutral-400 leading-relaxed">
                We approach the markets like a physics problem. Hypothesis, testing, and peer review drive our strategies.
              </p>
            </Link>

            <Link to="/about" className="p-8 border border-neutral-800 bg-neutral-900/50 hover:border-neutral-500/50 transition-colors group block">
              <Globe className="text-neutral-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-4">Global Reach</h3>
              <p className="text-neutral-400 leading-relaxed">
                Opportunities don't sleep. Our algorithms trade across asset classes and exchanges around the world, 24/7.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* Quote/Divider */}
      <section className="py-32 bg-neutral-900 flex items-center justify-center border-y border-neutral-800">
        <div className="max-w-4xl px-6 text-center">
          <p className="text-3xl md:text-4xl font-serif italic text-neutral-300 leading-relaxed">
            "The future of finance belongs to those who can extract signal from the noise."
          </p>
          <p className="mt-8 text-amber-500 font-bold tracking-widest uppercase text-sm">
             — Rozario Global Research Team
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;