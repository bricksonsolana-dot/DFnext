'use client';
import Link from 'next/link';
import { useTranslation } from '@/components/language-provider';

const content = {
  el: {
    label: 'ΝΟΜΙΚΑ',
    title: 'Πολιτική Απορρήτου',
    updated: 'Τελευταία ενημέρωση: Μάρτιος 2025',
    sections: [
      {
        title: '1. Ποιοι Είμαστε',
        body: 'Η Digital Footprint είναι web development studio με έδρα την Αθήνα, Ελλάδα. Δραστηριοποιούμαστε στη σχεδίαση και ανάπτυξη ιστοσελίδων, e-shop και ψηφιακών προϊόντων. Η παρούσα Πολιτική Απορρήτου περιγράφει πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας δεδομένα σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR — Κανονισμός ΕΕ 2016/679).\n\nΕπικοινωνία: info@digitalfootprint.gr',
      },
      {
        title: '2. Ποια Δεδομένα Συλλέγουμε',
        body: 'Συλλέγουμε δεδομένα που μας παρέχετε εσείς οι ίδιοι, όπως:\n\n• Όνομα και επώνυμο\n• Διεύθυνση email\n• Αριθμός τηλεφώνου\n• Μήνυμα επικοινωνίας ή αίτημα προσφοράς\n\nΕπίσης, συλλέγουμε αυτόματα τεχνικά δεδομένα κατά την επίσκεψή σας στον ιστότοπο, όπως:\n\n• Διεύθυνση IP\n• Τύπος browser και λειτουργικό σύστημα\n• Σελίδες που επισκεφτήκατε και χρόνος παραμονής\n• Πηγή επίσκεψης (αναφορά)\n\nΔεν συλλέγουμε ευαίσθητα προσωπικά δεδομένα (π.χ. υγεία, πολιτικές απόψεις, θρησκεία).',
      },
      {
        title: '3. Πώς Χρησιμοποιούμε τα Δεδομένα σας',
        body: 'Χρησιμοποιούμε τα δεδομένα σας αποκλειστικά για:\n\n• Απάντηση σε ερωτήματα και επικοινωνία μαζί σας\n• Αποστολή προσφορών που μας έχετε ζητήσει\n• Βελτίωση της απόδοσης και εμπειρίας χρήσης του ιστότοπου\n• Ανάλυση επισκεψιμότητας (μέσω Google Analytics) για τη βελτίωση των υπηρεσιών μας\n• Συμμόρφωση με νομικές υποχρεώσεις\n\nΔεν χρησιμοποιούμε τα δεδομένα σας για αυτοματοποιημένη λήψη αποφάσεων ή profiling.',
      },
      {
        title: '4. Cookies και Τεχνολογίες Παρακολούθησης',
        body: 'Ο ιστότοπός μας χρησιμοποιεί cookies για τις εξής κατηγορίες:\n\n• Απαραίτητα cookies: Είναι απολύτως αναγκαία για τη λειτουργία του ιστότοπου (π.χ. αποθήκευση γλωσσικής προτίμησης). Δεν απαιτούν τη συγκατάθεσή σας.\n\n• Αναλυτικά cookies: Χρησιμοποιούμε Google Analytics 4 για να κατανοούμε πώς χρησιμοποιείτε τον ιστότοπο. Τα δεδομένα είναι ανώνυμα και συγκεντρωτικά. Μπορείτε να τα αρνηθείτε μέσω του banner cookies.\n\nΜπορείτε να διαχειριστείτε ή να διαγράψετε τα cookies μέσω των ρυθμίσεων του browser σας ανά πάσα στιγμή.',
      },
      {
        title: '5. Κοινοποίηση Δεδομένων',
        body: 'Δεν πωλούμε, εκμισθώνουμε ή μεταφέρουμε τα προσωπικά σας δεδομένα σε τρίτους, εκτός από:\n\n• Google Analytics (ανώνυμα αναλυτικά δεδομένα)\n• Παρόχους φιλοξενίας (Vercel) για τη λειτουργία του ιστότοπου\n• Αρχές ή φορείς εφόσον απαιτείται από τη νομοθεσία\n\nΌλοι οι συνεργάτες μας συμμορφώνονται με τον GDPR.',
      },
      {
        title: '6. Ασφάλεια Δεδομένων',
        body: 'Λαμβάνουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων σας, συμπεριλαμβανομένων:\n\n• Κρυπτογράφησης HTTPS/TLS σε όλες τις επικοινωνίες\n• Περιορισμένης πρόσβασης σε δεδομένα (μόνο εξουσιοδοτημένο προσωπικό)\n• Τακτικής αξιολόγησης ασφαλείας\n\nΩστόσο, καμία μέθοδος μετάδοσης μέσω internet δεν είναι 100% ασφαλής.',
      },
      {
        title: '7. Τα Δικαιώματά σας (GDPR)',
        body: 'Βάσει του GDPR, έχετε τα εξής δικαιώματα:\n\n• Δικαίωμα πρόσβασης: Να ζητήσετε αντίγραφο των δεδομένων που τηρούμε για εσάς\n• Δικαίωμα διόρθωσης: Να διορθώσουμε ανακριβή δεδομένα\n• Δικαίωμα διαγραφής ("δικαίωμα στη λήθη"): Να διαγράψουμε τα δεδομένα σας\n• Δικαίωμα περιορισμού επεξεργασίας: Να περιορίσουμε τη χρήση των δεδομένων σας\n• Δικαίωμα εναντίωσης: Να αντιταχθείτε στην επεξεργασία για σκοπούς marketing\n• Δικαίωμα φορητότητας: Να λάβετε τα δεδομένα σας σε μεταφερόμενη μορφή\n\nΓια άσκηση οποιουδήποτε δικαιώματος, επικοινωνήστε μαζί μας στο info@digitalfootprint.gr. Απαντάμε εντός 30 ημερών.',
      },
      {
        title: '8. Διατήρηση Δεδομένων',
        body: 'Διατηρούμε τα δεδομένα σας μόνο για όσο χρόνο είναι απαραίτητο για τον σκοπό συλλογής τους:\n\n• Δεδομένα επικοινωνίας: έως 2 χρόνια από την τελευταία επαφή\n• Δεδομένα analytics: ανώνυμα, διατηρούνται για 14 μήνες από το Google Analytics\n• Δεδομένα cookies: σύμφωνα με την πολιτική κάθε cookie',
      },
      {
        title: '9. Επικοινωνία',
        body: 'Για οποιοδήποτε ερώτημα σχετικά με την Πολιτική Απορρήτου ή τα δεδομένα σας, επικοινωνήστε μαζί μας:\n\nDigital Footprint\nEmail: info@digitalfootprint.gr\nΑθήνα, Ελλάδα\n\nΕάν πιστεύετε ότι παραβιάσαμε τα δικαιώματά σας, έχετε δικαίωμα να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (www.dpa.gr).',
      },
    ],
  },
  en: {
    label: 'LEGAL',
    title: 'Privacy Policy',
    updated: 'Last updated: March 2025',
    sections: [
      {
        title: '1. Who We Are',
        body: 'Digital Footprint is a web development studio based in Athens, Greece. We specialise in designing and building websites, e-shops and digital products. This Privacy Policy explains how we collect, use and protect your personal data in accordance with the General Data Protection Regulation (GDPR — EU Regulation 2016/679).\n\nContact: info@digitalfootprint.gr',
      },
      {
        title: '2. What Data We Collect',
        body: 'We collect data you provide directly, such as:\n\n• Full name\n• Email address\n• Phone number\n• Your message or project enquiry\n\nWe also automatically collect technical data when you visit our website, including:\n\n• IP address\n• Browser type and operating system\n• Pages visited and time spent\n• Referral source\n\nWe do not collect sensitive personal data (e.g. health, political views, religion).',
      },
      {
        title: '3. How We Use Your Data',
        body: 'We use your data exclusively to:\n\n• Respond to enquiries and communicate with you\n• Send quotes you have requested\n• Improve website performance and user experience\n• Analyse traffic via Google Analytics to improve our services\n• Comply with legal obligations\n\nWe do not use your data for automated decision-making or profiling.',
      },
      {
        title: '4. Cookies and Tracking Technologies',
        body: 'Our website uses cookies in the following categories:\n\n• Essential cookies: Strictly necessary for the website to function (e.g. language preference). These do not require your consent.\n\n• Analytics cookies: We use Google Analytics 4 to understand how you use the website. Data is anonymous and aggregated. You can decline these via the cookie banner.\n\nYou can manage or delete cookies through your browser settings at any time.',
      },
      {
        title: '5. Data Sharing',
        body: 'We do not sell, rent or transfer your personal data to third parties, except:\n\n• Google Analytics (anonymous analytics data)\n• Hosting providers (Vercel) for website operation\n• Authorities or bodies where required by law\n\nAll our partners comply with GDPR.',
      },
      {
        title: '6. Data Security',
        body: 'We take appropriate technical and organisational measures to protect your data, including:\n\n• HTTPS/TLS encryption on all communications\n• Restricted data access (authorised personnel only)\n• Regular security reviews\n\nHowever, no method of transmission over the internet is 100% secure.',
      },
      {
        title: '7. Your Rights (GDPR)',
        body: 'Under GDPR, you have the following rights:\n\n• Right of access: Request a copy of the data we hold about you\n• Right to rectification: Have inaccurate data corrected\n• Right to erasure ("right to be forgotten"): Have your data deleted\n• Right to restriction: Limit how we use your data\n• Right to object: Object to processing for marketing purposes\n• Right to portability: Receive your data in a portable format\n\nTo exercise any right, contact us at info@digitalfootprint.gr. We respond within 30 days.',
      },
      {
        title: '8. Data Retention',
        body: 'We retain your data only for as long as necessary for the purpose it was collected:\n\n• Contact data: up to 2 years from last contact\n• Analytics data: anonymous, retained for 14 months by Google Analytics\n• Cookie data: according to each cookie\'s policy',
      },
      {
        title: '9. Contact',
        body: 'For any questions regarding this Privacy Policy or your data, contact us:\n\nDigital Footprint\nEmail: info@digitalfootprint.gr\nAthens, Greece\n\nIf you believe we have violated your rights, you have the right to lodge a complaint with the Hellenic Data Protection Authority (www.dpa.gr).',
      },
    ],
  },
};

export default function PrivacyClient() {
  const { lang } = useTranslation();
  const c = content[lang] ?? content.el;

  return (
    <section className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 border-b border-ag-border pb-10">
          <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
            {c.label}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            {c.title}
          </h1>
          <p className="font-mono text-xs text-ag-muted">{c.updated}</p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {c.sections.map((section, i) => (
            <div key={i} className="border-b border-ag-border pb-10 last:border-0">
              <h2 className="font-heading text-xl text-foreground mb-4">
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.body.split('\n').map((line, j) =>
                  line === '' ? (
                    <div key={j} className="h-2" />
                  ) : (
                    <p
                      key={j}
                      className={`font-body text-ag-body leading-relaxed ${
                        line.startsWith('•') ? 'pl-4' : ''
                      }`}
                    >
                      {line}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-14">
          <Link
            href="/"
            className="font-mono text-xs text-ag-muted hover:text-ag-accent transition-colors duration-300 tracking-wider"
          >
            ← {lang === 'el' ? 'Επιστροφή στην αρχική' : 'Back to home'}
          </Link>
        </div>
      </div>
    </section>
  );
}
