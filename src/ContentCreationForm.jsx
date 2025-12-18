import React, { useState, useEffect } from 'react';
import { Sparkles, Edit3, ArrowLeft } from 'lucide-react';

export default function ContentCreationForm({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    projectDescription: '',
    theme: '',
    budget: '',
    timeline: '',
    additionalDetails: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceTypes = [
    'Landing Page / Website',
    'Video Editing',
    '1-on-1 Consulting',
    'Social Media Graphics',
    'Media Kit Design',
    'Brand Identity',
    'Other'
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000+',
    'Not sure yet'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body with all the form details
    const emailSubject = `Content Creation Request from ${formData.name}`;
    const emailBody = `
New Content Creation Service Request:

📋 CLIENT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}

💼 SERVICE DETAILS:
Service Type: ${formData.serviceType}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

📝 PROJECT DESCRIPTION:
${formData.projectDescription}

🎨 THEME/STYLE PREFERENCES:
${formData.theme || 'Not specified'}

💬 ADDITIONAL DETAILS:
${formData.additionalDetails || 'None provided'}

---
Please respond with a custom quote and invoice.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:sydney@itgirlsydcontent.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Glowing orbs */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <button
          onClick={onBack}
          className="group mb-8 flex items-center gap-2 bg-white/10 border-2 border-purple-500/50 px-6 py-3 rounded-lg hover:bg-white/20 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-purple-400 group-hover:-translate-x-1 transition-transform" />
          <span className="text-purple-400 font-bold">Back to Business Hub</span>
        </button>

        {!isSubmitted ? (
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Fiverr Quick Hire Banner */}
            <div className="flex justify-end mb-6">
              <a
                href="https://www.fiverr.com/s/EgZbkBq"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-5 py-2.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
              >
                <span className="text-sm">On Fiverr?</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">Hire me there →</span>
              </a>
            </div>

            {/* Title Section */}
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl mb-6">
                <Edit3 className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">Content Creation Services</h1>
              <p className="text-xl text-purple-200">Let's bring your vision to life! Fill out the form below and I'll send you a custom quote.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white focus:outline-none focus:border-purple-400 transition-all"
                  >
                    <option value="" className="bg-purple-900">Select a service...</option>
                    {serviceTypes.map(type => (
                      <option key={type} value={type} className="bg-purple-900">{type}</option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all resize-none"
                    placeholder="Tell me about your project, goals, and what you're looking to achieve..."
                  />
                </div>

                {/* Theme/Style */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Theme / Style Preferences
                  </label>
                  <input
                    type="text"
                    name="theme"
                    value={formData.theme}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="e.g., Modern & Minimal, Bold & Colorful, Professional, Fun & Playful..."
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Budget Range *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white focus:outline-none focus:border-purple-400 transition-all"
                  >
                    <option value="" className="bg-purple-900">Select a budget range...</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range} className="bg-purple-900">{range}</option>
                    ))}
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Timeline / Deadline *
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all"
                    placeholder="e.g., ASAP, 2 weeks, 1 month, Flexible..."
                  />
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-purple-200 font-bold mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-all resize-none"
                    placeholder="Any other information you'd like to share..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
                >
                  <Sparkles className="w-6 h-6" />
                  Submit Service Request
                  <ArrowLeft className="w-6 h-6 rotate-180" />
                </button>
                <p className="text-purple-300 text-sm text-center mt-4">
                  I'll review your request and send you a custom quote within 24-48 hours! 💜
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Success State */
          <div className="text-center py-20">
            <div className="inline-block bg-green-500/20 p-8 rounded-full mb-8 animate-pulse">
              <Sparkles className="w-24 h-24 text-green-400" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Request Sent! 🎉</h2>
            <p className="text-2xl text-purple-200 mb-8">
              Thank you for your interest! Your email client should have opened with all the details.
            </p>
            <p className="text-lg text-purple-300 max-w-2xl mx-auto mb-8">
              I'll review your project and get back to you with a custom quote and invoice within 24-48 hours.
            </p>
            <button
              onClick={onBack}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all border-2 border-white/30 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Business Hub
            </button>
          </div>
        )}
      </div>
    </div>
  );
}



