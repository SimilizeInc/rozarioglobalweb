import React from 'react';
import { 
  Rocket, Brain, Code, Users, Calendar, 
  MessageSquare, Coffee, MapPin, Zap, ArrowRight,
  HelpCircle, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Internships: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-900/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-amber-500/20">
              10 Weeks to Impact
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              Real problems. <br />
              <span className="text-amber-500">Real production code.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-3xl font-light">
              At Rozario Global, interns are not assistants. They are researchers and engineers. You will work on the same challenges as our full-time staff, deploying code that touches the global markets.
            </p>
          </div>
        </div>
      </div>

      {/* 2. THE PHILOSOPHY */}
      <div className="py-24 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Not a simulation.</h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Many firms create "intern projects"—sandbox tasks designed to keep you busy without risking production. 
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              We reject that model. We believe the only way to learn is by doing. Your code will go into our repository. Your models will be tested against live data. You will have ownership from Day 1.
            </p>
            <div className="flex items-center gap-4 text-amber-400 font-semibold">
              <CheckCircle size={20} />
              <span>Full Access to Data</span>
            </div>
            <div className="flex items-center gap-4 text-amber-400 font-semibold mt-2">
              <CheckCircle size={20} />
              <span>Production Deployment Rights</span>
            </div>
          </div>
          <div className="bg-black p-8 rounded-2xl border border-neutral-800">
             <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-amber-900/30 rounded-lg text-amber-400"><Rocket size={24} /></div>
                <div>
                  <h3 className="font-bold text-lg text-white">Impact</h3>
                  <p className="text-neutral-500 text-sm mt-1">Past interns have optimized our execution kernels, built new alternative data pipelines, and published internal whitepapers.</p>
                </div>
             </div>
             <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-lg text-white"><Users size={24} /></div>
                <div>
                  <h3 className="font-bold text-lg text-white">Mentorship</h3>
                  <p className="text-neutral-500 text-sm mt-1">You are paired with a mentor who is not just a supervisor, but a career guide. 1:1 meetings are weekly and rigorous.</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-800 rounded-lg text-neutral-400"><Zap size={24} /></div>
                <div>
                  <h3 className="font-bold text-lg text-white">Education</h3>
                  <p className="text-neutral-500 text-sm mt-1">Attend the "Rozario Global Summer Series"—20+ lectures on market microstructure, C++ design patterns, and portfolio construction.</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 3. INTERNSHIP TRACKS */}
      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Choose Your Track</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Track 1 */}
            <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:border-amber-500/50 transition-all group">
              <Brain className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-4">Quantitative Research</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Use advanced mathematics, statistics, and machine learning to predict market movements. You will test hypotheses and build models on petabytes of data.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500 mb-8">
                <li>• PhD or MS in Math, Physics, CS, or Stats</li>
                <li>• Strong Python/R skills</li>
                <li>• Curiosity about financial markets</li>
              </ul>
              <Link to="/careers" className="text-amber-400 font-bold text-sm uppercase tracking-wide hover:text-white transition-colors">Apply Now &rarr;</Link>
            </div>

            {/* Track 2 */}
            <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:border-white/50 transition-all group">
              <Code className="text-white mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-4">Software Engineering</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Build the distributed systems, data pipelines, and execution platforms that power our trading. Focus on low-latency, high-throughput architecture.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500 mb-8">
                <li>• BS, MS, or PhD in CS or Engineering</li>
                <li>• C++, Java, Rust, or Python</li>
                <li>• Interest in distributed systems</li>
              </ul>
               <Link to="/careers" className="text-white font-bold text-sm uppercase tracking-wide hover:text-neutral-300 transition-colors">Apply Now &rarr;</Link>
            </div>

            {/* Track 3 */}
            <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:border-neutral-500/50 transition-all group">
              <Zap className="text-neutral-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-4">Reliability & Infra</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Ensure our systems are robust, scalable, and secure. Work on cloud infrastructure, automated deployment, and system observability.
              </p>
              <ul className="space-y-2 text-sm text-neutral-500 mb-8">
                <li>• BS or MS in CS</li>
                <li>• Linux/Unix proficiency</li>
                <li>• Python, Go, or Shell scripting</li>
              </ul>
               <Link to="/careers" className="text-neutral-400 font-bold text-sm uppercase tracking-wide hover:text-white transition-colors">Apply Now &rarr;</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4. LIFE & PERKS */}
      <div className="py-24 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold mb-6">Life this Summer</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                We work hard, but we also invest heavily in building a community. The connections you make this summer will last your entire career.
              </p>
              <div className="p-6 bg-black rounded-xl border border-neutral-800">
                <h4 className="font-bold text-white mb-2">Housing Provided</h4>
                <p className="text-sm text-neutral-500">
                  We provide fully furnished luxury housing near our offices in NYC, London, and HK, so you can focus on your work and exploring the city.
                </p>
              </div>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { icon: Coffee, title: "Social Events", desc: "Weekly social outings, from Broadway shows to private museum tours and cooking classes." },
                 { icon: MessageSquare, title: "Speaker Series", desc: "Fireside chats with our founders, CIOs, and external academic luminaries." },
                 { icon: MapPin, title: "Hackathons", desc: "A company-wide 24-hour hackathon where interns compete alongside principals." },
                 { icon: Users, title: "Networking", desc: "Structured mixers with different desks to help you understand the full business." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-4">
                   <div className="mt-1 text-amber-500"><item.icon size={20} /></div>
                   <div>
                     <h4 className="font-bold text-white mb-1">{item.title}</h4>
                     <p className="text-sm text-neutral-400">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. TIMELINE */}
      <div className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Application Timeline</h2>
          <div className="border-l-2 border-neutral-800 ml-4 md:ml-0 pl-8 md:pl-0 space-y-12">
            {[
              { date: "August - September", title: "Applications Open", desc: "We review resumes on a rolling basis. Early application is highly recommended." },
              { date: "September - November", title: "Assessments & Interviews", desc: "You will receive a HackerRank or math assessment. Successful candidates proceed to technical phone screens." },
              { date: "October - December", title: "Final Rounds", desc: "A virtual 'Super Day' comprising 3-4 back-to-back technical interviews with our team." },
              { date: "November - January", title: "Offers Extended", desc: "We aim to make decisions quickly after final rounds." },
              { date: "June", title: "Program Begins", desc: "Orientation week in New York City." }
            ].map((t, i) => (
              <div key={i} className="relative md:grid md:grid-cols-5 gap-8 group">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-neutral-800 rounded-full border-4 border-black group-hover:bg-amber-500 transition-colors md:hidden"></div>
                <div className="md:col-span-1 text-amber-500 font-bold text-sm uppercase tracking-wide md:text-right pt-1">{t.date}</div>
                <div className="md:col-span-4 pb-8 md:pb-0 md:border-l-2 md:border-neutral-800 md:pl-8 relative">
                   <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-neutral-800 rounded-full border-4 border-black group-hover:bg-amber-500 transition-colors hidden md:block"></div>
                   <h3 className="text-xl font-bold text-white mb-2">{t.title}</h3>
                   <p className="text-neutral-400">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. FAQ */}
      <div className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
           <div className="space-y-6">
             {[
               { q: "Do I need a finance background?", a: "No. We look for strong fundamentals in math, science, and engineering. We will teach you the finance." },
               { q: "Can I apply to multiple roles?", a: "Yes, but we recommend applying to the role that best aligns with your primary skillset. We will consider you for other teams if appropriate." },
               { q: "Is the internship paid?", a: "Yes. We offer highly competitive weekly compensation, plus overtime, housing, and travel reimbursement." },
               { q: "Do you hire interns for full-time roles?", a: "Yes. The primary goal of our internship program is to convert successful interns into full-time employees." }
             ].map((faq, i) => (
               <div key={i} className="bg-black p-6 rounded-lg border border-neutral-800">
                 <h4 className="font-bold text-white mb-2 flex items-start gap-3">
                   <HelpCircle className="text-neutral-500 min-w-[20px]" size={20}/>
                   {faq.q}
                 </h4>
                 <p className="text-neutral-400 ml-8 text-sm leading-relaxed">{faq.a}</p>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* 7. CTA */}
      <div className="py-24 px-6 bg-gradient-to-r from-neutral-900 to-black text-center">
        <div className="max-w-2xl mx-auto">
          <Calendar className="mx-auto text-amber-500 mb-6" size={48} />
          <h2 className="text-4xl font-bold mb-6">Ready to start?</h2>
          <p className="text-xl text-neutral-400 mb-10">
            Applications are reviewed on a rolling basis. The sooner you apply, the better.
          </p>
          <Link to="/careers" className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors text-lg">
            View Open Internships
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Internships;