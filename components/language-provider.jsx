'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '@/lib/translations';

const LanguageContext = createContext({
  lang: 'el',
  toggleLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('el');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('df-lang') : null;
    if (saved && (saved === 'el' || saved === 'en')) {
      setLang(saved);
    }
  }, []);

  const toggleLang = useCallback(() => {
    const newLang = lang === 'el' ? 'en' : 'el';
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('df-lang', newLang);
    }
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
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
