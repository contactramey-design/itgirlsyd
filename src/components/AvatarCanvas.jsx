import React, { useEffect, useRef } from 'react';

export default function AvatarCanvas({ 
  baseAvatarSrc, 
  selectedItems, 
  itemCatalog, 
  width = 400, 
  height = 600 
}) {
  const canvasRef = useRef(null);
  const imageCacheRef = useRef({});

  // Load image with caching
  const loadImage = (src) => {
    if (imageCacheRef.current[src]) {
      return Promise.resolve(imageCacheRef.current[src]);
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        imageCacheRef.current[src] = img;
        resolve(img);
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        reject(new Error(`Failed to load image: ${src}`));
      };
      img.src = src;
    });
  };

  // Draw the avatar with all layers
  const drawAvatar = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    try {
      // Draw base avatar
      const baseAvatar = await loadImage(baseAvatarSrc);
      ctx.drawImage(baseAvatar, 0, 0, width, height);
    } catch (error) {
      // Fallback: draw a simple silhouette if base avatar fails
      ctx.fillStyle = '#e5e5e5';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#333';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Avatar', width / 2, height / 2);
      console.warn('Base avatar failed to load, using fallback');
    }

    // Draw selected items in layer order
    const layerOrder = ['tops', 'bottoms', 'shoes', 'accessories', 'bags', 'hats'];
    
    for (const category of layerOrder) {
      const itemId = selectedItems[category];
      if (!itemId) continue;

      // Find item in catalog
      const categoryItems = itemCatalog[category] || [];
      const item = categoryItems.find(i => i.id === itemId);
      
      if (!item || !item.image) continue;

      try {
        const itemImage = await loadImage(item.image);
        ctx.drawImage(itemImage, 0, 0, width, height);
      } catch (error) {
        console.warn(`Failed to load item image: ${item.image}`);
        // Continue with next item
      }
    }
  };

  // Redraw when selectedItems or catalog changes
  useEffect(() => {
    drawAvatar();
  }, [selectedItems, itemCatalog, baseAvatarSrc, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="border-4 border-black bg-white"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
}
