import React, { useState } from 'react';
import { ShieldCheck, Users, Zap, Scale, Eye, BookOpen, Play, ArrowRight, Heart, Award } from 'lucide-react';

const VALUES_DATA = [
  {
    id: 'integrity',
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    shortDesc: "We do what is right, not what is easy.",
    fullDesc: "Integrity is the bedrock of our firm. It is binary: you have it, or you don't. We adhere to the strictest ethical standards, protecting our investors' capital and our reputation with equal vigor. We believe that a single breach of trust undoes a decade of performance.",
    quote: "Character is revealed in the choices we make when the market turns against us.",
    author: "Calvin D’Rozario, Founder & CIO",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop" // Professional handshake/meeting
  },
  {
    id: 'truth',
    icon: Eye,
    title: "Radical Truth",
    shortDesc: "Accuracy over ego.",
    fullDesc: "In a meeting at Rozario Global, titles are left at the door. The best idea wins, regardless of tenure. We confront hard facts immediately. We dissect our failures with more enthusiasm than our successes, because that is where the learning happens.",
    quote: "The market is the ultimate truth-teller. We must be humble enough to listen.",
    author: "James Chen, Intern",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop" // Diverse team at whiteboard
  },
  {
    id: 'excellence',
    icon: Zap,
    title: "Relentless Excellence",
    shortDesc: "Good enough is failure.",
    fullDesc: "We strive for perfection in our code, our research, and our operations. We operate in a competitive zero-sum environment where the difference between winning and losing is measured in microseconds and basis points.",
    quote: "We don't compete with the market. We compete with our own potential.",
    author: "Sarah Jenkins, Intern",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" // Intense coding/collaboration
  },
  {
    id: 'collaboration',
    icon: Users,
    title: "Collective Intelligence",
    shortDesc: "One team, one P&L.",
    fullDesc: "We share knowledge, data, and code freely. Unlike siloed multi-manager platforms, we believe that the collective intelligence of the firm is greater than any individual genius. When one pod succeeds, we all scale.",
    quote: "The lone wolf dies, but the pack survives.",
    author: "David Okafor, Head of Data",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop" // Happy team meeting
  },
  {
    id: 'growth',
    icon: BookOpen,
    title: "Continuous Evolution",
    shortDesc: "Learn or die.",
    fullDesc: "The market is an adaptive organism. Strategies that worked yesterday will fail tomorrow. We are students for life, constantly acquiring new skills, exploring new datasets, and challenging our own assumptions.",
    quote: "Stagnation is the only real risk.",
    author: "Rozario Global Manifesto",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=1600&auto=format&fit=crop" // Library/Learning setting
  }
];

