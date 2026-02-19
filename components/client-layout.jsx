'use client';
import { LanguageProvider } from './language-provider';
import Navigation from './navigation';
import CustomCursor from './custom-cursor';
import Footer from './footer';

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <CustomCursor />
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
