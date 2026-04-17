CREATE TABLE public.click_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL,
  item_name TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.click_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log click events"
ON public.click_events
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(event_type)) BETWEEN 1 AND 50
  AND char_length(trim(item_name)) BETWEEN 1 AND 200
);

CREATE POLICY "No public read of click events"
ON public.click_events
FOR SELECT
TO public
USING (false);

CREATE INDEX idx_click_events_type_created ON public.click_events(event_type, created_at DESC);