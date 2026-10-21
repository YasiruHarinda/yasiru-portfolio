// Sends a custom event to Google Tag Manager (loaded in index.html). GTM decides
// which tags receive it, e.g. a GA4 event tag triggered on the event name.
export function track(event, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
