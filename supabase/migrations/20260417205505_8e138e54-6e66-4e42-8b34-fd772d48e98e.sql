DROP POLICY IF EXISTS "Anyone can log click events" ON public.click_events;

CREATE POLICY "Anyone can log click events"
ON public.click_events
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(trim(both from event_type)) >= 1
  AND char_length(trim(both from event_type)) <= 50
  AND char_length(trim(both from item_name)) >= 1
  AND char_length(trim(both from item_name)) <= 200
  AND (metadata IS NULL OR pg_column_size(metadata) <= 4096)
);