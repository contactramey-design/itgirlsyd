import React, { useState, useEffect } from 'react';
import { Instagram, Mail, Sparkles, Link as LinkIcon, TrendingUp, Palette, Briefcase, Activity, Brain, Scissors, Terminal, Code, Zap, Rocket, FileText, Edit3, ArrowLeft, Database, Globe, Gem, Wand2, Video, Target } from 'lucide-react';

export default function BusinessTechGuides({ onBack }) {
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
        { name: 'Scribed.ai', description: 'All-in-one business management & CRM', url: 'https://scribed.ai', icon: FileText },
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





