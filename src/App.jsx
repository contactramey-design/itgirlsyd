import React, { useState, useEffect } from 'react';
import { Heart, Instagram, Youtube, Twitter, Mail, ShoppingBag, Crown, Sparkles, Star, Link as LinkIcon, Lock, TrendingUp, Palette, Briefcase, Activity, Home, Cookie, Scissors, Brain, Dumbbell, UtensilsCrossed, Terminal, Code, Zap, Rocket, DollarSign, FileText, Edit3, Users, ArrowLeft, Cpu, Database, Globe, Shirt, Smile, Gem, Wand2, Camera, Video, Target, Award } from 'lucide-react';
import MediaKit from './MediaKit.jsx';
import PartnershipsPage from './Partnerships.jsx';

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

        {/* Beauty Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {beautyCategories.map((category, index) => (
            <a
              key={index}
              href={category.url}
              target={category.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`group bg-white/80 backdrop-blur-sm border-3 rounded-2xl p-6 hover:border-pink-400 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-pink-300/50 ${
                category.featured 
                  ? 'border-amber-400 bg-gradient-to-br from-white to-amber-50 md:col-span-2 lg:col-span-3' 
                  : 'border-pink-200'
              } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {category.featured ? (
                /* Featured Look Layout */
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-lg opacity-50 group-hover:opacity-75 transition-opacity`} />
                    <div className={`relative bg-gradient-to-r ${category.color} p-3 rounded-xl transform group-hover:scale-105 transition-all duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      FEATURED LOOK
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {category.description}
                    </p>
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${category.color} text-white px-5 py-2 rounded-full text-sm font-semibold group-hover:shadow-lg transition-all`}>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Shop This Look</span>
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular Category Layout */
                <>
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-xl opacity-60 group-hover:opacity-90 transition-opacity`} />
                    <div className={`relative bg-gradient-to-r ${category.color} p-5 rounded-2xl inline-block transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>

                  <div className={`flex items-center justify-center gap-2 bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:shadow-lg transition-all`}>
                    <Sparkles className="w-4 h-4" />
                    <span>Explore</span>
                    <Heart className="w-4 h-4 fill-white" />
                  </div>
                </>
              )}
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
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Lock className="w-12 h-12 text-purple-300" />
                    <Crown className="w-12 h-12 text-pink-300" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Unlock Insider Access</h2>
                  <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
                    Get exclusive access to my curated list of hair brand contacts + a proven email template 
                    to land your own sponsorships and collaborations!
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6 max-w-md mx-auto border border-white/20">
                    <h3 className="text-white font-bold mb-4">What You'll Get:</h3>
                    <ul className="text-left text-purple-100 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-purple-300 mt-1 flex-shrink-0" />
                        <span>6 verified hair brand partnership contacts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-purple-300 mt-1 flex-shrink-0" />
                        <span>Proven email template for brand outreach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-purple-300 mt-1 flex-shrink-0" />
                        <span>Tips for successful collaborations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="max-w-md mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-200 text-sm">One-time access fee:</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-black text-white">$1.99</span>
                        </div>
                      </div>
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-400/50 transition-all mb-4"
                    />
                    <a
                      href="https://paypal.me/SydneyRamey894/1.99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-400 hover:to-pink-400 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      <Crown className="w-5 h-5" />
                      Purchase Access - $1.99
                      <Sparkles className="w-5 h-5" />
                    </a>
                    <p className="text-purple-300 text-xs mt-3">
                      Secure PayPal checkout • Email me after payment with your email: sydney@itgirlsydcontent.com
                    </p>
                    <p className="text-purple-400 text-xs mt-2">
                      I'll send you access within 24 hours! 💕
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

// Health & Wellness Gym Component - Fitness Theme
function HealthGymPage({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fitnessCategories = [
    {
      title: 'My Workout Split',
      icon: Dumbbell,
      description: 'Follow my complete workout routine on Pinterest',
      color: 'from-red-600 to-orange-600',
      url: 'https://pin.it/1xLXe8fTm',
      featured: true
    },
    {
      title: 'Meal Prep: Breakfast Bowls',
      icon: UtensilsCrossed,
      description: 'Savory breakfast bowls with potatoes & eggs - high protein & carbs',
      color: 'from-lime-500 to-green-600',
      url: 'https://www.pinterest.com/pin/997899229946483647/',
      featured: true
    },
    {
      title: 'Training & Recovery',
      icon: Dumbbell,
      description: 'Workouts, yoga, stretching, meditation & fitness motivation',
      color: 'from-orange-500 to-red-500',
      url: '#'
    },
    {
      title: 'Nutrition & Recipes',
      icon: UtensilsCrossed,
      description: 'Healthy meals, meal prep & clean eating guides',
      color: 'from-lime-500 to-green-600',
      url: '#'
    },
    {
      title: 'Shop Fitness Gear',
      icon: ShoppingBag,
      description: 'Equipment, supplements & workout essentials',
      color: 'from-yellow-500 to-orange-500',
      url: 'https://www.amazon.com/shop/itgirlsyd19'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-orange-950 to-yellow-950 relative overflow-hidden">
      {/* Gym floor grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(249,115,22,0.15)_3px,transparent_3px),linear-gradient(90deg,rgba(249,115,22,0.15)_3px,transparent_3px)] bg-[size:60px_60px]" />
      
      {/* Dynamic stripes */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600" />
      </div>
      
      {/* Glowing workout orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Pulsing energy bars */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              animation: `pulse ${2 + i * 0.5}s infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group mb-8 flex items-center gap-2 bg-black/60 border-3 border-orange-500/50 px-6 py-4 rounded-lg hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-orange-400 group-hover:-translate-x-1 transition-transform" />
          <span className="text-orange-400 font-black uppercase">Exit Gym</span>
        </button>

        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          {/* Gym Header */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-2xl blur-3xl opacity-60 animate-pulse" />
            <div className="relative bg-gradient-to-br from-black via-gray-900 to-orange-900/30 border-4 border-orange-500 rounded-2xl p-10 shadow-2xl">
              <div className="flex items-center justify-center gap-8 mb-6">
                <Dumbbell className="w-20 h-20 text-orange-500" />
                <Zap className="w-24 h-24 text-yellow-500" />
                <Activity className="w-20 h-20 text-red-500" />
              </div>
              <h1 className="text-6xl font-black bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4 uppercase tracking-wider">
                Iron Temple
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-orange-500" />
                <p className="text-orange-400 font-black text-xl uppercase tracking-widest">
                  No Pain • No Gain
                </p>
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-yellow-500" />
              </div>
            </div>
          </div>

          <p className="text-2xl text-orange-400 font-black mb-4 uppercase tracking-wide">
            Train Like a Champion
          </p>
          
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome to the Iron Temple. Hardcore workouts, nutrition science, and mental toughness.
            This is where transformations happen.
          </p>
        </div>

        {/* Fitness Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fitnessCategories.map((category, index) => (
            <a
              key={index}
              href={category.url}
              target={category.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`group bg-gradient-to-br from-black via-gray-900 to-orange-950/50 border-3 rounded-xl p-6 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-orange-500/40 ${
                category.featured 
                  ? 'border-red-500/60 bg-gradient-to-br from-red-950/50 to-orange-950 md:col-span-2 lg:col-span-3' 
                  : 'border-orange-500/40'
              } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {category.featured ? (
                /* Featured Workout Layout */
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-xl opacity-70 group-hover:opacity-90 transition-opacity`} />
                    <div className={`relative bg-gradient-to-r ${category.color} p-6 rounded-2xl transform group-hover:scale-110 transition-all duration-300`}>
                      <category.icon className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                      FEATURED WORKOUT
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors uppercase tracking-wide">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {category.description}
                    </p>
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${category.color} text-black px-6 py-3 rounded-lg font-black group-hover:shadow-lg transition-all uppercase tracking-wider`}>
                      <TrendingUp className="w-5 h-5" />
                      <span>View on Pinterest</span>
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular Category Layout */
                <>
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-xl opacity-60 group-hover:opacity-90 transition-opacity`} />
                    <div className={`relative bg-gradient-to-r ${category.color} p-5 rounded-xl inline-block transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors uppercase tracking-wide">
                    {category.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4">
                    {category.description}
                  </p>

                  <div className={`flex items-center justify-center gap-2 bg-gradient-to-r ${category.color} text-black px-4 py-2 rounded-lg text-sm font-black group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all uppercase tracking-wider`}>
                    <Zap className="w-4 h-4" />
                    <span>Train Now</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </>
              )}
            </a>
          ))}
        </div>

        {/* Motivational CTA */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-black border-4 border-orange-500 rounded-2xl p-10 shadow-2xl text-white text-center overflow-hidden">
            {/* Diagonal stripes */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(249,115,22,0.1)_10px,rgba(249,115,22,0.1)_20px)]" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500" />
                <Dumbbell className="w-16 h-16 text-orange-500" />
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-yellow-500" />
              </div>
              <h2 className="text-4xl font-black mb-4 uppercase tracking-wider bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Gear Up
              </h2>
              <p className="mb-6 text-lg font-bold text-gray-300">
                Professional equipment and supplements to maximize your results.
                Train harder. Recover faster. Dominate.
              </p>
              <a
                href="https://www.amazon.com/shop/itgirlsyd19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-xl font-black hover:from-orange-500 hover:to-red-500 transition-all hover:scale-105 shadow-2xl shadow-orange-500/50 uppercase tracking-wide border-2 border-yellow-500"
              >
                <ShoppingBag className="w-6 h-6" />
                Shop Equipment
                <Zap className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-1 w-8 bg-orange-500" />
            <Zap className="w-6 h-6 text-orange-500" />
            <p className="text-orange-400 font-black uppercase tracking-widest text-lg">
              Rise & Grind
            </p>
            <Zap className="w-6 h-6 text-orange-500" />
            <div className="h-1 w-8 bg-orange-500" />
          </div>
          <p className="text-gray-400 text-sm font-bold">
            Your journey to greatness starts now
          </p>
        </div>
      </div>
    </div>
  );
}

