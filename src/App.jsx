import React, { useState, useEffect } from 'react';
import { Heart, Instagram, Youtube, Twitter, Mail, ShoppingBag, Crown, Sparkles, Star, Link as LinkIcon, Lock, TrendingUp, Palette, Briefcase, Activity, Home, Cookie, Scissors, Brain, Dumbbell, UtensilsCrossed, Terminal, Code, Zap, Rocket, DollarSign, FileText, Edit3, Users, ArrowLeft, Cpu, Database, Globe, Shirt, Smile, Gem, Wand2, Camera, Video, Target, Award, GraduationCap, BookOpen, ChevronRight } from 'lucide-react';
import MediaKit from './MediaKit.jsx';
import PartnershipsPage from './Partnerships.jsx';
import AvatarCustomizer from './AvatarCustomizer.jsx';
import './email-utils.js'; // Load email collection utilities
import { fetchProducts, handleAffiliateClick } from './services/affiliateService.js';

// Beauty Closet Component - Pink Fitting Room Theme
function BeautyClosetPage({ onBack, myPicks = [], handleAffiliateClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [showTemplate, setShowTemplate] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleUnlock = () => {
    if (email && email.includes('@')) {
      setUnlocked(true);
      setShowTemplate(false);
    } else {
      alert('Please enter a valid email address');
    }
  };

  const hairCompanies = [
    { name: 'Mielle Organics', category: 'Natural Hair Care', contact: 'partnerships@mielleorganics.com' },
    { name: 'Pattern Beauty', category: 'Textured Hair', contact: 'collaborations@patternbeauty.com' },
    { name: 'Olaplex', category: 'Hair Treatment', contact: 'influencer@olaplex.com' },
    { name: 'Drybar', category: 'Styling Tools', contact: 'marketing@drybar.com' },
    { name: 'Briogeo', category: 'Clean Hair Care', contact: 'partnerships@briogeo.com' },
    { name: 'K18', category: 'Hair Repair', contact: 'creators@k18hair.com' }
  ];

  const emailTemplate = `Subject: Collaboration Opportunity with [Your Name] - [Platform] Creator

Hi [Brand Name] Team,

My name is [Your Name], and I'm a content creator specializing in [beauty/fashion/lifestyle] with [X] followers on [Platform].

I absolutely love your [specific product/brand mission], and I believe my audience would genuinely benefit from discovering your products.

Quick Stats:
• [Platform]: [X] followers
• Engagement Rate: [X]%
• Demographics: [Age range, location, interests]
• Content Focus: [Your niches]

I'd love to explore a potential partnership through:
• Dedicated product review posts
• Instagram/TikTok Reels featuring your products
• Long-term brand ambassador opportunities
• Affiliate partnership

My audience is highly engaged and actively seeks my recommendations in the beauty/lifestyle space. I've successfully partnered with brands like [mention any previous collabs].

Would you be open to discussing a collaboration? I'd be happy to send over my media kit and discuss how we can create authentic content that resonates with both our audiences.

Looking forward to hearing from you!

Best regards,
[Your Name]
[Your Email]
[Your Social Links]`;

  const copyTemplate = () => {
    navigator.clipboard.writeText(emailTemplate);
    alert('Email template copied to clipboard!');
  };

  const beautyCategories = [
    {
      title: 'Shop the Look: Fall Outfit',
      icon: Shirt,
      description: 'Sleeveless jumpsuit + suede boots - effortless fall style',
      color: 'from-amber-500 to-orange-600',
      url: 'https://amzn.to/47v5ZEZ',
      featured: true
    },
    {
      title: 'Hair Goals: Soft Waves',
      icon: Sparkles,
      description: 'Water wave wig + cozy headbands - effortless beauty',
      color: 'from-purple-500 to-pink-500',
      url: 'https://www.amazon.com/shop/itgirlsyd19/photo/amzn1.shoppablemedia.v1.5e178c68-c8ef-410c-9899-17662a67cd1b',
      featured: true
    },
    {
      title: 'Fashion Hauls & GRWM',
      icon: Shirt,
      description: 'Try-ons, outfit styling & full get-ready-with-me videos',
      color: 'from-pink-400 to-rose-500',
      url: '#'
    },
    {
      title: 'Beauty Tutorials',
      icon: Palette,
      description: 'Makeup looks, skincare routines & product reviews',
      color: 'from-fuchsia-400 to-pink-500',
      url: '#'
    },
    {
      title: 'Shop My Favorites',
      icon: Crown,
      description: 'Curated beauty & fashion must-haves',
      color: 'from-pink-400 to-purple-500',
      url: 'https://www.amazon.com/shop/itgirlsyd19'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Newspaper Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 3px)',
        backgroundSize: '100% 40px'
      }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group mb-8 flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-pink-300 px-6 py-3 rounded-full hover:border-pink-400 hover:shadow-lg hover:shadow-pink-300/50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-pink-500 group-hover:-translate-x-1 transition-transform" />
          <span className="text-pink-600 font-semibold">Back to Main</span>
        </button>

        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          {/* Vanity mirror frame */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 rounded-2xl blur-2xl opacity-40" />
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-pink-200">
              <div className="flex items-center justify-center gap-6 mb-6">
                <Palette className="w-16 h-16 text-pink-500" />
                <Shirt className="w-20 h-20 text-rose-400" />
                <Sparkles className="w-16 h-16 text-purple-500" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-3">
                Beauty Studio
              </h1>
              <p className="text-pink-600 font-medium">Professional Beauty & Style</p>
            </div>
          </div>

          <p className="text-xl text-gray-800 font-semibold mb-4">
            Your Personal Beauty & Fashion Hub
          </p>
          
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore curated makeup tutorials, fashion inspiration, and skincare routines.
            Everything you need for your beauty journey in one place.
          </p>
        </div>

        {/* ⭐ Featured Product of the Week */}
        <div className={`mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden border-2 border-pink-400/30">
            {/* Animated background sparkles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-4 left-8 text-2xl animate-bounce" style={{animationDuration: '2s'}}>✨</div>
              <div className="absolute top-8 right-12 text-xl animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.3s'}}>💫</div>
              <div className="absolute bottom-6 left-16 text-lg animate-bounce" style={{animationDuration: '1.8s', animationDelay: '0.6s'}}>⭐</div>
              <div className="absolute bottom-4 right-8 text-2xl animate-bounce" style={{animationDuration: '2.2s', animationDelay: '0.9s'}}>✨</div>
              <div className="absolute top-1/2 left-4 text-sm animate-ping opacity-50" style={{animationDuration: '3s'}}>💖</div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              {/* Animated Star Icon */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 blur-2xl opacity-60 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 p-5 rounded-2xl shadow-xl animate-pulse">
                  <div className="text-5xl animate-bounce" style={{animationDuration: '1.5s'}}>⭐</div>
                </div>
                {/* Rotating ring */}
                <div className="absolute -inset-2 border-2 border-dashed border-pink-400/50 rounded-2xl animate-spin" style={{animationDuration: '10s'}}></div>
              </div>
              
              {/* Product Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-xs font-bold mb-3 animate-pulse">
                  <span>🔥</span>
                  <span>PRODUCT OF THE WEEK</span>
                  <span>🔥</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  Dola Hair Wax Stick
                </h3>
                <p className="text-pink-200 text-sm md:text-base mb-4">
                  Flyaway Control & Styling Pomade for Kids & Women • Sleek edges, no flakes, all-day hold! 💕
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
                  <a
                    href="https://www.amazon.com/dp/B0EXAMPLE?tag=itgirlsyd-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-xl font-bold hover:from-pink-400 hover:to-purple-400 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Shop Now
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  <span className="text-yellow-300 text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-300" />
                    IT Girl's Pick!
                  </span>
                </div>
              </div>
              
              {/* Product Image Placeholder */}
              <div className="hidden lg:block flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-2xl border-2 border-white/20 flex items-center justify-center">
                  <span className="text-5xl">💇‍♀️</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Looks - Small Bubbles on Top */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-center text-gray-600 font-medium mb-4 text-sm">✨ Shop Featured Looks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {beautyCategories.filter(cat => cat.featured).map((category, index) => (
              <a
                key={index}
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-gradient-to-r ${category.color} text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2`}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-semibold text-sm">{category.title.replace('Shop the Look: ', '').replace('Hair Goals: ', '')}</span>
                <ShoppingBag className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Main Beauty Categories - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {beautyCategories.filter(cat => !cat.featured).map((category, index) => (
            <a
              key={index}
              href={category.url}
              target={category.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`group bg-white/80 backdrop-blur-sm border-3 border-pink-200 rounded-2xl p-6 hover:border-pink-400 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-pink-300/50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Category icon */}
              <div className="relative mb-4">
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-xl opacity-60 group-hover:opacity-90 transition-opacity`} />
                <div className={`relative bg-gradient-to-r ${category.color} p-5 rounded-2xl inline-block transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Category title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                {category.title}
              </h3>

              {/* Category description */}
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>

              {/* View button */}
              <div className={`flex items-center justify-center gap-2 bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:shadow-lg transition-all`}>
                <Sparkles className="w-4 h-4" />
                <span>Explore</span>
                <Heart className="w-4 h-4 fill-white" />
              </div>
            </a>
          ))}
        </div>

        {/* Unlock Brand Contacts Section */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 rounded-2xl p-8 shadow-2xl border-2 border-purple-500/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            <div className="relative z-10">
              {!unlocked ? (
                /* Locked State */
                <div className="text-center">
                  {/* Pre-order Banner */}
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 rounded-full inline-flex items-center gap-2 mb-6 animate-pulse">
                    <span className="text-lg">🚀</span>
                    <span className="font-bold text-sm">PRE-ORDER • Releasing January 1st, 2026</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Lock className="w-12 h-12 text-purple-300" />
                    <Crown className="w-12 h-12 text-pink-300" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Insider Access Kit</h2>
                  <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
                    Pre-order exclusive access to my curated hair brand contacts + proven email templates 
                    delivered through your Scribed.ai workspace!
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 max-w-md mx-auto border border-white/20">
                    <h3 className="text-white font-bold mb-4">What You'll Get on Jan 1st:</h3>
                    <ul className="text-left text-purple-100 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-purple-300 mt-1 flex-shrink-0" />
                        <span>6+ verified hair brand partnership contacts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-purple-300 mt-1 flex-shrink-0" />
                        <span>Proven email templates for brand outreach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-purple-300 mt-1 flex-shrink-0" />
                        <span>Tips for successful collaborations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Crown className="w-4 h-4 text-purple-300 mt-1 flex-shrink-0" />
                        <span>Access via Scribed.ai workspace</span>
                      </li>
                    </ul>
                  </div>

                  <div className="max-w-md mx-auto">
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-4 mb-4 border border-cyan-400/30">
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-200 text-sm">Early Bird Price:</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black text-white">$1.99</span>
                          <span className="text-purple-300 line-through text-sm">$4.99</span>
                        </div>
                      </div>
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email for delivery"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 transition-all mb-4"
                    />
                    <a
                      href="https://paypal.me/SydneyRamey894/1.99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-400 hover:to-cyan-400 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      <span className="text-lg">🚀</span>
                      Pre-order Now - $1.99
                      <Sparkles className="w-5 h-5" />
                    </a>
                    <p className="text-cyan-300 text-xs mt-3">
                      Secure PayPal checkout • Delivered via Scribed.ai on January 1st, 2026
                    </p>
                    <p className="text-purple-300 text-xs mt-2">
                      Email sydney@itgirlsydcontent.com after payment with your email for Scribed invite! 💕
                    </p>
                  </div>
                </div>
              ) : (
                /* Unlocked State */
                <div>
                  <div className="text-center mb-8">
                    <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full mb-4 flex items-center gap-2">
                      <Crown className="w-5 h-5" />
                      <span className="font-bold">UNLOCKED!</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Brand Contact Directory</h2>
                    <p className="text-purple-200">
                      Here are verified hair brand contacts for partnership opportunities
                    </p>
                  </div>

                  {/* Hair Brand Contacts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {hairCompanies.map((company, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:border-purple-300 transition-all">
                        <h4 className="text-white font-bold text-lg mb-1">{company.name}</h4>
                        <p className="text-purple-300 text-sm mb-3">{company.category}</p>
                        <a 
                          href={`mailto:${company.contact}`}
                          className="text-pink-300 hover:text-pink-200 text-sm font-mono break-all transition-colors flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4 flex-shrink-0" />
                          {company.contact}
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Email Template Toggle */}
                  <div className="text-center mb-6">
                    <button
                      onClick={() => setShowTemplate(!showTemplate)}
                      className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-bold transition-all border border-white/30 inline-flex items-center gap-2"
                    >
                      <FileText className="w-5 h-5" />
                      {showTemplate ? 'Hide' : 'Show'} Email Template
                      <ArrowLeft className={`w-5 h-5 transition-transform ${showTemplate ? 'rotate-90' : '-rotate-90'}`} />
                    </button>
                  </div>

                  {/* Email Template */}
                  {showTemplate && (
                    <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-bold flex items-center gap-2">
                          <Mail className="w-5 h-5 text-purple-300" />
                          Brand Outreach Email Template
                        </h4>
                        <button
                          onClick={copyTemplate}
                          className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2"
                        >
                          <FileText className="w-4 h-4" />
                          Copy Template
                        </button>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/30">
                        <pre className="text-purple-100 text-xs font-mono whitespace-pre-wrap leading-relaxed">
                          {emailTemplate}
                        </pre>
                      </div>
                      <p className="text-purple-300 text-xs mt-4">
                        💡 Tip: Personalize this template with your stats and voice before sending!
                      </p>
                    </div>
                  )}

                  <p className="text-center text-purple-300 text-sm mt-6">
                    Use these resources wisely! Always be authentic and professional in your outreach. 💕
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Makeup Videos Section */}
        <div className={`mb-12 border-t border-gray-200 pt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h2 className="text-4xl font-black tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Makeup Videos
            </h2>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Tutorials & Looks</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for video embeds */}
            <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
              <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-bold mb-1">Everyday Glam Look</h3>
              <p className="text-sm text-gray-600">Quick 5-minute makeup routine</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
              <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-bold mb-1">Full Glam Tutorial</h3>
              <p className="text-sm text-gray-600">Complete step-by-step guide</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
              <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-bold mb-1">Natural Makeup Look</h3>
              <p className="text-sm text-gray-600">Fresh-faced everyday beauty</p>
            </div>
          </div>
        </div>

        {/* Hair Care Routines Section */}
        <div className={`mb-12 border-t border-gray-200 pt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h2 className="text-4xl font-black tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Hair Care Routines
            </h2>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Healthy Hair Tips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
              <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-bold mb-1">Wash Day Routine</h3>
              <p className="text-sm text-gray-600">Complete hair care process</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
              <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-bold mb-1">Styling Tips</h3>
              <p className="text-sm text-gray-600">Easy everyday hairstyles</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
              <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-bold mb-1">Protective Styles</h3>
              <p className="text-sm text-gray-600">Maintaining healthy hair</p>
            </div>
          </div>
        </div>

        {/* Skincare Routines Section */}
        <div className={`mb-12 border-t border-gray-200 pt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h2 className="text-4xl font-black tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Skincare Routines
            </h2>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Glow Up Your Skin</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
              <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-bold mb-1">Morning Routine</h3>
              <p className="text-sm text-gray-600">Start your day right</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
              <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-bold mb-1">Nighttime Routine</h3>
              <p className="text-sm text-gray-600">Evening skincare essentials</p>
            </div>
            <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
              <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Video className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-bold mb-1">Product Reviews</h3>
              <p className="text-sm text-gray-600">Honest skincare reviews</p>
            </div>
          </div>
        </div>

        {/* Editor's Picks - Shop My Picks */}
        <div className={`mb-12 border-t border-gray-200 pt-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h2 className="text-4xl font-black tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Editor's Picks
            </h2>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Shop My Picks</p>
            <p className="text-gray-700 max-w-2xl">
              Everything I use & love! Click to shop - your support means the world 💕
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {myPicks.slice(0, 8).map((product) => (
              <div
                key={product.id}
                onClick={() => handleAffiliateClick(
                  product.id,
                  product.affiliateUrl,
                  product.source || 'amazon',
                  product.name
                )}
                className="group border-2 border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all cursor-pointer bg-white overflow-hidden"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-sm mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-1">{product.description}</p>
                  <div className="font-bold text-sm">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="https://www.amazon.com/shop/itgirlsyd19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-300 rounded-lg px-6 py-3 font-semibold text-sm hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              View Full Storefront →
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
            <p className="text-pink-600 font-semibold">
              Made with love by IT Girl
            </p>
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
          </div>
          <p className="text-gray-500 text-sm">
            Your beauty bestie since 2025 💕✨
          </p>
        </div>
      </div>
    </div>
  );
}

// Business & Tech Guides - Free Resource Page
function BusinessTechGuides({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toolCategories = [
    {
      category: 'AI & Automation',
      icon: Brain,
      color: 'from-purple-500 to-indigo-600',
      tools: [
        { name: 'ChatGPT', description: 'AI assistant for content creation & problem solving', url: 'https://chat.openai.com', icon: Sparkles },
        { name: 'Microsoft Copilot', description: 'Integrated AI across Microsoft apps', url: 'https://copilot.microsoft.com', icon: Zap },
        { name: 'Scribed.ai', description: 'Auto-generate step-by-step guides & tutorials', url: 'https://scribed.ai', icon: FileText }
      ]
    },
    {
      category: 'Development & Code',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      tools: [
        { name: 'Cursor', description: 'AI-powered code editor for rapid development', url: 'https://cursor.sh', icon: Terminal },
        { name: 'GitHub', description: 'Version control & code collaboration platform', url: 'https://github.com', icon: Globe },
        { name: 'Vercel', description: 'Deploy & host websites instantly', url: 'https://vercel.com', icon: Rocket }
      ]
    },
    {
      category: 'Design & Creative',
      icon: Palette,
      color: 'from-pink-500 to-rose-600',
      tools: [
        { name: 'Canva', description: 'Easy graphic design for social media & more', url: 'https://canva.com', icon: Wand2 },
        { name: 'Adobe Creative Cloud', description: 'Professional creative suite', url: 'https://adobe.com', icon: Palette },
        { name: 'Figma', description: 'Collaborative interface design tool', url: 'https://figma.com', icon: Gem }
      ]
    },
    {
      category: 'Video & Content',
      icon: Video,
      color: 'from-orange-500 to-red-600',
      tools: [
        { name: 'Adobe Premiere Pro', description: 'Professional video editing', url: 'https://adobe.com/products/premiere.html', icon: Video },
        { name: 'CapCut', description: 'Easy video editing for TikTok & social', url: 'https://capcut.com', icon: Scissors },
        { name: 'Descript', description: 'Video editing through text transcription', url: 'https://descript.com', icon: Edit3 }
      ]
    },
    {
      category: 'Organization & Productivity',
      icon: Briefcase,
      color: 'from-green-500 to-emerald-600',
      tools: [
        { name: 'Notion', description: 'All-in-one workspace for notes & projects', url: 'https://notion.so', icon: FileText },
        { name: 'Trello', description: 'Visual project management boards', url: 'https://trello.com', icon: Target },
        { name: 'Airtable', description: 'Spreadsheet-database hybrid for organization', url: 'https://airtable.com', icon: Database }
      ]
    },
    {
      category: 'Social Media Management',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-600',
      tools: [
        { name: 'Hootsuite', description: 'Schedule & manage all social platforms', url: 'https://hootsuite.com', icon: Activity },
        { name: 'Later', description: 'Visual social media planner', url: 'https://later.com', icon: Instagram },
        { name: 'Linktree', description: 'One link for all your content', url: 'https://linktr.ee', icon: LinkIcon }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Glowing orbs */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <button
          onClick={onBack}
          className="group mb-8 flex items-center gap-2 bg-white/10 border-2 border-indigo-500/50 px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-indigo-400 group-hover:-translate-x-1 transition-transform" />
          <span className="text-indigo-400 font-bold">Back to Business Hub</span>
        </button>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl mb-6">
              <Sparkles className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4">
              Business & Tech Guides
            </h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              My complete toolkit of apps, tools, and resources I use to create content, build websites, and run my business. All free to access! 🚀
            </p>
          </div>

          {/* Tool Categories */}
          <div className="space-y-12">
            {toolCategories.map((category, catIndex) => (
              <div 
                key={catIndex}
                className="bg-white/5 backdrop-blur-xl border-2 border-indigo-500/30 rounded-2xl p-8 shadow-2xl"
                style={{ 
                  transitionDelay: `${catIndex * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 1s ease-out'
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{category.category}</h2>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <a
                      key={toolIndex}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/5 hover:bg-white/10 border border-indigo-400/30 hover:border-indigo-400 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/50"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`bg-gradient-to-r ${category.color} p-2 rounded-lg flex-shrink-0`}>
                          <tool.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                            {tool.name}
                          </h3>
                        </div>
                        <ArrowLeft className="w-5 h-5 text-indigo-400 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {tool.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Need Help Getting Started?</h3>
            <p className="text-lg text-indigo-100 mb-6 max-w-2xl mx-auto">
              These are the exact tools I use daily to create content, build websites, and grow my business. Start with the basics and expand your toolkit as you grow!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:sydney@itgirlsydcontent.com?subject=Tech Tools Consulting"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get 1-on-1 Consulting
              </a>
              <button
                onClick={onBack}
                className="bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-800 transition-all border-2 border-white/30 flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Business Hub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Content Creation Service Request Form
function ContentCreationForm({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    projectDescription: '',
    theme: '',
    budget: '',
    timeline: '',
    additionalDetails: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceTypes = [
    'Landing Page / Website',
    'Video Editing',
    '1-on-1 Consulting',
    'Social Media Graphics',
    'Media Kit Design',
    'Brand Identity',
    'Other'
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000+',
    'Not sure yet'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body with all the form details
    const emailSubject = `Content Creation Request from ${formData.name}`;
    const emailBody = `
New Content Creation Service Request:

📋 CLIENT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}

💼 SERVICE DETAILS:
Service Type: ${formData.serviceType}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

📝 PROJECT DESCRIPTION:
${formData.projectDescription}

🎨 THEME/STYLE PREFERENCES:
${formData.theme || 'Not specified'}

💬 ADDITIONAL DETAILS:
${formData.additionalDetails || 'None provided'}

---
Please respond with a custom quote and invoice.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:sydney@itgirlsydcontent.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Glowing orbs */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <button
          onClick={onBack}
          className="group mb-8 flex items-center gap-2 bg-white/10 border-2 border-purple-500/50 px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-purple-400 group-hover:-translate-x-1 transition-transform" />
          <span className="text-purple-400 font-bold">Back to Business Hub</span>
        </button>

        {!isSubmitted ? (
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Title Section */}
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl mb-6">
                <Edit3 className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">Content Creation Services</h1>
              <p className="text-xl text-purple-200">Let's bring your vision to life! Fill out the form below and I'll send you a custom quote.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white focus:outline-none focus:border-purple-400 transition-all"
                  >
                    <option value="" className="bg-purple-900">Select a service...</option>
                    {serviceTypes.map(type => (
                      <option key={type} value={type} className="bg-purple-900">{type}</option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all resize-none"
                    placeholder="Tell me about your project, goals, and what you're looking to achieve..."
                  />
                </div>

                {/* Theme/Style */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Theme / Style Preferences
                  </label>
                  <input
                    type="text"
                    name="theme"
                    value={formData.theme}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="e.g., Modern & Minimal, Bold & Colorful, Professional, Fun & Playful..."
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Budget Range *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white focus:outline-none focus:border-purple-400 transition-all"
                  >
                    <option value="" className="bg-purple-900">Select a budget range...</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range} className="bg-purple-900">{range}</option>
                    ))}
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Timeline / Deadline *
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="e.g., ASAP, 2 weeks, 1 month, Flexible..."
                  />
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all resize-none"
                    placeholder="Any other information you'd like to share..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
                >
                  <Sparkles className="w-6 h-6" />
                  Submit Service Request
                  <ArrowLeft className="w-6 h-6 rotate-180" />
                </button>
                <p className="text-purple-300 text-sm text-center mt-4">
                  I'll review your request and send you a custom quote within 24-48 hours! 💜
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Success State */
          <div className="text-center py-20">
            <div className="inline-block bg-green-500/20 p-8 rounded-full mb-8 animate-pulse">
              <Sparkles className="w-24 h-24 text-green-400" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Request Sent! 🎉</h2>
            <p className="text-2xl text-purple-200 mb-8">
              Thank you for your interest! Your email client should have opened with all the details.
            </p>
            <p className="text-lg text-purple-300 max-w-2xl mx-auto mb-8">
              I'll review your project and get back to you with a custom quote and invoice within 24-48 hours.
            </p>
            <button
              onClick={onBack}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all border-2 border-white/30 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Business Hub
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Business Hub Component - Hacker/Gaming Theme
function BusinessHubPage({ onBack, onNavigateToContentForm, onNavigateToTechGuides }) {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const fullText = 'IT_GIRL_TECH_HUB.exe';

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const handleUnlock = () => {
    if (email && email.includes('@')) {
      setUnlocked(true);
    } else {
      alert('Please enter a valid email address');
    }
  };

  const productivityTools = [
    {
      name: 'Cursor',
      category: 'AI Code Editor',
      description: 'AI-powered code editor for rapid development',
      url: 'https://cursor.sh',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Microsoft Copilot',
      category: 'AI Assistant',
      description: 'Integrated AI for productivity across Microsoft apps',
      url: 'https://copilot.microsoft.com',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'ChatGPT',
      category: 'AI Chatbot',
      description: 'Content creation, brainstorming & problem solving',
      url: 'https://chat.openai.com',
      color: 'from-green-400 to-teal-500'
    },
    {
      name: 'Adobe Premiere',
      category: 'Video Editing',
      description: 'Professional video editing for content creation',
      url: 'https://www.adobe.com/products/premiere.html',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Scribed.ai',
      category: 'AI Documentation',
      description: 'Auto-generate step-by-step guides & tutorials',
      url: 'https://scribed.ai',
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'Notion',
      category: 'Organization',
      description: 'All-in-one workspace for content planning',
      url: 'https://notion.so',
      color: 'from-gray-700 to-gray-900'
    }
  ];

  const businessServices = [
    {
      title: 'Fiverr Services',
      icon: Briefcase,
      description: 'Professional services on Fiverr - web design, content creation & more',
      color: 'from-green-400 to-emerald-500',
      glowColor: 'group-hover:shadow-green-500/50',
      url: 'https://www.fiverr.com/itgirlsyd'
    },
    {
      title: 'Notary Services',
      icon: Lock,
      description: 'Professional notary services for your business needs',
      color: 'from-blue-400 to-indigo-500',
      glowColor: 'group-hover:shadow-blue-500/50',
      url: 'https://notarize.la'
    },
    {
      title: 'Skool Community',
      icon: Users,
      description: 'Join our exclusive Skool community for business & tech resources',
      color: 'from-purple-400 to-pink-500',
      glowColor: 'group-hover:shadow-purple-500/50',
      url: 'https://skool.com/itgirl'
    },
    {
      title: 'Website Design Services',
      icon: Globe,
      description: 'Custom website design & development for your business',
      color: 'from-cyan-400 to-blue-500',
      glowColor: 'group-hover:shadow-cyan-500/50',
      url: '#content-form'
    },
    {
      title: 'Business & Tech Guides (FREE)',
      icon: FileText,
      description: 'Complete toolkit - AI tools, code editors, design apps & more',
      color: 'from-orange-400 to-red-500',
      glowColor: 'group-hover:shadow-orange-500/50',
      url: '#tech-guides'
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix-style background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
      
      {/* Grid overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Animated scan lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse" />
      </div>

      {/* Glowing orbs */}
      <div className="fixed top-20 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group mb-8 flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 px-6 py-3 rounded-lg hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
          <span className="text-cyan-400 font-mono font-bold">RETURN_TO_MAIN</span>
        </button>

        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          {/* Terminal-style header */}
          <div className="inline-block bg-black/80 border-2 border-green-500 rounded-lg p-6 mb-8 shadow-2xl shadow-green-500/20">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-500/30">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-green-400 font-mono text-sm">terminal@itgirl:~$</span>
            </div>
            <div className="font-mono text-2xl text-green-400">
              <span className="text-purple-400">{'>'}</span> {typedText}
              <span className="animate-pulse">_</span>
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-4 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              BUSINESS HUB
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
            <p className="text-green-400 font-mono text-lg">
              TECH • BUSINESS • INNOVATION
            </p>
            <Rocket className="w-6 h-6 text-cyan-400 animate-bounce" />
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed font-mono text-sm">
            {'// '}Welcome to my digital tech hub. From business consulting to content creation,
            <br />
            {'// '}AI integration to investor relations - your one-stop solution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {businessServices.map((service, index) => {
            const isContentFormLink = service.url === '#content-form';
            const isTechGuidesLink = service.url === '#tech-guides';
            const isSpecialLink = isContentFormLink || isTechGuidesLink;
            const Element = isSpecialLink ? 'button' : 'a';
            const elementProps = isSpecialLink 
              ? { onClick: isContentFormLink ? onNavigateToContentForm : onNavigateToTechGuides }
              : { 
                  href: service.url,
                  target: service.url.startsWith('mailto:') ? '_self' : '_blank',
                  rel: 'noopener noreferrer'
                };

            return (
              <Element
                key={index}
                {...elementProps}
                className={`group bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/30 rounded-xl p-6 hover:border-green-400 transition-all duration-300 hover:-translate-y-2 shadow-lg ${service.glowColor} ${isSpecialLink ? 'w-full text-left' : ''}`}
              >
                {/* Service icon */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                  <div className={`relative bg-gradient-to-r ${service.color} p-4 rounded-lg inline-block`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Service title */}
                <h3 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-green-400 transition-colors">
                  {'> '}{service.title}
                </h3>

                {/* Service description */}
                <p className="text-gray-400 text-sm mb-4 font-mono">
                  {service.description}
                </p>

                {/* Access button */}
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm group-hover:text-cyan-300">
                  <Terminal className="w-4 h-4" />
                  <span>ACCESS_NOW</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">{'>>>'}</span>
                </div>
              </Element>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-green-400 font-mono text-sm mb-2">
            {'> '}SYSTEM_STATUS: <span className="text-cyan-400">ONLINE</span>
          </p>
          <p className="text-gray-600 font-mono text-xs">
            © 2025 IT GIRL • ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </div>
    </div>
  );
}

// Outfit Spinner Component
function OutfitSpinner({ onEmailSubmit }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  const outfitImages = [
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800', // Outfit 1 - Light blue hoodie, flare jeans, sneakers, bag
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', // Outfit 2 - Gold bracelet, Coach bag, black romper, sandals
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800', // Outfit 3 - White bodysuit, jeans, sneakers, pink bag
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', // Outfit 4 - Pink dress, jewelry, Dior bag
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800', // Outfit 5 - Grey dress, pink bag, sandals
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', // Outfit 6 - White set, pink puffer, UGG slippers
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800', // Outfit 7 - Chrome Hearts hoodie, shorts, flip-flops
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', // Outfit 8 - Black hoodie, leggings, UGG boots
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800', // Outfit 9 - Pink pajamas
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', // Outfit 10 - Winter outfit with puffer
  ];

  const handleNext = () => {
    if (clickCount >= 4 && !showEmailGate) {
      setShowEmailGate(true);
      return;
    }
    
    if (!showEmailGate) {
      setClickCount(prev => prev + 1);
      setCurrentIndex(prev => (prev + 1) % outfitImages.length);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setEmailStatus('error');
      return;
    }

    setEmailStatus('loading');
    if (onEmailSubmit) {
      await onEmailSubmit(email);
    }
    
    // Save to localStorage as backup
    const subscribers = JSON.parse(localStorage.getItem('vip_subscribers') || '[]');
    subscribers.push({ email, date: new Date().toISOString(), source: 'Outfit Spinner' });
    localStorage.setItem('vip_subscribers', JSON.stringify(subscribers));
    
    setEmailStatus('success');
    setShowEmailGate(false);
    setClickCount(0); // Reset for continued viewing
  };

  return (
    <div className="border-4 border-black bg-white p-6 mb-8">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-black uppercase tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          Outfit Ideas
        </h3>
        <p className="text-xs text-gray-600 uppercase tracking-widest">Click to Browse</p>
      </div>

      {showEmailGate ? (
        <div className="text-center py-8">
          <Lock className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h4 className="text-xl font-bold mb-2 uppercase">Unlock More Outfits</h4>
          <p className="text-sm text-gray-600 mb-6">Sign up to keep browsing outfit inspiration!</p>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailStatus === 'error') setEmailStatus('');
              }}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 border-2 border-black text-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all mb-3 ${
                emailStatus === 'error' ? 'border-red-600' : ''
              }`}
              required
            />
            <button
              type="submit"
              disabled={emailStatus === 'loading'}
              className="w-full bg-black text-white px-6 py-3 font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition-all disabled:opacity-50"
            >
              {emailStatus === 'loading' ? 'Signing Up...' : 'Continue Browsing'}
            </button>
            {emailStatus === 'error' && (
              <p className="text-red-600 text-xs mt-2">Please enter a valid email</p>
            )}
          </form>
        </div>
      ) : (
        <div className="relative group">
          <div 
            onClick={handleNext}
            className="cursor-pointer border-4 border-black overflow-hidden bg-gray-100 aspect-[4/5] relative"
          >
            <img
              src={outfitImages[currentIndex]}
              alt={`Outfit ${currentIndex + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white bg-black/60 px-4 py-2">
              <p className="text-sm font-bold uppercase">Click to See Next Outfit</p>
              <p className="text-xs opacity-90">{clickCount + 1} / 5 views</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {outfitImages.slice(0, 5).map((_, idx) => (
              <div
                key={idx}
                className={`h-2 flex-1 border-2 border-black ${
                  idx === currentIndex % 5 ? 'bg-black' : 'bg-white'
                } transition-colors`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CreatorLandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [notification, setNotification] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'business', 'beauty', 'gym', 'homehaven', 'mediakit', 'partnerships', 'moda', 'content-form', 'tech-guides'
  const [showSupportPopup, setShowSupportPopup] = useState(false);
  const [showCollabPopup, setShowCollabPopup] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(''); // 'success', 'error', 'loading'

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Fetch products from API on component mount
  useEffect(() => {
    const loadProducts = async () => {
      setProductsLoading(true);
      try {
        // Try to fetch from Amazon first, fallback to LTK if needed
        const products = await fetchProducts('amazon', 6, {
          keywords: 'beauty fashion lifestyle creator'
        });
        
        if (products && products.length > 0) {
          setMyPicks(products);
        } else {
          // If Amazon fails, try LTK
          const ltkProducts = await fetchProducts('ltk', 6);
          if (ltkProducts && ltkProducts.length > 0) {
            setMyPicks(ltkProducts);
          }
          // If both fail, fallback to hardcoded products (already set as default)
        }
      } catch (error) {
        console.error('Failed to load products from API, using fallback:', error);
        // Keep fallback products (already set as default state)
      } finally {
        setProductsLoading(false);
      }
    };

    // Only fetch if we're on the home page
    if (currentPage === 'home') {
      loadProducts();
    }
  }, [currentPage]);

  const socialLinks = [
    { name: 'TikTok', icon: Video, url: 'https://tiktok.com/@itgirlsyd19', color: 'from-black via-gray-900 to-cyan-400', iconColor: 'text-white' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/itgirlsyd19', color: 'from-purple-600 via-pink-500 to-orange-400', iconColor: 'text-white' },
    { name: 'Pinterest', icon: TrendingUp, url: 'https://pinterest.com/itgirlsyd19', color: 'from-red-600 to-red-500', iconColor: 'text-white' },
    { name: 'Threads', icon: Activity, url: 'https://threads.net/@itgirlsyd19', color: 'from-black to-gray-900', iconColor: 'text-white' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/itgirlsyd19', color: 'from-blue-400 to-blue-500', iconColor: 'text-white' },
    { name: 'Email', icon: Mail, url: 'mailto:sydney@itgirlsydcontent.com', color: 'from-pink-500 to-rose-500', iconColor: 'text-white' }
  ];

  // My Picks - Affiliate Products (fallback data if API fails)
  const fallbackPicks = [
    {
      id: 1,
      name: 'Water Wave Lace Front Wig',
      category: 'Hair',
      price: '$89.99',
      image: 'https://m.media-amazon.com/images/I/71L9FKS0QwL._AC_SX679_.jpg',
      affiliateUrl: 'https://amzn.to/3YxGhair1',
      description: 'The exact wig from my TikToks - so natural!',
      source: 'amazon'
    },
    {
      id: 2,
      name: 'Dyson Airwrap Complete',
      category: 'Styling',
      price: '$599.99',
      image: 'https://m.media-amazon.com/images/I/61kLVKfJS5L._AC_SX679_.jpg',
      affiliateUrl: 'https://amzn.to/dysonairwrap',
      description: 'Game-changer for styling!',
      source: 'amazon'
    },
    {
      id: 3,
      name: 'Sleeveless Jumpsuit',
      category: 'Fashion',
      price: '$45.99',
      image: 'https://m.media-amazon.com/images/I/61Y3wE4mj-L._AC_UX679_.jpg',
      affiliateUrl: 'https://amzn.to/47v5ZEZ',
      description: 'Perfect fall outfit - so chic!',
      source: 'amazon'
    },
    {
      id: 4,
      name: 'Ring Light with Tripod',
      category: 'Creator',
      price: '$49.99',
      image: 'https://m.media-amazon.com/images/I/61X8x3TPRqL._AC_SX679_.jpg',
      affiliateUrl: 'https://amzn.to/ringlight',
      description: 'Essential for content creation!',
      source: 'amazon'
    },
    {
      id: 5,
      name: 'Cozy Loungewear Set',
      category: 'Fashion',
      price: '$38.99',
      image: 'https://m.media-amazon.com/images/I/61eBgz7LPQL._AC_UX679_.jpg',
      affiliateUrl: 'https://amzn.to/loungewear',
      description: 'My go-to work from home fit',
      source: 'amazon'
    },
    {
      id: 6,
      name: 'Skincare Fridge',
      category: 'Beauty',
      price: '$54.99',
      image: 'https://m.media-amazon.com/images/I/71B0M4UOEVL._AC_SX679_.jpg',
      affiliateUrl: 'https://amzn.to/skinfridge',
      description: 'Keeps serums fresh & feels so luxe!',
      source: 'amazon'
    }
  ];

  // State for dynamic products
  const [myPicks, setMyPicks] = useState(fallbackPicks);
  const [productsLoading, setProductsLoading] = useState(false);

  const contentCategories = [
    {
      title: 'Beauty',
      emoji: '💄',
      icon: Palette,
      color: 'from-pink-500 to-rose-600',
      description: 'Glow Up Your Confidence - Routines, tutorials, style inspo as foundation for empire',
      page: 'beauty',
      tagline: 'Glow Up Your Confidence',
      ctaText: 'Dive into Beauty'
    },
    {
      title: 'Tech',
      emoji: '💼',
      icon: Briefcase,
      color: 'from-purple-500 to-indigo-600',
      description: 'Build Smarter, Scale Bigger - Tools, hustles, asset strategies from beginner to empire',
      page: 'business',
      tagline: 'Build Smarter, Scale Bigger',
      ctaText: 'Explore Tech'
    },
    {
      title: 'Shop',
      emoji: '🛍️',
      icon: ShoppingBag,
      color: 'from-orange-500 to-amber-600',
      description: 'Own Your Essentials - Bundles, kits, faves for your glow-up & empire',
      page: 'home', // Will scroll to shop section
      tagline: 'Own Your Essentials',
      ctaText: 'Shop Now'
    }
  ];

  const handleLinkClick = (linkName) => {
    setNotification(`Opening ${linkName}...`);
    setTimeout(() => setNotification(''), 2000);
  };

  const handleCategoryClick = (page, title) => {
    setCurrentPage(page);
    setNotification(`Entering ${title}...`);
    setTimeout(() => setNotification(''), 2000);
  };

  const navigateHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Media Kit Page
  if (currentPage === 'mediakit') {
    return <MediaKit />;
  }

  // Render Partnerships Page
  if (currentPage === 'partnerships') {
    return <PartnershipsPage onBack={navigateHome} onViewMediaKit={() => setCurrentPage('mediakit')} />;
  }

  // Render Beauty Closet Page
  if (currentPage === 'beauty') {
    return <BeautyClosetPage onBack={navigateHome} myPicks={myPicks} handleAffiliateClick={handleAffiliateClick} />;
  }

  // Render Business Page
  if (currentPage === 'business') {
    return <BusinessHubPage 
      onBack={navigateHome} 
      onNavigateToContentForm={() => setCurrentPage('content-form')} 
      onNavigateToTechGuides={() => setCurrentPage('tech-guides')}
    />;
  }


  // Render Content Creation Form Page
  if (currentPage === 'content-form') {
    return <ContentCreationForm onBack={() => setCurrentPage('business')} />;
  }

  // Render Business & Tech Guides Page
  if (currentPage === 'tech-guides') {
    return <BusinessTechGuides onBack={() => setCurrentPage('business')} />;
  }

  // Render Shop Page
  if (currentPage === 'shop') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50/30 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={navigateHome}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-black transition-colors border-2 border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold text-sm">Back to Home</span>
          </button>
          <div className="text-center mb-8">
            <h1 className="text-5xl font-black tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Style Studio & Shop
            </h1>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Avatar Customizer • Lounge Sets • Ebooks</p>
          </div>

          {/* Avatar Customizer Section */}
          <div className="mb-12 border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-black tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Avatar Customizer
            </h2>
            <p className="text-gray-600 mb-6">Create your virtual avatar. Subscribe to unlock advanced customization!</p>
            <AvatarCustomizer />
          </div>

          {/* Lounge Sets Section */}
          <div className="mb-12 border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-black tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Lounge Sets
            </h2>
            <p className="text-gray-600 mb-6">Comfortable, stylish loungewear for your everyday glow</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Placeholder for lounge sets */}
              <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
                <div className="aspect-square bg-gray-100 rounded-lg mb-3"></div>
                <h3 className="font-bold text-sm mb-1">Cozy Lounge Set</h3>
                <p className="text-sm text-gray-600 mb-2">$49.99</p>
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all">
                  Shop Now
                </button>
              </div>
              <div className="border-2 border-gray-200 rounded-xl p-4 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
                <div className="aspect-square bg-gray-100 rounded-lg mb-3"></div>
                <h3 className="font-bold text-sm mb-1">Matching Set</h3>
                <p className="text-sm text-gray-600 mb-2">$59.99</p>
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Ebooks Section */}
          <div className="mb-12 border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-black tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Ebooks
            </h2>
            <p className="text-gray-600 mb-6">Digital guides for beauty, business, and lifestyle</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for ebooks */}
              <div className="border-2 border-gray-200 rounded-xl p-6 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4"></div>
                <h3 className="font-bold text-lg mb-2">Beauty Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Complete beauty routine guide</p>
                <p className="text-xl font-bold mb-4">$9.99</p>
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all">
                  Purchase
                </button>
              </div>
              <div className="border-2 border-gray-200 rounded-xl p-6 bg-white hover:border-gray-400 hover:shadow-lg transition-all">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4"></div>
                <h3 className="font-bold text-lg mb-2">Business Blueprint</h3>
                <p className="text-sm text-gray-600 mb-4">Start your side hustle</p>
                <p className="text-xl font-bold mb-4">$14.99</p>
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-all">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Avatar Page (same as shop but focused on avatar)
  if (currentPage === 'avatar') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50/30 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={navigateHome}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-black transition-colors border-2 border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold text-sm">Back to Home</span>
          </button>
          <div className="text-center mb-8">
            <h1 className="text-5xl font-black tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Style Studio
            </h1>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Create Your Virtual Avatar</p>
          </div>
          <AvatarCustomizer />
        </div>
      </div>
    );
  }


  // Render Main Landing Page
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50/30 relative">
      {/* Subtle Grid Background - Modern Newspaper Hybrid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.01] z-0" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 3px)',
        backgroundSize: '100% 40px'
      }}></div>

      {/* Notification toast - Modern Style */}
      {notification && (
        <div className="fixed top-8 right-8 z-50 bg-white/95 backdrop-blur-sm shadow-xl px-6 py-4 border-2 border-gray-300 rounded-lg animate-in slide-in-from-top">
          <p className="text-black font-semibold flex items-center gap-2 text-sm">
            {notification}
          </p>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Modern Masthead with Newspaper Elements */}
        <div className="border-b-2 border-gray-300 mb-8 pb-6 relative">
          <div className="text-center relative">
            {/* Hero Image - Glam Tech */}
            <div className="mb-6 aspect-[16/6] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative group shadow-lg">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white z-10">
                  <h2 className="text-4xl md:text-6xl font-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    GLAM TECH
                  </h2>
                  <p className="text-lg md:text-xl uppercase tracking-widest">Empower Community</p>
                  <p className="text-sm md:text-base mt-2 opacity-90">A Community for Women in Tech</p>
                </div>
              </div>
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-3 hover:scale-105 transition-transform cursor-default relative inline-block group bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="relative z-10">IT GIRL</span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500 py-2 mt-3">
              <span className="uppercase tracking-wider">{currentDate}</span>
              <span className="text-gray-300">•</span>
              <span className="uppercase tracking-wider">BEAUTY • TECH • EMPIRE</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Modern with Newspaper Typography */}
        <nav className="border-b border-gray-200 mb-8 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm font-medium">
            <button 
              onClick={() => setCurrentPage('home')} 
              className="hover:text-gray-900 hover:scale-105 transition-all relative group px-3 py-1 rounded-lg hover:bg-gray-100"
            >
              Home
            </button>
            <span className="text-gray-300 hidden md:inline">•</span>
            <button 
              onClick={() => setCurrentPage('beauty')} 
              className="hover:text-gray-900 hover:scale-105 transition-all relative group px-3 py-1 rounded-lg hover:bg-gray-100"
            >
              Beauty
            </button>
            <span className="text-gray-300 hidden md:inline">•</span>
            <button 
              onClick={() => setCurrentPage('business')} 
              className="hover:text-gray-900 hover:scale-105 transition-all relative group px-3 py-1 rounded-lg hover:bg-gray-100"
            >
              Tech & Business
            </button>
            <span className="text-gray-300 hidden md:inline">•</span>
            <button 
              onClick={() => setCurrentPage('shop')} 
              className="hover:text-gray-900 hover:scale-105 transition-all relative group px-3 py-1 rounded-lg hover:bg-gray-100"
            >
              Shop
            </button>
            <span className="text-gray-300 hidden md:inline">•</span>
            <button 
              onClick={() => setCurrentPage('avatar')} 
              className="hover:text-gray-900 hover:scale-105 transition-all relative group px-3 py-1 rounded-lg hover:bg-gray-100"
            >
              Style Studio
            </button>
            <span className="text-gray-300 hidden md:inline">•</span>
            <button 
              onClick={() => setCurrentPage('partnerships')} 
              className="hover:text-gray-900 hover:scale-105 transition-all relative group px-3 py-1 rounded-lg hover:bg-gray-100"
            >
              Partnerships
            </button>
            <span className="text-gray-300 hidden md:inline">•</span>
            <button 
              onClick={() => setCurrentPage('mediakit')} 
              className="hover:text-gray-900 hover:scale-105 transition-all relative group px-3 py-1 rounded-lg hover:bg-gray-100"
            >
              Media Kit
            </button>
          </div>
        </nav>

        {/* Work With Me / Collaboration Popup */}
        {showCollabPopup && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCollabPopup(false)}
          >
            <div 
              className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient Header */}
              <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 p-6 text-white text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Sparkles className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Let's Collaborate!</h2>
                  <Sparkles className="w-8 h-8" />
                </div>
                <p className="text-white/90 text-sm">Brands, PR & partnership inquiries welcome 💕</p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowCollabPopup(false)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all"
              >
                <span className="text-xl font-bold">×</span>
              </button>

              {/* Content */}
              <div className="p-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-3 text-center border border-pink-200">
                    <p className="text-2xl font-bold text-purple-600">55K+</p>
                    <p className="text-xs text-gray-600">Followers</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-3 text-center border border-pink-200">
                    <p className="text-2xl font-bold text-pink-600">8%+</p>
                    <p className="text-xs text-gray-600">Engagement</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-3 text-center border border-pink-200">
                    <p className="text-2xl font-bold text-orange-500">5+</p>
                    <p className="text-xs text-gray-600">Platforms</p>
                  </div>
                </div>

                {/* Main Actions */}
                <div className="space-y-3">
                  {/* Send Email - Big CTA */}
                  <a
                    href="mailto:sydney@itgirlsydcontent.com?subject=Brand Collaboration Inquiry&body=Hi Sydney!%0A%0AI'd love to discuss a potential collaboration with you.%0A%0ABrand/Company:%0AType of Collaboration:%0ATimeline:%0ABudget Range:%0A%0ALooking forward to hearing from you!"
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    <Mail className="w-6 h-6" />
                    Send Me an Email
                  </a>
                  
                  {/* Response Time Notice */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                    <p className="text-green-700 text-sm font-medium">
                      ⚡ I typically respond within <span className="font-bold">12-24 hours</span>
                    </p>
                  </div>

                  {/* View Media Kit */}
                  <button
                    onClick={() => {
                      setShowCollabPopup(false);
                      setCurrentPage('mediakit');
                    }}
                    className="flex items-center justify-center gap-2 w-full bg-white border-2 border-purple-300 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 hover:border-purple-400 transition-all"
                  >
                    <FileText className="w-5 h-5" />
                    View My Media Kit
                  </button>

                  {/* View Partnership Info */}
                  <button
                    onClick={() => {
                      setShowCollabPopup(false);
                      setCurrentPage('partnerships');
                    }}
                    className="flex items-center justify-center gap-2 w-full text-gray-600 hover:text-purple-600 text-sm font-medium py-2 transition-colors"
                  >
                    <Briefcase className="w-4 h-4" />
                    See Partnership Options & Rates
                  </button>
                </div>

                {/* Email Display */}
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-500 mb-1">Or email directly:</p>
                  <a 
                    href="mailto:sydney@itgirlsydcontent.com"
                    className="text-purple-600 font-semibold hover:underline"
                  >
                    sydney@itgirlsydcontent.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Breaking News Banner - TikTok Live Battle */}
        <div className={`mb-8 rounded-xl bg-gradient-to-r from-black via-gray-900 to-black text-white p-4 relative overflow-hidden group shadow-lg ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
          </div>
          <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-4 h-4 bg-red-600 animate-pulse"></div>
                <div className="absolute inset-0 w-4 h-4 bg-red-600 animate-ping opacity-75"></div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-300 mb-1">BREAKING NEWS</div>
                <div className="text-xl md:text-2xl font-black uppercase group-hover:scale-105 transition-transform">TikTok Live Battle Now</div>
                <div className="text-sm text-gray-300">Join & support with gifts!</div>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.tiktok.com/@itgirlsyd19/live"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 font-bold text-sm hover:bg-gray-200 transition-all border-2 border-white hover:scale-105 active:scale-95"
              >
                JOIN LIVE →
              </a>
              <a
                href="https://www.tiktok.com/coin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 font-bold text-sm hover:bg-gray-700 transition-all border-2 border-gray-600 hover:scale-105 active:scale-95"
              >
                GET COINS
              </a>
            </div>
          </div>
        </div>


        {/* Social Media - Modern Style */}
        <div className="mb-12 border-t border-gray-200 pt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Connect
            </h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Follow The Journey</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleLinkClick(social.name)}
                  className="group border-2 border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-lg bg-white transition-all relative overflow-hidden"
                  title={social.name}
                >
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <social.icon className={`w-8 h-8 group-hover:scale-110 transition-transform ${social.iconColor.replace('text-white', 'text-gray-800')}`} />
                    <span className="font-semibold text-xs">{social.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>


        {/* Three Main Hubs - Beauty/Fashion, Tech, Business */}
        <div className="mb-16 border-t border-gray-200 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Hub 1: Beauty & Fashion */}
            <button
              onClick={() => setCurrentPage('beauty')}
              className="group relative bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 rounded-2xl p-8 border-2 border-pink-200 hover:border-pink-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-tr-full"></div>
              
              <div className="relative z-10">
                {/* Icon Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl">💄</div>
                </div>
                
                {/* Title */}
                <h2 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
                  Beauty & Fashion Hub
                </h2>
                <p className="text-sm font-semibold text-pink-600 uppercase tracking-wider mb-4">✨ Glow Up Your Confidence</p>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  Makeup tutorials, hair care routines, skincare guides, and style inspiration. Everything you need to look and feel your best.
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>Makeup Video Tutorials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>Hair Care Routines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>Skincare Guides</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500">•</span>
                    <span>Editor's Picks Shop</span>
                  </li>
                </ul>
                
                {/* CTA Button */}
                <div className="flex items-center gap-2 text-pink-600 font-bold group-hover:text-pink-700 transition-colors">
                  <span>Enter Hub</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>

            {/* Hub 2: Tech */}
            <button
              onClick={() => setCurrentPage('business')}
              className="group relative bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-tr-full"></div>
              
              <div className="relative z-10">
                {/* Icon Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Terminal className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl">💻</div>
                </div>
                
                {/* Title */}
                <h2 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
                  Tech Hub
                </h2>
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">🚀 Build Smarter, Scale Bigger</p>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  Fiverr services, website design, Skool community, notary services, and free tech guides. Your one-stop shop for business growth.
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Fiverr Services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Website Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Skool Community</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Free Tech Guides</span>
                  </li>
                </ul>
                
                {/* CTA Button */}
                <div className="flex items-center gap-2 text-purple-600 font-bold group-hover:text-purple-700 transition-colors">
                  <span>Enter Hub</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>

            {/* Hub 3: Business */}
            <button
              onClick={() => setCurrentPage('business')}
              className="group relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-200/30 to-transparent rounded-tr-full"></div>
              
              <div className="relative z-10">
                {/* Icon Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl">💼</div>
                </div>
                
                {/* Title */}
                <h2 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
                  Business Hub
                </h2>
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">🏆 Empire Building</p>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  Notary services, business resources, tools, and strategies. Everything you need to build and scale your empire.
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Notary Services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Business Resources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Growth Strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Expert Tools</span>
                  </li>
                </ul>
                
                {/* CTA Button */}
                <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:text-blue-700 transition-colors">
                  <span>Enter Hub</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Shop & Avatar Links */}
        <div className="mb-16 border-t border-gray-200 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shop Section */}
            <button
              onClick={() => setCurrentPage('shop')}
              className="border-2 border-gray-200 rounded-xl p-6 bg-white hover:border-gray-400 hover:shadow-lg transition-all group text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <ShoppingBag className="w-12 h-12 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-2xl font-black uppercase" style={{ fontFamily: 'Georgia, serif' }}>
                    Shop
                  </h3>
                  <p className="text-xs text-gray-600 group-hover:text-gray-300 uppercase tracking-widest">Editor's Picks</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 group-hover:text-gray-200">
                Curated essentials for your glow-up and empire journey. Everything I use and love.
              </p>
            </button>

            {/* Avatar Customizer Section */}
            <button
              onClick={() => setCurrentPage('avatar')}
              className="border-2 border-gray-200 rounded-xl p-6 bg-white hover:border-gray-400 hover:shadow-lg transition-all group text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <Sparkles className="w-12 h-12 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-2xl font-black uppercase" style={{ fontFamily: 'Georgia, serif' }}>
                    Style Studio
                  </h3>
                  <p className="text-xs text-gray-600 group-hover:text-gray-300 uppercase tracking-widest">Create Your Look</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 group-hover:text-gray-200">
                Mix and match clothing items to create your perfect outfit. Customize your avatar with our interactive style studio.
              </p>
            </button>
          </div>
        </div>

        {/* Work With Me - Modern Style with Visuals */}
        <div className="mb-12 border-t border-gray-200 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            {/* Left: Image/Visual */}
            <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 group order-2 md:order-1 shadow-lg">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>
            {/* Right: Content */}
            <div className="text-center md:text-left order-1 md:order-2">
              <h2 className="text-4xl font-black uppercase tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Work With Me
              </h2>
              <p className="text-sm text-gray-600 uppercase tracking-widest mb-4">Partnerships & Collaborations</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Partner with a multi-platform creator. 55K+ engaged followers across beauty, wellness, lifestyle & business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('partnerships')}
                  className="border-2 border-gray-300 px-6 py-3 font-semibold text-sm rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95"
                >
                  Partnership Info
                </button>
                <button
                  onClick={() => setCurrentPage('mediakit')}
                  className="border-2 border-gray-300 px-6 py-3 font-semibold text-sm rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all hover:scale-105 active:scale-95"
                >
                  Media Kit
                </button>
                <button
                  onClick={() => setShowCollabPopup(true)}
                  className="bg-black text-white px-6 py-3 font-semibold text-sm rounded-lg hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Modern Style with Visual */}
        <div className={`mb-12 border-t border-gray-200 pt-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Visual */}
            <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 hidden md:block group shadow-lg">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
            </div>
            {/* Right: Form */}
            <div className="border-2 border-gray-200 rounded-xl p-8 bg-white text-center shadow-md">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              Join The List
            </h2>
            <p className="text-sm text-gray-600 uppercase tracking-widest mb-4">VIP Newsletter</p>
            <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
              Get exclusive content, early access, and special offers delivered to your inbox!
            </p>
            
            {newsletterStatus === 'success' ? (
              <div className="border-2 border-gray-200 rounded-xl p-6 max-w-md mx-auto bg-white shadow-md">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>You're In!</h3>
                <p className="text-gray-700">Welcome to the VIP list! Check your inbox for a welcome email.</p>
              </div>
            ) : (
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!newsletterEmail || !newsletterEmail.includes('@')) {
                    setNewsletterStatus('error');
                    return;
                  }
                  
                  setNewsletterStatus('loading');
                  
                  try {
                    // Using Formspree - replace YOUR_FORM_ID with your actual form ID
                    // Get your free form at https://formspree.io
                    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ 
                        email: newsletterEmail,
                        source: 'itgirlcontent VIP List',
                        date: new Date().toISOString()
                      })
                    });
                    
                    if (response.ok) {
                      setNewsletterStatus('success');
                      setNewsletterEmail('');
                      handleLinkClick('Newsletter signup - SUCCESS');
                    } else {
                      // Fallback: Save to localStorage as backup
                      const subscribers = JSON.parse(localStorage.getItem('vip_subscribers') || '[]');
                      subscribers.push({ email: newsletterEmail, date: new Date().toISOString() });
                      localStorage.setItem('vip_subscribers', JSON.stringify(subscribers));
                      setNewsletterStatus('success');
                      setNewsletterEmail('');
                    }
                  } catch (error) {
                    // Fallback: Save to localStorage
                    const subscribers = JSON.parse(localStorage.getItem('vip_subscribers') || '[]');
                    subscribers.push({ email: newsletterEmail, date: new Date().toISOString() });
                    localStorage.setItem('vip_subscribers', JSON.stringify(subscribers));
                    setNewsletterStatus('success');
                    setNewsletterEmail('');
                  }
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterStatus === 'error') setNewsletterStatus('');
                  }}
                  className={`flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all ${
                    newsletterStatus === 'error' 
                      ? 'border-red-500 ring-2 ring-red-300' 
                      : ''
                  }`}
                  required
                />
                <button 
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className={`px-8 py-4 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    newsletterStatus === 'loading'
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {newsletterStatus === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Joining...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            )}
            
            {newsletterStatus === 'error' && (
              <p className="mt-3 text-red-600 text-sm font-bold uppercase">
                Please enter a valid email address
              </p>
            )}
            
            {newsletterStatus !== 'success' && (
              <p className="mt-4 text-sm text-gray-600">No spam, ever! Unsubscribe anytime.</p>
            )}
            </div>
          </div>
        </div>

        {/* Footer - Modern Style */}
        <div className={`border-t border-gray-200 pt-8 text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm uppercase tracking-widest font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>IT GIRL</p>
          <p className="text-gray-600 mb-4 text-sm">
            © 2025 IT GIRL • All Rights Reserved
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-900 hover:underline transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-900 hover:underline transition-colors">Terms</a>
            <span>•</span>
            <a href="mailto:sydney@itgirlsydcontent.com" className="hover:text-gray-900 hover:underline transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Floating Support Button - Modern Style */}
      <button
        onClick={() => setShowSupportPopup(true)}
        className="fixed bottom-8 right-8 z-40 bg-black text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2 group font-semibold text-sm"
      >
        <Heart className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline">Support</span>
      </button>

      {/* Support Popup Modal */}
      {showSupportPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 rounded-3xl p-8 shadow-2xl max-w-md w-full animate-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setShowSupportPopup(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all hover:rotate-90 duration-300"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

            {/* Animated sparkles background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {[...Array(20)].map((_, i) => (
                <Star
                  key={i}
                  className="absolute text-white/20 animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    fontSize: `${Math.random() * 12 + 8}px`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 text-center text-white">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-10 h-10 fill-white animate-pulse" />
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
              
              <h2 className="text-3xl font-bold mb-3">Support My Creativity</h2>
              
              <p className="text-base mb-6 text-white/90">
                Love what I create? Your support helps me continue making amazing content! 💕✨
              </p>
              
              <a
                href="https://paypal.me/SydneyRamey894"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleLinkClick('PayPal Support');
                  setShowSupportPopup(false);
                }}
                className="group inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all hover:scale-105 shadow-2xl"
              >
                <DollarSign className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Send Support via PayPal
                <Heart className="w-6 h-6 fill-pink-600 group-hover:scale-125 transition-transform" />
              </a>
              
              <p className="mt-4 text-sm text-white/80">
                Thank you for believing in my journey! 🙏
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

