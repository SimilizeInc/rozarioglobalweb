import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INSIGHTS_DATA } from '../data/insights';
import { ArrowLeft, Clock, Share2, Linkedin, Twitter, Copy } from 'lucide-react';

const InsightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const insight = INSIGHTS_DATA.find(i => i.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!insight) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">Article Not Found</h2>
        <Link to="/insights" className="text-amber-500 hover:underline">Return to Insights</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. PROGRESS BAR (Top of screen) */}
      <div className="fixed top-0 left-0 h-1 bg-amber-500 z-50 w-full animate-scroll-progress origin-left"></div>

      {/* 2. HERO IMAGE */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
        <img src={insight.imageUrl} alt={insight.title} className="w-full h-full object-cover" />
        
        <div className="absolute bottom-0 left-0 z-20 w-full p-6 pb-12">
           <div className="max-w-3xl mx-auto">
             <Link to="/insights" className="inline-flex items-center gap-2 text-amber-400 hover:text-white mb-6 transition-colors font-medium text-sm uppercase tracking-wide">
               <ArrowLeft size={16} /> Back to Perspectives
             </Link>
             <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
               {insight.title}
             </h1>
             <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-300 font-mono">
               <span className="bg-amber-600/20 text-amber-400 px-3 py-1 rounded border border-amber-500/30 uppercase tracking-wider text-xs font-bold">
                 {insight.category}
               </span>
               <span className="flex items-center gap-2">
                 <Clock size={16} /> {insight.readTime}
               </span>
               <span>{insight.timestamp}</span>
             </div>
           </div>
        </div>
      </div>

      {/* 3. CONTENT AREA */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        
        {/* Author Block */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-amber-500 font-bold text-xl">
               {insight.author.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-lg">{insight.author}</div>
              <div className="text-amber-500 text-sm uppercase tracking-wide">{insight.role}</div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="p-2 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"><Twitter size={18} /></button>
            <button className="p-2 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"><Linkedin size={18} /></button>
            <button className="p-2 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"><Share2 size={18} /></button>
          </div>
        </div>

        {/* The Article Body - Rendering HTML from data */}
        <div 
          className="prose prose-lg prose-invert max-w-none 
          prose-headings:font-bold prose-headings:text-white 
          prose-p:text-neutral-300 prose-p:leading-relaxed
          prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-strong:font-semibold
          prose-blockquote:border-amber-500 prose-blockquote:bg-neutral-900/50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />

        {/* Tags / Footer of Article */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <h4 className="text-sm font-bold uppercase text-neutral-500 mb-4">Related Topics</h4>
          <div className="flex flex-wrap gap-2">
            {['Algorithmic Trading', 'Machine Learning', 'Market Structure', 'Risk Management'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-neutral-900 text-neutral-400 rounded-full text-sm hover:bg-amber-600 hover:text-white cursor-pointer transition-colors">
                #{tag.replace(' ', '')}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* 4. READ NEXT SECTION */}
      <div className="bg-neutral-900 py-24 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-8">More from Rozario Global Perspectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS_DATA.filter(i => i.id !== insight.id).slice(0, 3).map(related => (
              <Link to={`/insights/${related.id}`} key={related.id} className="group">
                <div className="h-48 overflow-hidden rounded-lg mb-4 relative">
                   <img src={related.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={related.title} />
                </div>
                <div className="text-xs text-amber-500 font-bold uppercase mb-2">{related.category}</div>
                <h4 className="font-bold text-lg leading-snug group-hover:text-amber-400 transition-colors">
                  {related.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default InsightDetail;