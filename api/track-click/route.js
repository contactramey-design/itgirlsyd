/**
 * Vercel Serverless Function for tracking affiliate link clicks
 * 
 * POST /api/track-click
 * Body: {
 *   productId: string,
 *   affiliateUrl: string,
 *   source: 'amazon' | 'ltk',
 *   productName?: string
 * }
 */
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { productId, affiliateUrl, source, productName } = req.body;

    if (!productId || !affiliateUrl || !source) {
      return res.status(400).json({ 
        error: 'Missing required fields: productId, affiliateUrl, source' 
      });
    }

    // Get user agent and other metadata
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const ip = req.headers['x-forwarded-for'] || 
               req.headers['x-real-ip'] || 
               'Unknown';
    const timestamp = new Date().toISOString();

    // Log click event
    const clickData = {
      productId,
      productName: productName || 'Unknown',
      affiliateUrl,
      source,
      timestamp,
      userAgent,
      ip,
    };

    // Log to console (in production, you might want to send to analytics service)
    console.log('Affiliate click tracked:', JSON.stringify(clickData, null, 2));

    // TODO: Integrate with analytics service (e.g., Google Analytics, Mixpanel, etc.)
    // Example:
    // await sendToAnalytics(clickData);

    // Return success
    return res.status(200).json({ 
      success: true,
      message: 'Click tracked successfully',
      timestamp 
    });
  } catch (error) {
    console.error('Error tracking click:', error);
    return res.status(500).json({ 
      error: 'Failed to track click',
      message: error.message 
    });
  }
}
