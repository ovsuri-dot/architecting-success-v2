import React, { useState } from 'react';
import { 
  BookOpen, Award, Users, Target, Shield, Heart, Smile, 
  Send, Sparkles, CheckCircle, ChevronRight, Menu, X, 
  ArrowRight, FileText, ExternalLink, GraduationCap, 
  MapPin, Phone, Mail, Check, Star, Trophy, Medal
} from 'lucide-react';

/* =========================================================================
   SITE_CONTENT: CENTRALIZED CONFIGURATION FOR EASY UPDATES
   Edit any text, competition winners, books, or details below without 
   touching any UI logic. Vercel will auto-rebuild your live site on save.
   ========================================================================= */
const SITE_CONTENT = {
  config: {
    brandName: "ArchitectingSuccess.in",
    founderName: "O V Suresh Babu",
    designation: "Deputy General Manager, BEML Ltd. | Founder Chairman, OKS Memorial Trust",
    email: "ovsuri@gmail.com",
    phone: "+91 9481311666",
    location: "BEML Nagar, Kolar Gold Fields, Karnataka, India",
    // To receive live inquiries directly in your Gmail, replace this placeholder with your free Web3Forms key from web3forms.com
    web3FormsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY" 
  },
  hero: {
    badge: "Executive Coaching & Behavioral Architecture",
    headline: "Architecting Lasting Success Through Cognitive Mastery & Applied Behavioral Science",
    subheadline: "Empowering leaders, professionals, and students through Neuro-Linguistic Programming (NLP), Emotional Intelligence, and evidence-based psychological frameworks.",
    stats: [
      { label: "Experience", value: "15+ Years" },
      { label: "Digital Guidebooks", value: "8 Volumes" },
      { label: "Community Trust", value: "OKSMT Foundation" }
    ]
  },
  credentials: [
    { title: "NLP Master Trainer", org: "Advanced Behavioral Architecture" },
    { title: "Certified Emotional Intelligence Coach", org: "Professional EQ Frameworks" },
    { title: "Certified Cognitive Behavioral Coach", org: "CBT Systems" },
    { title: "Certified Child Psychologist", org: "Virtued Academy International" },
    { title: "Certified Body Language Expert", org: "Non-Verbal Communication" },
    { title: "Relationship Coach Diploma", org: "Complementary Therapists Accredited Association" }
  ],
  pillars: [
    {
      icon: Sparkles,
      title: "Neuro-Linguistic Programming",
      desc: "Reprogram cognitive patterns, eliminate limiting beliefs, and master advanced behavioral framing for leadership excellence."
    },
    {
      icon: Heart,
      title: "Emotional Intelligence & EQ",
      desc: "Cultivate profound self-awareness, empathy, and emotional regulation to navigate complex workplace dynamics."
    },
    {
      icon: Shield,
      title: "Cognitive Behavioral Architecture",
      desc: "Implement structured psychological frameworks (CBT & STEPPA) to build stress resilience and high-performance habits."
    },
    {
      icon: Users,
      title: "Non-Verbal & Body Language Mastery",
      desc: "Decode micro-expressions, align physiological posture, and project authentic executive presence in high-stakes arenas."
    }
  ],
  methodology: [
    { step: "01", title: "Diagnostic Assessment", desc: "Evaluate baseline emotional quotient, cognitive patterns, and leadership readiness using validated behavioral indicators." },
    { step: "02", title: "Cognitive Restructuring", desc: "Apply NLP and CBT protocols to dissolve mental bottlenecks, stress triggers, and counter-productive behavioral loops." },
    { step: "03", title: "Behavioral Integration", desc: "Anchor new patterns through micro-habits, executive coaching simulations, and non-verbal alignment." },
    { step: "04", title: "Sustainable Mastery", desc: "Graduate with personal blueprints, structured toolkits, and measurable growth metrics for long-term impact." }
  ],
  books: [
    {
      id: "b1",
      volume: "Vol. 1",
      title: "Architecting Success through Neuro-Linguistic Programming",
      category: "Executive & Leadership",
      tagline: "Cognitive Rewiring & Executive Influence",
      desc: "Master the mechanics of internal representation systems, anchoring, and linguistic reframing to elevate leadership persuasion and personal efficacy.",
      chapters: ["The Structure of Subjective Experience", "Reframing Limiting Beliefs", "Anchoring Peak States", "Advanced Milton Model Language Patterns"]
    },
    {
      id: "b2",
      volume: "Vol. 2",
      title: "Architecting Success through Emotional Intelligence",
      category: "Executive & Leadership",
      tagline: "Leadership Empathy & Self-Regulation",
      desc: "A rigorous guide to developing high EQ, managing interpersonal friction, and leading teams with emotional resilience and authentic resonance.",
      chapters: ["Mapping Emotional Self-Awareness", "The Neurobiology of Empathy", "Managing Conflict with Grace", "Inspiring Organizational Trust"]
    },
    {
      id: "b3",
      volume: "Vol. 3",
      title: "The Architecture of Lasting Love",
      category: "Relationships & Youth",
      tagline: "Relational Psychology & Connection",
      desc: "Unpack the underlying psychological blueprints of healthy partnerships, attachment styles, and deep interpersonal harmony.",
      chapters: ["Attachment Theory in Practice", "Communication Bridges", "Resolving Core Triggers", "Co-Creating Shared Meaning"]
    },
    {
      id: "b4",
      volume: "Vol. 4",
      title: "The Pressure-Proof Student",
      category: "Relationships & Youth",
      tagline: "Academic Resilience & Exam Mastery",
      desc: "Equip students with cognitive tools to conquer exam anxiety, master hyper-focus, and build lifelong learning architectures.",
      chapters: ["Dissolving Test Anxiety", "Cognitive Memory Anchors", "Time Architecture for Youth", "Building Growth Mindsets"]
    },
    {
      id: "b5",
      volume: "Vol. 5",
      title: "The Architecture of Inner Peace",
      category: "Personal Mastery",
      tagline: "Stress Management & Mental Clarity",
      desc: "Systematic protocols for neutralizing chronic stress, calming mental chatter, and maintaining equanimity amidst high-pressure environments.",
      chapters: ["Deconstructing Stress Loops", "Physiological Reset Protocols", "Mindfulness in the Boardroom", "Sanctuary of the Mind"]
    },
    {
      id: "b6",
      volume: "Vol. 6",
      title: "Architects of Influence",
      category: "Executive & Leadership",
      tagline: "Persuasion, Body Language & Non-Verbal Mastery",
      desc: "Decode the silent language of human interaction—posture, micro-expressions, and spatial awareness—to project commanding executive presence.",
      chapters: ["Decoding Micro-Expressions", "Postural Congruence", "The Power of Spatial Dynamics", "Ethical Persuasion Frameworks"]
    },
    {
      id: "b7",
      volume: "Vol. 7",
      title: "The Harmony Equation",
      category: "Personal Mastery",
      tagline: "Work-Life Integration & Interpersonal Balance",
      desc: "Move beyond the myth of balance into intentional life integration, aligning professional ambition with personal well-being.",
      chapters: ["Boundary Architecture", "Energy Management vs. Time Management", "Family and Vocation Synergy", "Sustaining Vitality"]
    },
    {
      id: "b8",
      volume: "Vol. 8",
      title: "The Mind's Blueprint",
      category: "Personal Mastery",
      tagline: "Foundational Behavioral Architecture & Habit Systems",
      desc: "The foundational manual for designing automated positive habit loops and reprogramming default psychological paradigms.",
      chapters: ["The Habit Loop Mechanics", "Identity-Based Habits", "Environmental Architecture", "Long-Term Cognitive Maintenance"]
    }
  ],
  competitions: [
    {
      id: "c1",
      date: "November 10, 2026",
      title: "OKSMT Memorial Math & Science Multi-Subject Competition",
      category: "Math & Science 2026",
      summary: "Conducted across multiple student categories to foster analytical rigor, scientific curiosity, and mathematical reasoning.",
      winners: [
        { rank: "Rank 1 (Category 1)", name: "Dhriti Rajanna", score: "86.7%", merit: "Gold Medallion & Certificate" },
        { rank: "Rank 1 (Category 2)", name: "BINDU.A", score: "93.3%", merit: "Gold Medallion & Certificate" },
        { rank: "Rank 2 (Category 2)", name: "ANJANI.S", score: "Top Tier", merit: "Silver Medallion" },
        { rank: "Rank 3 (Category 2)", name: "RAMYA.G", score: "Top Tier", merit: "Bronze Medallion" }
      ],
      participantsNote: "Recognized high-performing participants include S.SRI DHALEESH, AISHWARYA.G, and Tanuj Reddy Daggula."
    },
    {
      id: "c2",
      date: "November 8, 2026",
      title: "OKSMT Memorial English Competition 2026",
      category: "English Competition 2026",
      summary: "An online multi-category academic assessment celebrating linguistic eloquence, vocabulary precision, and critical reading.",
      winners: [
        { rank: "Leader (Category 2)", name: "ANKIT KUMAR B", score: "97.5%", merit: "First Place Excellence Award" },
        { rank: "Leader (Category 1)", name: "Dhriti Rajanna", score: "75.0%", merit: "Category 1 Excellence Award" }
      ],
      participantsNote: "Evaluated across four rigorous student categories with certified digital credentials."
    },
    {
      id: "c3",
      date: "November 2026",
      title: "Bangarpet Cluster Pratibha Karanji School Competition",
      category: "Community & Public Speaking",
      summary: "Sponsored 100 exam pads and supported cluster-level student artistic and intellectual competitions.",
      winners: [
        { rank: "Trust Sponsor", name: "OKS Memorial Trust", score: "100 Exam Pads Sponsored", merit: "Institutional Patronage" }
      ],
      participantsNote: "Empowering rural and semi-urban student clusters across KGF and Bangarpet."
    },
    {
      id: "c4",
      date: "July 12, 2026",
      title: "Children's Public Speaking & Oratory Competition",
      category: "Community & Public Speaking",
      summary: "Organized in coordination with Telugu Kala Samithi in BEML Nagar, nurturing youth confidence and public eloquence.",
      winners: [
        { rank: "Event Host", name: "O V Suresh Babu & Telugu Kala Samithi", score: "Full House Participation", merit: "Community Leadership Award" }
      ],
      participantsNote: "Featuring youth oratory across multiple age brackets with trophy distribution."
    }
  ],
  assessmentQuestions: [
    {
      id: 1,
      question: "When facing high-stakes workplace or academic pressure, how do you primarily respond?",
      options: [
        { text: "I isolate triggers, reframe thoughts cognitively, and maintain calm.", score: 3, pillar: "Cognitive Architecture" },
        { text: "I rely on intuition and push through with high energy.", score: 2, pillar: "Performance" },
        { text: "I often experience stress overload before regaining equilibrium.", score: 1, pillar: "Stress Management" }
      ]
    },
    {
      id: 2,
      question: "How would you rate your mastery over non-verbal communication and micro-expression reading?",
      options: [
        { text: "Advanced: I actively decode posture and non-verbal cues in negotiations.", score: 3, pillar: "Body Language" },
        { text: "Moderate: I notice obvious body language shifts.", score: 2, pillar: "Awareness" },
        { text: "Developing: I focus primarily on verbal dialogue.", score: 1, pillar: "Foundations" }
      ]
    },
    {
      id: 3,
      question: "What is your core objective in seeking executive coaching or behavioral architecture?",
      options: [
        { text: "Mastering NLP, EQ, and advanced leadership influence.", score: 3, pillar: "Executive Leadership" },
        { text: "Enhancing personal relationships and emotional resilience.", score: 3, pillar: "Relationship Mastery" },
        { text: "Overcoming stress, public speaking anxiety, or youth mentorship.", score: 3, pillar: "Youth & Personal Mastery" }
      ]
    }
  ]
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCompCategory, setSelectedCompCategory] = useState("All");
  
  // Assessment Quiz State
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState(null);

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    category: 'Executive Coaching',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ submitted: false, error: false, message: '' });

    // Check if Web3Forms key is configured
    if (SITE_CONTENT.config.web3FormsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      // Fallback direct email mailto
      const mailtoUrl = `mailto:${SITE_CONTENT.config.email}?subject=Inquiry from ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.category)})&body=Name: ${encodeURIComponent(formData.name)}%0D%0AOrganization: ${encodeURIComponent(formData.organization)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0ACategory: ${encodeURIComponent(formData.category)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setFormStatus({ 
        submitted: true, 
        error: false, 
        message: 'Inquiry prepared in your email client! Sent directly to ovsuri@gmail.com.' 
      });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE_CONTENT.config.web3FormsAccessKey,
          subject: `New Inquiry: ${formData.category} - ${formData.name}`,
          from_name: formData.name,
          ...formData
        })
      });
      const result = await response.json();
      if (result.success) {
        setFormStatus({ submitted: true, error: false, message: 'Thank you. Your executive inquiry has been successfully delivered to ovsuri@gmail.com.' });
        setFormData({ name: '', organization: '', email: '', phone: '', category: 'Executive Coaching', message: '' });
      } else {
        setFormStatus({ submitted: true, error: true, message: result.message || 'Submission failed. Please try again or email directly.' });
      }
    } catch (err) {
      setFormStatus({ submitted: true, error: true, message: 'Network error. Please email directly at ovsuri@gmail.com.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuizAnswer = (option) => {
    const nextAnswers = [...quizAnswers, option];
    setQuizAnswers(nextAnswers);
    if (quizStep + 1 < SITE_CONTENT.assessmentQuestions.length) {
      setQuizStep(quizStep + 1);
    } else {
      // Calculate Result
      const totalScore = nextAnswers.reduce((acc, curr) => acc + curr.score, 0);
      let recommendation = "Executive Coaching & Behavioral Architecture Mastery";
      if (totalScore <= 5) recommendation = "Foundational Stress Resilience & Inner Peace Program";
      else if (totalScore <= 7) recommendation = "Advanced NLP & Non-Verbal Executive Presence Masterclass";
      
      setQuizResult({ score: totalScore, recommendation });
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

  const filteredBooks = selectedCategory === "All" 
    ? SITE_CONTENT.books 
    : SITE_CONTENT.books.filter(b => b.category === selectedCategory);

  const filteredCompetitions = selectedCompCategory === "All"
    ? SITE_CONTENT.competitions
    : SITE_CONTENT.competitions.filter(c => c.category === selectedCompCategory);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0B132B] font-sans selection:bg-[#9A7B4F]/20 selection:text-[#0B132B]">
      
      {/* =========================================================================
         HEADER & NAVIGATION
         ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#0B132B]/95 backdrop-blur-md border-b border-[#9A7B4F]/30 text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9A7B4F] to-[#725732] flex items-center justify-center shadow-lg shadow-black/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#FAF9F6]">
                Architecting<span className="text-[#D4B279]">Success</span>.in
              </span>
              <p className="text-[10px] tracking-widest uppercase text-[#9A7B4F] font-medium">O V Suresh Babu Advisory</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-[#D4B279] transition-colors">About</a>
            <a href="#pillars" className="hover:text-[#D4B279] transition-colors">Frameworks</a>
            <a href="#books" className="hover:text-[#D4B279] transition-colors">8-Vol Library</a>
            <a href="#competitions" className="hover:text-[#D4B279] transition-colors">Competitions & Winners</a>
            <a href="#assessment" className="hover:text-[#D4B279] transition-colors">Assessment</a>
            <a href="#contact" className="hover:text-[#D4B279] transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-md bg-gradient-to-r from-[#9A7B4F] to-[#725732] text-white font-medium text-sm tracking-wider uppercase shadow-md hover:brightness-110 transition-all"
            >
              Consultation
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#FAF9F6] hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B132B] border-b border-[#9A7B4F]/30 px-4 pt-2 pb-6 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-[#D4B279]">About</a>
            <a href="#pillars" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-[#D4B279]">Frameworks</a>
            <a href="#books" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-[#D4B279]">8-Vol Library</a>
            <a href="#competitions" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-[#D4B279]">Competitions & Winners</a>
            <a href="#assessment" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-[#D4B279]">Assessment</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-[#D4B279]">Consultation</a>
          </div>
        )}
      </header>

      {/* =========================================================================
         HERO SECTION
         ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0B132B] text-[#FAF9F6] py-24 lg:py-32 border-b border-[#9A7B4F]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#9A7B4F_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#9A7B4F]/20 border border-[#9A7B4F]/40 text-[#D4B279] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              <span>{SITE_CONTENT.hero.badge}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              {SITE_CONTENT.hero.headline}
            </h1>

            <p className="text-lg sm:text-xl text-[#D1D5DB] font-normal leading-relaxed max-w-2xl mx-auto">
              {SITE_CONTENT.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href="#books" 
                className="w-full sm:w-auto px-8 py-4 rounded-md bg-gradient-to-r from-[#9A7B4F] to-[#725732] text-white font-semibold text-sm tracking-wider uppercase shadow-xl hover:brightness-110 transition-all flex items-center justify-center space-x-2"
              >
                <span>Explore 8-Vol Library</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#competitions" 
                className="w-full sm:w-auto px-8 py-4 rounded-md bg-transparent border border-[#9A7B4F]/60 text-[#FAF9F6] font-semibold text-sm tracking-wider uppercase hover:bg-white/5 transition-all flex items-center justify-center space-x-2"
              >
                <span>OKSMT Hall of Fame</span>
                <Trophy className="w-4 h-4 text-[#D4B279]" />
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-12 border-t border-[#9A7B4F]/30 max-w-2xl mx-auto">
              {SITE_CONTENT.hero.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4B279]">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-[#9CA3AF] uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         FOUNDER & CREDENTIALS SECTION
         ========================================================================= */}
      <section id="about" className="py-24 bg-[#FAF9F6] text-[#0B132B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block text-xs font-semibold tracking-widest text-[#9A7B4F] uppercase">Leadership & Pedagogy</div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                Led by Expertise. Grounded in Applied Behavioral Science.
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                As a Deputy General Manager at BEML Limited, Founder Chairman of the OKS Memorial Trust, and an experienced Neuro-Linguistic Programming Master Trainer and Executive Coach, <strong className="text-[#0B132B]">O V Suresh Babu</strong> bridges organizational leadership with rigorous behavioral architecture.
              </p>
              <div className="p-6 rounded-xl bg-white border border-[#9A7B4F]/20 shadow-sm space-y-3">
                <div className="flex items-center space-x-3 text-sm font-semibold text-[#0B132B]">
                  <MapPin className="w-4 h-4 text-[#9A7B4F]" />
                  <span>BEML Nagar, Kolar Gold Fields, Karnataka</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-semibold text-[#0B132B]">
                  <Mail className="w-4 h-4 text-[#9A7B4F]" />
                  <span>{SITE_CONTENT.config.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-semibold text-[#0B132B]">
                  <Phone className="w-4 h-4 text-[#9A7B4F]" />
                  <span>{SITE_CONTENT.config.phone}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SITE_CONTENT.credentials.map((cred, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#9A7B4F] transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#9A7B4F]/10 flex items-center justify-center text-[#9A7B4F] mb-4">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#0B132B] mb-1">{cred.title}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{cred.org}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         CORE FRAMEWORKS & PILLARS
         ========================================================================= */}
      <section id="pillars" className="py-24 bg-[#0B132B] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-semibold tracking-widest text-[#D4B279] uppercase">Core Methodologies</div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              The Architecture of Influence & Resilience
            </h2>
            <p className="text-gray-300 text-base">
              Specialized training programs combining cognitive restructuring, emotional intelligence, and executive communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SITE_CONTENT.pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="p-8 rounded-xl bg-white/5 border border-[#9A7B4F]/30 backdrop-blur-sm hover:border-[#D4B279] transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#9A7B4F]/20 flex items-center justify-center text-[#D4B279] mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-[#FAF9F6] mb-3">{pillar.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center text-xs font-semibold text-[#D4B279] uppercase tracking-wider">
                    <span>Explore Pillar</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
         8-VOLUME DIGITAL BOOK LIBRARY
         ========================================================================= */}
      <section id="books" className="py-24 bg-[#FAF9F6] text-[#0B132B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="text-xs font-semibold tracking-widest text-[#9A7B4F] uppercase">Digital Publications</div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              The Complete 8-Volume Digital Book Series
            </h2>
            <p className="text-gray-600 text-base">
              Authored and compiled as definitive guides on NLP, emotional intelligence, relationships, youth resilience, and inner peace.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {["All", "Executive & Leadership", "Relationships & Youth", "Personal Mastery"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    selectedCategory === cat
                      ? "bg-[#0B132B] text-[#FAF9F6] shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-[#9A7B4F]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div 
                key={book.id}
                onClick={() => setSelectedBook(book)}
                className="group cursor-pointer p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#9A7B4F] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-md bg-[#9A7B4F]/10 text-[#9A7B4F] font-serif text-xs font-bold tracking-wider">
                      {book.volume}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      {book.category}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#0B132B] mb-2 group-hover:text-[#9A7B4F] transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-xs font-medium text-[#9A7B4F] mb-3">{book.tagline}</p>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">{book.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0B132B]">
                  <span>Preview Chapters</span>
                  <ExternalLink className="w-4 h-4 text-[#9A7B4F] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
         OKS MEMORIAL TRUST — COMPETITIONS & WINNERS HALL OF FAME
         ========================================================================= */}
      <section id="competitions" className="py-24 bg-[#0B132B] text-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="text-xs font-semibold tracking-widest text-[#D4B279] uppercase">OKS Memorial Trust</div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Academic Competitions & Winner Hall of Fame
            </h2>
            <p className="text-gray-300 text-base">
              Celebrating excellence across our Math & Science competitions, English oratory events, and youth community initiatives in KGF and Bangarpet.
            </p>

            {/* Competition Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {["All", "Math & Science 2026", "English Competition 2026", "Community & Public Speaking"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCompCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    selectedCompCategory === cat
                      ? "bg-[#D4B279] text-[#0B132B] font-bold shadow-md"
                      : "bg-white/10 text-gray-200 border border-white/20 hover:border-[#D4B279]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCompetitions.map((comp) => (
              <div key={comp.id} className="p-8 rounded-xl bg-white/5 border border-[#9A7B4F]/30 backdrop-blur-sm space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-md bg-[#D4B279]/20 text-[#D4B279] font-serif text-xs font-bold tracking-wider">
                      {comp.date}
                    </span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {comp.category}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#FAF9F6] mb-3">{comp.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">{comp.summary}</p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4B279]">Prize Winners & Leaderboard</h4>
                    <div className="space-y-2">
                      {comp.winners.map((win, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-black/30 border border-white/10 flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-3">
                            <Trophy className="w-4 h-4 text-[#D4B279]" />
                            <div>
                              <span className="font-semibold text-white">{win.name}</span>
                              <span className="block text-xs text-gray-400">{win.rank}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-[#D4B279]">{win.score}</span>
                            <span className="block text-[10px] text-gray-400">{win.merit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-gray-400 italic">
                  Note: {comp.participantsNote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
         DIAGNOSTIC ASSESSMENT INTERACTIVE WIDGET
         ========================================================================= */}
      <section id="assessment" className="py-24 bg-[#FAF9F6] text-[#0B132B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="text-xs font-semibold tracking-widest text-[#9A7B4F] uppercase">Interactive Diagnostic</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Behavioral Readiness & Coaching Evaluator
            </h2>
            <p className="text-gray-600 text-sm">
              Answer 3 quick questions to identify your optimal developmental pathway.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl">
            {!quizResult ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>Question {quizStep + 1} of {SITE_CONTENT.assessmentQuestions.length}</span>
                  <span>{Math.round(((quizStep + 1) / SITE_CONTENT.assessmentQuestions.length) * 100)}% Complete</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B132B]">
                  {SITE_CONTENT.assessmentQuestions[quizStep].question}
                </h3>

                <div className="space-y-3 pt-4">
                  {SITE_CONTENT.assessmentQuestions[quizStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuizAnswer(opt)}
                      className="w-full p-4 rounded-xl text-left bg-[#FAF9F6] border border-gray-200 hover:border-[#9A7B4F] hover:bg-white transition-all font-medium text-sm text-[#0B132B] flex items-center justify-between group"
                    >
                      <span>{opt.text}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#9A7B4F] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6 py-4">
                <div className="w-16 h-16 rounded-full bg-[#9A7B4F]/10 flex items-center justify-center text-[#9A7B4F] mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B132B]">Assessment Complete</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Based on your evaluation, your recommended focus area is:
                </p>
                <div className="p-6 rounded-xl bg-[#FAF9F6] border border-[#9A7B4F]/40 font-serif text-lg font-bold text-[#9A7B4F]">
                  {quizResult.recommendation}
                </div>
                <div className="pt-4 flex items-center justify-center space-x-4">
                  <a 
                    href="#contact" 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, message: `Completed diagnostic assessment. Recommended track: ${quizResult.recommendation}` }));
                    }}
                    className="px-6 py-3 rounded-md bg-[#0B132B] text-[#FAF9F6] font-semibold text-xs tracking-wider uppercase hover:bg-[#9A7B4F] transition-all"
                  >
                    Request Consultation on This Track
                  </a>
                  <button 
                    onClick={resetQuiz}
                    className="px-6 py-3 rounded-md bg-gray-100 text-gray-700 font-semibold text-xs tracking-wider uppercase hover:bg-gray-200 transition-all"
                  >
                    Retake Assessment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
         CONSULTATION & INQUIRY FORM SECTION
         ========================================================================= */}
      <section id="contact" className="py-24 bg-[#0B132B] text-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-semibold tracking-widest text-[#D4B279] uppercase">Direct Advisory</div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Initiate Executive Consultation
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Connect directly for executive coaching sessions, institutional keynote addresses, behavioral architecture programs, or OKS Memorial Trust inquiries.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-5 h-5 text-[#D4B279]" />
                  <span>{SITE_CONTENT.config.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="w-5 h-5 text-[#D4B279]" />
                  <span>{SITE_CONTENT.config.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <MapPin className="w-5 h-5 text-[#D4B279]" />
                  <span>{SITE_CONTENT.config.location}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className="p-8 rounded-2xl bg-white/5 border border-[#9A7B4F]/30 backdrop-blur-sm space-y-6">
                
                {formStatus.submitted && (
                  <div className={`p-4 rounded-xl text-sm font-medium ${formStatus.error ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'}`}>
                    {formStatus.message}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider uppercase text-gray-300">Your Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. O V Suresh Babu" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4B279]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider uppercase text-gray-300">Organization / Institution</label>
                    <input 
                      type="text" 
                      name="organization"
                      value={formData.organization}
                      onChange={handleFormChange}
                      placeholder="e.g. BEML Ltd / OKSMT" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4B279]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider uppercase text-gray-300">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="ovsuri@gmail.com" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4B279]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider uppercase text-gray-300">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+91 9481311666" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4B279]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wider uppercase text-gray-300">Inquiry Category</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0B132B] border border-white/20 text-white text-sm focus:outline-none focus:border-[#D4B279]"
                  >
                    <option value="Executive Coaching">Executive Coaching & NLP</option>
                    <option value="Digital Books">Digital Book Series Inquiry</option>
                    <option value="OKS Memorial Trust">OKS Memorial Trust & Competitions</option>
                    <option value="Keynote Speaking">Keynote Speaking & Masterclass</option>
                    <option value="General Inquiry">General Advisory Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-wider uppercase text-gray-300">Your Message</label>
                  <textarea 
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Describe your requirements or questions..."
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4B279]"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-[#9A7B4F] to-[#725732] text-white font-semibold text-xs tracking-widest uppercase shadow-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending Inquiry...' : 'Submit Executive Inquiry'}</span>
                  <Send className="w-4 h-4" />
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         FOOTER
         ========================================================================= */}
      <footer className="bg-[#070C1E] text-gray-400 py-12 border-t border-[#9A7B4F]/20 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="font-serif text-lg font-bold text-[#FAF9F6]">ArchitectingSuccess.in</span>
            <p className="mt-1">© 2026 O V Suresh Babu. All Rights Reserved. OKS Memorial Trust Framework.</p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-[#D4B279] transition-colors">About</a>
            <a href="#books" className="hover:text-[#D4B279] transition-colors">8-Vol Library</a>
            <a href="#competitions" className="hover:text-[#D4B279] transition-colors">Competitions</a>
            <a href="#contact" className="hover:text-[#D4B279] transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* =========================================================================
         BOOK PREVIEW MODAL
         ========================================================================= */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF9F6] text-[#0B132B] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative border border-[#9A7B4F]/40 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button 
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-md bg-[#9A7B4F]/10 text-[#9A7B4F] font-serif text-xs font-bold tracking-wider">
                  {selectedBook.volume}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {selectedBook.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B132B] leading-tight">
                {selectedBook.title}
              </h3>

              <p className="text-sm font-semibold text-[#9A7B4F]">{selectedBook.tagline}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{selectedBook.desc}</p>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#0B132B]">Selected Chapter Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedBook.chapters.map((ch, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-800 flex items-center space-x-2">
                      <Check className="w-4 h-4 text-[#9A7B4F]" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 flex items-center justify-end space-x-4">
                <button 
                  onClick={() => setSelectedBook(null)}
                  className="px-5 py-2.5 rounded-md bg-gray-200 text-gray-700 font-semibold text-xs tracking-wider uppercase hover:bg-gray-300 transition-all"
                >
                  Close
                </button>
                <a 
                  href="#contact" 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, message: `Inquiring about digital guidebook: ${selectedBook.title} (${selectedBook.volume})` }));
                    setSelectedBook(null);
                  }}
                  className="px-6 py-2.5 rounded-md bg-gradient-to-r from-[#9A7B4F] to-[#725732] text-white font-semibold text-xs tracking-wider uppercase shadow-md hover:brightness-110 transition-all"
                >
                  Request Digital Copy
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
