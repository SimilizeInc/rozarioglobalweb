import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EVENTS = [
  { university: "MIT", event: "Rozario Global Quant Hackathon", date: "Feb 12, 2026", time: "10:00 AM - 6:00 PM", location: "Stata Center" },
  { university: "Stanford", event: "Guest Lecture: AI in Finance", date: "Feb 18, 2026", time: "2:00 PM - 4:00 PM", location: "Huang Engineering Center" },
  { university: "Oxford", event: "Networking Mixer", date: "Mar 05, 2026", time: "6:00 PM - 9:00 PM", location: "The Grand Cafe" },
  { university: "ETH Zurich", event: "PhD Recruitment Drive", date: "Mar 12, 2026", time: "9:00 AM - 5:00 PM", location: "Main Hall" },
  { university: "Carnegie Mellon", event: "Panel: The Future of C++", date: "Apr 02, 2026", time: "1:00 PM - 3:00 PM", location: "Gates Hillman Center" },
];

const CampusEvents: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
       <div className="pt-40 pb-24 px-6 bg-neutral-900 border-b border-neutral-800">
         <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Campus Events</h1>
            <p className="text-xl text-neutral-400">
              Meet our team. Solve hard problems. Learn what it takes to operate at the cutting edge of quantitative finance.
            </p>
         </div>
       </div>

       <div className="py-24 px-6 bg-black">
          <div className="max-w-5xl mx-auto">
             <div className="grid gap-6">
                {EVENTS.map((evt, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-amber-500/50 transition-all">
                     <div className="mb-4 md:mb-0">
                        <div className="text-amber-500 font-bold text-sm uppercase tracking-wide mb-2">{evt.university}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{evt.event}</h3>
                        <div className="flex gap-6 text-sm text-neutral-400">
                           <span className="flex items-center gap-2"><Calendar size={14}/> {evt.date}</span>
                           <span className="flex items-center gap-2"><Clock size={14}/> {evt.time}</span>
                           <span className="flex items-center gap-2"><MapPin size={14}/> {evt.location}</span>
                        </div>
                     </div>
                     <button className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors shrink-0">
                       Register
                     </button>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

export default CampusEvents;