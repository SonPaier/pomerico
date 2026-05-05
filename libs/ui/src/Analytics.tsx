import Script from "next/script";

type Props = {
  gtmId: string;
  ga4Id?: string;
};

const consentInitScript = (storageKey: string) => `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
try {
  var raw = localStorage.getItem('${storageKey}');
  if (raw) {
    var c = JSON.parse(raw).categories || {};
    gtag('consent', 'update', {
      ad_storage: c.advertisement ? 'granted' : 'denied',
      ad_user_data: c.advertisement ? 'granted' : 'denied',
      ad_personalization: c.advertisement ? 'granted' : 'denied',
      analytics_storage: c.analytics ? 'granted' : 'denied',
      functionality_storage: c.functional ? 'granted' : 'denied',
      personalization_storage: c.functional ? 'granted' : 'denied',
      security_storage: 'granted'
    });
  }
} catch (e) {}
`.trim();

const gtmInlineScript = (gtmId: string) => `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
`.trim();

export const COOKIE_CONSENT_STORAGE_KEY = "pomerico-cookie-consent";

export function Analytics({ gtmId, ga4Id }: Props) {
  return (
    <>
      <Script
        id="consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: consentInitScript(COOKIE_CONSENT_STORAGE_KEY) }}
      />
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: gtmInlineScript(gtmId) }}
      />
      {ga4Id && (
        <>
          <Script
            id="ga4-loader"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${ga4Id}', { anonymize_ip: true });`,
            }}
          />
        </>
      )}
    </>
  );
}

export function GtmNoScript({ gtmId }: { gtmId: string }) {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
