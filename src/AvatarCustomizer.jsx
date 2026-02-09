import React, { useState, useEffect } from 'react';
import { Heart, Lock, ShoppingBag, X, Mail, Save, Shirt, Sparkles } from 'lucide-react';
import AvatarCanvas from './components/AvatarCanvas';

export default function AvatarCustomizer() {
  // State management
  const [selectedItems, setSelectedItems] = useState({
    tops: null,
    bottoms: null,
    shoes: null,
    accessories: null,
    bags: null,
    hats: null
  });
  const [activeCategory, setActiveCategory] = useState('tops');
  const [savedOutfits, setSavedOutfits] = useState([]);
  const [likedOutfits, setLikedOutfits] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [selectedItemDetails, setSelectedItemDetails] = useState(null);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  // Item catalog - based on uploaded outfit images
  const itemCatalog = {
    tops: [
      {
        id: 'pink-puffer',
        name: 'Pink Puffer Jacket',
        image: '/items/tops/pink-puffer-jacket.png',
        brand: 'CORDOVA',
        price: 89.99,
        priceRange: '$80-100',
        description: 'Cropped puffer jacket with stand-up collar',
        purchaseLink: '#',
        layerOrder: 1
      },
      {
        id: 'black-hoodie',
        name: 'Black Hoodie',
        image: '/items/tops/black-hoodie.png',
        brand: 'CHROME HEARTS',
        price: 120.00,
        priceRange: '$100-150',
        description: 'Black hooded sweatshirt with intricate scrollwork',
        purchaseLink: '#',
        layerOrder: 1
      },
      {
        id: 'white-bodysuit',
        name: 'White Bodysuit',
        image: '/items/tops/white-bodysuit.png',
        brand: 'SKIMS',
        price: 48.00,
        priceRange: '$40-60',
        description: 'Form-fitting white bodysuit',
        purchaseLink: '#',
        layerOrder: 1
      }
    ],
    bottoms: [
      {
        id: 'black-leggings',
        name: 'Black Leggings',
        image: '/items/bottoms/black-leggings.png',
        brand: 'SKIMS',
        price: 68.00,
        priceRange: '$60-80',
        description: 'High-waisted black leggings',
        purchaseLink: '#',
        layerOrder: 2
      },
      {
        id: 'white-leggings',
        name: 'White Leggings',
        image: '/items/bottoms/white-leggings.png',
        brand: 'SKIMS',
        price: 68.00,
        priceRange: '$60-80',
        description: 'High-waisted white leggings',
        purchaseLink: '#',
        layerOrder: 2
      },
      {
        id: 'flare-jeans',
        name: 'Distressed Flare Jeans',
        image: '/items/bottoms/flare-jeans.png',
        brand: 'Hollister',
        price: 79.99,
        priceRange: '$70-90',
        description: 'Light-wash denim with flare silhouette',
        purchaseLink: '#',
        layerOrder: 2
      }
    ],
    shoes: [
      {
        id: 'gray-ugg-boots',
        name: 'Gray UGG Boots',
        image: '/items/shoes/gray-ugg-boots.png',
        brand: 'UGG',
        price: 150.00,
        priceRange: '$140-160',
        description: 'Black UGG-style ankle boots with shearling',
        purchaseLink: '#',
        layerOrder: 3
      },
      {
        id: 'tan-ugg-slippers',
        name: 'Tan UGG Slippers',
        image: '/items/shoes/tan-ugg-slippers.png',
        brand: 'UGG',
        price: 100.00,
        priceRange: '$90-110',
        description: 'Tan slip-on slippers with faux fur',
        purchaseLink: '#',
        layerOrder: 3
      },
      {
        id: 'tory-burch-sandals',
        name: 'Tory Burch Sandals',
        image: '/items/shoes/tory-burch-sandals.png',
        brand: 'Tory Burch',
        price: 198.00,
        priceRange: '$180-220',
        description: 'Thong-style sandals with logo',
        purchaseLink: '#',
        layerOrder: 3
      }
    ],
    accessories: [
      {
        id: 'diamond-earrings',
        name: 'Diamond Earrings',
        image: '/items/accessories/diamond-earrings.png',
        brand: 'Swarovski',
        price: 299.00,
        priceRange: '$250-350',
        description: 'Sparkling stud earrings',
        purchaseLink: '#',
        layerOrder: 4
      },
      {
        id: 'gold-bracelet',
        name: 'Gold Bracelet',
        image: '/items/accessories/gold-bracelet.png',
        brand: 'Tory Burch',
        price: 198.00,
        priceRange: '$180-220',
        description: 'Gold chain bracelet with logo',
        purchaseLink: '#',
        layerOrder: 4
      }
    ],
    bags: [
      {
        id: 'white-telfar-bag',
        name: 'White Telfar Bag',
        image: '/items/bags/white-telfar-bag.png',
        brand: 'Telfar',
        price: 257.00,
        priceRange: '$250-300',
        description: 'Rectangular tote with logo',
        purchaseLink: '#',
        layerOrder: 5
      },
      {
        id: 'coach-bag',
        name: 'Coach Bag',
        image: '/items/bags/coach-bag.png',
        brand: 'Coach',
        price: 350.00,
        priceRange: '$300-400',
        description: 'Monogram canvas shoulder bag',
        purchaseLink: '#',
        layerOrder: 5
      },
      {
        id: 'dior-bag',
        name: 'Dior Heart Bag',
        image: '/items/bags/dior-bag.png',
        brand: 'Christian Dior',
        price: 4500.00,
        priceRange: '$4000-5000',
        description: 'Heart-shaped quilted leather bag',
        purchaseLink: '#',
        layerOrder: 5
      }
    ],
    hats: [
      {
        id: 'pink-beanie',
        name: 'Pink Beanie',
        image: '/items/hats/pink-beanie.png',
        brand: 'Maison Margiela',
        price: 250.00,
        priceRange: '$200-300',
        description: 'Ribbed knit beanie with logo',
        purchaseLink: '#',
        layerOrder: 0
      }
    ]
  };

  const categories = [
    { id: 'tops', name: 'Tops', icon: Shirt },
    { id: 'bottoms', name: 'Bottoms', icon: ShoppingBag },
    { id: 'shoes', name: 'Shoes', icon: Sparkles },
    { id: 'accessories', name: 'Accessories', icon: Heart },
    { id: 'bags', name: 'Bags', icon: ShoppingBag },
    { id: 'hats', name: 'Hats', icon: Sparkles }
  ];

  // Check subscription status on mount
  useEffect(() => {
    const subscribers = JSON.parse(localStorage.getItem('vip_subscribers') || '[]');
    const subscribed = localStorage.getItem('is_subscribed') === 'true' || subscribers.length > 0;
    setIsSubscribed(subscribed);
  }, []);

  // Load saved outfits and likes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('avatar_saved_outfits');
    const liked = localStorage.getItem('avatar_liked_outfits');
    if (saved) setSavedOutfits(JSON.parse(saved));
    if (liked) setLikedOutfits(JSON.parse(liked));
  }, []);

  // Save outfits and likes to localStorage
  useEffect(() => {
    localStorage.setItem('avatar_saved_outfits', JSON.stringify(savedOutfits));
  }, [savedOutfits]);

  useEffect(() => {
    localStorage.setItem('avatar_liked_outfits', JSON.stringify(likedOutfits));
  }, [likedOutfits]);

  // Handle item selection
  const handleItemSelect = (itemId) => {
    setSelectedItems(prev => ({
      ...prev,
      [activeCategory]: prev[activeCategory] === itemId ? null : itemId
    }));
  };

  // Handle like outfit
  const handleLike = () => {
    const outfitId = JSON.stringify(selectedItems);
    if (likedOutfits.includes(outfitId)) {
      setLikedOutfits(prev => prev.filter(id => id !== outfitId));
    } else {
      setLikedOutfits(prev => [...prev, outfitId]);
    }
  };

  // Handle save outfit
  const handleSaveOutfit = () => {
    const outfitId = `outfit-${Date.now()}`;
    const newOutfit = {
      id: outfitId,
      name: `Outfit ${savedOutfits.length + 1}`,
      items: { ...selectedItems },
      createdAt: new Date().toISOString(),
      liked: likedOutfits.includes(JSON.stringify(selectedItems))
    };
    setSavedOutfits(prev => [...prev, newOutfit]);
    alert(`Outfit saved as "${newOutfit.name}"!`);
  };

  // Handle view item details
  const handleViewItemDetails = (item) => {
    setSelectedItemDetails(item);
    if (!isSubscribed) {
      setShowSubscribeModal(true);
    } else {
      setShowItemDetails(true);
    }
  };

  // Handle subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subscribeEmail || !subscribeEmail.includes('@')) {
      setSubscribeStatus('error');
      return;
    }

    setSubscribeStatus('loading');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: subscribeEmail,
          source: 'Avatar Customizer',
          date: new Date().toISOString()
        })
      });

      if (response.ok) {
        const subscribers = JSON.parse(localStorage.getItem('vip_subscribers') || '[]');
        subscribers.push({ email: subscribeEmail, date: new Date().toISOString(), source: 'Avatar Customizer' });
        localStorage.setItem('vip_subscribers', JSON.stringify(subscribers));
        localStorage.setItem('is_subscribed', 'true');
        setIsSubscribed(true);
        setSubscribeStatus('success');
        setShowSubscribeModal(false);
        setShowItemDetails(true);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      // Fallback to localStorage
      const subscribers = JSON.parse(localStorage.getItem('vip_subscribers') || '[]');
      subscribers.push({ email: subscribeEmail, date: new Date().toISOString(), source: 'Avatar Customizer' });
      localStorage.setItem('vip_subscribers', JSON.stringify(subscribers));
      localStorage.setItem('is_subscribed', 'true');
      setIsSubscribed(true);
      setSubscribeStatus('success');
      setShowSubscribeModal(false);
      setShowItemDetails(true);
    }
  };

  const isOutfitLiked = likedOutfits.includes(JSON.stringify(selectedItems));
  const activeItems = itemCatalog[activeCategory] || [];

  return (
    <div className="mb-16 border-t-4 border-black pt-8">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-black uppercase tracking-tight mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          Style Studio
        </h2>
        <p className="text-sm text-gray-600 uppercase tracking-widest">Create Your Look</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Sidebar - Desktop */}
        <div className="hidden lg:block">
          <div className="border-4 border-black p-4 bg-white sticky top-4">
            <h3 className="text-xl font-black uppercase mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 border-2 border-black font-bold uppercase text-sm transition-all hover:scale-105 ${
                      activeCategory === category.id
                        ? 'bg-black text-white'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5" />
                      <span>{category.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="lg:col-span-1 order-2 lg:order-none">
          <div className="border-4 border-black p-4 bg-white">
            <div className="flex justify-center mb-4 bg-gray-50 p-4 min-h-[450px] items-center">
              <div className="w-full max-w-[300px]">
                <AvatarCanvas
                  baseAvatarSrc="/avatar/base-avatar.png"
                  selectedItems={selectedItems}
                  itemCatalog={itemCatalog}
                  width={300}
                  height={450}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 justify-center">
              <button
                onClick={handleLike}
                className={`border-2 border-black px-4 py-2 font-bold text-sm uppercase transition-all hover:scale-105 ${
                  isOutfitLiked
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
                title={isOutfitLiked ? 'Unlike outfit' : 'Like outfit'}
              >
                <Heart className={`w-5 h-5 ${isOutfitLiked ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleSaveOutfit}
                className="border-2 border-black px-4 py-2 font-bold text-sm uppercase bg-white text-black hover:bg-gray-100 transition-all flex items-center gap-2 hover:scale-105"
                title="Save this outfit"
              >
                <Save className="w-5 h-5" />
                <span className="hidden sm:inline">Save</span>
              </button>
            </div>
          </div>
        </div>

        {/* Item Grid */}
        <div className="lg:col-span-1 order-1 lg:order-none">
          <div className="border-4 border-black p-4 bg-white">
            {/* Category Carousel - Mobile */}
            <div className="lg:hidden mb-4">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map(category => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex-shrink-0 px-4 py-2 border-2 border-black font-bold uppercase text-xs transition-all hover:scale-105 ${
                        activeCategory === category.id
                          ? 'bg-black text-white'
                          : 'bg-white text-black hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-4 h-4 inline mr-1" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <h3 className="text-xl font-black uppercase mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              {categories.find(c => c.id === activeCategory)?.name || 'Items'}
            </h3>

            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {activeItems.map(item => {
                const isSelected = selectedItems[activeCategory] === item.id;
                return (
                  <div
                    key={item.id}
                    className={`border-2 border-black p-2 cursor-pointer transition-all ${
                      isSelected ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
                    }`}
                    onClick={() => handleItemSelect(item.id)}
                  >
                    <div className="aspect-square bg-gray-100 mb-2 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="text-xs text-center p-2">Image<br/>Placeholder</div>';
                        }}
                      />
                    </div>
                    <p className="text-xs font-bold uppercase truncate">{item.name}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewItemDetails(item);
                      }}
                      className="mt-1 text-xs underline"
                    >
                      {isSubscribed ? 'Details' : 'View'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Modal */}
      {showSubscribeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border-4 border-black p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowSubscribeModal(false)}
              className="absolute top-4 right-4 text-black hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center mb-4">
              <Lock className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-black uppercase mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Subscribe to Access
              </h3>
              <p className="text-sm text-gray-600">
                Get full item details, prices, and purchase links!
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={subscribeEmail}
                onChange={(e) => {
                  setSubscribeEmail(e.target.value);
                  if (subscribeStatus === 'error') setSubscribeStatus('');
                }}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 border-2 border-black text-gray-800 focus:outline-none focus:ring-2 focus:ring-black ${
                  subscribeStatus === 'error' ? 'border-red-600' : ''
                }`}
                required
              />
              <button
                type="submit"
                disabled={subscribeStatus === 'loading'}
                className="w-full bg-black text-white px-6 py-3 font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition-all disabled:opacity-50"
              >
                {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
              {subscribeStatus === 'error' && (
                <p className="text-red-600 text-xs text-center">Please enter a valid email</p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Item Details Modal */}
      {showItemDetails && selectedItemDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border-4 border-black p-6 max-w-md w-full relative">
            <button
              onClick={() => {
                setShowItemDetails(false);
                setSelectedItemDetails(null);
              }}
              className="absolute top-4 right-4 text-black hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mb-4">
              <h3 className="text-2xl font-black uppercase mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                {selectedItemDetails.name}
              </h3>
              <p className="text-lg font-bold text-gray-800">{selectedItemDetails.brand}</p>
            </div>

            {isSubscribed ? (
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-black">${selectedItemDetails.price.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-700">{selectedItemDetails.description}</p>
                <a
                  href={selectedItemDetails.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-black text-white px-6 py-3 font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition-all text-center"
                >
                  <ShoppingBag className="w-5 h-5 inline mr-2" />
                  Shop Now
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-bold text-gray-600">{selectedItemDetails.priceRange}</p>
                  <p className="text-xs text-gray-500 mt-1">Price range shown</p>
                </div>
                <p className="text-sm text-gray-700">{selectedItemDetails.description}</p>
                <button
                  onClick={() => {
                    setShowItemDetails(false);
                    setShowSubscribeModal(true);
                  }}
                  className="w-full bg-black text-white px-6 py-3 font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition-all"
                >
                  <Lock className="w-5 h-5 inline mr-2" />
                  Subscribe for Full Details
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
