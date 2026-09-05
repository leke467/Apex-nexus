import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, 
  FiPlay, 
  FiCpu, 
  FiVideo, 
  FiActivity, 
  FiShield, 
  FiServer, 
  FiCheckCircle, 
  FiTrendingUp, 
  FiTerminal, 
  FiZap,
  FiGlobe
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const tabs = [
  {
    id: 'software',
    label: 'Software & Edge',
    icon: <FiCpu className="w-4 h-4" />,
    badge: 'Edge Runtime v2.8',
    status: 'All Systems Nominal',
    metrics: [
      { label: 'Edge Latency', value: '14ms', change: '-3ms', positive: true },
      { label: 'API Throughput', value: '3.4k req/s', change: '+18%', positive: true },
      { label: 'Cloud Uptime', value: '99.99%', change: '365d', positive: true },
    ],
    codeSnippet: `// Apex Nexus Microservices Core
const cluster = await initEdgeRuntime({
  region: "africa-lagos-01",
  protocol: "HTTP/3 • QUIC",
  security: "Zero-Trust TLS 1.3",
  autoScale: true
});
console.log("Status: Healthy • 48 Nodes Active");`,
    highlights: ['Distributed Edge Architecture', 'Zero-Downtime Deployment', 'Enterprise Cloudflare Infrastructure']
  },
  {
    id: 'esports',
    label: 'Battle Grid Esports',
    icon: <FiActivity className="w-4 h-4" />,
    badge: 'Tournament Engine',
    status: 'Live Matchmaking Active',
    metrics: [
      { label: 'Active Gamers', value: '14.2k+', change: '+24%', positive: true },
      { label: 'Match Latency', value: '19ms', change: 'Optimized', positive: true },
      { label: 'Prize Escrow', value: '100% Safe', change: 'Secured', positive: true },
    ],
    codeSnippet: `// Battle Grid Tournament Matchmaker
const match = await TournamentEngine.matchPlayers({
  gameMode: "5v5 Competitive Bracket",
  antiCheat: "Apex Sentinel Guard v3",
  prizeEscrow: "Auto-Disburse Verified"
});
// Stream feed: Synced at 120 FPS`,
    highlights: ['Real-time Tournament Brackets', 'Anti-Cheat Sentinel Integration', 'Instant Automated Prize Payouts']
  },
  {
    id: 'commerce',
    label: 'Commerce & AgriTech',
    icon: <FiShield className="w-4 h-4" />,
    badge: 'MultiShopNG & Livesteads',
    status: 'Escrow Engine Verified',
    metrics: [
      { label: 'Escrow Volume', value: '₦45M+', change: '+32%', positive: true },
      { label: 'Store Templates', value: '20 Active', change: 'Customizable', positive: true },
      { label: 'Agri Yield AI', value: '+38% Yield', change: 'AI Optimized', positive: true },
    ],
    codeSnippet: `// MultiShopNG Escrow & Livesteads AI
const transaction = await EscrowGuard.verifyDelivery({
  protectionCode: "6-DIGIT-OTP-ESCROW",
  sellerDashboard: "Instant-Settlement",
  livesteadsSensors: "Optimal Yield Forecasted"
});`,
    highlights: ['6-Digit OTP Delivery Escrow', '20+ Multi-Vendor Store Themes', 'Livesteads Agri-Tech AI Unit Economics']
  }
];

