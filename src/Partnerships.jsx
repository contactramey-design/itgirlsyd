import React, { useState, useEffect } from 'react';
import { Heart, Mail, ShoppingBag, Crown, Sparkles, Camera, Users, ArrowLeft, Briefcase, FileText, DollarSign, TrendingUp, Award, Target, Zap } from 'lucide-react';

export default function PartnershipsPage({ onBack, onViewMediaKit }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partnershipTypes = [
    {
      title: 'Brand Ambassador',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      description: 'Long-term partnerships with authentic brand advocacy',
      details: [
        '3-12 month partnerships',
        'Monthly content deliverables',
        'Exclusive brand representation',
        'Event appearances & activations',
        'Full usage rights'
      ]
    },
    {
      title: 'Sponsored Content',
      icon: Camera,
      color: 'from-pink-500 to-rose-500',
      description: 'Dedicated posts, reviews & product features',
      details: [
        'Instagram/TikTok posts & Reels',
        'YouTube integrations',
        'Story series & highlights',
        'Product unboxings & reviews',
        'Amazon storefront features'
      ]
    },
    {
      title: 'Collaborations',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
      description: 'Events, giveaways & co-branded campaigns',
      details: [
        'Product launch campaigns',
        'Giveaway partnerships',
        'Event coverage & appearances',
        'Co-created content series',
        'Affiliate partnerships'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group mb-8 flex items-center gap-2 bg-white border-2 border-purple-300 px-6 py-3 rounded-full hover:border-purple-400 hover:shadow-lg transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-purple-500 group-hover:-translate-x-1 transition-transform" />
          <span className="text-purple-600 font-semibold">Back to Main</span>
        </button>

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Briefcase className="w-14 h-14 text-purple-500" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Partnership Opportunities
            </h1>
            <Crown className="w-14 h-14 text-pink-500" />
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Let's create authentic, engaging content that resonates with my community and delivers results for your brand.
          </p>
        </div>

        {/* Stats Overview */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-pink-200">
            <TrendingUp className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <p className="text-3xl font-black text-gray-900">35K+</p>
            <p className="text-sm text-gray-600">Total Reach</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-purple-200">
            <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-3xl font-black text-gray-900">8.5%</p>
            <p className="text-sm text-gray-600">Avg. Engagement</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-blue-200">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-3xl font-black text-gray-900">85%</p>
            <p className="text-sm text-gray-600">Female Audience</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-rose-200">
            <Target className="w-8 h-8 text-rose-500 mx-auto mb-2" />
            <p className="text-3xl font-black text-gray-900">18-34</p>
            <p className="text-sm text-gray-600">Age Range</p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`bg-white rounded-2xl p-8 shadow-lg mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            My Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            I create authentic, engaging content that inspires and empowers my community across beauty, wellness, lifestyle, and business. 
            With a combined reach of <span className="font-bold text-purple-600">35K+</span> followers, I deliver genuine brand stories that convert. 
            My audience trusts my recommendations because I only partner with brands I genuinely believe in.
          </p>
        </div>

        {/* Partnership Types */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Partnership Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all hover:-translate-y-2">
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${type.color} blur-xl opacity-40`} />
                  <div className={`relative bg-gradient-to-r ${type.color} p-4 rounded-xl inline-block`}>
                    <type.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner With Me */}
        <div className={`bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl text-white mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-6 text-center">Why Partner With Me?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Authentic Engagement</h4>
              <p className="text-sm opacity-90">
                My community trusts my recommendations. I only promote products I genuinely use and believe in, 
                resulting in higher conversion rates and lasting brand loyalty.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Multi-Platform Reach</h4>
              <p className="text-sm opacity-90">
                Content distributed across TikTok, Instagram, Pinterest, and Threads ensures maximum visibility 
                and diverse audience touchpoints for your brand.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Professional Production</h4>
              <p className="text-sm opacity-90">
                High-quality photography, videography, and editing. Every piece of content is crafted to meet 
                professional brand standards while maintaining authentic appeal.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-bold text-lg mb-2">Data-Driven Results</h4>
              <p className="text-sm opacity-90">
                Detailed analytics and performance reports for every campaign. Track reach, engagement, 
                clicks, and conversions with full transparency.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-white rounded-2xl p-10 shadow-2xl text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Briefcase className="w-16 h-16 mx-auto mb-4 text-purple-500" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Collaborate?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create authentic content that delivers results for your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sydney@itgirlsydcontent.com?subject=Partnership Inquiry"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact: sydney@itgirlsydcontent.com
            </a>
            
            <button
              onClick={onViewMediaKit}
              className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all hover:scale-105 shadow-lg border-2 border-purple-300 flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              View Full Media Kit
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Response time: 24-48 hours • Professional representation available
          </p>
        </div>
      </div>
    </div>
  );
}

