'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

const GA_ID = 'G-2P2T9DTHDW'; // Replace with your actual GA4 ID

export default function GoogleAnalytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const check = () => {
      setAccepted(localStorage.getItem('df-cookie-consent') === 'accepted');
    };
    check();
    window.addEventListener('df-cookie-accepted', check);
    window.addEventListener('df-cookie-essential', check);
    window.addEventListener('storage', check);
    return () => {
      window.removeEventListener('df-cookie-accepted', check);
      window.removeEventListener('df-cookie-essential', check);
      window.removeEventListener('storage', check);
    };
  }, []);

  return (
    <>
      {/* Consent Mode v2 — default DENIED, loads for everyone (cookieless modelling) */}
      <Script
        id="ga-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 2000,
            });
          `,
        }}
      />

      {/* GA script — always loads, cookieless when denied */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
            });
          `,
        }}
      />

      {/* Update consent to GRANTED when user accepts */}
      {accepted && (
        <Script
          id="ga-consent-update"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'update', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
              });
            `,
          }}
        />
      )}
    </>
  );
}
