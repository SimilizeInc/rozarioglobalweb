import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, Search, MapPin, Briefcase, Filter, X, 
  Zap, GraduationCap, Globe, Play, UserCheck, 
  Users, Lightbulb, BookOpen, Heart, Coffee, ShieldCheck, 
  Smile, Clock, Anchor
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_JOBS } from '../data/jobs';

const LOCATIONS = ['All Locations', 'New York', 'London', 'Hong Kong', 'Remote'];
const DEPARTMENTS = ['All Departments', 'Engineering', 'Research', 'Data Science', 'Trading', 'People', 'Legal', 'Operations', 'Early Careers'];

const Careers: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedLoc, setSelectedLoc] = useState('All Locations');
  const [selectedDept, setSelectedDept] = useState('All Departments');

  const filteredJobs = useMemo(() => {
    // Jobs listings disabled per request. Returning empty array.
    return [];
    /*
    return ALL_JOBS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || 
                            job.dept.toLowerCase().includes(search.toLowerCase());
      const matchesLoc = selectedLoc === 'All Locations' || job.loc === selectedLoc;
      const matchesDept = selectedDept === 'All Departments' || job.dept === selectedDept;
      return matchesSearch && matchesLoc && matchesDept;
    });
    */
  }, [search, selectedLoc, selectedDept]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-48 pb-32 px-6 bg-gradient-to-b from-neutral-900 to-black border-b border-neutral-900">
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              Join a community of <br />
              <span className="text-amber-500">intellectual pioneers.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-3xl mx-auto font-light">
              We are academics, inventors, and problem solvers using the scientific method to advance our understanding of the global economy.
            </p>
        </div>
      </div>

      {/* 2. INTERNSHIPS & CULTURE SPLIT */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Link to="/internships" className="bg-neutral-900 p-16 md:p-24 border-r border-b border-neutral-800 flex flex-col justify-center hover:bg-neutral-900/80 transition-colors group cursor-pointer block">
          <GraduationCap className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={48} />
          <h2 className="text-3xl font-bold mb-6">Internships</h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            Rozario Global interns don't fetch coffee; they architect the future. Coming from diverse backgrounds, they share a singular passion for math, science, and technology.
          </p>
          <span className="text-amber-400 font-semibold flex items-center gap-2 uppercase tracking-wide">
            Explore Internships <ArrowRight size={16} />
          </span>
        </Link>
        <Link to="/culture" className="bg-black p-16 md:p-24 border-b border-neutral-800 flex flex-col justify-center relative overflow-hidden group block">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Play className="text-white mb-6 fill-white" size={48} />
          <h2 className="text-3xl font-bold mb-6">Fueled by the Unsolved.</h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            Our work is founded upon boundless curiosity. We don't just ask "what happens next?" We ask "why does it happen at all?"
          </p>
           <span className="text-white font-semibold flex items-center gap-2 uppercase tracking-wide z-10">
            Read Our Manifesto <ArrowRight size={16} />
          </span>
        </Link>
      </div>

      {/* 3. THE ROZARIO GLOBAL POLYMATH (PERSONA) */}
      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Rozario Global Polymath</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              We bring the brightest minds from across the globe to collaborate on intractable problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: "Intellectual Pioneer", text: "Challenges conventional wisdom with empirical rigor." },
              { icon: Globe, title: "Unique Perspective", text: "Approaches finance through the lens of physics, biology, and code." },
              { icon: Users, title: "Synergy Builder", text: "Believes that the collective mind outperforms the solitary genius." },
              { icon: BookOpen, title: "Teacher & Student", text: "Constantly absorbing new paradigms and sharing knowledge freely." }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-neutral-800 rounded-xl bg-neutral-900/50 hover:border-amber-500/30 transition-all">
                <item.icon className="text-amber-500 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. ROLES AND TEAMS */}
      <div className="py-24 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto">
           <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6">Roles & Teams</h2>
            <p className="text-neutral-400 max-w-3xl text-lg leading-relaxed">
              We operate at the intersection of multiple disciplines. Whether you are optimizing a kernel or predicting macroeconomic shifts, your work has a direct impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              
              <Link to="/teams/engineering" className="block group cursor-pointer hover:bg-neutral-800/30 p-4 -mx-4 rounded-xl transition-colors">
                <div className="flex items-center justify-between border-b border-neutral-700 pb-4 mb-4">
                  <h3 className="text-2xl font-bold text-amber-400">Engineering</h3>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-400"/>
                </div>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Engineers are the heartbeat of Rozario Global. We don't just use software; we invent the distributed platforms that make the impossible routine.
                </p>
                <blockquote className="border-l-2 border-amber-500 pl-4 italic text-neutral-500">
                  "It’s not just appreciation of the work, but knowing the difficulty of the work. Rozario Global understands engineers."
                </blockquote>
              </Link>

               <Link to="/teams/quantitative-research" className="block group cursor-pointer hover:bg-neutral-800/30 p-4 -mx-4 rounded-xl transition-colors">
                <div className="flex items-center justify-between border-b border-neutral-700 pb-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">Quantitative Research</h3>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-white"/>
                </div>
                <p className="text-neutral-300 leading-relaxed">
                  Turn noise into signal. Our researchers utilize the entire scientific toolkit—from stochastic calculus to deep learning—to decode the markets.
                </p>
              </Link>
            </div>

            <div className="space-y-8">
               <Link to="/teams/data-science" className="block group cursor-pointer hover:bg-neutral-800/30 p-4 -mx-4 rounded-xl transition-colors">
                <div className="flex items-center justify-between border-b border-neutral-700 pb-4 mb-4">
                  <h3 className="text-2xl font-bold text-neutral-400">Data Science</h3>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400"/>
                </div>
                <p className="text-neutral-300 leading-relaxed">
                   Illuminating the unseen. We ingest petabytes of unstructured data—from satellite imagery to shipping manifests—to find truth before it hits the tape.
                </p>
              </Link>

               <Link to="/teams/strategy-operations" className="block group cursor-pointer hover:bg-neutral-800/30 p-4 -mx-4 rounded-xl transition-colors">
                <div className="flex items-center justify-between border-b border-neutral-700 pb-4 mb-4">
                  <h3 className="text-2xl font-bold text-neutral-200">Strategy & Operations</h3>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-200"/>
                </div>
                <p className="text-neutral-300 leading-relaxed">
                   The backbone of our agility. Our legal, compliance, and people teams ensure that our massive machine runs with precision and integrity.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 5. CULTURE & LEARNING */}
      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="text-amber-500" /> Learning & Development
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Stagnation is the enemy. Our internal university offers 200+ classes annually, covering everything from C++ optimization to market history.
            </p>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-center gap-2"><Zap size={14} className="text-amber-500"/> Unlimited conference sponsorship</li>
              <li className="flex items-center gap-2"><Zap size={14} className="text-amber-500"/> 5 dedicated "Learning Days" per year</li>
              <li className="flex items-center gap-2"><Zap size={14} className="text-amber-500"/> Academic guest lecture series</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Heart className="text-neutral-300" /> Employee Resource Groups
            </h3>
             <p className="text-neutral-400 leading-relaxed mb-6">
              Innovation requires cognitive diversity. Our employee-led communities foster belonging and bring distinct perspectives to our challenges.
            </p>
             <div className="flex flex-wrap gap-2">
               {["Women at Rozario Global", "Pride Alliance", "Black Network", "Veterans Group", "Asian Heritage"].map(g => (
                 <span key={g} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-300">
                   {g}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* 6. HOW WE HIRE */}
      <div className="py-24 px-6 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">The Path to Rozario Global</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
             {[
               { step: "01", title: "Explore", desc: "Read our insights. Understand our scientific philosophy." },
               { step: "02", title: "Apply", desc: "Find the role where your unique skills can solve hard problems." },
               { step: "03", title: "Interview", desc: "Meet your future collaborators. It's a conversation, not an interrogation." },
               { step: "04", title: "Offer", desc: "Receive a comprehensive package delivered digitally and physically." },
               { step: "05", title: "Start", desc: "Launch your journey. Expect early mentorship and engagement." },
             ].map((s, i) => (
               <div key={i} className="relative p-6 bg-black rounded-lg border border-neutral-800 group hover:border-amber-500/50 transition-colors">
                 <div className="text-4xl font-black text-neutral-800 mb-4 group-hover:text-amber-900 transition-colors">{s.step}</div>
                 <h4 className="text-xl font-bold mb-2 text-white">{s.title}</h4>
                 <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* 7. BENEFITS */}
      <div className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Support for Body, Mind, and Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Premium Health", desc: "100% covered medical and dental for you and your dependents." },
              { icon: Clock, title: "Hybrid Balance", desc: "Flexible work policy. We value in-person collaboration, not face time." },
              { icon: Coffee, title: "Fully Stocked", desc: "Barista bars, catered lunches, and kitchens stocked with brain food." },
              { icon: Zap, title: "Onsite Fitness", desc: "Gyms, yoga studios, and boot camps available in major offices." },
              { icon: Smile, title: "Parental Support", desc: "Generous leave and backup childcare to support your growing family." },
              { icon: UserCheck, title: "Mindfulness", desc: "Free counseling, meditation apps, and mental health resources." },
              { icon: Heart, title: "Giving Back", desc: "We match your charitable donations and pay for volunteer time." },
              { icon: Anchor, title: "Observance", desc: "Flexible PTO for religious, cultural, or personal significance." },
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-amber-500 mb-4">
                  <b.icon size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">{b.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8. JOB BOARD / SEARCH */}
      <div id="open-roles" className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Explore Opportunities</h2>
          
          {/* Filter Bar */}
          <div className="bg-black p-6 rounded-xl border border-neutral-800 shadow-xl mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative w-full lg:w-96 group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-amber-500 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search by role or keyword..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-full pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-all text-white"
                />
              </div>

              <div className="flex flex-wrap gap-4 w-full lg:w-auto">
                 <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"><MapPin size={16} /></div>
                    <select 
                      className="appearance-none bg-neutral-900 border border-neutral-700 hover:border-neutral-500 rounded-full pl-10 pr-12 py-3 text-sm focus:outline-none cursor-pointer min-w-[180px] text-white"
                      value={selectedLoc}
                      onChange={(e) => setSelectedLoc(e.target.value)}
                    >
                      {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                 </div>

                 <div className="relative group">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"><Briefcase size={16} /></div>
                    <select 
                      className="appearance-none bg-neutral-900 border border-neutral-700 hover:border-neutral-500 rounded-full pl-10 pr-12 py-3 text-sm focus:outline-none cursor-pointer min-w-[180px] text-white"
                      value={selectedDept}
                      onChange={(e) => setSelectedDept(e.target.value)}
                    >
                      {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                 </div>
              </div>
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-4">
             <div className="flex justify-between items-center mb-4">
               <span className="text-neutral-400 text-sm">Showing {filteredJobs.length} roles</span>
               {(selectedLoc !== 'All Locations' || selectedDept !== 'All Departments' || search) && (
                <button 
                  onClick={() => { setSearch(''); setSelectedLoc('All Locations'); setSelectedDept('All Departments'); }}
                  className="text-sm text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <X size={14} /> Clear Filters
                </button>
              )}
             </div>
             
             {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 gap-3">
                  {filteredJobs.map((job) => (
                    <Link 
                      to={`/careers/jobs/${job.id}`}
                      key={job.id} 
                      className="group bg-black border border-neutral-800 p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-between hover:border-amber-500/40 hover:bg-neutral-900 transition-all cursor-pointer"
                    >
                      <div className="mb-2 md:mb-0">
                        <h3 className="text-lg font-bold group-hover:text-amber-400 transition-colors">{job.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-neutral-500 mt-1">
                          <span className="uppercase tracking-wider">{job.dept}</span>
                          <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
                          <span>{job.loc}</span>
                        </div>
                      </div>
                      <ArrowRight className="text-neutral-600 group-hover:text-amber-400 group-hover:translate-x-2 transition-all" size={20} />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 border border-dashed border-neutral-800 rounded-xl bg-neutral-900/30">
                  <Filter size={48} className="mx-auto text-neutral-700 mb-4" />
                  <h3 className="text-xl font-bold text-neutral-300">No current openings</h3>
                  <p className="text-neutral-500 mt-2">We are not accepting applications at this time. Please check back later.</p>
                </div>
              )}
          </div>
        </div>
      </div>

      {/* 9. BOTTOM CTA */}
      <div className="bg-amber-900/20 py-24 border-t border-amber-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Advice for Future Leaders</h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed italic">
              "Stay curious. The moment you think you know how the market works is the moment you stop learning."
            </p>
            <div className="flex justify-center gap-6">
               <Link to="/campus-events" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
                 Campus Events
               </Link>
               <Link to="/intern-stories" className="px-8 py-3 border border-amber-500 text-amber-400 font-bold rounded-full hover:bg-amber-500/10 transition-colors">
                 Intern Perspectives
               </Link>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Careers;