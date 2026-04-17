import { supabase } from "@/integrations/supabase/client";

export type ClickEventType = "bundle_click" | "category_click";

export const trackClick = async (
  eventType: ClickEventType,
  itemName: string,
  metadata?: Record<string, unknown>
) => {
  try {
    await supabase.from("click_events").insert({
      event_type: eventType,
      item_name: itemName,
      metadata: metadata ?? null,
    });
  } catch (err) {
    // Silent fail — analytics shouldn't block UX
    console.warn("trackClick failed", err);
  }
};
