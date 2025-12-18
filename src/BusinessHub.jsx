import React, { useState, useEffect } from 'react';
import { Star, Lock, Terminal, Zap, Rocket, FileText, Edit3, ArrowLeft } from 'lucide-react';

export default function BusinessHub({ onBack, onNavigateToModa, onNavigateToContentForm, onNavigateToTechGuides }) {
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
      category: 'Business CRM',
      description: 'All-in-one business management, CRM & team collaboration',
      url: 'https://scribed.ai',
      color: 'from-orange-500 to-red-600'
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

        {/* Featured Partner - Scribed.ai */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://scribed.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded-2xl p-1 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:scale-[1.02]">
              <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl p-8">
                {/* Partner Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-lg flex items-center gap-2">
                  <Star className="w-3 h-3 fill-white" />
                  OFFICIAL PARTNER
                  <Star className="w-3 h-3 fill-white" />
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                  {/* Scribed Logo/Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl shadow-xl">
                      <FileText className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 mb-3 font-mono">
                      SCRIBED.AI
                    </h2>
                    <p className="text-xl text-gray-300 mb-4">
                      The #1 All-in-One Business Management Tool
                    </p>
                    <p className="text-gray-400 text-sm mb-4 max-w-xl">
                      CRM • Contact Management • Task Automation • Team Collaboration • 
                      Step-by-Step Guides • Outreach Templates • Everything you need to run your creator business.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold">CRM</span>
                      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold">Team Tools</span>
                      <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold">Automation</span>
                      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold">Guides</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all flex items-center gap-2">
                      <Rocket className="w-5 h-5" />
                      <span>Get Started Free</span>
                    </div>
                    <span className="text-gray-500 text-xs">Used in all my guides & templates</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
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



