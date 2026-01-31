export interface Job {
  id: number;
  title: string;
  dept: string;
  loc: string;
  type: string;
  description?: string;
  responsibilities?: string[];
  qualifications?: string[];
}

export const ALL_JOBS: Job[] = [
  // Engineering & Technology
  { 
    id: 1, 
    title: 'Principal Software Engineer', 
    dept: 'Engineering', 
    loc: 'New York', 
    type: 'Full-time',
    description: `
      <p>The Core Engineering team at Rozario Global is responsible for the distributed systems that underpin our entire investment process. As a Principal Software Engineer, you will architect the next generation of our simulation grid and execution platform.</p>
      <p>We are not looking for someone to maintain legacy code. We are looking for an inventor. You will be solving problems related to ultra-low latency networking, massive-scale parallel computing, and deterministic replay of market events.</p>
      <p>You will work directly with the CTO and Heads of Research to translate complex mathematical models into highly optimized C++ and Rust production code. Your work will have a direct, measurable impact on the firm's P&L.</p>
    `,
    responsibilities: [
      "Architect and implement low-latency trading strategies in C++20 on Linux.",
      "Design distributed systems for processing petabytes of historical market data.",
      "Optimize network stacks (kernel bypass, FPGA integration) for microsecond-level execution.",
      "Mentor senior engineers and set technical standards for the organization.",
      "Collaborate with quantitative researchers to implement new alpha signals."
    ],
    qualifications: [
      "BS/MS/PhD in Computer Science, Electrical Engineering, or Mathematics.",
      "10+ years of experience in low-latency systems (HFT, Gaming, or Aerospace).",
      "Expert-level knowledge of C++ (template metaprogramming, memory models, lock-free data structures).",
      "Deep understanding of OS internals, CPU architecture, and network protocols.",
      "Experience with FPGA or GPU acceleration is a strong plus."
    ]
  },
  { id: 2, title: 'Low Latency C++ Developer', dept: 'Engineering', loc: 'London', type: 'Full-time' },
  { id: 3, title: 'Senior Data Engineer', dept: 'Data Platform', loc: 'Remote', type: 'Full-time' },
  { id: 4, title: 'FPGA Engineer', dept: 'Hardware', loc: 'New York', type: 'Full-time' },
  { id: 5, title: 'Site Reliability Engineer', dept: 'Infrastructure', loc: 'Hong Kong', type: 'Full-time' },
  { id: 6, title: 'Frontend Engineer (React)', dept: 'Engineering', loc: 'New York', type: 'Full-time' },
  { id: 7, title: 'Cloud Security Architect', dept: 'Security', loc: 'Remote', type: 'Full-time' },
  { id: 8, title: 'Database Administrator (PostgreSQL)', dept: 'Engineering', loc: 'London', type: 'Full-time' },
  { id: 9, title: 'Quantitative Developer', dept: 'Engineering', loc: 'New York', type: 'Full-time' },
  { id: 10, title: 'Head of Internal Tools', dept: 'Product', loc: 'New York', type: 'Full-time' },

  // Research & Modeling
  { id: 11, title: 'Quantitative Researcher - Alpha', dept: 'Research', loc: 'New York', type: 'Full-time' },
  { id: 12, title: 'Machine Learning Scientist (NLP)', dept: 'Research', loc: 'Remote', type: 'Full-time' },
  { id: 13, title: 'Deep Learning Specialist', dept: 'Research', loc: 'London', type: 'Full-time' },
  { id: 14, title: 'Alternative Data Analyst', dept: 'Data Science', loc: 'Hong Kong', type: 'Full-time' },
  { id: 15, title: 'Portfolio Manager - Equities', dept: 'Trading', loc: 'New York', type: 'Full-time' },
  { id: 16, title: 'Execution Research Analyst', dept: 'Trading', loc: 'New York', type: 'Full-time' },
  { id: 17, title: 'Market Microstructure Specialist', dept: 'Research', loc: 'London', type: 'Full-time' },
  { id: 18, title: 'Intern - Quantitative Research', dept: 'Early Careers', loc: 'New York', type: 'Internship' },
  { id: 19, title: 'Intern - Software Engineering', dept: 'Early Careers', loc: 'London', type: 'Internship' },

  // Operations & Strategy
  { id: 20, title: 'Technical Recruiter', dept: 'People', loc: 'New York', type: 'Full-time' },
  { id: 21, title: 'HR Business Partner', dept: 'People', loc: 'London', type: 'Full-time' },
  { id: 22, title: 'Legal Counsel - IP', dept: 'Legal', loc: 'New York', type: 'Full-time' },
  { id: 23, title: 'Compliance Officer', dept: 'Legal', loc: 'Hong Kong', type: 'Full-time' },
  { id: 24, title: 'Risk Manager', dept: 'Risk', loc: 'New York', type: 'Full-time' },
  { id: 25, title: 'Investor Relations Associate', dept: 'Strategy', loc: 'New York', type: 'Full-time' },
  { id: 26, title: 'Workplace Experience Manager', dept: 'Operations', loc: 'New York', type: 'Full-time' },
  { id: 27, title: 'IT Support Specialist', dept: 'Operations', loc: 'London', type: 'Full-time' },
  { id: 28, title: 'Executive Assistant', dept: 'Admin', loc: 'New York', type: 'Full-time' },
  { id: 29, title: 'Marketing Lead', dept: 'Strategy', loc: 'New York', type: 'Full-time' },
  { id: 30, title: 'Fundamental Analyst - Healthcare', dept: 'Research', loc: 'New York', type: 'Full-time' },
];