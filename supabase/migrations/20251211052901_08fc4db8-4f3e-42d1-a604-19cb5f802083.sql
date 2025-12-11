-- Create waitlist_signups table
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  interest TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create wine_club_signups table
CREATE TABLE public.wine_club_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  membership_tier TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wine_club_signups ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (anyone can sign up)
CREATE POLICY "Anyone can insert waitlist signups" 
ON public.waitlist_signups 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can insert wine club signups" 
ON public.wine_club_signups 
FOR INSERT 
WITH CHECK (true);

-- Restrict reads (only service role can read - for admin dashboard later)
CREATE POLICY "No public read access for waitlist" 
ON public.waitlist_signups 
FOR SELECT 
USING (false);

CREATE POLICY "No public read access for wine club" 
ON public.wine_club_signups 
FOR SELECT 
USING (false);