import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Approach from './pages/Approach';
import About from './pages/About';
import Values from './pages/Values';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Careers from './pages/Careers';
import Internships from './pages/Internships';
import InvestorCenter from './pages/InvestorCenter';
import InvestmentManagement from './pages/InvestmentManagement';
import VentureCapital from './pages/VentureCapital';
import PrivateEquity from './pages/PrivateEquity';
import ContactUs from './pages/ContactUs';
import LegalDisclosure from './pages/LegalDisclosure';
import PrivacyPolicies from './pages/PrivacyPolicies';
import Technology from './pages/Technology';
import Culture from './pages/Culture';
import CampusEvents from './pages/CampusEvents';
import InternStories from './pages/InternStories';
import Engineering from './pages/teams/Engineering';
import QuantitativeResearch from './pages/teams/QuantitativeResearch';
import DataScience from './pages/teams/DataScience';
import StrategyOperations from './pages/teams/StrategyOperations';
import JobDetail from './pages/jobs/JobDetail';
import EmailDisclaimer from './pages/EmailDisclaimer';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black min-h-screen text-neutral-200 font-sans selection:bg-amber-500 selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/investment-management" element={<InvestmentManagement />} />
          <Route path="/ventures" element={<VentureCapital />} />
          <Route path="/private-equity" element={<PrivateEquity />} />
          <Route path="/about" element={<About />} />
          <Route path="/values" element={<Values />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/investors" element={<InvestorCenter />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/legal" element={<LegalDisclosure />} />
          <Route path="/privacy-policies" element={<PrivacyPolicies />} />
          <Route path="/email-disclaimer" element={<EmailDisclaimer />} />
          
          {/* New Pages */}
          <Route path="/technology" element={<Technology />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/campus-events" element={<CampusEvents />} />
          <Route path="/intern-stories" element={<InternStories />} />
          
          {/* Teams */}
          <Route path="/teams/engineering" element={<Engineering />} />
          <Route path="/teams/quantitative-research" element={<QuantitativeResearch />} />
          <Route path="/teams/data-science" element={<DataScience />} />
          <Route path="/teams/strategy-operations" element={<StrategyOperations />} />
          
          {/* Job Details */}
          <Route path="/careers/jobs/:id" element={<JobDetail />} />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;