import React, { useState, useEffect } from 'react';
import { 
  Heart, ShoppingBag, Crown, Sparkles, Star, ArrowLeft, 
  BookOpen, FileText, Palette, Camera, Video, Gift, 
  Check, CreditCard, Download, Package, Shirt, Coffee,
  Zap, Target, Mail, ExternalLink, X, ChevronLeft, ChevronRight
} from 'lucide-react';

// ProductCard component - defined outside ShopPage to preserve state
const ProductCard = ({ product, isDigital = true }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const Icon = product.icon;
  
  // Get all images (use images array if available, otherwise just the single image)
  const allImages = product.images || (product.image ? [product.image] : []);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };
  
  return (
    <>
      <div 
        className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
          product.bestseller ? 'border-yellow-400' : 'border-gray-100'
        }`}
      >
        {/* Bestseller Badge */}
        {product.bestseller && (
          <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
            <Star className="w-3 h-3 fill-white" />
            BESTSELLER
          </div>
        )}

        {/* Coming Soon Badge */}
        {product.comingSoon && (
          <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-gray-600 to-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
            <Zap className="w-3 h-3" />
            COMING SOON
          </div>
        )}

        {/* Product Image/Icon Area */}
        <div className={`relative ${product.image ? 'h-64' : 'h-48'} bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}>
          {product.image ? (
            <>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* Multiple images indicator */}
              {allImages.length > 1 && (
                <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  {allImages.length} photos
                </div>
              )}
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-black/10" />
              <Icon className="w-20 h-20 text-white/90 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              
              {/* Decorative sparkles */}
              <Sparkles className="absolute top-4 right-4 w-6 h-6 text-white/50 animate-pulse" />
              <Star className="absolute bottom-4 left-4 w-5 h-5 text-white/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
              {product.category}
            </span>
            {product.scribedAccess && (
              <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full flex items-center gap-1">
                <FileText className="w-3 h-3" />
                Scribed.ai
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Expandable Features */}
          {product.features && (
            <div className="mb-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDetails(!showDetails);
                }}
                className="text-purple-600 hover:text-purple-800 text-sm font-semibold flex items-center gap-1"
              >
                {showDetails ? '▼ Hide Details' : '▶ View What\'s Included'}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showDetails ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h4 className="text-sm font-bold text-gray-700 mb-2">What's Included:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Sizes for physical products */}
          {product.sizes && (
            <div className="mb-4">
              <span className="text-xs text-gray-500">Available Sizes:</span>
              <div className="flex gap-2 mt-1">
                {product.sizes.map((size) => (
                  <span key={size} className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-700">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Price & CTA */}
        <div className="p-6 pt-0 border-t border-gray-100 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
              )}
            </div>
            
            {!product.comingSoon ? (
              <button
                onClick={() => allImages.length > 1 ? setShowModal(true) : window.open(product.paypalLink, '_blank')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all ${
                  product.bestseller 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                {allImages.length > 1 ? 'View & Buy' : 'Buy Now'}
              </button>
            ) : (
              <button
                disabled
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-gray-200 text-gray-500 cursor-not-allowed"
              >
                <Package className="w-4 h-4" />
                Notify Me
              </button>
            )}
          </div>
          
          {/* Delivery Note */}
          {product.scribedAccess && (
            <p className="text-xs text-gray-400 mt-3 text-center">
              📧 Access link sent via email after payment
            </p>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image Gallery */}
              <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 p-6">
                {/* Main Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={allImages[currentImageIndex]} 
                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Thumbnail Gallery */}
                {allImages.length > 1 && (
                  <div className="flex gap-3 justify-center">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-20 h-20 rounded-xl overflow-hidden border-3 transition-all ${
                          currentImageIndex === idx 
                            ? 'border-purple-500 shadow-lg scale-105' 
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-8">
                {product.bestseller && (
                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                    <Star className="w-3 h-3 fill-white" />
                    BESTSELLER
                  </div>
                )}
                
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-black text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-bold">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Sizes */}
                {product.sizes && (
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-gray-700 mb-2 block">Select Size:</span>
                    <div className="flex gap-2">
                      {product.sizes.map((size) => (
                        <button 
                          key={size} 
                          className="px-4 py-2 border-2 border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:border-purple-500 hover:text-purple-600 transition-all"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {product.features && (
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-gray-700 mb-2 block">What's Included:</span>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Buy Button */}
                <a
                  href={product.paypalLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  <CreditCard className="w-6 h-6" />
                  Buy Now - ${product.price}
                </a>
                
                <p className="text-center text-gray-500 text-sm mt-4">
                  Secure checkout via PayPal
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function ShopPage({ onBack }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('digital');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const DIGITAL_PRODUCTS = [
    {
      id: 1,
      name: 'Creator Business Toolkit',
      category: 'Ebook + Templates',
      description: 'Complete guide to building your creator business - outreach templates, pricing strategies, and growth tactics.',
      price: 19.99,
      originalPrice: 29.99,
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
      image: '/creator business kit.jpg',
      features: [
        '50+ Page Comprehensive Guide',
        '10 Cold Outreach Email Templates',
        '5 Follow-Up Email Templates',
        '5 Negotiation Response Templates',
        'Pricing Calculator Spreadsheet',
        'Rate Card Template (Canva)',
        'Contract Checklist',
        'Income Tracker Spreadsheet',
        'Media Kit Template (Canva)',
        'Invoice Template',
        'Brand Deal Checklist',
        'Brand Pitch Deck Template'
      ],
      bestseller: true,
      paypalLink: 'https://paypal.me/SydneyRamey894/19.99',
      scribedAccess: true
    },
    {
      id: 2,
      name: 'Content Calendar Bundle',
      category: 'Templates',
      description: 'Plan your content like a pro with our 90-day content calendar, posting schedules, and content ideas.',
      price: 9.99,
      originalPrice: 14.99,
      icon: Target,
      color: 'from-cyan-500 to-blue-500',
      image: '/content calender.jpg',
      features: [
        '90-Day Content Calendar',
        'Weekly Posting Schedule Template',
        '100+ Content Ideas by Niche',
        'Hashtag Research Template',
        'Analytics Tracker',
        'Monthly Review Template',
        'Platform-Specific Guidelines',
        'Trend Tracking Sheet'
      ],
      bestseller: false,
      paypalLink: 'https://paypal.me/SydneyRamey894/9.99',
      scribedAccess: true
    },
    {
      id: 3,
      name: 'UGC Starter Kit',
      category: 'Ebook + Templates',
      description: 'Everything you need to start your UGC career - from setting up your portfolio to landing your first brand deal.',
      price: 24.99,
      originalPrice: 39.99,
      icon: Camera,
      color: 'from-orange-500 to-red-500',
      image: '/ugc starter kit.jpg',
      features: [
        'UGC Beginner\'s Guide (40+ pages)',
        'Portfolio Website Template',
        'UGC Rate Card Template',
        'Client Contract Template',
        'Invoice Template',
        'Brand Outreach Scripts',
        'Content Brief Template',
        'Lighting & Equipment Guide',
        'Editing Tips & Tricks',
        'Platform Directory (50+ brands)'
      ],
      bestseller: false,
      paypalLink: 'https://paypal.me/SydneyRamey894/24.99',
      scribedAccess: true
    },
    {
      id: 4,
      name: 'Social Media Graphics Pack',
      category: 'Templates',
      description: 'Ready-to-use Canva templates for Instagram, TikTok, and Pinterest. Just customize and post!',
      price: 14.99,
      originalPrice: 19.99,
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      image: '/social media graphics pavk.jpg',
      features: [
        '50+ Instagram Post Templates',
        '30+ Story Templates',
        '20+ Reel Cover Templates',
        '15+ Pinterest Pin Templates',
        '10+ TikTok Thumbnail Templates',
        'Brand Color Customization Guide',
        'Font Pairing Suggestions',
        'Aesthetic Mood Boards'
      ],
      bestseller: false,
      paypalLink: 'https://paypal.me/SydneyRamey894/14.99',
      scribedAccess: true
    }
  ];

  const PHYSICAL_PRODUCTS = [
    {
      id: 101,
      name: 'IT GIRL Sweatsuit Set',
      category: 'Apparel',
      description: 'Matching cropped hoodie & flare pants set in gorgeous pink-lavender ombre. The ultimate cozy-cute outfit!',
      price: 49.99,
      originalPrice: 79.99,
      icon: Shirt,
      color: 'from-pink-400 to-purple-400',
      image: '/itgirlsweatsuit.jpg',
      images: ['/itgirlsweatsuit.jpg', '/815bd122-8d61-4036-99d0-a19395004fea.jpg'],
      sizes: ['S', 'M', 'L', 'XL'],
      features: [
        'Cropped hoodie with lace-up detail',
        'Matching flare pants with IT GIRL logo',
        'Soft pink-lavender ombre colorway',
        'Distressed detailing throughout',
        'Cozy ribbed fabric',
        'Perfect for lounging or going out'
      ],
      comingSoon: false,
      paypalLink: 'https://paypal.me/SydneyRamey894/49.99',
      bestseller: true
    },
    {
      id: 102,
      name: 'Creator Essentials Tote',
      category: 'Accessories',
      description: 'Canvas tote bag with inspirational quote. Fits all your filming essentials!',
      price: 24.99,
      icon: ShoppingBag,
      color: 'from-amber-500 to-orange-500',
      comingSoon: true
    },
    {
      id: 103,
      name: 'Affirmation Mug Set',
      category: 'Home',
      description: 'Set of 2 ceramic mugs with daily affirmations for creators.',
      price: 29.99,
      icon: Coffee,
      color: 'from-pink-400 to-rose-400',
      comingSoon: true
    },
    {
      id: 104,
      name: 'Mystery Creator Box',
      category: 'Bundle',
      description: 'Surprise box filled with creator goodies, stickers, and exclusive merch!',
      price: 39.99,
      icon: Gift,
      color: 'from-purple-500 to-indigo-500',
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-4 mb-6">
            <ShoppingBag className="w-12 h-12 text-purple-500" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              The Shop
            </h1>
            <Crown className="w-12 h-12 text-pink-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Digital products, templates, and exclusive merch to level up your creator journey ✨
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('digital')}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
              activeCategory === 'digital'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            <span className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Digital Products
            </span>
          </button>
          <button
            onClick={() => setActiveCategory('physical')}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
              activeCategory === 'physical'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            <span className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Merch & Apparel
            </span>
          </button>
        </div>

        {/* Scribed.ai Delivery Banner */}
        {activeCategory === 'digital' && (
          <div className={`bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 mb-12 text-white text-center shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <FileText className="w-6 h-6" />
              <h3 className="text-xl font-bold">Powered by Scribed.ai</h3>
            </div>
            <p className="text-sm opacity-90 max-w-xl mx-auto">
              All digital products are delivered instantly via Scribed.ai after payment. 
              You'll receive an email with your access link within minutes!
            </p>
          </div>
        )}

        {/* Digital Products Grid */}
        {activeCategory === 'digital' && (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {DIGITAL_PRODUCTS.map((product, index) => (
              <div 
                key={product.id}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <ProductCard product={product} isDigital={true} />
              </div>
            ))}
          </div>
        )}

        {/* Physical Products Grid */}
        {activeCategory === 'physical' && (
          <>
            {/* Coming Soon Banner */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-12 text-white text-center shadow-xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                <h3 className="text-2xl font-bold">Merch Collection Coming Soon!</h3>
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
              <p className="text-gray-300 max-w-xl mx-auto mb-6">
                Get ready for exclusive IT GIRL merch! Sign up to be notified when we launch.
              </p>
              <a
                href="mailto:sydney@itgirlsydcontent.com?subject=Notify Me - Merch Launch"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Get Notified
              </a>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {PHYSICAL_PRODUCTS.map((product, index) => (
                <div 
                  key={product.id}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <ProductCard product={product} isDigital={false} />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Download className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-medium">Made with Love</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
            <p className="text-pink-600 font-semibold">
              Thank you for supporting my journey!
            </p>
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse" />
          </div>
          <p className="text-gray-500 text-sm">
            Questions? Email us at hello@itgirlcontent.com 💕
          </p>
        </div>
      </div>
    </div>
  );
}

