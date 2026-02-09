import React, { useState, useEffect, useRef } from 'react';
import { Heart, Save, Sparkles, Lock, ArrowLeft } from 'lucide-react';

const CATEGORIES = ['tops', 'bottoms', 'shoes', 'accessories', 'bags', 'hats', 'makeup'];

// Mock item data - replace with actual items from /public/items/
const MOCK_ITEMS = {
  tops: [
    { id: 'pink-puffer', name: 'Pink Puffer Jacket', image: '/items/tops/pink-puffer-jacket.png' },
    { id: 'beige-bodysuit', name: 'Beige Bodysuit', image: '/items/tops/beige-bodysuit.png' },
  ],
  bottoms: [
    { id: 'black-leggings', name: 'Black Leggings', image: '/items/bottoms/black-leggings.png' },
  ],
  shoes: [
    { id: 'gray-uggs', name: 'Gray UGG Boots', image: '/items/shoes/gray-ugg-boots.png' },
    { id: 'pink-sandals', name: 'Pink Sandals', image: '/items/shoes/pink-sandals.png' },
  ],
  accessories: [
    { id: 'diamond-earrings', name: 'Diamond Earrings', image: '/items/accessories/diamond-earrings.png' },
  ],
  bags: [
    { id: 'white-telfar', name: 'White Telfar Bag', image: '/items/bags/white-telfar-bag.png' },
  ],
  hats: [],
  makeup: [],
};

export default function AvatarCustomizer({ onBack, isSubscribed = false }) {
  const [selectedCategory, setSelectedCategory] = useState('tops');
  const [selectedItems, setSelectedItems] = useState({});
  const [likedOutfits, setLikedOutfits] = useState([]);
  const [savedOutfits, setSavedOutfits] = useState([]);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const canvasRef = useRef(null);
  const baseAvatarRef = useRef(null);

  useEffect(() => {
    // Load saved outfits from localStorage
    const saved = localStorage.getItem('savedOutfits');
    if (saved) {
      setSavedOutfits(JSON.parse(saved));
    }
    const liked = localStorage.getItem('likedOutfits');
    if (liked) {
      setLikedOutfits(JSON.parse(liked));
    }
  }, []);

  useEffect(() => {
    renderAvatar();
  }, [selectedItems]);

  const renderAvatar = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 600;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw base avatar
    const baseImg = new Image();
    baseImg.crossOrigin = 'anonymous';
    baseImg.onload = () => {
      ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

      // Draw selected items in order
      const drawOrder = ['tops', 'bottoms', 'shoes', 'accessories', 'bags', 'hats', 'makeup'];
      drawOrder.forEach(category => {
        if (selectedItems[category]) {
          const itemImg = new Image();
          itemImg.crossOrigin = 'anonymous';
          itemImg.src = selectedItems[category].image;
          itemImg.onload = () => {
            ctx.drawImage(itemImg, 0, 0, canvas.width, canvas.height);
          };
        }
      });
    };
    baseImg.src = '/avatar/base-avatar.png';
  };

  const handleItemSelect = (item) => {
    setSelectedItems({
      ...selectedItems,
      [selectedCategory]: item
    });
  };

  const handleLike = () => {
    const outfit = { ...selectedItems, timestamp: Date.now() };
    const newLiked = [...likedOutfits, outfit];
    setLikedOutfits(newLiked);
    localStorage.setItem('likedOutfits', JSON.stringify(newLiked));
    
    if (!isSubscribed) {
      setShowSubscribeModal(true);
    }
  };

  const handleSave = () => {
    const outfit = { ...selectedItems, timestamp: Date.now() };
    const newSaved = [...savedOutfits, outfit];
    setSavedOutfits(newSaved);
    localStorage.setItem('savedOutfits', JSON.stringify(newSaved));
    
    if (!isSubscribed) {
      setShowSubscribeModal(true);
    }
  };

  const currentItems = MOCK_ITEMS[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-6">
      {onBack && (
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-pink-300 px-6 py-3 rounded-full hover:border-pink-400 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-pink-500" />
          <span className="text-pink-600 font-semibold">Back</span>
        </button>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Style Studio
          </h1>
          <p className="text-gray-600">Create your perfect outfit by mixing and matching items</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Avatar Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex justify-center mb-6">
                <canvas
                  ref={canvasRef}
                  className="border-2 border-gray-200 rounded-xl"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleLike}
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <Heart className="w-5 h-5" />
                  Like
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <Save className="w-5 h-5" />
                  Save Outfit
                </button>
              </div>
            </div>
          </div>

          {/* Item Selection Sidebar */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Select Items</h2>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Item Grid */}
            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {currentItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleItemSelect(item)}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    selectedItems[selectedCategory]?.id === item.id
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                >
                  <div className="aspect-square bg-gray-100 rounded-lg mb-2 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="text-gray-400 text-xs">No Image</div>';
                      }}
                    />
                  </div>
                  <p className="text-xs font-semibold text-gray-700">{item.name}</p>
                </button>
              ))}
              {currentItems.length === 0 && (
                <div className="col-span-2 text-center text-gray-400 py-8">
                  No items in this category yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Modal */}
      {showSubscribeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-md mx-4 shadow-2xl">
            <div className="text-center mb-6">
              <Lock className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Subscribe to Access Item Info!</h3>
              <p className="text-gray-600">
                Get full details on brands, prices, and purchase links for all items
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowSubscribeModal(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Maybe Later
              </button>
              <button
                onClick={() => {
                  // TODO: Integrate with subscription system
                  alert('Subscription feature coming soon!');
                  setShowSubscribeModal(false);
                }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
