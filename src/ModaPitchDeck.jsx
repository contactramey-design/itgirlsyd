import React, { useState, useEffect } from 'react';
import { Mail, Sparkles, Lock, TrendingUp, Zap, Rocket, DollarSign, FileText, ArrowLeft, Cpu, Target, Award } from 'lucide-react';

export default function ModaPitchDeck({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pitchSlides = [
    {
      title: 'MODA',
      subtitle: '3D Avatar Fashion & Virtual Try-On Platform',
      icon: Rocket,
      content: 'Revolutionizing online shopping with AI-powered 3D avatars and personalized outfit inspiration.'
    },
    {
      title: 'The Problem',
      subtitle: 'Online Fashion Shopping is Broken',
      icon: Target,
      points: [
        'Can\'t visualize how clothes will look on YOUR body type',
        '60% of online fashion returns due to poor fit visualization',
        'Generic mannequins don\'t represent real body diversity',
        'No personalized outfit inspiration for your unique style'
      ]
    },
    {
      title: 'Our Solution',
      subtitle: 'AI-Powered 3D Avatar & Outfit Inspiration',
      icon: Zap,
      points: [
        'Generate YOUR personalized 3D avatar from photos',
        'Virtual try-on - see clothes on YOUR body before buying',
        'AI-curated outfit recommendations based on your style',
        'Mix & match outfits with items you already own'
      ]
    },
    {
      title: 'Market Opportunity',
      subtitle: 'Explosive Growth in Fashion Tech',
      icon: TrendingUp,
      stats: [
        { label: 'Online Fashion Market', value: '$765B', sublabel: 'Global e-commerce fashion 2024' },
        { label: 'Virtual Try-On Market', value: '$14.9B', sublabel: 'Expected by 2028 (31% CAGR)' },
        { label: 'Return Rate Problem', value: '60%', sublabel: 'Fashion returns cost retailers $550B/year' },
        { label: 'Gen Z Fashion Shoppers', value: '1.2B+', sublabel: 'Primary target demographic' }
      ]
    },
    {
      title: 'Technology',
      subtitle: 'Cutting-Edge 3D & AI Stack',
      icon: Cpu,
      tech: [
        { name: '3D Avatar Generation', items: ['AI Body Scanning', 'Photogrammetry', 'Custom Avatar Creation'] },
        { name: 'Virtual Try-On Engine', items: ['Real-time 3D Rendering', 'Clothing Physics Simulation', 'AR Integration'] },
        { name: 'AI Styling', items: ['Computer Vision', 'Style Recommendation Engine', 'Outfit Combination AI'] }
      ]
    },
    {
      title: 'Business Model',
      subtitle: 'Multiple Revenue Streams',
      icon: DollarSign,
      revenue: [
        { model: 'Freemium Subscriptions', price: '$0-29/mo', description: 'Free basic avatars, Premium for advanced features & unlimited outfits' },
        { model: 'Affiliate Commissions', price: '5-15%', description: 'Revenue share when users purchase recommended items' },
        { model: 'Brand Partnerships', price: 'Custom', description: 'Fashion brands pay for virtual product placement & try-ons' },
        { model: 'Premium Features', price: '$1-5', description: 'One-time purchases for special avatars, styles, & filters' }
      ]
    },
    {
      title: 'Traction',
      subtitle: 'MVP Development & Validation',
      icon: Award,
      traction: [
        '3D avatar generation system in development',
        'Virtual try-on engine prototype completed',
        'AI outfit recommendation algorithm built',
        'Validated demand with 55K+ fashion-focused followers',
        'Strong fashion content engagement (35% of content portfolio)',
        'Early user testing with positive feedback'
      ]
    },
    {
      title: 'The Ask',
      subtitle: 'Seed Round Investment',
      icon: Rocket,
      investment: {
        amount: '$250K - $500K',
        use: [
          { category: '3D Avatar Technology', percentage: '45%', description: 'Advanced avatar generation, body scanning AI, rendering engine' },
          { category: 'Virtual Try-On Engine', percentage: '25%', description: 'Clothing physics, fit simulation, AR integration' },
          { category: 'Marketing & User Acquisition', percentage: '20%', description: 'Influencer partnerships, app store optimization, brand awareness' },
          { category: 'Team & Infrastructure', percentage: '10%', description: '3D engineers, cloud infrastructure, operations' }
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
                  3D Avatar Fashion & Virtual Try-On Platform
                </p>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Revolutionizing online shopping with AI-powered 3D avatars and personalized outfit inspiration. Try before you buy - on YOUR body.
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




