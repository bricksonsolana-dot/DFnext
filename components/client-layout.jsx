'use client';
import { LanguageProvider } from './language-provider';
import Navigation from './navigation';
import CustomCursor from './custom-cursor';
import Footer from './footer';
import CookieConsent from './cookie-consent';
import GoogleAnalytics from './google-analytics';

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <CustomCursor />
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <CookieConsent />
      <GoogleAnalytics />
    </LanguageProvider>
  );
}
