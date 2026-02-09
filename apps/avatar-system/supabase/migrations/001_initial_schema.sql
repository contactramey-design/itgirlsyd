-- Create avatars table
CREATE TABLE IF NOT EXISTS avatars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  config_json JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on user_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_avatars_user_id ON avatars(user_id);

-- Create api_keys table
CREATE TABLE IF NOT EXISTS api_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id TEXT UNIQUE NOT NULL,
  api_key_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_used_at TIMESTAMP WITH TIME ZONE,
  rate_limit INTEGER DEFAULT 100,
  requests_count INTEGER DEFAULT 0,
  requests_reset_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() + INTERVAL '1 hour'
);

-- Create index on seller_id
CREATE INDEX IF NOT EXISTS idx_api_keys_seller_id ON api_keys(seller_id);

-- Create try_on_logs table (optional, for analytics)
CREATE TABLE IF NOT EXISTS try_on_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  avatar_id UUID REFERENCES avatars(id) ON DELETE SET NULL,
  outfit_url TEXT NOT NULL,
  outfit_type TEXT NOT NULL,
  seller_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on avatar_id and seller_id for analytics queries
CREATE INDEX IF NOT EXISTS idx_try_on_logs_avatar_id ON try_on_logs(avatar_id);
CREATE INDEX IF NOT EXISTS idx_try_on_logs_seller_id ON try_on_logs(seller_id);
CREATE INDEX IF NOT EXISTS idx_try_on_logs_created_at ON try_on_logs(created_at);

-- Enable Row Level Security
ALTER TABLE avatars ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE try_on_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for avatars
-- Users can read their own avatars
CREATE POLICY "Users can read their own avatars"
  ON avatars FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own avatars
CREATE POLICY "Users can insert their own avatars"
  ON avatars FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own avatars
CREATE POLICY "Users can update their own avatars"
  ON avatars FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Users can delete their own avatars
CREATE POLICY "Users can delete their own avatars"
  ON avatars FOR DELETE
  USING (auth.uid() = user_id);

-- Public read access for generic avatars (user_id is NULL)
CREATE POLICY "Public can read generic avatars"
  ON avatars FOR SELECT
  USING (user_id IS NULL);

-- RLS Policies for api_keys (service role only, no public access)
CREATE POLICY "Service role can manage api_keys"
  ON api_keys FOR ALL
  USING (false)
  WITH CHECK (false);

-- RLS Policies for try_on_logs (service role only)
CREATE POLICY "Service role can manage try_on_logs"
  ON try_on_logs FOR ALL
  USING (false)
  WITH CHECK (false);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_avatars_updated_at
  BEFORE UPDATE ON avatars
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
