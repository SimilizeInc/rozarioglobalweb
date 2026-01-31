import React from 'react';
import { Quote } from 'lucide-react';

const InternStories: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      <div className="pt-40 pb-24 px-6 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
         <div className="absolute inset-0 bg-black/90"></div>
         <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Intern Perspectives</h1>
            <p className="text-xl text-neutral-400">
              Hear directly from the students who built production code, modeled new strategies, and experienced life at Rozario Global.
            </p>
         </div>
      </div>

      <div className="py-24 px-6 bg-black">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
               <Quote className="text-amber-500 mb-6" size={40} />
               <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                 "I expected to be working on a side project that would be thrown away. Instead, I was optimizing the core execution engine. My code went live in Week 4. The trust they place in interns is terrifying and exhilarating."
               </p>
               <div>
                  <div className="font-bold text-white">Sarah Chen</div>
                  <div className="text-sm text-neutral-500">Software Engineering Intern (MIT '25)</div>
               </div>
            </div>

            <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
               <Quote className="text-amber-500 mb-6" size={40} />
               <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                 "The mentorship is unmatched. I sat next to a former physics professor who treated me like a peer. We debated statistical approaches to volatility modeling over lunch every day."
               </p>
               <div>
                  <div className="font-bold text-white">James Miller</div>
                  <div className="text-sm text-neutral-500">Quantitative Research Intern (Stanford PhD '26)</div>
               </div>
            </div>

            <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
               <Quote className="text-amber-500 mb-6" size={40} />
               <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                 "Rozario Global isn't just about finance. It's a technology firm. The infrastructure we get to play with is lightyears ahead of anything I saw in my CS classes."
               </p>
               <div>
                  <div className="font-bold text-white">David Kim</div>
                  <div className="text-sm text-neutral-500">Infrastructure Intern (CMU '25)</div>
               </div>
            </div>

             <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
               <Quote className="text-amber-500 mb-6" size={40} />
               <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                 "The summer hackathon was the highlight. We built a sentiment analysis tool using a new transformer model and presented it to the CIO. They actually integrated it into the research pipeline."
               </p>
               <div>
                  <div className="font-bold text-white">Emily Rodriguez</div>
                  <div className="text-sm text-neutral-500">Data Science Intern (Berkeley '25)</div>
               </div>
            </div>

         </div>
      </div>

    </div>
  );
};

export default InternStories;