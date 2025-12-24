import React, { useState, useEffect } from 'react';
import { ShoppingBag, TrendingUp, Activity, Dumbbell, UtensilsCrossed, Zap, ArrowLeft } from 'lucide-react';

export default function HealthGym({ onBack }) {
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