function HeroSection() {
  const [activeTab, setActiveTab] = useState('software');
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden py-24 lg:py-32">
      {/* Background radial gradient & subtle grid */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      {/* Glowing ambient backdrop accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary-500/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            {/* Top pill badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
              Engineering Real-World Platforms & Scalable Systems
            </motion.div>

            <h1 className="mb-6 leading-tight tracking-tight">
              Building <span className="text-gradient">High-Impact</span> Digital Solutions
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-white/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              From robust multi-tenant platforms and high-speed esports infrastructure to bespoke web architectures that power businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services" className="btn btn-primary group shadow-lg shadow-primary-500/20">
                Explore Our Services
                <FiArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link to="/about" className="btn btn-outline group backdrop-blur-sm">
                <FiPlay className="mr-2 text-primary-400" /> Learn About Us
              </Link>
            </div>
            
            {/* Interactive Pillar Badges that switch dashboard */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { id: 'software', label: 'Tech Innovation', icon: <FiCpu className="text-primary-400 text-xl" /> },
                { id: 'esports', label: 'Esports Platform', icon: <FiActivity className="text-emerald-400 text-xl" /> },
                { id: 'commerce', label: 'E-Commerce & Agri', icon: <FiShield className="text-amber-400 text-xl" /> },
              ].map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`p-3 rounded-xl transition-all duration-300 text-left border ${
                      isActive 
                        ? 'bg-primary-500/20 border-primary-500/50 shadow-md shadow-primary-500/10' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="mb-2">{item.icon}</div>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">{item.label}</p>
                    <p className="text-[11px] text-white/60 hidden sm:block">Click to inspect</p>
                  </button>
                );
              })}
            </div>
          </motion.div>
          
          {/* Right Column: Interactive Platform Command Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 relative"
          >
            {/* Floating Top-Left Telemetry Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden sm:flex absolute -top-6 -left-6 z-20 items-center gap-3 px-4 py-2.5 rounded-xl bg-secondary-900/90 border border-white/15 backdrop-blur-xl shadow-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <FiCheckCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-white/60">Cloud Edge</p>
                <p className="text-xs font-bold text-emerald-400">100% Operational</p>
              </div>
            </motion.div>

            {/* Floating Bottom-Right Telemetry Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden sm:flex absolute -bottom-6 -right-6 z-20 items-center gap-3 px-4 py-2.5 rounded-xl bg-secondary-900/90 border border-white/15 backdrop-blur-xl shadow-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-400 flex items-center justify-center">
                <FiZap className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-white/60">Global Latency</p>
                <p className="text-xs font-bold text-primary-300">14ms Edge Mesh</p>
              </div>
            </motion.div>

            {/* Main Console Box */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-secondary-900/85 backdrop-blur-xl shadow-2xl">
              
              {/* Window Header */}
              <div className="px-4 py-3.5 border-b border-white/10 bg-secondary-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-white/50 hidden sm:inline">apex-nexus-core@edge-v2.8</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-medium text-emerald-400">{currentTab.status}</span>
                </div>
              </div>

              {/* Tab Navigation Controls */}
              <div className="p-3 bg-secondary-950/40 border-b border-white/5 flex gap-2 overflow-x-auto scrollbar-none">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30'
                          : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Console Body with animated tab transitions */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {currentTab.metrics.map((metric, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 text-center sm:text-left">
                          <p className="text-[11px] text-white/60 truncate">{metric.label}</p>
                          <p className="text-base sm:text-lg font-bold text-white mt-1">{metric.value}</p>
                          <span className="inline-block text-[10px] text-emerald-400 font-medium mt-0.5">
                            {metric.change}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Code / Architecture Snippet */}
                    <div className="rounded-xl bg-secondary-950/90 border border-white/10 p-4 font-mono text-xs overflow-hidden">
                      <div className="flex items-center justify-between text-white/40 mb-2.5 pb-2 border-b border-white/5">
                        <div className="flex items-center gap-1.5">
                          <FiTerminal className="w-3.5 h-3.5 text-primary-400" />
                          <span className="text-[11px]">telemetry.ts</span>
                        </div>
                        <span className="text-[10px] text-primary-400/80 bg-primary-500/10 px-2 py-0.5 rounded">
                          {currentTab.badge}
                        </span>
                      </div>
                      <pre className="text-primary-300 text-[11px] sm:text-xs leading-relaxed overflow-x-auto whitespace-pre">
                        <code>{currentTab.codeSnippet}</code>
                      </pre>
                    </div>

                    {/* Key Highlights Checklist */}
                    <div className="space-y-2">
                      {currentTab.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                          <FiCheckCircle className="w-3.5 h-3.5 text-primary-400 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Console Footer */}
              <div className="px-6 py-3 bg-secondary-950/60 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                <span className="flex items-center gap-1.5">
                  <FiGlobe className="w-3.5 h-3.5 text-primary-400" />
                  Deployed Worldwide on Cloudflare Edge
                </span>
                <Link to="/projects" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center">
                  View Deployments <FiArrowRight className="ml-1" />
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;