const Values: React.FC = () => {
  const [activeValue, setActiveValue] = useState(VALUES_DATA[0]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. HERO SECTION (Video Style) */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Video Placeholder Background */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
             alt="Office Culture" 
             className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-bold tracking-wider uppercase mb-8 border border-amber-500/30 backdrop-blur-md">
             <Award size={16} /> Our DNA
           </div>
           <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-tight">
             Principles that <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">
               Define Us.
             </span>
           </h1>
           <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed font-light">
             We are built on a foundation of intellectual honesty and relentless ambition. Our values are not just words on a wall; they are the algorithm by which we operate.
           </p>
        </div>
      </div>

      {/* 2. INTERACTIVE VALUES ENGINE */}
      <div className="py-24 px-6 bg-black border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Left: Navigation */}
              <div className="w-full lg:w-1/3 space-y-2">
                 <h2 className="text-3xl font-bold mb-8 text-white">The Standard</h2>
                 {VALUES_DATA.map((val) => (
                   <button
                     key={val.id}
                     onClick={() => setActiveValue(val)}
                     className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                       activeValue.id === val.id 
                       ? 'bg-neutral-900 border-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.1)]' 
                       : 'bg-transparent border-transparent text-neutral-500 hover:bg-neutral-900 hover:text-neutral-300'
                     }`}
                   >
                      <div className="flex items-center gap-4">
                        <val.icon size={24} className={activeValue.id === val.id ? 'text-amber-500' : 'text-neutral-600 group-hover:text-neutral-400'} />
                        <span className="font-bold text-lg">{val.title}</span>
                      </div>
                      {activeValue.id === val.id && <ArrowRight size={20} className="text-amber-500 animate-pulse" />}
                   </button>
                 ))}
              </div>

              {/* Right: Dynamic Content */}
              <div className="w-full lg:w-2/3">
                 <div className="relative h-[600px] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                       <img 
                         src={activeValue.image} 
                         alt={activeValue.title} 
                         key={activeValue.image} // Force re-render for animation
                         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full animate-fade-in-up">
                       <div className="w-16 h-1 bg-amber-500 mb-6"></div>
                       <h3 className="text-4xl font-bold text-white mb-4">{activeValue.title}</h3>
                       <p className="text-2xl text-neutral-200 font-light mb-8 leading-relaxed">
                         {activeValue.fullDesc}
                       </p>
                       <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border-l-4 border-amber-500">
                          <p className="text-lg italic text-white mb-4">"{activeValue.quote}"</p>
                          <p className="text-sm font-bold text-amber-500 uppercase tracking-widest">— {activeValue.author}</p>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>

      {/* 3. VIDEO / MANIFESTO SECTION */}
      <div className="py-32 px-6 bg-neutral-900">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Inside Rozario Global</h2>
            
            <div className="relative max-w-5xl mx-auto aspect-video bg-black rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group cursor-pointer">
               {/* Placeholder for Video Thumbnail */}
               <img 
                 src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                 alt="Team Collaboration" 
                 className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
               />
               
               {/* Play Button Overlay */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-amber-500/90 rounded-full flex items-center justify-center pl-2 text-black transition-transform duration-300 group-hover:scale-110 shadow-[0_0_40px_rgba(245,158,11,0.5)]">
                     <Play size={40} fill="currentColor" />
                  </div>
               </div>

               <div className="absolute bottom-8 left-8 text-left">
                  <h3 className="text-2xl font-bold text-white">The Pursuit of Alpha</h3>
                  <p className="text-neutral-300">Watch our manifesto film (2:45)</p>
               </div>
            </div>
         </div>
      </div>

      {/* 4. COMMUNITY & GIVING */}
      <div className="py-24 px-6 bg-black border-t border-neutral-800">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                 <Heart size={14} className="text-red-500" fill="currentColor" /> Community
               </div>
               <h2 className="text-4xl font-bold mb-6">Rozario Gives Back</h2>
               <p className="text-lg text-neutral-400 mb-6 leading-relaxed">
                  We believe that success creates an obligation to serve. Through the Rozario Foundation, we deploy our resources—capital, data, and talent—to solve challenges in education and climate resilience.
               </p>
               <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                     <div className="text-3xl font-bold text-white mb-1">100+</div>
                     <div className="text-sm text-neutral-500 uppercase tracking-wide">Students Mentored</div>
                  </div>
                  <div>
                     <div className="text-3xl font-bold text-white mb-1">5,000</div>
                     <div className="text-sm text-neutral-500 uppercase tracking-wide">Volunteer Hours</div>
                  </div>
               </div>
               <button className="text-amber-500 font-bold uppercase tracking-wide flex items-center gap-2 hover:gap-4 transition-all">
                  Read our Impact Report <ArrowRight size={16} />
               </button>
            </div>
            
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop" className="rounded-xl object-cover h-64 w-full" alt="Volunteering 1" />
               <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop" className="rounded-xl object-cover h-64 w-full mt-8" alt="Volunteering 2" />
            </div>
         </div>
      </div>

      {/* 5. COMPLIANCE & ETHICS (THE FOOTER) */}
      <div className="py-24 px-6 bg-neutral-900">
         <div className="max-w-4xl mx-auto text-center">
            <Scale className="mx-auto text-neutral-500 mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-6">A Culture of Compliance</h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              We operate in highly regulated markets. We view compliance not as a constraint, but as a competitive advantage that allows us to operate sustainably for decades. Every employee certifies their adherence to our Code of Ethics annually.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <span className="px-4 py-2 bg-black rounded-full text-neutral-400 text-sm border border-neutral-800">Zero Tolerance Policy</span>
               <span className="px-4 py-2 bg-black rounded-full text-neutral-400 text-sm border border-neutral-800">Global AML Standards</span>
               <span className="px-4 py-2 bg-black rounded-full text-neutral-400 text-sm border border-neutral-800">Strict Insider Trading Controls</span>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Values;