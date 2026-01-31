import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const CITCO_URL = "https://ndcdyn.interactivebrokers.com/sso/Login?RL=1&locale=en_US";

interface SubItem {
  label: string;
  path: string;
  desc?: string;
}

interface NavItem {
  label: string;
  path: string;
  children?: SubItem[];
}

const navItems: NavItem[] = [
  { 
    label: 'What We Do', 
    path: '/investment-management',
    children: [
      { label: 'Approach', path: '/approach', desc: "The scientific method applied to markets." },
      { label: 'Fundamental Equities', path: '/investment-management#fundamental', desc: "Deep bottom-up research pods." },
      { label: 'Global Quantitative Systematic', path: '/investment-management#quantitative', desc: "Automated algorithmic execution." },
      { label: 'Venture Capital', path: '/ventures', desc: "Backing data-driven startups." },
      { label: 'Private Equity', path: '/private-equity', desc: "Long-term operational value creation." },
    ]
  },
  { 
    label: 'About', 
    path: '/about',
    children: [
      { label: 'Leadership', path: '/about', desc: "Meet the team guiding our vision." },
      { label: 'Our Values', path: '/values', desc: "The principles that drive our decisions." },
    ]
  },
  { 
    label: 'Insights', 
    path: '/insights',
    children: [
       { label: 'Work & Careers', path: '/insights?category=Careers', desc: "Life inside Rozario Global." },
       { label: 'DATA SCIENCE', path: '/insights?category=Data%20Science', desc: "Technical deep dives." },
       { label: 'ENGINEERING', path: '/insights?category=Engineering', desc: "Building the platform." },
       { label: 'MARKETS & ECONOMY', path: '/insights?category=Markets', desc: "Global macro perspectives." },
       { label: 'POLICY', path: '/insights?category=Policy', desc: "Regulatory landscape." },
       { label: 'NEWS & CULTURE', path: '/insights?category=Culture', desc: "Firm announcements." },
    ]
  },
  {
    label: 'Careers',
    path: '/careers',
    children: [
      { label: 'INTERNSHIPS', path: '/internships', desc: "Real problems. Real production code." },
      { label: 'INTERVIEWING AT ROZARIO GLOBAL', path: '/careers', desc: "Our philosophy and process." },
      { label: 'ENGINEERING', path: '/teams/engineering', desc: "Build the distributed systems that power our trade." },
      { label: 'QUANTITATIVE RESEARCH & DATA SCIENCE', path: '/teams/quantitative-research', desc: "Apply the scientific method to financial markets." },
      { label: 'OPEN ROLES', path: '/careers#open-roles', desc: "View all current opportunities." }
    ]
  },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setHoveredIndex(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen || hoveredIndex !== null
          ? 'bg-black/95 backdrop-blur-md border-neutral-800 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-amber-500 rounded-sm transform group-hover:rotate-45 transition-transform duration-500"></div>
          <span className="text-white font-bold text-xl tracking-tight">ROZARIO <span className="font-light text-neutral-400">GLOBAL</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center h-full">
          {navItems.map((item, index) => (
            <div
              key={item.path}
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
            >
              <Link
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors uppercase flex items-center gap-1 ${
                  hoveredIndex === index ? 'text-amber-500' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown size={14} className={`transition-transform duration-300 ${hoveredIndex === index ? 'rotate-180' : ''}`} />}
              </Link>
            </div>
          ))}
          <Link
            to="/contact"
            className="text-neutral-300 hover:text-white text-sm font-medium tracking-wide transition-colors uppercase"
            onMouseEnter={() => setHoveredIndex(null)}
          >
            Contact
          </Link>
          <a
            href={CITCO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-black transition-all text-sm font-medium rounded-full"
            onMouseEnter={() => setHoveredIndex(null)}
          >
            Client Login
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-neutral-900/95 backdrop-blur-xl border-b border-neutral-800 overflow-hidden transition-all duration-300 ease-in-out origin-top ${
            hoveredIndex !== null && navItems[hoveredIndex]?.children ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        onMouseEnter={() => {}}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {hoveredIndex !== null && navItems[hoveredIndex]?.children && (
             <div className="max-w-7xl mx-auto px-6 py-12">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Left Highlight (Optional) */}
                  <div className="col-span-1 hidden md:block border-r border-neutral-800 pr-8">
                     <h3 className="text-amber-500 font-bold text-lg mb-4">{navItems[hoveredIndex].label}</h3>
                     <p className="text-neutral-400 text-sm leading-relaxed">
                       {navItems[hoveredIndex].label === 'About' ? 
                         "We are defined by our people and our principles. Learn who we are and what we stand for." :
                         "Explore opportunities to join a community of intellectual pioneers. We are solving the hardest problems in finance."
                       }
                     </p>
                     <Link to={navItems[hoveredIndex].path} className="inline-flex items-center gap-2 text-white font-bold text-sm mt-6 hover:text-amber-500 transition-colors">
                        Go to Overview <ArrowRight size={14} />
                     </Link>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="col-span-3 grid grid-cols-2 gap-x-12 gap-y-8">
                      {navItems[hoveredIndex].children?.map((child) => (
                        <Link key={child.label} to={child.path} className="group block">
                           <div className="text-white font-bold text-sm mb-1 group-hover:text-amber-500 transition-colors flex items-center gap-2 uppercase">
                             {child.label} <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                           </div>
                           <div className="text-neutral-500 text-xs group-hover:text-neutral-400 transition-colors">
                             {child.desc}
                           </div>
                        </Link>
                      ))}
                  </div>
               </div>
             </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-neutral-800 shadow-xl max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col p-6 gap-6">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.children ? (
                    <div className="space-y-4">
                        <div className="text-neutral-500 font-bold text-xs uppercase tracking-wider mb-2">{item.label}</div>
                         {item.children.map(child => (
                           <Link key={child.label} to={child.path} className="block pl-4 border-l border-neutral-800">
                             <div className="text-white font-medium text-sm mb-1">{child.label}</div>
                             <div className="text-neutral-600 text-xs">{child.desc}</div>
                           </Link>
                         ))}
                    </div>
                ) : (
                    <Link
                        to={item.path}
                        className="text-white text-lg font-medium block"
                    >
                        {item.label}
                    </Link>
                )}
              </div>
            ))}
             <Link to="/contact" className="text-white text-lg font-medium block pt-4 border-t border-neutral-800">Contact</Link>
             <a
               href={CITCO_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full py-3 mt-4 border border-amber-500 text-amber-400 font-medium text-center block rounded-full"
             >
              Client Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;