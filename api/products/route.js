import { defaultProvider } from '@aws-sdk/credential-providers';
import { ProductAdvertisingAPIClient, SearchItemsCommand } from '@paapi5/nodejs-sdk';
import axios from 'axios';

/**
 * Vercel Serverless Function for fetching products from Amazon PA-API or LTK API
 * 
 * Query parameters:
 * - source: 'amazon' | 'ltk' (default: 'amazon')
 * - limit: number of products to return (default: 6)
 * - keywords: search keywords for Amazon (optional)
 * - asins: comma-separated ASINs for Amazon (optional)
 */
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { source = 'amazon', limit = 6, keywords, asins } = req.query;

  try {
    let products = [];

    if (source === 'amazon') {
      products = await fetchAmazonProducts({ limit, keywords, asins });
    } else if (source === 'ltk') {
      products = await fetchLTKProducts({ limit });
    } else {
      return res.status(400).json({ error: 'Invalid source. Use "amazon" or "ltk"' });
    }

    return res.status(200).json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch products',
      message: error.message 
    });
  }
}

/**
 * Fetch products from Amazon Product Advertising API
 */
async function fetchAmazonProducts({ limit, keywords, asins }) {
  const accessKey = process.env.AMAZON_ACCESS_KEY;
  const secretKey = process.env.AMAZON_SECRET_KEY;
  const partnerTag = process.env.AMAZON_ASSOCIATE_TAG;
  const marketplace = 'www.amazon.com';
  const partnerType = 'Associates';

  if (!accessKey || !secretKey || !partnerTag) {
    throw new Error('Amazon API credentials not configured');
  }

  // Initialize PA-API client
  const defaultCredentialsProvider = defaultProvider({
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  });

  const client = new ProductAdvertisingAPIClient({
    credentials: defaultCredentialsProvider,
    region: 'us-east-1',
  });

  // Build request parameters
  const requestParams = {
    PartnerTag: partnerTag,
    PartnerType: partnerType,
    Marketplace: marketplace,
    ItemCount: parseInt(limit),
  };

  // Use ASINs if provided, otherwise use keywords
  if (asins) {
    requestParams.ItemIds = asins.split(',').map(asin => asin.trim());
    requestParams.Resources = [
      'ItemInfo.Title',
      'ItemInfo.ByLineInfo',
      'ItemInfo.Classifications',
      'ItemInfo.Features',
      'ItemInfo.ExternalIds',
      'Offers.Listings.Price',
      'Images.Primary.Large',
      'ItemInfo.ProductInfo',
    ];
  } else {
    // Search by keywords
    requestParams.Keywords = keywords || 'beauty fashion lifestyle';
    requestParams.SearchIndex = 'All';
    requestParams.Resources = [
      'ItemInfo.Title',
      'ItemInfo.ByLineInfo',
      'ItemInfo.Classifications',
      'ItemInfo.Features',
      'Offers.Listings.Price',
      'Images.Primary.Large',
      'ItemInfo.ProductInfo',
    ];
  }

  try {
    const command = new SearchItemsCommand(requestParams);
    const response = await client.send(command);

    if (!response.SearchResult || !response.SearchResult.Items) {
      return [];
    }

    // Format products to match myPicks structure
    return response.SearchResult.Items.map((item, index) => {
      const itemInfo = item.ItemInfo || {};
      const offers = item.Offers?.Listings?.[0];
      const images = item.Images?.Primary?.Large;
      const price = offers?.Price?.Amount || '0';
      const currency = offers?.Price?.Currency || 'USD';

      return {
        id: item.ASIN || `amazon-${index}`,
        name: itemInfo.Title?.DisplayValue || 'Product',
        category: itemInfo.Classifications?.Binding?.DisplayValue || 
                  itemInfo.ProductInfo?.ProductType?.DisplayValue || 
                  'General',
        price: `$${parseFloat(price).toFixed(2)}`,
        image: images?.URL || images?.URL || '',
        affiliateUrl: item.DetailPageURL || `https://www.amazon.com/dp/${item.ASIN}?tag=${partnerTag}`,
        description: itemInfo.Features?.DisplayValues?.[0] || 
                     itemInfo.Title?.DisplayValue || 
                     'Check it out!',
        source: 'amazon',
      };
    }).filter(product => product.image); // Filter out products without images
  } catch (error) {
    console.error('Amazon API error:', error);
    throw new Error(`Amazon API error: ${error.message}`);
  }
}

/**
 * Fetch products from LTK API
 */
async function fetchLTKProducts({ limit }) {
  const apiKey = process.env.LTK_API_KEY;
  const apiSecret = process.env.LTK_API_SECRET;

  if (!apiKey) {
    throw new Error('LTK API key not configured');
  }

  try {
    // LTK API endpoint - adjust based on actual LTK API documentation
    const baseUrl = 'https://platform.liketoknow.it/api/v2';
    
    // Note: Adjust endpoint and authentication method based on LTK API docs
    // This is a template - you'll need to check LTK's actual API documentation
    const response = await axios.get(`${baseUrl}/products`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      params: {
        limit: parseInt(limit),
        // Add other LTK-specific parameters as needed
      },
    });

    if (!response.data || !response.data.products) {
      return [];
    }

    // Format products to match myPicks structure
    return response.data.products.map((product, index) => ({
      id: product.id || `ltk-${index}`,
      name: product.title || product.name || 'Product',
      category: product.category || product.brand || 'Fashion',
      price: product.price ? `$${parseFloat(product.price).toFixed(2)}` : '$0.00',
      image: product.image_url || product.image || product.thumbnail || '',
      affiliateUrl: product.affiliate_link || product.link || product.url || '#',
      description: product.description || product.title || 'Check it out!',
      source: 'ltk',
    })).filter(product => product.image); // Filter out products without images
  } catch (error) {
    console.error('LTK API error:', error);
    
    // If LTK API fails, return empty array (will trigger fallback)
    if (error.response) {
      throw new Error(`LTK API error: ${error.response.status} - ${error.response.statusText}`);
    }
    throw new Error(`LTK API error: ${error.message}`);
  }
}
