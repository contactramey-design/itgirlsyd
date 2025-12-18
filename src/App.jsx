import React, { useState, useEffect } from 'react';
import { Heart, Instagram, Twitter, Mail, ShoppingBag, Crown, Sparkles, Star, TrendingUp, Palette, Briefcase, Activity, Zap, DollarSign, FileText, ArrowLeft, Video } from 'lucide-react';

// Import page components
import MediaKit from './MediaKit.jsx';
import PartnershipsPage from './Partnerships.jsx';
import ShopPage from './ShopPage.jsx';
import BeautyStudio from './BeautyStudio.jsx';
import HealthGym from './HealthGym.jsx';
import TravelEvents from './TravelEvents.jsx';
import BusinessTechGuides from './BusinessTechGuides.jsx';
import ContentCreationForm from './ContentCreationForm.jsx';
import ModaPitchDeck from './ModaPitchDeck.jsx';
import BusinessHub from './BusinessHub.jsx';

export default function CreatorLandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [notification, setNotification] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
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

  // Social stats - UPDATE THESE MONTHLY with your current follower counts
  const socialLinks = [
    { name: 'TikTok', icon: Video, url: 'https://tiktok.com/@itgirlsyd19', color: 'from-black via-gray-900 to-cyan-400', iconColor: 'text-white', followers: '15.2K' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/itgirlsyd19', color: 'from-purple-600 via-pink-500 to-orange-400', iconColor: 'text-white', followers: '12.8K' },
    { name: 'Pinterest', icon: TrendingUp, url: 'https://pinterest.com/itgirlsyd19', color: 'from-red-600 to-red-500', iconColor: 'text-white', followers: '5.1K' },
    { name: 'Threads', icon: Activity, url: 'https://threads.net/@itgirlsyd19', color: 'from-black to-gray-900', iconColor: 'text-white', followers: '1.2K' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/itgirlsyd19', color: 'from-blue-400 to-blue-500', iconColor: 'text-white', followers: '2.3K' }
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

  // Page Routing
  if (currentPage === 'mediakit') {
    return <MediaKit />;
  }

  if (currentPage === 'partnerships') {
    return <PartnershipsPage onBack={navigateHome} onViewMediaKit={() => setCurrentPage('mediakit')} />;
  }

  if (currentPage === 'shop') {
    return <ShopPage onBack={navigateHome} />;
  }

  if (currentPage === 'beauty') {
    return <BeautyStudio onBack={navigateHome} />;
  }

  if (currentPage === 'business') {
    return <BusinessHub 
      onBack={navigateHome} 
      onNavigateToModa={() => setCurrentPage('moda')} 
      onNavigateToContentForm={() => setCurrentPage('content-form')} 
      onNavigateToTechGuides={() => setCurrentPage('tech-guides')}
    />;
  }

  if (currentPage === 'moda') {
    return <ModaPitchDeck onBack={() => setCurrentPage('business')} />;
  }

  if (currentPage === 'content-form') {
    return <ContentCreationForm onBack={() => setCurrentPage('business')} />;
  }

  if (currentPage === 'tech-guides') {
    return <BusinessTechGuides onBack={() => setCurrentPage('business')} />;
  }

  if (currentPage === 'gym') {
    return <HealthGym onBack={navigateHome} />;
  }

  if (currentPage === 'homehaven') {
    return <TravelEvents onBack={navigateHome} />;
  }

  // Main Landing Page
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
              alt="IT GIRL"
              className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover mx-auto"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2 shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            IT GIRL CONTENT
          </h1>
          
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Content Creator • Lifestyle Influencer • Digital Trendsetter
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <button 
              onClick={() => setCurrentPage('shop')}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="font-semibold">Shop</span>
            </button>
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

        {/* Social Media Stats Section */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-center text-gray-600 font-medium mb-2">Follow Me On</h3>
          <p className="text-center text-sm text-gray-400 mb-6">35K+ Total Community</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(social.name)}
                className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-pink-300 relative flex flex-col items-center gap-3 min-w-[100px]"
                title={social.name}
              >
                <div className={`bg-gradient-to-br ${social.color} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <social.icon className={`w-6 h-6 ${social.iconColor}`} />
                </div>
                <div className="text-center">
                  <span className="text-lg font-black text-gray-900 block">{social.followers}</span>
                  <span className="text-xs font-medium text-gray-500 block">{social.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Embedded Social Feeds */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Latest Content
          </h2>
          <p className="text-center text-gray-600 mb-8">Check out what I've been creating ✨</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TikTok Embed */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-black to-cyan-400 rounded-xl p-2">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">TikTok</h3>
                  <p className="text-xs text-gray-500">@itgirlsyd19</p>
                </div>
              </div>
              <div className="aspect-[9/16] max-h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
                <iframe
                  src="https://www.tiktok.com/embed/@itgirlsyd19"
                  className="w-full h-full"
                  allowFullScreen
                  allow="encrypted-media"
                  title="TikTok Feed"
                />
              </div>
              <a 
                href="https://tiktok.com/@itgirlsyd19"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all"
              >
                <Video className="w-4 h-4" />
                Follow on TikTok
              </a>
            </div>

            {/* Instagram Embed */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl p-2">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Instagram</h3>
                  <p className="text-xs text-gray-500">@itgirlsyd19</p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl overflow-hidden flex items-center justify-center">
                <iframe
                  src="https://www.instagram.com/itgirlsyd19/embed"
                  className="w-full h-full"
                  allowFullScreen
                  allow="encrypted-media"
                  title="Instagram Feed"
                />
              </div>
              <a 
                href="https://instagram.com/itgirlsyd19"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-4 py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                <Instagram className="w-4 h-4" />
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Pinterest Board Preview */}
          <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-xl p-2">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Pinterest</h3>
                <p className="text-xs text-gray-500">itgirlsyd19</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8 text-center">
              <p className="text-gray-600 mb-4">Check out my curated boards for outfit inspo, recipes, workouts & more!</p>
              <a 
                href="https://pinterest.com/itgirlsyd19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all"
              >
                <TrendingUp className="w-4 h-4" />
                Browse My Pins
              </a>
            </div>
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
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                  <div className={`relative bg-gradient-to-r ${category.color} p-6 rounded-2xl inline-block transform group-hover:scale-110 transition-all duration-300`}>
                    <category.icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}>
                  {category.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>

                <div className={`flex items-center gap-2 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-xl font-semibold group-hover:shadow-lg transition-all inline-flex`}>
                  <span>Explore</span>
                  <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Work With Me Section */}
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
          <a
            href="mailto:sydney@itgirlsydcontent.com"
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            sydney@itgirlsydcontent.com
          </a>
          <p className="text-gray-600 mb-4">
            Made with <Heart className="inline w-4 h-4 text-pink-500 fill-pink-500" /> by IT GIRL CONTENT
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
            <button
              onClick={() => setShowSupportPopup(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all hover:rotate-90 duration-300"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

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
