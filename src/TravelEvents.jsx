import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Activity, ArrowLeft, Globe, Camera, Video, Target } from 'lucide-react';

export default function TravelEvents({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const travelCategories = [
    {
      title: 'Sporting Events',
      icon: Activity,
      description: 'Game day vlogs, stadium experiences & sports adventures',
      color: 'from-blue-500 to-indigo-600',
      url: 'https://www.tiktok.com/@itgirlsyd19/video/7580173848411213070'
    },
    {
      title: 'Concerts & Festivals',
      icon: Sparkles,
      description: 'Music events, festival fits & live show experiences',
      color: 'from-purple-500 to-pink-600',
      url: '#'
    },
    {
      title: 'Travel Vlogs',
      icon: Camera,
      description: 'Destination guides, travel tips & adventure content',
      color: 'from-cyan-500 to-blue-600',
      url: '#'
    },
    {
      title: 'Local Adventures',
      icon: Target,
      description: 'Hidden gems, city guides & fun activities near you',
      color: 'from-green-500 to-teal-600',
      url: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Sky texture overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      
      {/* Subtle sparkle effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <Star
            key={i}
            className={`absolute ${i % 3 === 0 ? 'text-blue-300' : i % 3 === 1 ? 'text-purple-300' : 'text-pink-300'} animate-pulse`}
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

      {/* Glowing orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group mb-8 flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-blue-300 px-6 py-3 rounded-full hover:border-blue-400 hover:shadow-lg hover:shadow-blue-300/50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-blue-600 group-hover:-translate-x-1 transition-transform" />
          <span className="text-blue-700 font-semibold">Back to Main</span>
        </button>

        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          {/* Travel Header */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-2xl opacity-40" />
            <div className="relative bg-white border border-blue-300 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-center gap-8 mb-6">
                <Globe className="w-16 h-16 text-blue-600" />
                <Camera className="w-20 h-20 text-purple-600" />
                <Sparkles className="w-16 h-16 text-pink-600" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                Travel & Events
              </h1>
              <p className="text-blue-700 font-semibold text-lg">
                Adventures • Events • Experiences
              </p>
            </div>
          </div>

          <p className="text-xl text-blue-800 font-semibold mb-4">
            Come Along on My Adventures! ✈️
          </p>
          
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            From sporting events to concerts, travel vlogs to local discoveries - 
            join me as I explore amazing places and experiences.
          </p>
        </div>

        {/* Travel Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {travelCategories.map((category, index) => (
            <a
              key={index}
              href={category.url}
              target={category.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className={`group bg-white/90 backdrop-blur-sm border-3 border-blue-200 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-purple-300/50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
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

        {/* Featured Video Section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl text-white text-center overflow-hidden">
            {/* Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <Star
                  key={i}
                  className="absolute text-white/30 animate-pulse"
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
                <Globe className="w-14 h-14" />
                <Camera className="w-16 h-16" />
                <Video className="w-14 h-14" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Latest Adventure</h2>
              <p className="mb-6 text-lg">
                Check out my latest event coverage and travel content!
                New adventures dropping every week.
              </p>
              <a
                href="https://www.tiktok.com/@itgirlsyd19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all hover:scale-105 shadow-2xl"
              >
                <Video className="w-5 h-5" />
                Watch on TikTok
                <Heart className="w-5 h-5 fill-purple-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-purple-600 fill-purple-600 animate-pulse" />
            <p className="text-purple-700 font-semibold">
              Adventure awaits!
            </p>
            <Heart className="w-5 h-5 text-purple-600 fill-purple-600 animate-pulse" />
          </div>
          <p className="text-gray-600 text-sm">
            Making memories, one adventure at a time ✈️✨
          </p>
        </div>
      </div>
    </div>
  );
}





