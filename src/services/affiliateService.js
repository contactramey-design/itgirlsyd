/**
 * Affiliate Service - Handles fetching products and tracking clicks
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

/**
 * Fetch products from Amazon or LTK API
 * @param {string} source - 'amazon' or 'ltk'
 * @param {number} limit - Number of products to fetch (default: 6)
 * @param {object} options - Additional options (keywords, asins for Amazon)
 * @returns {Promise<Array>} Array of product objects
 */
export async function fetchProducts(source = 'amazon', limit = 6, options = {}) {
  try {
    const params = new URLSearchParams({
      source,
      limit: limit.toString(),
    });

    // Add optional parameters
    if (options.keywords) {
      params.append('keywords', options.keywords);
    }
    if (options.asins) {
      params.append('asins', Array.isArray(options.asins) 
        ? options.asins.join(',') 
        : options.asins);
    }

    const response = await fetch(`${API_BASE_URL}/api/products?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Track affiliate link click
 * @param {string} productId - Product identifier
 * @param {string} affiliateUrl - Affiliate URL
 * @param {string} source - 'amazon' or 'ltk'
 * @param {string} productName - Optional product name
 * @returns {Promise<boolean>} Success status
 */
export async function trackClick(productId, affiliateUrl, source, productName = '') {
  try {
    // Use sendBeacon for reliable tracking (doesn't block navigation)
    if (navigator.sendBeacon) {
      const data = JSON.stringify({
        productId,
        affiliateUrl,
        source,
        productName,
      });

      const blob = new Blob([data], { type: 'application/json' });
      const success = navigator.sendBeacon(`${API_BASE_URL}/api/track-click`, blob);
      
      if (success) {
        return true;
      }
    }

    // Fallback to fetch if sendBeacon is not available or failed
    const response = await fetch(`${API_BASE_URL}/api/track-click`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        affiliateUrl,
        source,
        productName,
      }),
      // Don't wait for response - fire and forget
      keepalive: true,
    });

    return response.ok;
  } catch (error) {
    console.error('Error tracking click:', error);
    // Don't throw - tracking failures shouldn't break the user experience
    return false;
  }
}

/**
 * Handle affiliate link click with tracking
 * Opens the affiliate URL after tracking the click
 * @param {string} productId - Product identifier
 * @param {string} affiliateUrl - Affiliate URL to open
 * @param {string} source - 'amazon' or 'ltk'
 * @param {string} productName - Optional product name
 */
export async function handleAffiliateClick(productId, affiliateUrl, source, productName = '') {
  // Track the click
  await trackClick(productId, affiliateUrl, source, productName);
  
  // Open the affiliate link
  window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
}
