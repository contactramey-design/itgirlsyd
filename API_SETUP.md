# API Integration Setup Guide

This guide will help you set up Amazon Product Advertising API and LTK API integrations for the Shop My Picks section.

## Prerequisites

1. **Amazon Associates Account**
   - Sign up at: https://affiliate-program.amazon.com/
   - Apply for Product Advertising API access
   - Get your Access Key, Secret Key, and Associate Tag

2. **LTK (LiketoKnow.it) Account**
   - Sign up at: https://platform.liketoknow.it/
   - Get your API key from the dashboard

## Local Development Setup

1. **Copy the environment template:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Fill in your API credentials in `.env.local`:**
   ```env
   AMAZON_ACCESS_KEY=your_amazon_access_key_here
   AMAZON_SECRET_KEY=your_amazon_secret_key_here
   AMAZON_ASSOCIATE_TAG=your_associate_tag_here
   LTK_API_KEY=your_ltk_api_key_here
   LTK_API_SECRET=your_ltk_api_secret_here
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## Vercel Deployment Setup

1. **Add environment variables in Vercel Dashboard:**
   - Go to your project settings → Environment Variables
   - Add the following variables:
     - `AMAZON_ACCESS_KEY`
     - `AMAZON_SECRET_KEY`
     - `AMAZON_ASSOCIATE_TAG`
     - `LTK_API_KEY`
     - `LTK_API_SECRET` (if required)

2. **Deploy:**
   ```bash
   npm run deploy
   ```

## How It Works

### Product Fetching
- The app fetches products from Amazon PA-API or LTK API when the home page loads
- If the API fails, it falls back to hardcoded products
- Products are displayed in the "Shop My Picks" section

### Click Tracking
- All affiliate link clicks are tracked via `/api/track-click`
- Tracking happens automatically when users click on products
- Data includes: product ID, URL, source, timestamp, and user agent

## API Endpoints

### GET `/api/products`
Fetches products from Amazon or LTK API.

**Query Parameters:**
- `source` (optional): `'amazon'` or `'ltk'` (default: `'amazon'`)
- `limit` (optional): Number of products to return (default: `6`)
- `keywords` (optional): Search keywords for Amazon
- `asins` (optional): Comma-separated ASINs for Amazon

**Example:**
```
GET /api/products?source=amazon&limit=6&keywords=beauty+fashion
```

### POST `/api/track-click`
Tracks affiliate link clicks.

**Request Body:**
```json
{
  "productId": "B08XYZ123",
  "affiliateUrl": "https://amzn.to/...",
  "source": "amazon",
  "productName": "Product Name"
}
```

## Troubleshooting

### Products not loading?
1. Check that environment variables are set correctly
2. Verify API credentials are valid
3. Check browser console for errors
4. Verify API endpoints are accessible

### Click tracking not working?
1. Check browser console for errors
2. Verify `/api/track-click` endpoint is accessible
3. Check Vercel function logs

## Notes

- The app gracefully falls back to hardcoded products if APIs fail
- API keys are never exposed to the frontend (stored in serverless functions)
- Click tracking uses `navigator.sendBeacon()` for reliable tracking
