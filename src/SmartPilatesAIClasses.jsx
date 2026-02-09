// SmartPilatesAIClasses.jsx
import React, { useState, useEffect } from 'react';
import { 
  Play, Clock, Users, Star, ArrowRight, Menu, X,
  Heart, Award, Sparkles, Calendar, CheckCircle,
  Instagram, Facebook, Twitter, Linkedin, Mail,
  ChevronDown, ChevronUp
} from 'lucide-react';
import VideoPlayer from './VideoPlayer.jsx';

export default function SmartPilatesAIClasses({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedClass, setExpandedClass] = useState(null);
  const [completedExercises, setCompletedExercises] = useState(() => {
    const saved = localStorage.getItem('pilates-progress');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Week 1 Exercises
  const week1Exercises = [
    { id: 'cat-cow', title: 'Cat-Cow', duration: '2:00', category: 'Warm-up', thumbnail: '/pilates/cat-cow.jpg', videoUrl: '' },
    { id: 'pelvic-tilt', title: 'Pelvic Tilt', duration: '3:00', category: 'Core', thumbnail: '/pilates/pelvic-tilt.jpg', videoUrl: '' },
    { id: 'supine-march', title: 'Supine March', duration: '4:00', category: 'Core', thumbnail: '/pilates/supine-march.jpg', videoUrl: '' },
    { id: 'chest-lift', title: 'Chest Lift', duration: '3:30', category: 'Core', thumbnail: '/pilates/chest-lift.jpg', videoUrl: '' },
    { id: 'bent-knee-fallout', title: 'Bent Knee Fallout', duration: '4:00', category: 'Core', thumbnail: '/pilates/bent-knee-fallout.jpg', videoUrl: '' },
    { id: 'neck-shoulder-circles', title: 'Neck & Shoulder Circles', duration: '2:30', category: 'Warm-up', thumbnail: '/pilates/neck-shoulder.jpg', videoUrl: '' },
    { id: 'side-arm-stretch', title: 'Side Arm Stretch', duration: '2:00', category: 'Stretch', thumbnail: '/pilates/side-arm-stretch.jpg', videoUrl: '' },
    { id: 'spinal-twist', title: 'Spinal Twist', duration: '3:00', category: 'Stretch', thumbnail: '/pilates/spinal-twist.jpg', videoUrl: '' },
    { id: 'happy-baby', title: 'Happy Baby', duration: '2:30', category: 'Stretch', thumbnail: '/pilates/happy-baby.jpg', videoUrl: '' },
    { id: 'childs-pose', title: "Child's Pose", duration: '2:00', category: 'Stretch', thumbnail: '/pilates/childs-pose.jpg', videoUrl: '' },
    { id: 'savasana', title: 'Savasana (Corpse Pose)', duration: '3:00', category: 'Cool-down', thumbnail: '/pilates/savasana.jpg', videoUrl: '' }
  ];

  const classes = [
    {
      id: 'core-strength-flow-yoga',
      title: 'Core Strength Flow Yoga',
      description: 'Breath-led flows focusing on core stability and strength. Ideal for building endurance and mindfulness. Perfect for beginners and those looking to deepen their practice with AI-guided instruction.',
      exercises: week1Exercises.filter(e => e.category === 'Warm-up' || e.category === 'Stretch'),
      duration: '25 minutes',
      difficulty: 'Beginner to Intermediate'
    },
    {
      id: 'mat-pilates',
      title: 'Mat Pilates',
      description: 'Precision ground-based exercises for alignment, flexibility, and core control. Perfect for all levels. Our AI instructor adapts to your pace and provides real-time form corrections.',
      exercises: week1Exercises.filter(e => e.category === 'Core'),
      duration: '30 minutes',
      difficulty: 'All Levels'
    },
    {
      id: 'power-pilates',
      title: 'Power Pilates',
      description: 'High-intensity dynamic sessions to build power and tone. Challenge yourself with advanced variations. AI-powered progression ensures you\'re always pushing your limits safely.',
      exercises: week1Exercises,
      duration: '35 minutes',
      difficulty: 'Intermediate to Advanced'
    }
  ];

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleVideoComplete = (exerciseId) => {
    if (!completedExercises.includes(exerciseId)) {
      const updated = [...completedExercises, exerciseId];
      setCompletedExercises(updated);
      localStorage.setItem('pilates-progress', JSON.stringify(updated));
    }
  };

  const handleEnroll = (classType) => {
    const messages = {
      'core-strength-flow-yoga': 'Unlock core-focused yoga flows with AI guidance!',
      'mat-pilates': 'Master mat precision – personalized routines included.',
      'power-pilates': 'Power up your pilates with high-energy sessions.'
    };
    alert(messages[classType] || 'Join now!');
    // Add your enrollment logic here
  };

  const toggleClass = (classId) => {
    setExpandedClass(expandedClass === classId ? null : classId);
  };

  return (
    <div className="min-h-screen bg-[#f9fbfc]">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {onBack && (
                <button
                  onClick={onBack}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-gray-600 rotate-180" />
                </button>
              )}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SmartPilates.ai</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Home</a>
              <a href="#classes" className="text-pink-600 font-semibold">Classes</a>
              <a href="#about" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">About</a>
              <a href="#pricing" className="text-gray-600 hover:text-pink-600 transition-colors font-medium">Pricing</a>
            </div>

            <button className="hidden md:block bg-[#4caf50] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#388e3c] transition-colors">
              Join Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-6 py-4 space-y-4">
              <a href="#home" className="block text-gray-600 hover:text-pink-600 font-medium">Home</a>
              <a href="#classes" className="block text-pink-600 font-semibold">Classes</a>
              <a href="#about" className="block text-gray-600 hover:text-pink-600 font-medium">About</a>
              <a href="#pricing" className="block text-gray-600 hover:text-pink-600 font-medium">Pricing</a>
              <button className="w-full bg-[#4caf50] text-white px-6 py-2 rounded-full font-semibold">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="text-pink-600 text-lg font-semibold mb-4">• Our Classes</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Move, Strengthen, and Restore
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover AI-powered Pilates classes tailored to your needs. Choose from Core Strength Flow Yoga, Mat Pilates, or Power Pilates for personalized workouts that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          {classes.map((classItem, idx) => (
            <div
              key={classItem.id}
              className={`bg-white rounded-xl shadow-lg mb-10 overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{classItem.title}</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{classItem.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{classItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">{classItem.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Play className="w-5 h-5" />
                    <span className="font-medium">{classItem.exercises.length} Exercises</span>
                  </div>
                </div>

                <button
                  onClick={() => handleEnroll(classItem.id)}
                  className="bg-[#4caf50] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#388e3c] transition-colors mb-6"
                >
                  Enroll Now
                </button>

                {/* Expandable Content */}
                <button
                  onClick={() => toggleClass(classItem.id)}
                  className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors"
                >
                  {expandedClass === classItem.id ? (
                    <>
                      <span>Hide Exercises</span>
                      <ChevronUp className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      <span>View Exercises</span>
                      <ChevronDown className="w-5 h-5" />
                    </>
                  )}
                </button>

                {expandedClass === classItem.id && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Exercises in this class:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {classItem.exercises.map((exercise) => {
                        const isCompleted = completedExercises.includes(exercise.id);
                        return (
                          <div
                            key={exercise.id}
                            onClick={() => handleExerciseClick(exercise)}
                            className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors group"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                                {exercise.title}
                              </h5>
                              {isCompleted && (
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {exercise.duration}
                              </span>
                              <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                                {exercise.category}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Empowerment', desc: 'We empower you with AI tools for better fitness.' },
              { title: 'Community', desc: 'Join a supportive Pilates community.' },
              { title: 'Balance', desc: 'Achieve mind-body balance through our courses.' },
              { title: 'Growth', desc: 'Track and grow your progress with data.' }
            ].map((value, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: '"Transformed my routine! The AI guidance is incredible."', author: 'User A' },
              { text: '"AI personalization is game-changing. I see results every week."', author: 'User B' },
              { text: '"Best Pilates program I\'ve tried. The classes adapt to my level perfectly."', author: 'User C' }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-gray-500 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is SmartPilates.ai?',
                a: 'It\'s an AI-driven platform for Pilates courses and personalized workouts. Our AI instructor adapts to your level and provides real-time guidance.'
              },
              {
                q: 'How do I enroll?',
                a: 'Click "Enroll Now" on any class and follow the prompts. You can start with a free trial or choose a membership plan.'
              },
              {
                q: 'Do I need equipment?',
                a: 'No! All our classes are designed for mat-based Pilates. You just need a yoga mat and comfortable clothing.'
              },
              {
                q: 'Can I access classes on mobile?',
                a: 'Yes! SmartPilates.ai works perfectly on all devices - phone, tablet, or computer.'
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <summary className="font-semibold text-gray-900 text-lg mb-2">
                  {faq.q}
                </summary>
                <p className="text-gray-600 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#e8f5e9]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students transforming their bodies with AI-powered Pilates.
          </p>
          <button className="bg-[#4caf50] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#388e3c] transition-colors shadow-lg">
            Become a Member
          </button>
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedExercise && (
        <VideoPlayer
          videoUrl={selectedExercise.videoUrl}
          title={selectedExercise.title}
          duration={selectedExercise.duration}
          exerciseId={selectedExercise.id}
          isCompleted={completedExercises.includes(selectedExercise.id)}
          onClose={() => setSelectedExercise(null)}
          onComplete={handleVideoComplete}
        />
      )}
    </div>
  );
}
