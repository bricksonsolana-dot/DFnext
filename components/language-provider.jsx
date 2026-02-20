// components/language-provider.jsx
'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '@/lib/translations';

const LanguageContext = createContext({
  lang: 'el',
  toggleLang: () => {},
  t: (key) => key,
  langKey: 0,
});

export function LanguageProvider({ children }) {
  // 1. Ξεκινάμε ΠΑΝΤΑ με 'el' για να συμφωνούμε με τον Server (SSR)
  const [lang, setLang] = useState('el');
  const [langKey, setLangKey] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 2. Μόλις "πατήσουμε" στον Client, ελέγχουμε το localStorage
    const saved = localStorage.getItem('df-lang');
    if (saved && (saved === 'el' || saved === 'en')) {
      setLang(saved);
    }
    // 3. Ενημερώνουμε ότι ο Client είναι έτοιμος
    setMounted(true);
    document.documentElement.lang = saved || 'el';
  }, []);

  const toggleLang = useCallback(() => {
    const newLang = lang === 'el' ? 'en' : 'el';
    setLang(newLang);
    setLangKey((prev) => prev + 1);
    localStorage.setItem('df-lang', newLang);
    document.documentElement.lang = newLang;
  }, [lang]);

  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      if (value === undefined || value === null) return key;
      value = value[k];
    }
    return value !== undefined ? value : key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, langKey }}>
      {/* 
         Luxury Reveal: 
         Αν δεν έχει γίνει hydration (mounted), κρατάμε το περιεχόμενο 
         κρυφό (opacity 0) για να αποφύγουμε το stuttering και το error.
      */}
      <div 
        style={{ 
          opacity: mounted ? 1 : 0,
          visibility: mounted ? 'visible' : 'hidden',
          transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)' 
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}