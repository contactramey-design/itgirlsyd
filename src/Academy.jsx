import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Play, BookOpen, FileText, CheckCircle, Lock, 
  Star, Users, Clock, Award, ShoppingBag, Sparkles, Heart,
  ChevronRight, Download, Video, Crown, Zap, Target, Camera,
  Scissors, DollarSign, TrendingUp, Mail, Check, X, 
  Lightbulb, AlertCircle, Quote, CheckSquare, MessageCircle
} from 'lucide-react';
import { COURSE_SCRIPTS } from './CourseContent.js';
import { redirectToCheckout, checkPurchaseSuccess, STRIPE_PAYMENT_LINKS } from './stripe-config.js';

// Pre-order Release Date
const RELEASE_DATE = new Date('2025-01-01T00:00:00');
const IS_PREORDER = new Date() < RELEASE_DATE;

// Course data structure
const COURSES = [
  {
    id: 'filmmaking-masterclass',
    title: 'Creator Filmmaking Masterclass',
    subtitle: 'From Script to Viral Video',
    price: 99.99,
    originalPrice: 299.99,
    preorderPrice: 79.99, // Early bird discount!
    image: null,
    color: 'from-red-600 to-orange-500',
    icon: Video,
    description: 'The ULTIMATE creator bundle. Master scriptwriting that hooks in 3 seconds, pro filming with just your phone, editing that keeps viewers watching, and viral effects everyone asks about. 8 courses in 1. From $0 budget setups to content brands pay premium for.',
    students: 0,
    rating: null,
    duration: '25+ hours',
    lessons: 64,
    bestseller: true,
    featured: true,
    preorder: true,
    modules: [
      {
        id: 'm1',
        title: '1 Day Script: Write Ads That Convert',
        lessons: [
          { id: 'fm-l1', title: 'The Perfect Script Framework', type: 'video', duration: '15:00', free: true },
          { id: 'fm-l2', title: 'Storyboarding Your Vision', type: 'video', duration: '18:00' },
          { id: 'fm-l3', title: 'Hook Formulas That Stop Scrollers', type: 'video', duration: '12:00' },
          { id: 'fm-l4', title: 'Script Templates & Swipe File', type: 'template' }
        ]
      },
      {
        id: 'm2',
        title: '14 Day Filmmaker: Technical Mastery',
        lessons: [
          { id: 'fm-l5', title: 'Essential Gear Guide (What to Buy)', type: 'video', duration: '20:00' },
          { id: 'fm-l6', title: 'Camera Settings Demystified', type: 'video', duration: '25:00' },
          { id: 'fm-l7', title: 'Lighting Like a Pro', type: 'video', duration: '22:00' },
          { id: 'fm-l8', title: 'Camera Movements & Composition', type: 'video', duration: '18:00' },
          { id: 'fm-l9', title: 'Audio Recording & Processing', type: 'video', duration: '20:00' },
          { id: 'fm-l10', title: 'Gear Tutorials & Setup Walkthroughs', type: 'video', duration: '30:00' }
        ]
      },
      {
        id: 'm3',
        title: '14 Day Smartphone Filmmaker',
        lessons: [
          { id: 'fm-l11', title: 'Why Smartphone = Professional', type: 'video', duration: '10:00', free: true },
          { id: 'fm-l12', title: 'Phone Camera Settings Deep Dive', type: 'video', duration: '18:00' },
          { id: 'fm-l13', title: 'Stabilization Techniques', type: 'video', duration: '15:00' },
          { id: 'fm-l14', title: 'Lighting for Mobile', type: 'video', duration: '12:00' },
          { id: 'fm-l15', title: 'Must-Have Phone Accessories', type: 'video', duration: '14:00' },
          { id: 'fm-l16', title: 'Mobile Editing Workflows', type: 'video', duration: '20:00' },
          { id: 'fm-l17', title: 'Cinematic Phone Shots', type: 'video', duration: '16:00' }
        ]
      },
      {
        id: 'm4',
        title: '1-Week Director: Lead Like a Pro',
        lessons: [
          { id: 'fm-l18', title: 'The Director\'s Mindset', type: 'video', duration: '12:00' },
          { id: 'fm-l19', title: 'Working With Talent/Subjects', type: 'video', duration: '18:00' },
          { id: 'fm-l20', title: 'Visual Storytelling Principles', type: 'video', duration: '22:00' },
          { id: 'fm-l21', title: 'Creating on Any Budget', type: 'video', duration: '15:00' },
          { id: 'fm-l22', title: 'Pre-Production Planning', type: 'video', duration: '14:00' },
          { id: 'fm-l23', title: 'On-Set Workflow', type: 'video', duration: '18:00' }
        ]
      },
      {
        id: 'm5',
        title: 'Weekend YouTuber: Grow Your Channel',
        lessons: [
          { id: 'fm-l24', title: 'YouTube Algorithm Explained', type: 'video', duration: '20:00' },
          { id: 'fm-l25', title: 'Niche Selection for Growth', type: 'video', duration: '15:00' },
          { id: 'fm-l26', title: 'Titles & Thumbnails That Click', type: 'video', duration: '18:00' },
          { id: 'fm-l27', title: 'Content Strategy & Scheduling', type: 'video', duration: '14:00' },
          { id: 'fm-l28', title: '10X Your Subscriber Growth', type: 'video', duration: '22:00' },
          { id: 'fm-l29', title: 'Monetization Strategies', type: 'video', duration: '16:00' },
          { id: 'fm-l30', title: 'Analytics & Optimization', type: 'video', duration: '12:00' }
        ]
      },
      {
        id: 'm6',
        title: 'Viral Video Checklists',
        lessons: [
          { id: 'fm-l31', title: 'The Viral Video Formula', type: 'video', duration: '18:00' },
          { id: 'fm-l32', title: 'Hook Checklist (First 3 Seconds)', type: 'template' },
          { id: 'fm-l33', title: 'Retention Checklist', type: 'template' },
          { id: 'fm-l34', title: 'Share-Worthy Content Checklist', type: 'template' },
          { id: 'fm-l35', title: 'Platform-Specific Checklists', type: 'template' },
          { id: 'fm-l36', title: 'Pre-Publish Quality Check', type: 'template' }
        ]
      },
      {
        id: 'm7',
        title: 'Ultimate Video Editing Template Pack',
        lessons: [
          { id: 'fm-l37', title: 'How to Use These Templates', type: 'video', duration: '10:00' },
          { id: 'fm-l38', title: 'Premiere Pro Templates', type: 'template' },
          { id: 'fm-l39', title: 'After Effects Templates', type: 'template' },
          { id: 'fm-l40', title: 'CapCut Templates', type: 'template' },
          { id: 'fm-l41', title: 'DaVinci Resolve Templates', type: 'template' },
          { id: 'fm-l42', title: 'Sound Effects & Music Pack', type: 'template' }
        ]
      },
      {
        id: 'm8',
        title: 'Viral Video Effects Course',
        lessons: [
          { id: 'fm-l43', title: 'Trending Effects Breakdown', type: 'video', duration: '20:00' },
          { id: 'fm-l44', title: 'Speed Ramps & Transitions', type: 'video', duration: '18:00' },
          { id: 'fm-l45', title: 'Text Animations That Pop', type: 'video', duration: '15:00' },
          { id: 'fm-l46', title: 'Green Screen Mastery', type: 'video', duration: '14:00' },
          { id: 'fm-l47', title: 'Color Grading for Mood', type: 'video', duration: '16:00' },
          { id: 'fm-l48', title: 'Sound Design for Impact', type: 'video', duration: '12:00' },
          { id: 'fm-l49', title: 'TikTok/Reels Effects Tutorial', type: 'video', duration: '20:00' },
          { id: 'fm-l50', title: 'Final Project & Certificate', type: 'quiz', questions: 10 }
        ]
      }
    ]
  },
  {
    id: 'creator-business-toolkit',
    title: 'Creator Business Toolkit',
    subtitle: 'Build Your Creator Empire',
    price: 19.99,
    originalPrice: 29.99,
    preorderPrice: 14.99,
    image: '/creator business kit.jpg',
    color: 'from-purple-600 to-pink-600',
    icon: Crown,
    description: "You're a business, not just a creator—but nobody taught you how to run one. Learn to find your profitable niche, land $500+ brand deals, and price yourself like a pro. Includes my actual email scripts that got responses from brands who ignored me for months.",
    students: 0,
    rating: null,
    duration: '2.5 hours',
    lessons: 12,
    bestseller: false,
    preorder: true,
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Finding Your Niche',
        lessons: [
          { id: 'l1', title: 'How I Found My Voice', type: 'video', duration: '12:34', videoUrl: '', free: true },
          { id: 'l2', title: 'Brand Identity Worksheet', type: 'template', downloadUrl: '/templates/brand-identity.pdf' },
          { id: 'l3', title: 'Niche Discovery Quiz', type: 'quiz', questions: 5 }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Landing Brand Deals',
        lessons: [
          { id: 'l4', title: 'Cold Outreach That Actually Works', type: 'video', duration: '18:22', videoUrl: '' },
          { id: 'l5', title: 'Email Scripts That Get Replies', type: 'template', downloadUrl: '/templates/email-scripts.pdf' },
          { id: 'l6', title: 'Rate Card Template', type: 'template', downloadUrl: '/templates/rate-card.pdf' },
          { id: 'l7', title: 'Finding Brand Contacts', type: 'video', duration: '8:45', videoUrl: '' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Pricing Your Worth',
        lessons: [
          { id: 'l8', title: 'How I Charge $500+ Per Post', type: 'video', duration: '15:10', videoUrl: '' },
          { id: 'l9', title: 'Pricing Calculator Spreadsheet', type: 'template', downloadUrl: '/templates/pricing-calculator.xlsx' },
          { id: 'l10', title: 'Negotiation Scripts', type: 'template', downloadUrl: '/templates/negotiation.pdf' },
          { id: 'l11', title: 'When to Say No', type: 'video', duration: '10:00', videoUrl: '' },
          { id: 'l12', title: 'Final Quiz & Certificate', type: 'quiz', questions: 10 }
        ]
      }
    ]
  },
  {
    id: 'ugc-starter-kit',
    title: 'UGC Starter Kit',
    subtitle: 'From Zero to Paid Creator',
    price: 24.99,
    originalPrice: 39.99,
    preorderPrice: 19.99,
    image: '/ugc starter kit.jpg',
    color: 'from-orange-500 to-red-500',
    icon: Camera,
    description: "Brands pay $200-$500 per video to creators with ZERO followers. It's called UGC, and it's the fastest way to get paid. Learn how to build a portfolio that gets responses, create content that converts, and scale to $5K/month. No audience needed.",
    students: 0,
    rating: null,
    duration: '3 hours',
    lessons: 16,
    bestseller: false,
    preorder: true,
    modules: [
      {
        id: 'm1',
        title: 'Module 1: What is UGC?',
        lessons: [
          { id: 'l1', title: 'UGC vs Influencer Content', type: 'video', duration: '10:00', videoUrl: '', free: true },
          { id: 'l2', title: 'Why Brands Pay for UGC', type: 'video', duration: '8:30', videoUrl: '' },
          { id: 'l3', title: 'UGC Types Cheat Sheet', type: 'template', downloadUrl: '' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Setting Up Your Portfolio',
        lessons: [
          { id: 'l4', title: 'Creating Your First Samples', type: 'video', duration: '15:00', videoUrl: '' },
          { id: 'l5', title: 'Portfolio Website Template', type: 'template', downloadUrl: '' },
          { id: 'l6', title: 'Filming on a Budget', type: 'video', duration: '12:00', videoUrl: '' },
          { id: 'l7', title: 'Editing Tips & Tricks', type: 'video', duration: '14:00', videoUrl: '' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Landing Your First Client',
        lessons: [
          { id: 'l8', title: 'Where to Find UGC Jobs', type: 'video', duration: '11:00', videoUrl: '' },
          { id: 'l9', title: 'Platform Directory (50+ Brands)', type: 'template', downloadUrl: '' },
          { id: 'l10', title: 'Application Templates', type: 'template', downloadUrl: '' },
          { id: 'l11', title: 'My First $500 Deal Story', type: 'video', duration: '8:00', videoUrl: '' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: Scaling to $5K/Month',
        lessons: [
          { id: 'l12', title: 'Raising Your Rates', type: 'video', duration: '10:00', videoUrl: '' },
          { id: 'l13', title: 'Client Retention Secrets', type: 'video', duration: '9:00', videoUrl: '' },
          { id: 'l14', title: 'Contract & Invoice Templates', type: 'template', downloadUrl: '' },
          { id: 'l15', title: 'Scaling Your Systems', type: 'video', duration: '12:00', videoUrl: '' },
          { id: 'l16', title: 'Final Assessment', type: 'quiz', questions: 15 }
        ]
      }
    ]
  },
  {
    id: 'hair-brand-outreach',
    title: 'Hair Brand Outreach Kit',
    subtitle: 'Land Hair & Beauty Collabs',
    price: 14.99,
    originalPrice: 24.99,
    preorderPrice: 9.99,
    image: null,
    color: 'from-pink-500 to-purple-500',
    icon: Sparkles,
    description: "Hair and beauty brands are the easiest to land—if you pitch them right. Get my exact outreach templates, before/after content ideas that make brands say yes, and a list of 20+ hair companies actively looking for creators NOW.",
    students: 0,
    rating: null,
    duration: '1.5 hours',
    lessons: 8,
    bestseller: false,
    isNew: false,
    preorder: true,
    modules: [
      {
        id: 'm1',
        title: 'Module 1: Hair Brand Landscape',
        lessons: [
          { id: 'l1', title: 'Top 20 Hair Brands Taking Creators', type: 'video', duration: '15:00', videoUrl: '', free: true },
          { id: 'l2', title: 'Brand Contact Directory', type: 'template', downloadUrl: '' },
          { id: 'l3', title: 'What Hair Brands Look For', type: 'video', duration: '10:00', videoUrl: '' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Creating Hair Content',
        lessons: [
          { id: 'l4', title: 'Before/After Content Ideas', type: 'template', downloadUrl: '' },
          { id: 'l5', title: 'Filming Hair Transformations', type: 'video', duration: '12:00', videoUrl: '' },
          { id: 'l6', title: 'Hair Review Script Template', type: 'template', downloadUrl: '' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Pitching Hair Brands',
        lessons: [
          { id: 'l7', title: 'Hair Brand Pitch Email Template', type: 'template', downloadUrl: '' },
          { id: 'l8', title: 'My Hair Brand Success Stories', type: 'video', duration: '18:00', videoUrl: '' }
        ]
      }
    ]
  }
];

// Helper function to find lesson script from CourseContent
function findLessonScript(courseId, lessonId) {
  const courseData = COURSE_SCRIPTS[courseId];
  if (!courseData) return null;
  
  for (const module of courseData.modules) {
    for (const lesson of module.lessons) {
      if (lesson.lessonId === lessonId) {
        return lesson;
      }
    }
  }
  return null;
}

// Lesson Script Display Component
function LessonScriptDisplay({ courseId, lessonId, lessonType }) {
  const lessonData = findLessonScript(courseId, lessonId);
  
  if (!lessonData) {
    return (
      <p className="text-gray-600">
        {lessonType === 'video' && 'Watch the video above to learn this lesson.'}
        {lessonType === 'template' && 'Download the template and fill it out to apply what you\'ve learned.'}
        {lessonType === 'quiz' && 'Test your knowledge with this quiz to make sure you\'re ready for the next module.'}
      </p>
    );
  }

  // Video lesson with full script
  if (lessonData.script) {
    const { script } = lessonData;
    return (
      <div className="space-y-6">
        {/* Hook Section */}
        {script.hook && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-500">
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-5 h-5 text-purple-600" />
              <h4 className="font-bold text-purple-800">🎬 HOOK (Open with this)</h4>
            </div>
            <p className="text-gray-700 whitespace-pre-line italic leading-relaxed">"{script.hook}"</p>
          </div>
        )}

        {/* Pain Points */}
        {script.painPoints && script.painPoints.length > 0 && (
          <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-400">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <h4 className="font-bold text-red-800">💔 Pain Points to Address</h4>
            </div>
            <p className="text-gray-600 text-sm mb-3">Connect with your audience by addressing these struggles:</p>
            <ul className="space-y-2">
              {script.painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-400 mt-1">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Points */}
        {script.keyPoints && script.keyPoints.map((point, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              <h4 className="font-bold text-gray-800">🎯 Key Point #{idx + 1}: {point.title}</h4>
            </div>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-4">{point.content}</p>
            {point.actionStep && (
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckSquare className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-800 text-sm">👉 ACTION STEP:</span>
                </div>
                <p className="text-green-700 text-sm">{point.actionStep}</p>
              </div>
            )}
          </div>
        ))}

        {/* Success Story */}
        {script.successStory && (
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-amber-500">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-amber-600" />
              <h4 className="font-bold text-amber-800">✨ Success Story</h4>
            </div>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed italic">"{script.successStory}"</p>
          </div>
        )}

        {/* Recap */}
        {script.recap && script.recap.length > 0 && (
          <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h4 className="font-bold text-blue-800">📋 Quick Recap</h4>
            </div>
            <ul className="space-y-2">
              {script.recap.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Homework */}
        {script.homework && (
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5" />
              <h4 className="font-bold">📝 Your Homework</h4>
            </div>
            <p className="leading-relaxed">{script.homework}</p>
          </div>
        )}

        {/* Quotable */}
        {script.quotable && (
          <div className="bg-gray-900 rounded-2xl p-6 text-center">
            <Quote className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <p className="text-xl font-bold text-white italic">"{script.quotable}"</p>
            <p className="text-pink-400 mt-2 text-sm">— Save this for your notes! 💕</p>
          </div>
        )}
      </div>
    );
  }

  // Template lesson
  if (lessonData.templateSections) {
    return (
      <div className="space-y-6">
        <p className="text-gray-600 mb-4">{lessonData.description}</p>
        {lessonData.templateSections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600" />
              {section.title}
            </h4>
            {section.prompts && (
              <ul className="space-y-2 text-gray-700">
                {section.prompts.map((prompt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    {prompt}
                  </li>
                ))}
              </ul>
            )}
            {section.content && (
              <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
            )}
          </div>
        ))}
        <div className="bg-purple-50 rounded-xl p-4 text-center">
          <p className="text-purple-800 font-semibold mb-2">📥 Download: {lessonData.downloadName}</p>
          <p className="text-purple-600 text-sm">(Template file will be attached here)</p>
        </div>
      </div>
    );
  }

  // Quiz lesson
  if (lessonData.questions) {
    return (
      <div className="space-y-6">
        <p className="text-gray-600 mb-4">Test your knowledge with {lessonData.questions.length} questions.</p>
        {lessonData.questions.map((q, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-4">Question {idx + 1}: {q.question}</h4>
            <div className="space-y-2">
              {q.options.map((option, oIdx) => (
                <div 
                  key={oIdx} 
                  className={`p-3 rounded-xl border-2 ${
                    oIdx === q.correct 
                      ? 'border-green-400 bg-green-50' 
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <span className={oIdx === q.correct ? 'text-green-700 font-semibold' : 'text-gray-700'}>
                    {String.fromCharCode(65 + oIdx)}. {option}
                  </span>
                  {oIdx === q.correct && <span className="ml-2 text-green-600">✓ Correct</span>}
                </div>
              ))}
            </div>
            {q.explanation && (
              <p className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                💡 {q.explanation}
              </p>
            )}
          </div>
        ))}
        {lessonData.certificate && (
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white text-center">
            <Award className="w-12 h-12 mx-auto mb-3" />
            <h4 className="text-xl font-bold mb-2">🎓 Certificate Available!</h4>
            <p>Complete this quiz to earn your course certificate.</p>
          </div>
        )}
      </div>
    );
  }

  // Default fallback
  return (
    <p className="text-gray-600">
      {lessonType === 'video' && 'Watch the video above to learn this lesson.'}
      {lessonType === 'template' && 'Download the template and fill it out.'}
      {lessonType === 'quiz' && 'Test your knowledge with this quiz.'}
    </p>
  );
}

// Course Card Component
function CourseCard({ course, onSelect, isPurchased }) {
  const Icon = course.icon;
  
  return (
    <div 
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${
        course.bestseller ? 'border-yellow-400' : 'border-gray-100'
      }`}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
        {course.preorder && IS_PREORDER && (
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg animate-pulse">
            🚀 PRE-ORDER
          </span>
        )}
        {course.bestseller && (
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-white" />
            BESTSELLER
          </span>
        )}
        {course.isNew && (
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <Zap className="w-3 h-3" />
            NEW
          </span>
        )}
        {isPurchased && (
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <CheckCircle className="w-3 h-3" />
            OWNED
          </span>
        )}
      </div>

      {/* Course Image/Header */}
      <div className={`relative h-48 bg-gradient-to-br ${course.color} flex items-center justify-center overflow-hidden`}>
        {course.image ? (
          <>
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </>
        ) : (
          <Icon className="w-24 h-24 text-white/80 group-hover:scale-110 transition-transform duration-300" />
        )}
        
        {/* Play Preview Button */}
        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-purple-600 fill-purple-600" />
          </div>
        </button>
      </div>

      {/* Course Info */}
      <div className="p-6">
        <p className="text-sm font-semibold text-purple-600 mb-1">{course.subtitle}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {course.students.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            {course.rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            {course.lessons} lessons
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-gray-900">
                ${course.preorder && IS_PREORDER && course.preorderPrice ? course.preorderPrice : course.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ${course.preorder && IS_PREORDER ? course.price : course.originalPrice}
              </span>
            </div>
            {course.preorder && IS_PREORDER && (
              <span className="text-xs text-blue-600 font-medium">Early Bird Pricing!</span>
            )}
          </div>
          
          <button
            onClick={() => onSelect(course)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all hover:scale-105 ${
              isPurchased
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
            }`}
          >
            {isPurchased ? (
              <>
                <Play className="w-4 h-4" />
                Continue
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                {IS_PREORDER ? '🚀 Pre-order' : 'Enroll Now'}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Course Viewer Component
function CourseViewer({ course, onBack, onPurchase, isPurchased }) {
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem(`progress-${course.id}`);
    return saved ? JSON.parse(saved) : [];
  });
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const Icon = course.icon;

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(`progress-${course.id}`, JSON.stringify(completedLessons));
  }, [completedLessons, course.id]);

  const markComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const progressPercent = Math.round((completedLessons.length / totalLessons) * 100);

  const handleLessonClick = (lesson, moduleIndex) => {
    if (!isPurchased && !lesson.free) {
      setShowPurchaseModal(true);
      return;
    }
    setActiveLesson(lesson);
    setActiveModule(moduleIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${course.color} text-white`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Academy
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Course Icon */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <Icon className="w-16 h-16 text-white" />
            </div>

            {/* Course Info */}
            <div className="flex-1">
              <p className="text-white/80 font-semibold mb-1">{course.subtitle}</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{course.title}</h1>
              <p className="text-white/90 mb-4 max-w-2xl">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Users className="w-4 h-4" />
                  {course.students.toLocaleString()} students
                </span>
                <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {course.rating} rating
                </span>
                <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <BookOpen className="w-4 h-4" />
                  {course.lessons} lessons
                </span>
              </div>
            </div>

            {/* Progress / Purchase */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 min-w-[200px]">
              {isPurchased ? (
                <>
                  <p className="text-white/80 text-sm mb-2">Your Progress</p>
                  <p className="text-4xl font-bold mb-2">{progressPercent}%</p>
                  <div className="w-full bg-white/30 rounded-full h-2 mb-2">
                    <div 
                      className="bg-white rounded-full h-2 transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <p className="text-white/80 text-xs">{completedLessons.length} of {totalLessons} complete</p>
                </>
              ) : (
                <>
                  <p className="text-white/80 text-sm mb-1">
                    {course.preorder && IS_PREORDER ? '🚀 Pre-order for' : 'Enroll for'}
                  </p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold">
                      ${course.preorder && IS_PREORDER && course.preorderPrice ? course.preorderPrice : course.price}
                    </span>
                    <span className="text-white/60 line-through">
                      ${course.preorder && IS_PREORDER ? course.price : course.originalPrice}
                    </span>
                  </div>
                  {course.preorder && IS_PREORDER && (
                    <p className="text-cyan-300 text-xs font-medium mb-2">Early bird pricing ends Jan 1!</p>
                  )}
                  <button
                    onClick={() => setShowPurchaseModal(true)}
                    className="w-full bg-white text-purple-600 font-bold py-3 rounded-xl hover:bg-purple-50 transition-colors"
                  >
                    {IS_PREORDER ? '🚀 Pre-order Now' : 'Enroll Now'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Module List */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Course Content</h2>
            <div className="space-y-3">
              {course.modules.map((module, moduleIndex) => (
                <div key={module.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setActiveModule(activeModule === moduleIndex ? -1 : moduleIndex)}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        module.lessons.every(l => completedLessons.includes(l.id))
                          ? 'bg-green-500 text-white'
                          : 'bg-purple-100 text-purple-600'
                      }`}>
                        {module.lessons.every(l => completedLessons.includes(l.id)) ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          moduleIndex + 1
                        )}
                      </div>
                      <span className="font-semibold text-gray-800 text-left">{module.title}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                      activeModule === moduleIndex ? 'rotate-90' : ''
                    }`} />
                  </button>
                  
                  {activeModule === moduleIndex && (
                    <div className="border-t border-gray-100">
                      {module.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => handleLessonClick(lesson, moduleIndex)}
                          className={`w-full flex items-center gap-3 p-4 hover:bg-purple-50 transition-colors text-left ${
                            activeLesson?.id === lesson.id ? 'bg-purple-50' : ''
                          }`}
                        >
                          {/* Lesson Icon */}
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            completedLessons.includes(lesson.id)
                              ? 'bg-green-100 text-green-600'
                              : lesson.type === 'video' 
                                ? 'bg-purple-100 text-purple-600'
                                : lesson.type === 'template'
                                  ? 'bg-blue-100 text-blue-600'
                                  : 'bg-orange-100 text-orange-600'
                          }`}>
                            {completedLessons.includes(lesson.id) ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : lesson.type === 'video' ? (
                              <Play className="w-4 h-4" />
                            ) : lesson.type === 'template' ? (
                              <FileText className="w-4 h-4" />
                            ) : (
                              <Target className="w-4 h-4" />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <p className="font-medium text-gray-800 text-sm">{lesson.title}</p>
                            <p className="text-xs text-gray-500">
                              {lesson.type === 'video' && lesson.duration}
                              {lesson.type === 'template' && 'Downloadable'}
                              {lesson.type === 'quiz' && `${lesson.questions} questions`}
                            </p>
                          </div>

                          {/* Lock/Free indicator */}
                          {!isPurchased && !lesson.free && (
                            <Lock className="w-4 h-4 text-gray-400" />
                          )}
                          {lesson.free && !isPurchased && (
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-semibold">
                              FREE
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {activeLesson ? (
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Video/Content Player */}
                <div className={`aspect-video bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                  {activeLesson.type === 'video' ? (
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <p className="text-xl font-bold">{activeLesson.title}</p>
                      <p className="text-white/80">{activeLesson.duration}</p>
                      <p className="text-white/60 text-sm mt-4">
                        Video player will be here<br />
                        (Upload your videos to YouTube/Vimeo and embed them)
                      </p>
                    </div>
                  ) : activeLesson.type === 'template' ? (
                    <div className="text-center text-white">
                      <FileText className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <p className="text-xl font-bold">{activeLesson.title}</p>
                      <p className="text-white/70 text-sm mt-2 mb-4">Templates are delivered through your Scribed workspace</p>
                      <a 
                        href="https://scribed.ai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-purple-50 transition-colors"
                      >
                        <Download className="w-5 h-5" />
                        Access on Scribed
                      </a>
                    </div>
                  ) : (
                    <div className="text-center text-white">
                      <Target className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <p className="text-xl font-bold">{activeLesson.title}</p>
                      <p className="text-white/80">{activeLesson.questions} questions</p>
                    </div>
                  )}
                </div>

                {/* Lesson Info & Script Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">{activeLesson.title}</h3>
                    {!completedLessons.includes(activeLesson.id) && (
                      <button
                        onClick={() => markComplete(activeLesson.id)}
                        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                      >
                        <Check className="w-4 h-4" />
                        Mark Complete
                      </button>
                    )}
                    {completedLessons.includes(activeLesson.id) && (
                      <span className="flex items-center gap-2 text-green-600 font-semibold">
                        <CheckCircle className="w-5 h-5" />
                        Completed
                      </span>
                    )}
                  </div>
                  
                  {/* Script Content Display */}
                  <LessonScriptDisplay courseId={course.id} lessonId={activeLesson.id} lessonType={activeLesson.type} />
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                <BookOpen className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome to {course.title}!</h3>
                <p className="text-gray-600 mb-6">
                  Select a lesson from the sidebar to get started.
                </p>
                {!isPurchased && (
                  <button
                    onClick={() => setShowPurchaseModal(true)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    {course.preorder && IS_PREORDER 
                      ? `🚀 Pre-order for $${course.preorderPrice || course.price}` 
                      : `Enroll Now for $${course.price}`}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      {showPurchaseModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowPurchaseModal(false)}
        >
          <div 
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-r ${course.color} p-6 text-white text-center`}>
              <Icon className="w-12 h-12 mx-auto mb-3" />
              <h2 className="text-2xl font-bold">{course.title}</h2>
              <p className="text-white/80">{course.lessons} lessons • {course.duration}</p>
            </div>

            <button
              onClick={() => setShowPurchaseModal(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6">
              {/* Pre-order Banner */}
              {course.preorder && IS_PREORDER && (
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-3 px-4 rounded-xl mb-4 animate-pulse">
                  <p className="text-sm font-bold">🚀 PRE-ORDER • Releasing January 1st, 2025</p>
                  <p className="text-xs opacity-90">Get early bird pricing before launch!</p>
                </div>
              )}
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-4xl font-black text-gray-900">
                  ${course.preorder && IS_PREORDER && course.preorderPrice ? course.preorderPrice : course.price}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  ${course.preorder && IS_PREORDER ? course.price : course.originalPrice}
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-bold">
                  {course.preorder && IS_PREORDER 
                    ? `Save $${(course.price - (course.preorderPrice || course.price)).toFixed(2)}`
                    : `Save $${((course.originalPrice || course.price) - course.price).toFixed(2)}`}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  Lifetime access to all lessons
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  Templates delivered via Scribed.ai workspace
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  Exclusive IT Girl Academy community access
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  Future updates included
                </li>
              </ul>

              <button
                onClick={() => {
                  onPurchase(course.id);
                  setShowPurchaseModal(false);
                }}
                className={`w-full py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${
                  course.preorder && IS_PREORDER 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {course.preorder && IS_PREORDER ? '🚀 Pre-order Now' : 'Purchase Now'}
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                {course.preorder && IS_PREORDER 
                  ? 'Secure checkout • Templates delivered via Scribed on Jan 1st'
                  : 'Secure checkout • Templates delivered via Scribed'}
              </p>
              <p className="text-center text-gray-400 text-xs mt-2">
                You'll receive an email to join the IT Girl Academy workspace on Scribed.ai
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Main Academy Component
export default function Academy({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [purchasedCourses, setPurchasedCourses] = useState(() => {
    const saved = localStorage.getItem('purchased-courses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Save purchases to localStorage
  useEffect(() => {
    localStorage.setItem('purchased-courses', JSON.stringify(purchasedCourses));
  }, [purchasedCourses]);

  // Check for successful Stripe payment on page load
  useEffect(() => {
    const purchaseResult = checkPurchaseSuccess();
    if (purchaseResult?.success) {
      // Get the course ID from URL or session
      const params = new URLSearchParams(window.location.search);
      const courseId = params.get('course');
      
      if (courseId && !purchasedCourses.includes(courseId)) {
        setPurchasedCourses(prev => [...prev, courseId]);
        alert('🎉 Payment successful! Welcome to the course!');
      }
      
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    } else if (purchaseResult?.cancelled) {
      alert('Payment was cancelled. You can try again anytime!');
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const handlePurchase = (courseId) => {
    // Check if Stripe is configured for this course
    const stripeConfig = STRIPE_PAYMENT_LINKS[courseId];
    
    if (stripeConfig && stripeConfig.paymentLink && stripeConfig.paymentLink !== 'YOUR_STRIPE_PAYMENT_LINK_HERE') {
      // Real Stripe payment - redirect to checkout
      redirectToCheckout(courseId);
    } else {
      // Demo mode - simulate purchase
      if (!purchasedCourses.includes(courseId)) {
        setPurchasedCourses([...purchasedCourses, courseId]);
        if (IS_PREORDER) {
          alert('🎉 Pre-order confirmed! (Demo mode)\n\n✨ Your course will unlock on January 1st, 2025!\n📧 Check your email for Scribed.ai workspace invite.\n\nTo enable real payments, add Stripe payment links.');
        } else {
          alert('🎉 Course purchased! (Demo mode)\n\nTo enable real payments:\n1. Create products in Stripe Dashboard\n2. Add payment links to stripe-config.js');
        }
      }
    }
  };

  // If viewing a course
  if (selectedCourse) {
    return (
      <CourseViewer 
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
        onPurchase={handlePurchase}
        isPurchased={purchasedCourses.includes(selectedCourse.id)}
      />
    );
  }

  // Main Academy Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group mb-8 flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-purple-300 px-6 py-3 rounded-full hover:border-purple-400 hover:shadow-lg transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 text-purple-500 group-hover:-translate-x-1 transition-transform" />
          <span className="text-purple-600 font-semibold">Back to Main</span>
        </button>

        {/* Pre-order Announcement Banner */}
        {IS_PREORDER && (
          <div className={`mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 rounded-2xl p-6 text-white text-center shadow-xl relative overflow-hidden">
              {/* Animated sparkles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-2 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-50"></div>
                <div className="absolute bottom-4 right-20 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-6 right-32 w-1 h-1 bg-pink-300 rounded-full animate-ping opacity-40" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl">🚀</span>
                  <h2 className="text-2xl md:text-3xl font-bold">Pre-Orders Now Open!</h2>
                  <span className="text-3xl">🎉</span>
                </div>
                <p className="text-lg text-white/90 mb-3">
                  All courses release <span className="font-bold">January 1st, 2025</span>
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-yellow-300 font-bold">✨ Early Bird Pricing</span>
                  <span className="text-white/80">- Lock in up to 33% off before launch!</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 mb-6">
            <Award className="w-12 h-12 text-purple-500" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              IT Girl Academy
            </h1>
            <Sparkles className="w-12 h-12 text-pink-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn everything I know about building a successful creator business. 
            Real strategies, templates, and secrets that actually work. 💕
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`flex flex-wrap justify-center gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-purple-100">
            <p className="text-3xl font-bold text-purple-600">{IS_PREORDER ? '4' : '2,500+'}</p>
            <p className="text-gray-600 text-sm">{IS_PREORDER ? 'Courses Available' : 'Students Enrolled'}</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-purple-100">
            <p className="text-3xl font-bold text-pink-600">4.9★</p>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-purple-100">
            <p className="text-3xl font-bold text-orange-500">36</p>
            <p className="text-gray-600 text-sm">Total Lessons</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-purple-100">
            <p className="text-3xl font-bold text-green-600">$50K+</p>
            <p className="text-gray-600 text-sm">Student Earnings</p>
          </div>
        </div>

        {/* Course Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {COURSES.map((course, index) => (
            <div 
              key={course.id}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <CourseCard 
                course={course}
                onSelect={setSelectedCourse}
                isPurchased={purchasedCourses.includes(course.id)}
              />
            </div>
          ))}
        </div>

        {/* Bundle Offer */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Pre-order banner */}
            {IS_PREORDER && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-2 text-sm font-bold animate-pulse">
                🚀 PRE-ORDER SPECIAL • Releasing January 1st, 2025 • Early Bird Pricing!
              </div>
            )}
            
            <div className={`flex items-center justify-center gap-3 mb-4 ${IS_PREORDER ? 'mt-8' : ''}`}>
              <Crown className="w-10 h-10" />
              <h2 className="text-3xl md:text-4xl font-bold">
                {IS_PREORDER ? 'Pre-order All Courses' : 'Get All Courses Bundle'}
              </h2>
              <Crown className="w-10 h-10" />
            </div>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              {IS_PREORDER 
                ? 'Lock in early bird pricing! All courses unlock on January 1st, 2025. Lifetime access to all current and future courses!'
                : 'Unlock everything for one special price. Lifetime access to all current and future courses!'}
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-5xl font-black">{IS_PREORDER ? '$99.99' : '$159.97'}</span>
              <span className="text-2xl text-white/60 line-through">{IS_PREORDER ? '$159.97' : '$199.99'}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                {IS_PREORDER ? 'Save $59.98!' : 'Save $40'}
              </span>
            </div>
            <button 
              onClick={() => {
                // Redirect to bundle Stripe link
                const bundleLink = STRIPE_PAYMENT_LINKS['all-courses-bundle'];
                if (bundleLink && bundleLink.paymentLink && bundleLink.paymentLink !== 'YOUR_STRIPE_PAYMENT_LINK_HERE') {
                  window.location.href = bundleLink.paymentLink;
                } else {
                  COURSES.forEach(c => {
                    if (!purchasedCourses.includes(c.id)) {
                      handlePurchase(c.id);
                    }
                  });
                }
              }}
              className="bg-white text-purple-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all hover:scale-105 shadow-xl"
            >
              {IS_PREORDER ? '🚀 Pre-order Bundle Now' : 'Get The Bundle'}
            </button>
            
            {IS_PREORDER && (
              <p className="text-white/80 text-sm mt-4">
                ✨ Be the first to access all courses when they launch!
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
            <p className="text-pink-600 font-semibold">
              Invest in yourself - your future self will thank you!
            </p>
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
          </div>
          <p className="text-gray-500 text-sm">
            Questions? Email academy@itgirlsydcontent.com 💕
          </p>
        </div>
      </div>
    </div>
  );
}

