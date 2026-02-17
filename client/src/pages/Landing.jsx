import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  X, Clock, Calendar, Users, MapPin, Youtube, Instagram, Twitter,
  TrendingUp, Award, Shield, Zap, Target, Crown, Flame, Sparkles,
  ArrowRight, CheckCircle, Star, Gift, Rocket, Diamond, Medal,
  Phone, Mail, Share2, ChevronRight, Play, Download, BookOpen
} from "lucide-react";

export default function Landing() {
  // Urgency countdown to event date: 20 Feb 2026, 8PM EAT (UTC+3)
  const targetDate = new Date("2026-02-20T20:00:00+03:00");

  function calcTimeLeft() {
    const diff = targetDate - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // Competition comparison data
  const competitors = [
    { name: "Other Courses", price: "KES 15,000+", students: "Unknown", support: "❌", results: "❌" },
    { name: "Keith Muoki", price: "KES 1,000", students: "5000+", support: "✅ Live", results: "✅ Proven" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      {/* Floating Announcement Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-green-400 text-black py-2 px-4 z-50"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm font-medium">
          <span>🔥 LIVE MASTERCLASS IN 2 DAYS</span>
          <span>⭐ 5000+ STUDENTS ALREADY REGISTERED</span>
          <span>⚡ LIMITED SEATS: 47 SPOTS LEFT</span>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
        {/* Header with Authority Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <Crown className="text-green-400" size={32} />
            <span className="text-xl font-bold">KEITH MUOKI OFFICIAL</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
              ⭐ #1 Rated Affiliate Course in Africa
            </span>
          </div>
        </motion.div>

        {/* Main Title with Power Words */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter">
            <span className="block text-zinc-500">MASTER</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-yellow-400">
              AFFILIATE MARKETING
            </span>
            <span className="block text-5xl md:text-6xl text-zinc-400 mt-4">
              & Escape the 9-5 FOREVER
            </span>
          </h1>
        </motion.div>

        {/* Main Grid - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Persuasive Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Value Proposition with Numbers */}
            <div className="bg-gradient-to-r from-green-500/20 to-transparent p-8 rounded-2xl border-l-4 border-green-400">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How to Make KES 100K+ Monthly
                <span className="block text-green-400">Recommending Products You Already Love</span>
              </h2>
              <p className="text-lg text-zinc-300">
                Join Africa's #1 Transformation Life Coach in this live, hands-on masterclass and discover the exact system that helped 5000+ students generate their first affiliate income in 30 days or less.
              </p>
            </div>

            {/* Competition Killer Comparison Table */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="text-green-400" />
                Why Keith's Students Win (While Others Fail)
              </h3>
              <div className="space-y-3">
                {[
                  "❌ Other courses: Theory with no implementation",
                  "✅ Keith's Method: Live implementation & feedback",
                  "❌ Others: Outdated strategies from 2020",
                  "✅ Keith's Method: 2026 cutting-edge techniques",
                  "❌ Others: No support after payment",
                  "✅ Keith's Method: Lifetime community access",
                  "❌ Others: Generic one-size-fits-all approach",
                  "✅ Keith's Method: Personalized strategy for each student"
                ].map((item, i) => (
                  <div key={i} className="text-sm font-mono border-b border-zinc-800 pb-2">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Value Stack - What They Get */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Rocket />, title: "Live Training", value: "2 Hours Live" },
                { icon: <Gift />, title: "Bonuses Worth", value: "KES 5,000" },
                { icon: <Users />, title: "Community", value: "5000+ Members" },
                { icon: <Download />, title: "Resources", value: "20+ Templates" }
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-xl">
                  <div className="text-green-400 mb-2">{item.icon}</div>
                  <div className="text-xs text-zinc-400">{item.title}</div>
                  <div className="font-bold">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Event Details with Urgency */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/5 border border-green-500/30 p-5 rounded-xl">
                <Calendar className="text-green-400 mb-2" size={24} />
                <div className="text-sm text-zinc-400">Date</div>
                <div className="font-semibold text-lg">20th Feb 2026</div>
                <div className="text-xs text-green-400 mt-1">🔥 Only 2 days left</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl">
                <Clock className="text-green-400 mb-2" size={24} />
                <div className="text-sm text-zinc-400">Time</div>
                <div className="font-semibold text-lg">8PM – 10PM EAT</div>
                <div className="text-xs text-zinc-500 mt-1">Sharp. Don't be late</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl">
                <Users className="text-green-400 mb-2" size={24} />
                <div className="text-sm text-zinc-400">Platform</div>
                <div className="font-semibold text-lg">Live on Zoom</div>
                <div className="text-xs text-zinc-500">Link sent after payment</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-500 text-black text-xs px-2 py-1 rounded-bl-lg font-bold">50% OFF</div>
                <div className="text-green-400 mb-2 font-bold text-xl">KES</div>
                <div className="text-sm text-zinc-400">Normal Price</div>
                <div className="font-semibold text-lg line-through text-zinc-500">KES 2,000</div>
                <div className="text-2xl font-bold text-green-400">KES 1,000</div>
                <div className="text-xs text-zinc-400">($8 USD)</div>
              </div>
            </div>

            {/* Instructor Authority Section */}
            <div className="flex items-start gap-4 bg-gradient-to-r from-green-500/20 to-transparent p-6 rounded-xl border border-green-500/30">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-2xl font-bold text-black">
                KM
              </div>
              <div>
                <div className="text-zinc-400 text-sm">Your Mentor</div>
                <div className="text-2xl font-bold">Keith Muoki</div>
                <div className="text-green-400 font-semibold">Africa's No.1 Transformation Life Coach</div>
                <div className="flex items-center gap-2 mt-2 text-sm text-zinc-300">
                  <span>⭐ 5000+ Students</span>
                  <span>•</span>
                  <span>🎤 100+ Live Events</span>
                  <span>•</span>
                  <span>📺 Featured on KTN, Citizen TV</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - High-Conversion Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-24"
          >
            <div className="bg-zinc-900 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-green-500/10">
              {/* Card Header with Live Badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 animate-pulse">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    LIVE IN 2 DAYS
                  </span>
                </div>
                <button className="absolute top-4 right-4 z-10 text-zinc-400 hover:text-white bg-black/50 w-10 h-10 rounded-full flex items-center justify-center">
                  <X size={20} />
                </button>
                
                {/* Image Area with Overlay */}
                <div className="relative">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-green-400/30 to-green-600/30 flex items-center justify-center">
                    <img
                      src="/keith1.png"
                      alt="Keith Muoki Live Training"
                      className="w-full h-full object-contain opacity-80"
                    />
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Play className="text-black ml-1" size={32} />
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold mb-1">Learn Affiliate Marketing</h3>
                    <p className="text-zinc-300">The Exact System That Made Me KES 2.5M in 6 Months</p>
                  </div>
                </div>
              </div>

              {/* Urgency Timer */}
              <div className="p-6 border-b border-zinc-800 bg-gradient-to-r from-red-500/10 to-orange-500/10">
                <div className="text-center mb-3">
                  <span className="text-orange-400 font-bold">⏰ OFFER EXPIRES IN:</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { value: String(timeLeft.days).padStart(2, "0"), label: "Days" },
                    { value: String(timeLeft.hours).padStart(2, "0"), label: "Hours" },
                    { value: String(timeLeft.minutes).padStart(2, "0"), label: "Mins" },
                    { value: String(timeLeft.seconds).padStart(2, "0"), label: "Secs" }
                  ].map((item, i) => (
                    <div key={i} className="bg-black/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-400">{item.value}</div>
                      <div className="text-xs text-zinc-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="p-6 border-b border-zinc-800">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="text-green-400" size={20} />
                  Here's Exactly What You Get:
                </h4>
                <div className="space-y-3">
                  {[
                    "✅ 2-Hour Live Training with Keith (Value: KES 10,000)",
                    "✅ Step-by-Step Affiliate System (Value: KES 5,000)",
                    "✅ 20+ Done-For-You Templates (Value: KES 3,000)",
                    "✅ Lifetime Access to Private Community (Value: Priceless)",
                    "✅ 30-Day Implementation Challenge (Value: KES 2,000)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={16} />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus Highlight */}
                <div className="mt-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-xl border border-yellow-500/30">
                  <div className="flex items-center gap-2 text-yellow-400 font-bold mb-2">
                    <Gift size={18} />
                    EARLY BIRD BONUS (if you join now):
                  </div>
                  <p className="text-sm text-zinc-300">
                    1-on-1 Strategy Call with Keith (Worth KES 5,000) - FREE for first 50 registrants
                  </p>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="p-6">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <div className="text-zinc-400 text-sm">Total Value:</div>
                    <div className="text-xl line-through text-zinc-500">KES 25,000</div>
                    <div className="text-4xl font-bold text-green-400 mt-2">KES 1,000</div>
                    <div className="text-zinc-400">($8 USD) one-time payment</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-zinc-400">You Save</div>
                    <div className="text-2xl font-bold text-green-400">96%</div>
                  </div>
                </div>

                {/* Social Proof - Live Counter */}
                <div className="mb-4 text-center">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />
                    ))}
                    <span className="text-sm text-zinc-400 ml-2">4.9 (500+ reviews)</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-green-400 font-bold">47 people</span> are viewing this page right now
                  </div>
                </div>

                <motion.a
                  href="https://paystack.shop/pay/afflmarketingclass"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-bold text-xl py-6 rounded-xl shadow-2xl shadow-green-500/30 relative overflow-hidden group text-center"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    CLAIM YOUR SEAT NOW - KES 1,000
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.a>

                {/* Trust Badges */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1"><Shield size={14} /> 30-Day Guarantee</span>
                  <span className="flex items-center gap-1"><Zap size={14} /> Instant Access</span>
                  <span className="flex items-center gap-1"><Users size={14} /> 5000+ Students</span>
                </div>

                {/* Payment Methods */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-zinc-600 mb-2">Secure Payment by Paystack</p>
                  <div className="flex justify-center gap-3 text-2xl">
                    <span className="opacity-50">💳</span>
                    <span className="opacity-50">📱</span>
                    <span className="opacity-50">💵</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex justify-center gap-6">
              <Youtube size={20} className="text-zinc-500 hover:text-red-500 cursor-pointer" />
              <Instagram size={20} className="text-zinc-500 hover:text-pink-500 cursor-pointer" />
              <Twitter size={20} className="text-zinc-500 hover:text-blue-400 cursor-pointer" />
              <Phone size={20} className="text-zinc-500 hover:text-green-400 cursor-pointer" />
              <Mail size={20} className="text-zinc-500 hover:text-green-400 cursor-pointer" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Testimonials Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { name: "Sarah K.", result: "Made KES 45K first month", text: "Life-changing!" },
            { name: "James O.", result: "Quit his job in 3 months", text: "Best decision ever" },
            { name: "Mary W.", result: "KES 80K in month 2", text: "The system works!" },
            { name: "Peter M.", result: "Full-time affiliate", text: "Thank you Keith" }
          ].map((testimonial, i) => (
            <div key={i} className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-xl text-center">
              <div className="text-green-400 font-bold text-sm">{testimonial.result}</div>
              <div className="text-xs text-zinc-400 mt-1">"{testimonial.text}"</div>
              <div className="text-xs text-zinc-500 mt-2">- {testimonial.name}</div>
            </div>
          ))}
        </motion.div>

        {/* FAQ Teaser */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-sm">
            🔥 This special price won't last. Join 5000+ students who've already transformed their income.
          </p>
        </motion.div>
      </div>
    </div>
  );
}