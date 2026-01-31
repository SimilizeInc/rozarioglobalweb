import React, { useState, useMemo, useEffect } from 'react';
import { INSIGHTS_DATA } from '../data/insights';
import { Search, Filter, ArrowRight, Clock, ChevronDown } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const CATEGORIES = ['All', 'Data Science', 'Engineering', 'Markets', 'Policy', 'Careers', 'Culture'];

const Insights: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  // Sync state with URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('All');
    }
  }, [searchParams]);

  // Filter Logic
  const filteredInsights = useMemo(() => {
    return INSIGHTS_DATA.filter(insight => {
      // Map legacy/fuzzy categories if needed, or rely on exact match if data is updated
      const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory || (selectedCategory === 'Markets' && insight.category === 'Market Perspectives');
      const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            insight.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const visibleInsights = filteredInsights.slice(0, visibleCount);
  const featuredInsight = INSIGHTS_DATA[0]; // The first one is the "Hero"

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* 1. HERO HEADER */}
      <div className="pt-40 pb-20 px-6 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Rozario Global <span className="text-amber-500">Perspectives</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Deep dives into the intersection of mathematics, technology, and global markets. 
            Exploring the science of alpha.
          </p>
        </div>
      </div>

      {/* 2. FEATURED ARTICLE (HERO) */}
      <div className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <Link to={`/insights/${featuredInsight.id}`} className="group block relative rounded-2xl overflow-hidden aspect-[21/9] border border-neutral-800">
             <div className="absolute inset-0">
               <img 
                 src={featuredInsight.imageUrl} 
                 alt={featuredInsight.title} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
             </div>
             <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl">
               <div className="flex items-center gap-4 mb-4">
                 <span className="bg-amber-600 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                   Featured
                 </span>
                 <span className="text-neutral-400 text-sm font-mono flex items-center gap-2">
                   <Clock size={14} /> {featuredInsight.readTime}
                 </span>
               </div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-amber-400 transition-colors">
                 {featuredInsight.title}
               </h2>
               <p className="text-neutral-300 text-lg md:text-xl line-clamp-2 mb-8">
                 {featuredInsight.summary}
               </p>
               <span className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wide group-hover:gap-4 transition-all">
                 Read Article <ArrowRight size={20} />
               </span>
             </div>
          </Link>
        </div>
      </div>

      {/* 3. FILTERS & SEARCH */}
      <div className="sticky top-[72px] z-40 bg-black/80 backdrop-blur-md border-y border-neutral-800 mb-12">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => { 
                  setSelectedCategory(cat); 
                  setVisibleCount(9); 
                  // Update URL without reload to keep state consistent if user copies link
                  const url = new URL(window.location.href);
                  if (cat === 'All') url.searchParams.delete('category');
                  else url.searchParams.set('category', cat);
                  window.history.pushState({}, '', url);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat 
                    ? 'bg-amber-600 text-black' 
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
            <input 
              type="text" 
              placeholder="Search insights..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* 4. CONTENT GRID */}
      <div className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          
          {filteredInsights.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-neutral-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="text-neutral-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-300">No insights found</h3>
              <p className="text-neutral-500">Try adjusting your search or category.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleInsights.map((insight) => (
                  <Link 
                    to={`/insights/${insight.id}`} 
                    key={insight.id} 
                    className="flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden group hover:border-amber-500/50 transition-all hover:-translate-y-1 shadow-lg"
                  >
                    {/* Card Image */}
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={insight.imageUrl} 
                        alt={insight.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-neutral-700">
                          {insight.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 p-6 flex flex-col">
                       <div className="text-neutral-500 text-xs font-mono mb-3 flex justify-between">
                         <span>{insight.timestamp}</span>
                         <span>{insight.readTime}</span>
                       </div>
                       <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
                         {insight.title}
                       </h3>
                       <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                         {insight.summary}
                       </p>
                       
                       <div className="flex items-center gap-3 pt-6 border-t border-neutral-800">
                         <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-amber-500 font-bold text-xs">
                           {insight.author.charAt(0)}
                         </div>
                         <div>
                           <div className="text-xs font-bold text-white">{insight.author}</div>
                           <div className="text--[10px] text-neutral-500 uppercase">{insight.role}</div>
                         </div>
                       </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              {visibleCount < filteredInsights.length && (
                <div className="mt-16 text-center">
                  <button 
                    onClick={() => setVisibleCount(prev => prev + 9)}
                    className="group px-8 py-3 bg-neutral-900 hover:bg-amber-600 border border-neutral-700 hover:border-amber-500 rounded-full text-white font-medium transition-all flex items-center gap-2 mx-auto"
                  >
                    Load More Articles
                    <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </div>
      
    </div>
  );
};

export default Insights;