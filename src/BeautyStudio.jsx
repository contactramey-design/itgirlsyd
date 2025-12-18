import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Crown, Sparkles, Star, Lock, Palette, Mail, FileText, Users, ArrowLeft, Shirt } from 'lucide-react';

export default function BeautyStudio({ onBack }) {
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
      title: 'Fashion & Style',
      icon: Shirt,
      description: 'GRWM videos, outfit hauls, try-ons, styling tips & fashion inspiration',
      color: 'from-pink-400 to-rose-500',
      url: 'https://www.tiktok.com/@itgirlsyd19'
    },
    {
      title: 'Makeup & Hair',
      icon: Palette,
      description: 'Makeup tutorials, hair styling videos, product reviews & beauty tips',
      color: 'from-fuchsia-400 to-purple-500',
      url: 'https://www.tiktok.com/@itgirlsyd19'
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
              Made with love by IT GIRL
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



