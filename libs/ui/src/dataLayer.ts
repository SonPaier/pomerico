/**
 * Single entry point for pushing GTM dataLayer events from client components.
 * GTM owns all tag firing (GA4 etc.); the code only emits events. Never pass PII here.
 */
export type DataLayerWindow = Window & { dataLayer?: unknown[] };

export function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    const w = window as DataLayerWindow;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(payload);
  } catch {
    // Analytics must never break the UI flow.
  }
}
