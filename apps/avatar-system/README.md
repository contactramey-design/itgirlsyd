# Avatar Try-On System

A full-stack Next.js 14+ application for creating customizable avatars and virtual clothing try-on functionality.

## Features

- **Full-body SVG avatars** (400x600px, scalable)
- **5-8 skin tone options** with customizable hair styles and colors
- **User customization page** with live preview
- **Generic avatar fallback** for unauthenticated users
- **Try-on API** with authentication and rate limiting
- **Server-side image rendering** (PNG output)
- **Client-side SVG rendering** (interactive)
- **Professional UI** built with Shadcn/UI and Tailwind CSS
- **TypeScript** throughout for type safety
- **Production-ready** error handling and validation

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/UI** components
- **Supabase** (Database & Auth)
- **Sharp** (Image processing)
- **Zod** (Validation)

## Prerequisites

- Node.js 18+ and npm
- Supabase account and project
- Environment variables configured

## Setup Instructions

### 1. Install Dependencies

```bash
cd apps/avatar-system
npm install
```

### 2. Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the migration file:
   ```
   supabase/migrations/001_initial_schema.sql
   ```
3. Create a Storage bucket named `avatars` (optional, for image storage)
4. Set up API key authentication:
   - Generate API keys for sellers
   - Hash them using bcrypt
   - Insert into `api_keys` table

### 3. Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SUPABASE_STORAGE_BUCKET=avatars
ALLOWED_OUTFIT_DOMAINS=example.com,another-domain.com
```

### 4. Development

```bash
npm run dev
```

Access the application at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/apps/avatar-system/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── avatar/save/   # Save avatar endpoint
│   │   └── try-on/        # Try-on API endpoint
│   ├── avatar/create/     # Avatar customization page
│   └── try-on/[id]/       # Try-on page
├── components/
│   ├── avatar/            # Avatar components
│   └── ui/                # Shadcn/UI components
├── lib/
│   ├── supabase/          # Supabase clients
│   ├── api/               # API utilities
│   ├── avatar-utils.ts    # Avatar rendering logic
│   ├── validation.ts      # Zod schemas
│   └── types.ts           # TypeScript types
└── supabase/
    └── migrations/         # Database migrations
```

## API Documentation

### POST `/api/try-on`

Virtual try-on endpoint for sellers.

**Headers:**
- `X-API-Key`: Your API key (required)

**Request Body:**
```json
{
  "avatarId": "uuid-optional",
  "outfitUrl": "https://example.com/outfit.png",
  "outfitType": "shirt" | "pants" | "dress" | "shoes" | "accessories"
}
```

**Response:**
```json
{
  "imageUrl": "data:image/png;base64,...",
  "svgConfig": "<svg>...</svg>"
}
```

**Error Responses:**
- `401`: Invalid or missing API key
- `400`: Invalid request body
- `429`: Rate limit exceeded
- `500`: Internal server error

### POST `/api/avatar/save`

Save or update avatar configuration.

**Request Body:**
```json
{
  "config": {
    "skinTone": "#F8C8A6",
    "hairStyle": "straight-long",
    "hairColor": "#000000",
    "eyeColor": "#4A90E2",
    "pose": "neutral"
  },
  "userId": "uuid-optional"
}
```

**Response:**
```json
{
  "success": true,
  "avatarId": "uuid",
  "message": "Avatar saved successfully"
}
```

## Database Schema

### Tables

1. **avatars**
   - `id` (uuid, primary key)
   - `user_id` (uuid, nullable)
   - `config_json` (jsonb)
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

2. **api_keys**
   - `id` (uuid, primary key)
   - `seller_id` (text, unique)
   - `api_key_hash` (text)
   - `rate_limit` (integer, default: 100)
   - `requests_count` (integer)
   - `requests_reset_at` (timestamp)
   - `last_used_at` (timestamp)

3. **try_on_logs**
   - `id` (uuid, primary key)
   - `avatar_id` (uuid, nullable)
   - `outfit_url` (text)
   - `outfit_type` (text)
   - `seller_id` (text)
   - `created_at` (timestamp)

## Usage Examples

### Creating an Avatar

1. Navigate to `/avatar/create`
2. Customize skin tone, hair style, hair color, eye color, and pose
3. Click "Save Avatar" to persist your configuration

### Trying On Outfits

1. Navigate to `/try-on/[avatarId]` or `/try-on/generic`
2. Enter an outfit image URL
3. Select outfit type
4. Click "Try On" to see the outfit on your avatar

### Using the API

```bash
curl -X POST https://your-domain.com/api/try-on \
  -H "X-API-Key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "outfitUrl": "https://example.com/shirt.png",
    "outfitType": "shirt"
  }'
```

## Security

- API keys are hashed using bcrypt
- Rate limiting per API key (default: 100 requests/hour)
- URL validation for outfit images (HTTPS only, whitelist domains)
- Row Level Security (RLS) policies on Supabase tables
- Input validation using Zod schemas

## Troubleshooting

### Image rendering issues

- Ensure Sharp is properly installed: `npm install sharp`
- Check that outfit URLs are accessible and valid image formats
- Verify `ALLOWED_OUTFIT_DOMAINS` includes your image domains

### API key validation fails

- Verify API key is correctly hashed in database
- Check that `X-API-Key` header is being sent
- Ensure rate limit hasn't been exceeded

### Database connection errors

- Verify Supabase environment variables are correct
- Check Supabase project status
- Ensure RLS policies allow necessary operations

## License

Private - All rights reserved
