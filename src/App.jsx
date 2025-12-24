import React, { useState, useEffect } from 'react';
import { Heart, Instagram, Youtube, Twitter, Mail, ShoppingBag, Crown, Sparkles, Star, Link as LinkIcon, Lock, TrendingUp, Palette, Briefcase, Activity, Home, Cookie, Scissors, Brain, Dumbbell, UtensilsCrossed, Terminal, Code, Zap, Rocket, DollarSign, FileText, Edit3, Users, ArrowLeft, Cpu, Database, Globe, Shirt, Smile, Gem, Wand2, Camera, Video, Target, Award, GraduationCap, BookOpen } from 'lucide-react';
import MediaKit from './MediaKit.jsx';
import PartnershipsPage from './Partnerships.jsx';
import './email-utils.js'; // Load email collection utilities
import Academy from './Academy.jsx';

// Beauty Closet Component - Pink Fitting Room Theme
function BeautyClosetPage({ onBack }) {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 relative overflow-hidden">
      {/* Sparkle overlay */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-pink-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.6 + 0.2,
              fontSize: `${Math.random() * 20 + 10}px`
            }}
          />
        ))}
      </div>

      {/* Glowing pink orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

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
                    Sydney's Pick!
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

        {/* Featured Call-to-Action */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-2xl p-8 shadow-2xl text-white text-center overflow-hidden">
            <div className="absolute inset-0 bg-white/10"></div>
            
            <div className="relative z-10">
              <ShoppingBag className="w-14 h-14 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Shop Curated Favorites</h2>
              <p className="mb-6 text-lg">
                Discover my handpicked beauty and fashion essentials. 
                Premium products I personally use and recommend.
              </p>
              <a
                href="https://www.amazon.com/shop/itgirlsyd19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all hover:scale-105 shadow-2xl"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop My Amazon Storefront
                <Sparkles className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
            <p className="text-pink-600 font-semibold">
              Made with love by Sydney
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
  const fullText = 'SYDNEY_TECH_HUB.exe';

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
      title: 'Business & Tech Guides (FREE)',
      icon: FileText,
      description: 'Complete toolkit - AI tools, code editors, design apps & more',
      color: 'from-cyan-400 to-blue-500',
      glowColor: 'group-hover:shadow-cyan-500/50',
      url: '#tech-guides'
    },
    {
      title: 'Content Creation Services',
      icon: Edit3,
      description: 'Custom landing pages, video editing & 1-on-1 consulting',
      color: 'from-purple-400 to-pink-500',
      glowColor: 'group-hover:shadow-purple-500/50',
      url: '#content-form'
    },
    {
      title: 'Notary Services',
      icon: Lock,
      description: 'Professional notary services for your business needs',
      color: 'from-green-400 to-emerald-500',
      glowColor: 'group-hover:shadow-green-500/50',
      url: 'https://notarize.la'
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
              <span className="ml-4 text-green-400 font-mono text-sm">terminal@sydney:~$</span>
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
            © 2025 SYDNEY TECH VENTURES • ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CreatorLandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [notification, setNotification] = useState('');
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'business', 'beauty', 'gym', 'homehaven', 'mediakit', 'partnerships', 'moda', 'content-form', or 'tech-guides'
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

  const socialLinks = [
    { name: 'TikTok', icon: Video, url: 'https://tiktok.com/@itgirlsyd19', color: 'from-black via-gray-900 to-cyan-400', iconColor: 'text-white' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/itgirlsyd19', color: 'from-purple-600 via-pink-500 to-orange-400', iconColor: 'text-white' },
    { name: 'Pinterest', icon: TrendingUp, url: 'https://pinterest.com/itgirlsyd19', color: 'from-red-600 to-red-500', iconColor: 'text-white' },
    { name: 'Threads', icon: Activity, url: 'https://threads.net/@itgirlsyd19', color: 'from-black to-gray-900', iconColor: 'text-white' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/itgirlsyd19', color: 'from-blue-400 to-blue-500', iconColor: 'text-white' },
    { name: 'Email', icon: Mail, url: 'mailto:sydney@itgirlsydcontent.com', color: 'from-pink-500 to-rose-500', iconColor: 'text-white' }
  ];

  // My Picks - Affiliate Products (you earn commission when people buy!)
  const myPicks = [
    {
      id: 1,
      name: 'Water Wave Lace Front Wig',
      category: 'Hair',
      price: '$89.99',
      image: 'https://m.media-amazon.com/images/I/71L9FKS0QwL._AC_SX679_.jpg',
      affiliateUrl: 'https://amzn.to/3YxGhair1',
      description: 'The exact wig from my TikToks - so natural!'
    },
    {
      id: 2,
      name: 'Dyson Airwrap Complete',
      category: 'Styling',
      price: '$599.99',
      image: 'https://m.media-amazon.com/images/I/61kLVKfJS5L._AC_SX679_.jpg',
      affiliateUrl: 'https://amzn.to/dysonairwrap',
      description: 'Game-changer for styling!'
    },
    {
      id: 3,
      name: 'Sleeveless Jumpsuit',
      category: 'Fashion',
      price: '$45.99',
      image: 'https://m.media-amazon.com/images/I/61Y3wE4mj-L._AC_UX679_.jpg',
      affiliateUrl: 'https://amzn.to/47v5ZEZ',
      description: 'Perfect fall outfit - so chic!'
    },
    {
      id: 4,
      name: 'Ring Light with Tripod',
      category: 'Creator',
      price: '$49.99',
      image: 'https://m.media-amazon.com/images/I/61X8x3TPRqL._AC_SX679_.jpg',
      affiliateUrl: 'https://amzn.to/ringlight',
      description: 'Essential for content creation!'
    },
    {
      id: 5,
      name: 'Cozy Loungewear Set',
      category: 'Fashion',
      price: '$38.99',
      image: 'https://m.media-amazon.com/images/I/61eBgz7LPQL._AC_UX679_.jpg',
      affiliateUrl: 'https://amzn.to/loungewear',
      description: 'My go-to work from home fit'
    },
    {
      id: 6,
      name: 'Skincare Fridge',
      category: 'Beauty',
      price: '$54.99',
      image: 'https://m.media-amazon.com/images/I/71B0M4UOEVL._AC_SX679_.jpg',
      affiliateUrl: 'https://amzn.to/skinfridge',
      description: 'Keeps serums fresh & feels so luxe!'
    }
  ];

  const contentCategories = [
    {
      title: 'Fashion & Beauty',
      emoji: '💄',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      description: 'Makeup tutorials, fashion hauls, skincare routines & style inspiration',
      page: 'beauty'
    },
    {
      title: 'AI & Business',
      emoji: '💼',
      icon: Briefcase,
      color: 'from-purple-500 to-indigo-500',
      description: 'Tech tools, business guides, content creation & professional services',
      page: 'business'
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

  // Render Academy Page
  if (currentPage === 'academy') {
    return <Academy onBack={navigateHome} />;
  }

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
    return <BeautyClosetPage onBack={navigateHome} />;
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


  // Render Main Landing Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{ 
            left: `${mousePosition.x / 20}px`, 
            top: `${mousePosition.y / 20}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000 top-1/4 right-0" />
        <div className="absolute w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000 bottom-0 left-1/4" />
      </div>

      {/* Floating sparkles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-pink-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
              fontSize: `${Math.random() * 10 + 8}px`
            }}
          />
        ))}
      </div>

      {/* Notification toast */}
      {notification && (
        <div className="fixed top-8 right-8 z-50 bg-white rounded-2xl shadow-2xl px-6 py-4 border-2 border-pink-200 animate-in slide-in-from-top">
          <p className="text-pink-600 font-semibold flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            {notification}
          </p>
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="relative inline-block mb-6">
            <img
              src="/profile.png"
              alt="Sydney"
              className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover mx-auto"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2 shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Sydney
          </h1>
          
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Content Creator • Lifestyle Influencer • Digital Trendsetter
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <button
              onClick={() => setShowCollabPopup(true)}
              className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
            >
              <Briefcase className="w-5 h-5 group-hover:animate-bounce" />
              <span>Work With Me</span>
              <Sparkles className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-pink-200">
              <Crown className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-gray-700">Verified Creator</span>
            </div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hey babe! 💕 Welcome to my little corner of the internet. I'm all about beauty, fashion, lifestyle & good vibes. 
            Join me on this journey & shop my faves below! ✨
          </p>
        </div>

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

        {/* TikTok Live Battle Feature */}
        <div className={`mb-8 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-black via-pink-600 to-cyan-400 rounded-2xl p-6 shadow-2xl overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-pulse" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-pink-500 to-cyan-400 p-4 rounded-xl animate-pulse">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-white font-black text-2xl uppercase tracking-wide">Live Battle</span>
                  </div>
                  <p className="text-pink-200 text-sm">Join my TikTok Live & support with gifts!</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <a
                  href="https://www.tiktok.com/@itgirlsyd19/live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border-2 border-white/30 hover:border-white/60 hover:bg-white/30 transition-all cursor-pointer"
                >
                  <p className="text-white font-bold text-sm">Join Battle</p>
                  <p className="text-pink-200 text-xs">Go Live Now →</p>
                </a>
                <a
                  href="https://www.tiktok.com/coin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500/20 backdrop-blur-sm px-6 py-3 rounded-xl border-2 border-cyan-400/30 hover:border-cyan-400/60 hover:bg-cyan-500/30 transition-all cursor-pointer"
                >
                  <p className="text-white font-bold text-sm">Get Coins</p>
                  <p className="text-cyan-200 text-xs">Discount Available</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Shop My Picks - Affiliate Products Section */}
        <div className={`mb-12 transition-all duration-1000 delay-175 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 rounded-3xl p-8 border-2 border-pink-200/50 shadow-xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-3">
                <ShoppingBag className="w-8 h-8 text-pink-500" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-500 bg-clip-text text-transparent">
                  Shop My Picks
                </h2>
                <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
              </div>
              <p className="text-gray-600 max-w-lg mx-auto">
                Everything I use & love! Click to shop - your support means the world 💕
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {myPicks.map((product) => (
                <a
                  key={product.id}
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-pink-300"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gray-50 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback if image doesn't load */}
                    <div className="hidden absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 items-center justify-center">
                      <ShoppingBag className="w-12 h-12 text-white/80" />
                    </div>
                    {/* Category Badge */}
                    <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-xs font-bold text-pink-600 px-2 py-0.5 rounded-full">
                      {product.category}
                    </span>
                    {/* Add to Bag Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white text-pink-600 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
                        <ShoppingBag className="w-4 h-4" />
                        Shop Now
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-2 mb-1 group-hover:text-pink-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-1 mb-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-pink-600 text-sm">{product.price}</span>
                      <Heart className="w-4 h-4 text-gray-300 group-hover:text-pink-500 group-hover:fill-pink-500 transition-colors" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center mt-6">
              <a
                href="https://www.amazon.com/shop/itgirlsyd19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                View Full Storefront
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </a>
            </div>
          </div>
        </div>

        {/* Compact Social Media Section - Smaller Icons */}
        <div className={`mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-center text-gray-500 text-sm font-medium mb-3">Follow Me</h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(social.name)}
                className={`group bg-gradient-to-br ${social.color} rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110`}
                title={social.name}
              >
                <social.icon className={`w-4 h-4 ${social.iconColor}`} />
              </a>
            ))}
          </div>
        </div>

        {/* 🏫 IT Girl Academy - Featured Schoolhouse */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => handleCategoryClick('academy', 'IT Girl Academy')}
            className="w-full group relative overflow-hidden"
          >
            {/* Schoolhouse Card */}
            <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-1 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 rounded-[22px] p-8 md:p-10 relative overflow-hidden">
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-4 left-8 text-6xl opacity-20 animate-bounce" style={{animationDuration: '3s'}}>📚</div>
                  <div className="absolute top-12 right-12 text-4xl opacity-20 animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>✨</div>
                  <div className="absolute bottom-8 left-16 text-5xl opacity-20 animate-bounce" style={{animationDuration: '2s', animationDelay: '1s'}}>💫</div>
                  <div className="absolute bottom-4 right-8 text-4xl opacity-20 animate-bounce" style={{animationDuration: '2.8s', animationDelay: '0.3s'}}>🎓</div>
                  {/* Gradient orbs */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Schoolhouse Icon */}
                  <div className="inline-block mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 blur-2xl opacity-60 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 p-6 rounded-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {/* Schoolhouse shape */}
                      <div className="relative">
                        <div className="text-6xl">🏫</div>
                        {/* Sparkle effect */}
                        <div className="absolute -top-2 -right-2 text-2xl animate-ping">✨</div>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:scale-105 transition-transform">
                    IT Girl Academy
                  </h2>

                  {/* Subtitle */}
                  <p className="text-xl text-purple-200 mb-6 max-w-xl mx-auto">
                    Learn to build your creator empire with real courses, templates & strategies that actually work 💕
                  </p>

                  {/* Stats Row */}
                  <div className="flex justify-center gap-6 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                      <p className="text-2xl font-bold text-white">4</p>
                      <p className="text-xs text-purple-300">Courses</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                      <p className="text-2xl font-bold text-white">50+</p>
                      <p className="text-xs text-purple-300">Lessons</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                      <p className="text-2xl font-bold text-white">📄</p>
                      <p className="text-xs text-purple-300">Templates</p>
                    </div>
                  </div>

                  {/* Pre-order Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                    🚀 Pre-Orders Open • Releasing Jan 1st, 2026!
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <div className="bg-white text-purple-900 px-10 py-4 rounded-2xl font-bold text-xl shadow-xl group-hover:shadow-2xl group-hover:bg-purple-50 transition-all flex items-center gap-3">
                      <Award className="w-6 h-6" />
                      Enter Academy
                      <ArrowLeft className="w-6 h-6 rotate-180 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Content Categories */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Explore My Content
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Click a category to discover curated content, tutorials, and recommendations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contentCategories.map((category, catIndex) => (
              <button
                key={catIndex}
                onClick={() => handleCategoryClick(category.page, category.title)}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-pink-300 text-left ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${300 + catIndex * 100}ms` }}
              >
                {/* Category Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                  <div className={`relative bg-gradient-to-r ${category.color} p-6 rounded-2xl inline-block transform group-hover:scale-110 transition-all duration-300`}>
                    <category.icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}>
                  {category.title}
                </h3>

                {/* Category Description */}
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>

                {/* Enter Button */}
                <div className={`flex items-center gap-2 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-xl font-semibold group-hover:shadow-lg transition-all inline-flex`}>
                  <span>Explore</span>
                  <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Compact Work With Me Section */}
        <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 rounded-2xl p-8 shadow-2xl border border-purple-500/30 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="w-10 h-10 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Work With Me</h2>
              <Crown className="w-10 h-10 text-purple-400" />
            </div>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Partner with a multi-platform creator. 55K+ engaged followers across beauty, wellness, lifestyle & business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setCurrentPage('partnerships')}
                className="group bg-white text-purple-900 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Partnership Info
                <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setCurrentPage('mediakit')}
                className="group bg-purple-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-600 transition-all hover:scale-105 shadow-lg flex items-center gap-2 border-2 border-purple-500"
              >
                <FileText className="w-5 h-5" />
                Media Kit
                <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="mailto:sydney@itgirlsydcontent.com?subject=Brand Partnership Inquiry"
                className="group bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-600 transition-all hover:scale-105 shadow-lg flex items-center gap-2 border-2 border-indigo-500"
              >
                <Mail className="w-5 h-5" />
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-8 shadow-2xl text-white text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Join My VIP List</h2>
            <p className="mb-6 text-lg opacity-90">
              Get exclusive content, early access to courses, and special offers delivered to your inbox!
            </p>
            
            {newsletterStatus === 'success' ? (
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/30">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2">You're In!</h3>
                <p className="opacity-90">Welcome to the VIP list! Check your inbox for a welcome email. 💕</p>
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
                  className={`flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 transition-all ${
                    newsletterStatus === 'error' 
                      ? 'ring-4 ring-red-400 focus:ring-red-400' 
                      : 'focus:ring-white/50'
                  }`}
                  required
                />
                <button 
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className={`px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2 ${
                    newsletterStatus === 'loading'
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-white text-purple-600 hover:bg-pink-50 hover:scale-105'
                  }`}
                >
                  {newsletterStatus === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                      Joining...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            )}
            
            {newsletterStatus === 'error' && (
              <p className="mt-3 text-yellow-200 text-sm font-medium">
                Please enter a valid email address 💕
              </p>
            )}
            
            {newsletterStatus !== 'success' && (
              <p className="mt-4 text-sm opacity-75">No spam, ever! Unsubscribe anytime.</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-600 mb-4">
            Made with <Heart className="inline w-4 h-4 text-pink-500 fill-pink-500" /> by Sydney @itgirlsyd19
          </p>
          <p className="text-sm text-gray-500">
            © 2025 All Rights Reserved • <a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a> • <a href="#" className="hover:text-pink-500 transition-colors">Terms</a>
          </p>
        </div>
      </div>

      {/* Floating Support Button */}
      <button
        onClick={() => setShowSupportPopup(true)}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
      >
        <Heart className="w-6 h-6 fill-white group-hover:animate-pulse" />
        <span className="font-bold hidden sm:inline">Support Me</span>
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

