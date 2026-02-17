import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock, Calendar, Users, Youtube, Instagram, Twitter,
  Shield, Zap, Crown, Sparkles,
  ArrowRight, CheckCircle,
  Phone, Mail
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

  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      {/* Announcement Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-green-400 text-black py-2 px-4 z-50"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
          <span>Live Masterclass — 20th Feb, 8PM EAT</span>
          <span>•</span>
          <span>Limited Seats Remaining</span>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-3"
        >
          <Crown className="text-green-400" size={32} />
          <span className="text-xl font-bold">KEITH MUOKI OFFICIAL</span>
        </motion.div>

        {/* Main Title */}
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
              & Build Your Income Online
            </span>
          </h1>
        </motion.div>

        {/* Main Grid - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 lg:order-last"
          >
            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-green-500/20 to-transparent p-8 rounded-2xl border-l-4 border-green-400">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How to Make KES 100K+ Monthly
                <span className="block text-green-400">Recommending Products You Already Love</span>
              </h2>
              <p className="text-lg text-zinc-300">
                Join Africa's #1 Transformation Life Coach in this live, hands-on masterclass and discover the exact system that helped 5000+ students generate their first affiliate income in 30 days or less.
              </p>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/5 border border-green-500/30 p-5 rounded-xl">
                <Calendar className="text-green-400 mb-2" size={24} />
                <div className="text-sm text-zinc-400">Date</div>
                <div className="font-semibold text-lg">20th Feb 2026</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl">
                <Clock className="text-green-400 mb-2" size={24} />
                <div className="text-sm text-zinc-400">Time</div>
                <div className="font-semibold text-lg">8PM – 10PM EAT</div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl">
                <Users className="text-green-400 mb-2" size={24} />
                <div className="text-sm text-zinc-400">Platform</div>
                <div className="font-semibold text-lg">Live on Zoom</div>
                <div className="text-xs text-zinc-500">Link sent after payment</div>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-start gap-4 bg-gradient-to-r from-green-500/20 to-transparent p-6 rounded-xl border border-green-500/30">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-2xl font-bold text-black shrink-0">
                KM
              </div>
              <div>
                <div className="text-zinc-400 text-sm">Your Mentor</div>
                <div className="text-2xl font-bold">Keith Muoki</div>
                <div className="text-green-400 font-semibold">Africa's No.1 Transformation Life Coach</div>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-zinc-300">
                  <span>5000+ Students</span>
                  <span>•</span>
                  <span>100+ Live Events</span>
                  <span>•</span>
                  <span>Featured on KTN, Citizen TV</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Column - Sticky Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-24 lg:order-first"
          >
            <div className="bg-zinc-900 backdrop-blur-xl border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-green-500/10">
              {/* Image */}
              <div className="relative">
                <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
                  <span className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold flex items-center gap-2 animate-pulse">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    LIVE IN 3 DAYS
                  </span>
                </div>
                <div className="w-full aspect-[3/4] bg-gradient-to-br from-green-400/30 to-green-600/30 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}keith1.png`}
                    alt="Keith Muoki Live Training"
                    className="w-full h-full object-contain opacity-80"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold mb-1">Learn Affiliate Marketing</h3>
                  <p className="text-zinc-300">The Exact System That Made Me KES 2.5M in 6 Months</p>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="p-6 border-b border-zinc-800 bg-gradient-to-r from-red-500/10 to-orange-500/10">
                <div className="text-center mb-3">
                  <span className="text-orange-400 font-bold">Registration closes in:</span>
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

              {/* What You Get */}
              <div className="p-6 border-b border-zinc-800">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="text-green-400" size={20} />
                  What You Get:
                </h4>
                <div className="space-y-3">
                  {[
                    "A simple plan to start making money with affiliate marketing",
                    "How to pick good products without guessing",
                    "A system you can use again and again to grow your income",
                    "Easy ways to find buyers without begging or spamming",
                    "Helpful tools that save you time and mistakes",
                    "The right mindset to stay focused and keep going",
                    "A group of people learning and growing with you",
                    "A live demo showing how affiliate marketing works",
                    "Ask questions and get help in real time"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={16} />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and CTA */}
              <div className="p-6">
                <div className="mb-6">
                  <div className="text-lg line-through text-zinc-500">KES 2,000</div>
                  <div className="text-4xl font-bold text-green-400">KES 1,000</div>
                  <div className="text-zinc-400 text-sm">($8 USD) — one-time payment</div>
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
                    CLAIM YOUR SEAT — KES 1,000
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.a>

                <div className="text-center text-sm text-zinc-500 my-3">— or pay with card —</div>

                <motion.a
                  href="https://calendly.com/keithmuoki/affiliate-marketing-masterclass-keith-muoki-stripe"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-lg py-5 rounded-xl shadow-2xl shadow-indigo-500/20 relative overflow-hidden group text-center"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    PAY WITH STRIPE (CARD/VISA)
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.a>

                {/* Trust Badges */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1"><Shield size={14} /> 30-Day Guarantee</span>
                  <span className="flex items-center gap-1"><Zap size={14} /> Instant Access</span>
                  <span className="flex items-center gap-1"><Users size={14} /> 5000+ Students</span>
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

        {/* Testimonials */}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-sm">
            Join 5000+ students who've already transformed their income.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
