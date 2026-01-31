import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_JOBS } from '../../data/jobs';
import { ArrowLeft, MapPin, Briefcase, CheckCircle } from 'lucide-react';

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = ALL_JOBS.find(j => j.id.toString() === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!job) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Job Not Found</h2>
        <Link to="/careers" className="text-amber-500 hover:underline">Return to Careers</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* Header */}
      <div className="pt-40 pb-20 px-6 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto">
           <Link to="/careers" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors text-sm uppercase tracking-wide">
             <ArrowLeft size={16} /> Back to Roles
           </Link>
           <h1 className="text-4xl md:text-6xl font-bold mb-6">{job.title}</h1>
           <div className="flex flex-wrap gap-6 text-lg text-neutral-300">
              <span className="flex items-center gap-2"><Briefcase size={20} className="text-amber-500"/> {job.dept}</span>
              <span className="flex items-center gap-2"><MapPin size={20} className="text-amber-500"/> {job.loc}</span>
              <span className="bg-neutral-800 px-3 py-1 rounded text-sm uppercase tracking-wider font-bold border border-neutral-700">{job.type}</span>
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
           
           <div className="md:col-span-2 space-y-12">
              {/* Description */}
              <section>
                 <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-amber-500 pl-4">The Role</h2>
                 <div 
                   className="prose prose-invert prose-lg text-neutral-300 leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: job.description || `<p>Join our ${job.dept} team to work on challenging problems in global finance.</p>` }}
                 />
              </section>

              {/* Responsibilities */}
              {job.responsibilities && (
                <section>
                   <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-neutral-500 pl-4">Responsibilities</h2>
                   <ul className="space-y-4">
                     {job.responsibilities.map((r, i) => (
                       <li key={i} className="flex items-start gap-4">
                         <CheckCircle className="text-amber-500 mt-1 shrink-0" size={20} />
                         <span className="text-neutral-300 text-lg">{r}</span>
                       </li>
                     ))}
                   </ul>
                </section>
              )}

              {/* Qualifications */}
              {job.qualifications && (
                <section>
                   <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-neutral-500 pl-4">Qualifications</h2>
                   <ul className="space-y-4">
                     {job.qualifications.map((q, i) => (
                       <li key={i} className="flex items-start gap-4">
                         <div className="w-2 h-2 bg-white rounded-full mt-2.5 shrink-0"></div>
                         <span className="text-neutral-300 text-lg">{q}</span>
                       </li>
                     ))}
                   </ul>
                </section>
              )}
           </div>

           {/* Sidebar */}
           <div className="md:col-span-1">
              <div className="sticky top-32 p-8 bg-neutral-900 rounded-xl border border-neutral-800">
                 <h3 className="text-xl font-bold mb-6">Apply for this Role</h3>
                 <p className="text-sm text-neutral-400 mb-8">
                   Ready to solve the unsolvable? Send us your resume and a brief note about why you are a fit for Rozario Global.
                 </p>
                 <button className="w-full py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-lg transition-colors text-lg mb-4">
                   Apply Now
                 </button>
                 <p className="text-xs text-center text-neutral-500">
                   Or email <a href="mailto:careers@rozarioglobal.com" className="text-amber-500 hover:underline">careers@rozarioglobal.com</a>
                 </p>
              </div>
           </div>

        </div>
      </div>

    </div>
  );
};

export default JobDetail;