'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from './language-provider';

const cookiePolicy = {
  el: {
    modalTitle: 'Πολιτική Cookies',
    sections: [
      {
        title: 'Τι είναι τα cookies',
        body: 'Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας όταν επισκέπτεστε έναν ιστότοπο. Χρησιμοποιούνται για να θυμούνται τις προτιμήσεις σας και να βελτιώνουν την εμπειρία πλοήγησής σας.',
      },
      {
        title: 'Απαραίτητα cookies',
        body: 'Είναι απολύτως αναγκαία για τη λειτουργία του ιστότοπου. Χωρίς αυτά, υπηρεσίες όπως η αποθήκευση γλωσσικής προτίμησης δεν λειτουργούν. Δεν χρειάζονται τη συγκατάθεσή σας.',
      },
      {
        title: 'Αναλυτικά cookies (Google Analytics)',
        body: 'Χρησιμοποιούμε Google Analytics 4 με Consent Mode v2. Εάν αποδεχτείτε, συλλέγουμε ανώνυμα δεδομένα επισκεψιμότητας (σελίδες, χρόνος παραμονής, πηγή επίσκεψης) για να βελτιώνουμε τον ιστότοπο. Τα δεδομένα είναι ανώνυμα και δεν συνδέονται με το πρόσωπό σας. Ακόμα και χωρίς αποδοχή, το GA λειτουργεί σε cookieless mode χωρίς προσωπικά δεδομένα.',
      },
      {
        title: 'Διαχείριση cookies',
        body: 'Μπορείτε να διαγράψετε ή να απενεργοποιήσετε τα cookies μέσα από τις ρυθμίσεις του browser σας ανά πάσα στιγμή. Σημειώστε ότι η απενεργοποίηση ορισμένων cookies μπορεί να επηρεάσει τη λειτουργικότητα του ιστότοπου.',
      },
    ],
  },
  en: {
    modalTitle: 'Cookie Policy',
    sections: [
      {
        title: 'What are cookies',
        body: 'Cookies are small text files stored on your device when you visit a website. They are used to remember your preferences and improve your browsing experience.',
      },
      {
        title: 'Essential cookies',
        body: 'These are strictly necessary for the website to function. Without them, services such as saving your language preference will not work. They do not require your consent.',
      },
      {
        title: 'Analytics cookies (Google Analytics)',
        body: 'We use Google Analytics 4 with Consent Mode v2. If you accept, we collect anonymous traffic data (pages visited, time spent, referral source) to improve the website. Data is anonymous and not linked to you personally. Even without acceptance, GA operates in cookieless mode without any personal data.',
      },
      {
        title: 'Managing cookies',
        body: 'You can delete or disable cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of the website.',
      },
    ],
  },
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { t, lang } = useTranslation();
  const policy = cookiePolicy[lang] ?? cookiePolicy.el;

  useEffect(() => {
    const consent = localStorage.getItem('df-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('df-cookie-consent', 'accepted');
    window.dispatchEvent(new Event('df-cookie-accepted'));
    setModalOpen(false);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Dimmed overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
          />

          {/* Bottom banner */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-ag-accent/40"
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="font-heading text-lg text-foreground mb-1">
                  {t('cookies.title')}
                </p>
                <p className="font-body text-sm text-ag-body leading-relaxed max-w-2xl">
                  {t('cookies.description')}{' '}
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-ag-accent underline underline-offset-2 hover:opacity-70 transition-opacity font-body text-sm"
                  >
                    {t('cookies.learnMore')}
                  </button>
                </p>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={handleAccept}
                  className="bg-ag-accent text-background font-mono text-xs tracking-widest uppercase px-10 py-4 hover:opacity-90 transition-opacity duration-300 whitespace-nowrap"
                >
                  {t('cookies.accept')}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Cookie Policy Modal */}
          <AnimatePresence>
            {modalOpen && (
              <>
                {/* Modal overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-background/80 backdrop-blur-md z-[60]"
                  onClick={() => setModalOpen(false)}
                />

                {/* Modal box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="fixed inset-0 z-[70] flex items-center justify-center px-4 pointer-events-none"
                >
                  <div
                    className="bg-card border border-ag-border w-full max-w-lg max-h-[80vh] flex flex-col pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Modal header */}
                    <div className="px-8 pt-8 pb-6 border-b border-ag-border flex-shrink-0">
                      <span className="font-mono text-xs text-ag-muted tracking-wider block mb-2">
                        {lang === 'el' ? 'ΝΟΜΙΚΑ' : 'LEGAL'}
                      </span>
                      <h2 className="font-heading text-2xl text-foreground">
                        {policy.modalTitle}
                      </h2>
                    </div>

                    {/* Modal content — scrollable */}
                    <div className="px-8 py-6 overflow-y-auto flex-1 space-y-6">
                      {policy.sections.map((section, i) => (
                        <div key={i}>
                          <h3 className="font-heading text-base text-foreground mb-2">
                            {section.title}
                          </h3>
                          <p className="font-body text-sm text-ag-body leading-relaxed">
                            {section.body}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Modal footer — accept button */}
                    <div className="px-8 pb-8 pt-4 border-t border-ag-border flex-shrink-0">
                      <button
                        onClick={handleAccept}
                        className="w-full bg-ag-accent text-background font-mono text-xs tracking-widest uppercase py-4 hover:opacity-90 transition-opacity duration-300"
                      >
                        {t('cookies.accept')}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