// Home & Living Component - Cozy Holiday Theme
function HomeHavenPage({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const homeCategories = [
    {
      title: 'Home Decor & Seasonal',
      icon: Home,
      description: 'Room tours, fall & Christmas decorating, cozy styling',
      color: 'from-amber-600 to-orange-600',
      url: '#'
    },
    {
      title: 'Baking & Recipes',
      icon: Cookie,
      description: 'Sweet treats, holiday cookies & comfort food',
      color: 'from-red-600 to-pink-600',
      url: '#'
    },
    {
      title: 'Lifestyle Vlogs',
      icon: Camera,
      description: 'Day in the life, routines & cozy living moments',
      color: 'from-orange-600 to-amber-700',
      url: '#'
    },
    {
      title: 'Shop Home Essentials',
      icon: ShoppingBag,
      description: 'Decor, kitchen tools & cozy must-haves',
      color: 'from-amber-700 to-orange-800',
      url: 'https://www.amazon.com/shop/itgirlsyd19'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Warm texture overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      
      {/* Subtle sparkle effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Star
            key={i}
            className={`absolute ${i % 3 === 0 ? 'text-orange-300' : i % 3 === 1 ? 'text-red-300' : 'text-amber-300'} animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.2,
              fontSize: `${Math.random() * 12 + 8}px`
            }}
          />
        ))}
      </div>

      {/* Warm glowing orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group mb-8 flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-amber-300 px-6 py-3 rounded-full hover:border-amber-400 hover:shadow-lg hover:shadow-amber-300/50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-amber-600 group-hover:-translate-x-1 transition-transform" />
          <span className="text-amber-700 font-semibold">Back to Main</span>
        </button>

        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          {/* Home Header */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 rounded-2xl blur-2xl opacity-40" />
            <div className="relative bg-white border border-amber-300 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-center gap-8 mb-6">
                <Home className="w-16 h-16 text-amber-600" />
                <Cookie className="w-20 h-20 text-orange-600" />
                <Sparkles className="w-16 h-16 text-red-600" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-red-700 bg-clip-text text-transparent mb-3">
                Home & Living
              </h1>
              <p className="text-amber-700 font-semibold text-lg">
                Seasonal Decor • Baking • Lifestyle
              </p>
            </div>
          </div>

          <p className="text-xl text-amber-800 font-semibold mb-4">
            Your Seasonal Home & Kitchen Inspiration
          </p>
          
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Discover holiday decorating ideas, delicious baking recipes, and cozy lifestyle content.
            From autumn aesthetics to festive Christmas decor.
          </p>
        </div>

        {/* Home Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {homeCategories.map((category, index) => (
            <a
              key={index}
              href={category.url}
              target={category.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`group bg-white/90 backdrop-blur-sm border-3 border-amber-200 rounded-2xl p-6 hover:border-amber-400 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-amber-300/50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Category icon */}
              <div className="relative mb-4">
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-xl opacity-60 group-hover:opacity-90 transition-opacity`} />
                <div className={`relative bg-gradient-to-r ${category.color} p-5 rounded-2xl inline-block transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Category title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
                {category.title}
              </h3>

              {/* Category description */}
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>

              {/* View button */}
              <div className={`flex items-center justify-center gap-2 bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:shadow-lg transition-all`}>
                <Heart className="w-4 h-4 fill-white" />
                <span>Explore</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Seasonal Featured Section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-red-700 via-green-700 to-red-700 rounded-3xl p-8 shadow-2xl text-white text-center overflow-hidden">
            {/* Holiday sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <Star
                  key={i}
                  className="absolute text-yellow-200/40 animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    fontSize: `${Math.random() * 15 + 10}px`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Cookie className="w-14 h-14" />
                <Home className="w-16 h-16" />
                <ShoppingBag className="w-14 h-14" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Seasonal Essentials</h2>
              <p className="mb-6 text-lg">
                Premium home decor and kitchen tools for creating 
                beautiful spaces and delicious memories.
              </p>
              <a
                href="https://www.amazon.com/shop/itgirlsyd19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-red-700 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition-all hover:scale-105 shadow-2xl"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Home & Kitchen
                <Heart className="w-5 h-5 fill-red-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-amber-600 fill-amber-600 animate-pulse" />
            <p className="text-amber-700 font-semibold">
              Home is where the heart is
            </p>
            <Heart className="w-5 h-5 text-amber-600 fill-amber-600 animate-pulse" />
          </div>
          <p className="text-gray-600 text-sm">
            Making memories, one cozy moment at a time 🏡✨
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

// MODA Pitch Deck Component
function ModaPitchDeck({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pitchSlides = [
    {
      title: 'MODA',
      subtitle: 'The Future of AI-Powered Content Creation',
      icon: Rocket,
      content: 'Transforming how creators build their digital empire through intelligent automation and innovation.'
    },
    {
      title: 'The Problem',
      subtitle: 'Content Creators Face Overwhelming Challenges',
      icon: Target,
      points: [
        'Managing multiple platforms is time-consuming and complex',
        'Creating consistent, quality content requires extensive resources',
        'Monetization strategies are fragmented and inefficient',
        'Technical barriers prevent creators from scaling their business'
      ]
    },
    {
      title: 'Our Solution',
      subtitle: 'AI-Powered Creator Platform',
      icon: Zap,
      points: [
        'Unified dashboard for multi-platform content management',
        'AI-driven content generation and optimization',
        'Integrated monetization tools (subscriptions, digital products, sponsorships)',
        'No-code tools for building landing pages, media kits, and stores'
      ]
    },
    {
      title: 'Market Opportunity',
      subtitle: 'Massive & Growing Market',
      icon: TrendingUp,
      stats: [
        { label: 'Creator Economy Size', value: '$250B+', sublabel: 'Global market valuation 2024' },
        { label: 'Content Creators Worldwide', value: '300M+', sublabel: 'And growing 20% YoY' },
        { label: 'Target Market', value: '$15B', sublabel: 'Creator tools & SaaS' },
        { label: 'Avg Creator Spending', value: '$500/mo', sublabel: 'On tools & services' }
      ]
    },
    {
      title: 'Technology',
      subtitle: 'Built on Modern AI Stack',
      icon: Cpu,
      tech: [
        { name: 'AI/ML', items: ['GPT-4 Integration', 'Custom Content Models', 'Automated Optimization'] },
        { name: 'Platform', items: ['React/Next.js', 'Real-time Analytics', 'Multi-platform APIs'] },
        { name: 'Infrastructure', items: ['Cloud-native', 'Scalable Architecture', 'Security-first Design'] }
      ]
    },
    {
      title: 'Business Model',
      subtitle: 'Multiple Revenue Streams',
      icon: DollarSign,
      revenue: [
        { model: 'SaaS Subscriptions', price: '$29-199/mo', description: 'Tiered pricing for creators at all levels' },
        { model: 'Transaction Fees', price: '5-10%', description: 'Commission on digital product sales & sponsorships' },
        { model: 'Enterprise', price: 'Custom', description: 'White-label solutions for agencies & brands' },
        { model: 'Marketplace', price: '15%', description: 'Template & tool marketplace commission' }
      ]
    },
    {
      title: 'Traction',
      subtitle: 'Early Success & Validation',
      icon: Award,
      traction: [
        'MVP launched with positive user feedback',
        'Built complete landing page system (this site!)',
        'Validated with 35K+ social media following',
        'Early revenue from digital products',
        'Strong engagement metrics across platforms'
      ]
    },
    {
      title: 'The Ask',
      subtitle: 'Seed Round Investment',
      icon: Rocket,
      investment: {
        amount: '$250K - $500K',
        use: [
          { category: 'Product Development', percentage: '50%', description: 'AI features, platform expansion' },
          { category: 'Marketing & Growth', percentage: '30%', description: 'User acquisition, brand building' },
          { category: 'Team & Operations', percentage: '20%', description: 'Key hires, infrastructure' }
        ],
        timeline: '12-18 months to Series A'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Glowing orbs */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 bg-white/10 border-2 border-purple-500/50 px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-purple-400 group-hover:-translate-x-1 transition-transform" />
            <span className="text-purple-400 font-bold">Back to Business Hub</span>
          </button>
          
          <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 px-4 py-2 rounded-full">
            <Lock className="w-4 h-4 text-purple-300" />
            <span className="text-purple-300 text-sm font-bold">Confidential</span>
          </div>
        </div>

        {/* Pitch Deck Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Current Slide */}
          <div className="bg-gradient-to-br from-slate-800/90 to-purple-900/90 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-12 shadow-2xl mb-8">
            {activeSlide === 0 && (
              /* Title Slide */
              <div className="text-center py-20">
                <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-3xl mb-8 animate-pulse">
                  <Rocket className="w-24 h-24 text-white" />
                </div>
                <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-6">
                  MODA
                </h1>
                <p className="text-3xl text-purple-200 font-bold mb-4">
                  The Future of AI-Powered Content Creation
                </p>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Transforming how creators build their digital empire through intelligent automation and innovation.
                </p>
                <div className="mt-12 flex items-center justify-center gap-4">
                  <div className="bg-purple-500/20 px-6 py-3 rounded-full border border-purple-400/50">
                    <span className="text-purple-300 font-bold">MVP Stage</span>
                  </div>
                  <div className="bg-blue-500/20 px-6 py-3 rounded-full border border-blue-400/50">
                    <span className="text-blue-300 font-bold">Seeking Seed Investment</span>
                  </div>
                </div>
              </div>
            )}

            {activeSlide === 1 && (
              /* Problem Slide */
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-red-500/20 p-4 rounded-2xl">
                    <Target className="w-12 h-12 text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-5xl font-black text-white mb-2">{pitchSlides[1].title}</h2>
                    <p className="text-xl text-purple-300">{pitchSlides[1].subtitle}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {pitchSlides[1].points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-red-400 font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-xl text-gray-200">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSlide === 2 && (
              /* Solution Slide */
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-green-500/20 p-4 rounded-2xl">
                    <Zap className="w-12 h-12 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-5xl font-black text-white mb-2">{pitchSlides[2].title}</h2>
                    <p className="text-xl text-purple-300">{pitchSlides[2].subtitle}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pitchSlides[2].points.map((point, idx) => (
                    <div key={idx} className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Sparkles className="w-6 h-6 text-green-400" />
                        <span className="text-green-400 font-bold text-lg">Solution {idx + 1}</span>
                      </div>
                      <p className="text-lg text-gray-200">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSlide === 3 && (
              /* Market Slide */
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-blue-500/20 p-4 rounded-2xl">
                    <TrendingUp className="w-12 h-12 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-5xl font-black text-white mb-2">{pitchSlides[3].title}</h2>
                    <p className="text-xl text-purple-300">{pitchSlides[3].subtitle}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {pitchSlides[3].stats.map((stat, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 rounded-2xl p-8 text-center">
                      <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                        {stat.value}
                      </p>
                      <p className="text-xl font-bold text-white mb-2">{stat.label}</p>
                      <p className="text-sm text-gray-400">{stat.sublabel}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSlide === 4 && (
              /* Technology Slide */
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-cyan-500/20 p-4 rounded-2xl">
                    <Cpu className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-5xl font-black text-white mb-2">{pitchSlides[4].title}</h2>
                    <p className="text-xl text-purple-300">{pitchSlides[4].subtitle}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {pitchSlides[4].tech.map((category, idx) => (
                    <div key={idx} className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
                      <h3 className="text-2xl font-bold text-cyan-400 mb-4">{category.name}</h3>
                      <div className="flex flex-wrap gap-3">
                        {category.items.map((item, i) => (
                          <div key={i} className="bg-cyan-500/20 border border-cyan-400/50 px-4 py-2 rounded-lg">
                            <span className="text-gray-200">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSlide === 5 && (
              /* Business Model Slide */
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-yellow-500/20 p-4 rounded-2xl">
                    <DollarSign className="w-12 h-12 text-yellow-400" />
                  </div>
                  <div>
                    <h2 className="text-5xl font-black text-white mb-2">{pitchSlides[5].title}</h2>
                    <p className="text-xl text-purple-300">{pitchSlides[5].subtitle}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pitchSlides[5].revenue.map((rev, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-yellow-400">{rev.model}</h3>
                        <span className="text-2xl font-black text-yellow-300">{rev.price}</span>
                      </div>
                      <p className="text-gray-300">{rev.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSlide === 6 && (
              /* Traction Slide */
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-green-500/20 p-4 rounded-2xl">
                    <Award className="w-12 h-12 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-5xl font-black text-white mb-2">{pitchSlides[6].title}</h2>
                    <p className="text-xl text-purple-300">{pitchSlides[6].subtitle}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {pitchSlides[6].traction.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-green-400" />
                      </div>
                      <p className="text-xl text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSlide === 7 && (
              /* Investment Ask Slide */
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-purple-500/20 p-4 rounded-2xl">
                    <Rocket className="w-12 h-12 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-5xl font-black text-white mb-2">{pitchSlides[7].title}</h2>
                    <p className="text-xl text-purple-300">{pitchSlides[7].subtitle}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/50 rounded-2xl p-8 mb-8 text-center">
                  <p className="text-purple-300 text-xl mb-2">Raising</p>
                  <p className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                    {pitchSlides[7].investment.amount}
                  </p>
                  <p className="text-gray-300 text-lg">{pitchSlides[7].investment.timeline}</p>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Use of Funds:</h3>
                <div className="space-y-4">
                  {pitchSlides[7].investment.use.map((use, idx) => (
                    <div key={idx} className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-purple-300">{use.category}</h4>
                        <span className="text-3xl font-black text-purple-400">{use.percentage}</span>
                      </div>
                      <p className="text-gray-300">{use.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 px-6 py-3 rounded-lg hover:bg-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-bold">Previous</span>
            </button>

            <div className="flex items-center gap-2">
              {pitchSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeSlide ? 'bg-purple-400 w-8' : 'bg-purple-500/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveSlide(Math.min(pitchSlides.length - 1, activeSlide + 1))}
              disabled={activeSlide === pitchSlides.length - 1}
              className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 px-6 py-3 rounded-lg hover:bg-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-purple-400 font-bold">Next</span>
              <ArrowLeft className="w-5 h-5 text-purple-400 rotate-180" />
            </button>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Interested in Learning More?</h3>
            <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how MODA can revolutionize the creator economy. Schedule a meeting or request our full pitch deck.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="mailto:sydney@itgirlsydcontent.com?subject=MODA Investment Inquiry"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact for Investment
              </a>
              <a
                href="mailto:sydney@itgirlsydcontent.com?subject=Request MODA Full Pitch Deck"
                className="bg-purple-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-800 transition-all border-2 border-white/30 flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Request Full Deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Business Hub Component - Hacker/Gaming Theme
function BusinessHubPage({ onBack, onNavigateToModa, onNavigateToContentForm, onNavigateToTechGuides }) {
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
    {
      title: 'MODA Investment Info',
      icon: Rocket,
      description: 'Tech venture opportunities & investor relations',
      color: 'from-yellow-400 to-amber-500',
      glowColor: 'group-hover:shadow-yellow-500/50',
      url: '#moda'
    }
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
            const isModaLink = service.url === '#moda';
            const isContentFormLink = service.url === '#content-form';
            const isTechGuidesLink = service.url === '#tech-guides';
            const isSpecialLink = isModaLink || isContentFormLink || isTechGuidesLink;
            const Element = isSpecialLink ? 'button' : 'a';
            const elementProps = isSpecialLink 
              ? { onClick: isModaLink ? onNavigateToModa : isContentFormLink ? onNavigateToContentForm : onNavigateToTechGuides }
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

        {/* Featured Section - MODA Info */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-purple-900/30 border-2 border-purple-500 rounded-2xl p-8 shadow-2xl shadow-purple-500/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Database className="w-10 h-10 text-purple-400 animate-pulse" />
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono">
                MODA_PROJECT.init()
              </h2>
              <Globe className="w-10 h-10 text-pink-400 animate-pulse" />
            </div>
            
            <p className="text-gray-300 text-center mb-6 font-mono text-sm max-w-3xl mx-auto">
              {'// '}MODA is my innovative tech venture combining AI, automation, and digital transformation.
              <br />
              {'// '}Interested in learning more or discussing investment opportunities?
            </p>

            <div className="flex justify-center">
              <a
                href="mailto:sydney@itgirlsydcontent.com?subject=MODA Investment Inquiry"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg font-mono font-bold text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50 flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                CONTACT_FOR_INVESTOR_INFO
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
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
    },
    {
      title: 'Health & Wellness',
      emoji: '💪',
      icon: Dumbbell,
      color: 'from-green-500 to-orange-500',
      description: 'Fitness routines, nutrition tips, wellness practices & healthy recipes',
      page: 'gym'
    },
    {
      title: 'Home & Living',
      emoji: '🏡',
      icon: Home,
      color: 'from-amber-600 to-red-600',
      description: 'Seasonal decor, baking recipes, lifestyle vlogs & cozy home inspiration',
      page: 'homehaven'
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
    return <BeautyClosetPage onBack={navigateHome} />;
  }

  // Render Business Page
  if (currentPage === 'business') {
    return <BusinessHubPage 
      onBack={navigateHome} 
      onNavigateToModa={() => setCurrentPage('moda')} 
      onNavigateToContentForm={() => setCurrentPage('content-form')} 
      onNavigateToTechGuides={() => setCurrentPage('tech-guides')}
    />;
  }

  // Render MODA Pitch Deck Page
  if (currentPage === 'moda') {
    return <ModaPitchDeck onBack={() => setCurrentPage('business')} />;
  }

  // Render Content Creation Form Page
  if (currentPage === 'content-form') {
    return <ContentCreationForm onBack={() => setCurrentPage('business')} />;
  }

  // Render Business & Tech Guides Page
  if (currentPage === 'tech-guides') {
    return <BusinessTechGuides onBack={() => setCurrentPage('business')} />;
  }

  // Render Gym Page
  if (currentPage === 'gym') {
    return <HealthGymPage onBack={navigateHome} />;
  }

  // Render Home Haven Page
  if (currentPage === 'homehaven') {
    return <HomeHavenPage onBack={navigateHome} />;
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
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
              <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
              <span className="font-semibold text-gray-700">35K+ Community</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Verified Creator</span>
            </div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hey babe! 💕 Welcome to my little corner of the internet. I'm all about beauty, fashion, lifestyle & good vibes. 
            Join me on this journey & shop my faves below! ✨
          </p>
        </div>

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

        {/* Compact Social Media Section */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-center text-gray-600 font-medium mb-4">Follow Me On</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(social.name)}
                className="group bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-pink-300 relative flex flex-col items-center gap-2"
                title={social.name}
              >
                <div className={`bg-gradient-to-br ${social.color} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <social.icon className={`w-6 h-6 ${social.iconColor}`} />
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-gray-700 block">{social.name}</span>
                </div>
              </a>
            ))}
          </div>
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
              Partner with a multi-platform creator. 35K+ engaged followers across beauty, wellness, lifestyle & business.
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
              Get exclusive content, early access, and special offers delivered to your inbox!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
              />
              <button 
                onClick={() => handleLinkClick('Newsletter signup')}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all hover:scale-105 shadow-lg"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm opacity-75">No spam, ever! Unsubscribe anytime.</p>
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

