import React from 'react';
import { Heart, Instagram, Video, Twitter, Mail, TrendingUp, Activity, Camera, Users, Target, TrendingUp as Chart, Award, Briefcase, Crown, Sparkles, Download, FileText } from 'lucide-react';

export default function MediaKit() {
  const stats = [
    { platform: 'TikTok', followers: '22K', engagement: '8.5%', icon: Video, color: 'from-black to-cyan-400' },
    { platform: 'Instagram', followers: '9.5K', engagement: '6.2%', icon: Instagram, color: 'from-purple-600 to-pink-500' },
    { platform: 'Pinterest', followers: '23K', engagement: '12%', icon: TrendingUp, color: 'from-red-600 to-red-500' },
    { platform: 'Threads', followers: '1.2K', engagement: '5.8%', icon: Activity, color: 'from-black to-gray-900' }
  ];

  const contentPillars = [
    { name: 'Beauty & Fashion', percentage: '45%', color: 'bg-pink-500' },
    { name: 'Tech & Business', percentage: '30%', color: 'bg-purple-600' },
    { name: 'Miscellaneous', percentage: '25%', color: 'bg-amber-500' }
  ];

  const demographics = [
    { label: 'Age Range', value: '18-34 years (78%)', icon: Users },
    { label: 'Gender', value: 'Female: 85% | Male: 15%', icon: Users },
    { label: 'Top Locations', value: 'USA, Canada, UK', icon: Target },
    { label: 'Avg. View Time', value: '45-60 seconds', icon: Chart }
  ];

  const packages = [
    {
      name: 'Single Post',
      price: 'Starting at $250',
      features: [
        '1 dedicated post/video',
        'Product photography & styling',
        '24-hour story mention',
        'Usage rights for 6 months'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Campaign Package',
      price: 'Starting at $800',
      features: [
        '3 posts across platforms',
        'Dedicated Reel/TikTok',
        'Story series (3-5 slides)',
        'Amazon storefront feature',
        'Usage rights for 1 year'
      ],
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      name: 'Brand Ambassador',
      price: 'Custom Pricing',
      features: [
        'Long-term partnership (3-12 months)',
        'Monthly content deliverables',
        'Exclusive brand advocacy',
        'Event appearances',
        'Full usage rights'
      ],
      color: 'from-amber-600 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/profile.png"
              alt="Sydney"
              className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
            />
            <div className="text-center md:text-left flex-1">
              <h1 className="text-5xl font-bold mb-2">Sydney (@itgirlsyd19)</h1>
              <p className="text-xl mb-4 opacity-90">Content Creator • Lifestyle Influencer • Digital Trendsetter</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">
                  35K+ Total Reach
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">
                  Multi-Platform Creator
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">
                  Beauty • Fashion • Tech
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-pink-500" />
            About Sydney
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sydney is a dynamic content creator with a passion for empowering her community through authentic, engaging content. 
            Specializing in beauty, fashion, and tech/business, she creates relatable content that resonates with her 
            predominantly female, millennial audience.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With a combined reach of over 35,000 followers across multiple platforms, Sydney delivers genuine brand stories 
            that drive engagement and conversions. Her diverse content portfolio spans fashion hauls, beauty tutorials, 
            GRWM videos, creator tips, and business insights.
          </p>
        </section>

        {/* Platform Statistics */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Chart className="w-8 h-8 text-purple-500" />
            Platform Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-pink-300 transition-all">
                <div className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl inline-block mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-1">{stat.platform}</h3>
                <p className="text-3xl font-black text-gray-900 mb-2">{stat.followers}</p>
                <p className="text-sm text-gray-600">Avg. Engagement: <span className="font-bold text-green-600">{stat.engagement}</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* Content Breakdown */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Award className="w-8 h-8 text-amber-500" />
            Content Distribution
          </h2>
          <div className="space-y-4">
            {contentPillars.map((pillar, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-800">{pillar.name}</span>
                  <span className="font-bold text-gray-600">{pillar.percentage}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className={`h-full ${pillar.color} rounded-full transition-all duration-1000`}
                    style={{ width: pillar.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Audience Demographics */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-blue-500" />
            Audience Demographics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demographics.map((demo, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <demo.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{demo.label}</h4>
                  <p className="text-gray-600">{demo.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Packages */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-purple-500" />
            Partnership Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl p-6 border-2 ${
                  pkg.featured 
                    ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className={`bg-gradient-to-r ${pkg.color} p-4 rounded-xl inline-block mb-4`}>
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <p className="text-3xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {pkg.price}
                </p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-sm">
            *All packages include detailed analytics reports and performance metrics. Custom packages available upon request.
          </p>
        </section>

        {/* Previous Work */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Camera className="w-8 h-8 text-pink-500" />
            Content Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-2 border-pink-200">
              <h4 className="font-bold text-lg mb-2">Beauty & Fashion</h4>
              <p className="text-gray-600 text-sm mb-3">Product reviews, hauls, GRWM, tutorials & style guides</p>
              <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                45% of content
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <h4 className="font-bold text-lg mb-2">Tech & Business</h4>
              <p className="text-gray-600 text-sm mb-3">Creator tips, business insights & tech reviews</p>
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                30% of content
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
              <h4 className="font-bold text-lg mb-2">Miscellaneous</h4>
              <p className="text-gray-600 text-sm mb-3">Lifestyle, vlogs, day-in-my-life & trending content</p>
              <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                25% of content
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Crown className="w-8 h-8" />
            Why Partner With Sydney?
          </h2>
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
        </section>

        {/* Brand Alignment */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Brand Alignment</h2>
          <p className="text-gray-700 mb-6">
            I partner with brands that align with my values and resonate authentically with my community. 
            My audience particularly responds to:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Clean Beauty',
              'Sustainable Fashion',
              'Tech & Gadgets',
              'Creator Tools',
              'Female Empowerment',
              'Quality Over Quantity',
              'Authentic Storytelling',
              'Lifestyle Brands'
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-3 rounded-lg text-center border border-pink-200">
                <span className="font-semibold text-gray-800 text-sm">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-gray-900 to-black rounded-2xl shadow-2xl p-10 text-white text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-4 text-pink-400" />
          <h2 className="text-4xl font-bold mb-4">Let's Create Together</h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate? Contact me to discuss how we can create authentic, 
            engaging content that delivers results for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sydney@itgirlsydcontent.com?subject=Partnership Inquiry"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:from-pink-400 hover:to-purple-400 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email: sydney@itgirlsydcontent.com
            </a>
            <button
              onClick={() => window.print()}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Response time: 24-48 hours • Professional representation available
          </p>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          <p className="mb-2">© 2025 Sydney (@itgirlsyd19) • All Rights Reserved</p>
          <p className="text-sm">
            Last Updated: October 2025 • For the most current statistics, please request updated analytics
          </p>
        </div>
      </div>
    </div>
  );
}

