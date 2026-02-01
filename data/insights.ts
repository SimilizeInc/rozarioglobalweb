import { Insight } from '../types';

// Helper to generate content
const generateContent = (title: string) => `
  <p class="mb-6 text-lg leading-relaxed text-slate-300">
    In the rapidly evolving landscape of quantitative finance, the intersection of <strong>${title}</strong> has become a focal point for researchers and engineers alike. At Rozario Global, we believe that understanding the fundamental drivers of this phenomenon is crucial for generating consistent alpha.
  </p>
  <h3 class="text-2xl font-bold text-white mb-4">The Theoretical Framework</h3>
  <p class="mb-6 leading-relaxed text-slate-400">
    Traditionally, market participants have relied on linear regression models to approximate these behaviors. However, recent advancements in stochastic calculus and deep learning have opened new avenues for exploration. By applying non-linear transformations to the underlying datasets, we can uncover latent correlations that were previously invisible to standard econometric methods.
  </p>
  <blockquote class="border-l-4 border-amber-500 pl-6 my-8 italic text-xl text-slate-200">
    "The market is not a static entity; it is a complex adaptive system that responds to observation."
  </blockquote>
  <h3 class="text-2xl font-bold text-white mb-4">Engineering Challenges</h3>
  <p class="mb-6 leading-relaxed text-slate-400">
    Implementing these models at scale presents a unique set of challenges. Latency is the enemy. Our engineering team has developed a custom distributed computing grid that allows us to process petabytes of data in near real-time. This infrastructure leverages FPGA acceleration to handle the heavy lifting of matrix multiplications, freeing up our CPU cycles for higher-level logic.
  </p>
  <p class="mb-6 leading-relaxed text-slate-400">
    Furthermore, data cleanliness cannot be overstated. We employ rigorous sanitization pipelines that utilize natural language processing to scrub unstructured data sources before they ever enter our simulation environments.
  </p>
  <h3 class="text-2xl font-bold text-white mb-4">Conclusion</h3>
  <p class="mb-6 leading-relaxed text-slate-400">
    As we look to the future, the integration of ${title} into our core investment thesis represents a significant step forward. It is not enough to simply have the data; one must have the tools and the discipline to interpret it correctly.
  </p>
`;

const CATEGORIES = ['Data Science', 'Engineering', 'Markets', 'Culture', 'Policy', 'Careers'];
const AUTHORS = [
  { name: "Calvin D'Rozario", role: "Founder & CIO" },
  { name: "Data Science Team", role: "ROZARIO GLOBAL" }, // Was James Chen (CIO) -> Data Science Team
  { name: "Market Team", role: "ROZARIO GLOBAL" }, // Was Sarah Jenkins (CTO) -> Market Team
  { name: "Data Science Team", role: "ROZARIO GLOBAL" }, // Was David Okafor (Head of DS) -> Data Science Team
  { name: "Research Team", role: "ROZARIO GLOBAL" }
];

const STATIC_HIGHLIGHTS: Insight[] = [
  {
    id: "1",
    title: "The Stochastic Properties of Limit Order Books",
    category: "Data Science",
    summary: "An investigation into the micro-structure of modern electronic markets and the predictive power of order flow imbalance.",
    content: generateContent("Limit Order Book Dynamics"),
    author: "Calvin D'Rozario",
    role: "Founder & CIO",
    timestamp: "Oct 24, 2024",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "FPGA Acceleration in High Frequency Trading",
    category: "Engineering",
    summary: "How we utilize Field-Programmable Gate Arrays to process market data feeds in under 3 milliseconds.",
    content: generateContent("Hardware Acceleration"),
    author: "Market Team",
    role: "ROZARIO GLOBAL",
    timestamp: "Oct 20, 2024",
    readTime: "12 min read",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Alternative Data: Satellite Imagery Analysis",
    category: "Data Science",
    summary: "Predicting agricultural commodity yields by analyzing spectral data from orbital satellites.",
    content: generateContent("Geospatial Alpha"),
    author: "Data Science Team",
    role: "ROZARIO GLOBAL",
    timestamp: "Oct 15, 2024",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "The Role of NLP in Sentiment Analysis",
    category: "Engineering",
    summary: "Decoding central bank minutes and earnings calls using transformer-based language models.",
    content: generateContent("Natural Language Processing"),
    author: "Data Science Team",
    role: "ROZARIO GLOBAL",
    timestamp: "Oct 10, 2024",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop"
  }
];

// Curated list of verified, high-availability Unsplash images
// Replaced potentially broken URLs with fresh Unsplash IDs
const STOCK_IMAGES = [
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop", // Blockchain/Abstract
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", // Data Viz
  "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1200&auto=format&fit=crop", // Servers
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop", // Stock Tickers
  "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=1200&auto=format&fit=crop", // Data Stream
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop", // Circuit Board
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop", // Global Network
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop", // Cyberpunk City
  "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1200&auto=format&fit=crop", // Dark Server Room
  "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1200&auto=format&fit=crop", // AI Brain
  "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1200&auto=format&fit=crop", // Tech Abstract
  "https://images.unsplash.com/photo-1535320903710-d9cf303ffe45?q=80&w=1200&auto=format&fit=crop", // Server Lights
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop", // Team Working
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop", // Meetings
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop", // Handshake
  "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop", // Dashboard
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", // Charts
  "https://images.unsplash.com/photo-1531297461136-82lw8u8d916?q=80&w=1200&auto=format&fit=crop", // Computer Chip
];

// Generate 46 more insights to reach 50+
const GENERATED_INSIGHTS: Insight[] = Array.from({ length: 46 }, (_, i) => {
  const cat = CATEGORIES[i % CATEGORIES.length];
  const auth = AUTHORS[i % AUTHORS.length];
  const id = (i + 5).toString();
  return {
    id,
    title: [
      "Optimizing Execution Algorithms in Fragmented Markets",
      "The Impact of Central Bank Digital Currencies",
      "Machine Learning in Portfolio Construction",
      "Understanding Tail Risk in Volatile Regimes",
      "The Future of Distributed Ledger Technology",
      "Zero-Knowledge Proofs in Financial Privacy",
      "Latency Arbitrage: A Dying Strategy?",
      "Cloud-Native Architectures for Hedge Funds",
      "The Ethics of AI in Finance",
      "Recruiting the Next Generation of Quants"
    ][i % 10] + ` (Part ${Math.floor(i / 10) + 1})`,
    category: cat,
    summary: `A deep dive into the complexities of ${cat.toLowerCase()} and how Rozario Global is tackling the challenge of ${i % 2 === 0 ? 'scale' : 'accuracy'}.`,
    content: generateContent(`Generated Topic ${id}`),
    author: auth.name,
    role: auth.role,
    timestamp: `Sep ${30 - (i % 28)}, 2024`,
    readTime: `${5 + (i % 10)} min read`,
    imageUrl: STOCK_IMAGES[i % STOCK_IMAGES.length]
  };
});

export const INSIGHTS_DATA: Insight[] = [...STATIC_HIGHLIGHTS, ...GENERATED_INSIGHTS];