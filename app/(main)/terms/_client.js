'use client';
import Link from 'next/link';
import { useTranslation } from '@/components/language-provider';

const content = {
  el: {
    label: 'ΝΟΜΙΚΑ',
    title: 'Όροι Χρήσης',
    updated: 'Τελευταία ενημέρωση: Μάρτιος 2025',
    sections: [
      {
        title: '1. Αποδοχή Όρων',
        body: 'Με τη χρήση του ιστότοπου www.digitalfootprint.gr ή με τη σύναψη συμφωνίας συνεργασίας με τη Digital Footprint, αποδέχεστε πλήρως τους παρόντες Όρους Χρήσης. Εάν δεν συμφωνείτε με οποιονδήποτε από τους όρους, παρακαλούμε να μην χρησιμοποιείτε τις υπηρεσίες μας.',
      },
      {
        title: '2. Περιγραφή Υπηρεσιών',
        body: 'Η Digital Footprint παρέχει υπηρεσίες web development και ψηφιακού σχεδιασμού, συμπεριλαμβανομένων:\n\n• Κατασκευή ιστοσελίδων και e-shop\n• UI/UX design\n• Brand identity\n• Digital marketing\n• Τεχνική υποστήριξη και συντήρηση\n\nΟι λεπτομέρειες κάθε έργου (παραδοτέα, χρονοδιάγραμμα, αμοιβή) καθορίζονται σε ξεχωριστή προσφορά ή συμφωνία.',
      },
      {
        title: '3. Πληρωμή και Τιμολόγηση',
        body: 'Η αμοιβή για κάθε έργο συμφωνείται εκ των προτέρων και αναφέρεται στην προσφορά. Γενικοί όροι πληρωμής:\n\n• Προκαταβολή 50% για την έναρξη του έργου\n• Υπόλοιπο 50% κατά την παράδοση\n• Πληρωμή εντός 14 ημερών από έκδοση τιμολογίου\n\nΣε περίπτωση καθυστέρησης πληρωμής άνω των 30 ημερών, διατηρούμε το δικαίωμα αναστολής παράδοσης αρχείων και πρόσβασης. Τροποποιήσεις εκτός αρχικού scope χρεώνονται ξεχωριστά βάσει ωριαίας αμοιβής.',
      },
      {
        title: '4. Πνευματική Ιδιοκτησία',
        body: 'Μόλις εξοφληθεί πλήρως το συμφωνηθέν τίμημα, ο πελάτης αποκτά πλήρη πνευματικά δικαιώματα επί του τελικού παραδοτέου έργου (κώδικας, σχέδια, περιεχόμενο που δημιουργήθηκε αποκλειστικά για αυτόν).\n\nΗ Digital Footprint διατηρεί το δικαίωμα να αναφέρει το έργο στο portfolio της (ιστότοπος, social media) εκτός αν συμφωνηθεί διαφορετικά εγγράφως.\n\nΤρίτα στοιχεία (π.χ. stock photos, plugins, libraries) υπόκεινται στις άδειες χρήσης των αντίστοιχων δημιουργών.',
      },
      {
        title: '5. Υποχρεώσεις Πελάτη',
        body: 'Ο πελάτης αναλαμβάνει να:\n\n• Παρέχει έγκαιρα όλο το απαραίτητο υλικό (κείμενα, εικόνες, λογότυπο, διαπιστευτήρια)\n• Ανταποκρίνεται σε αιτήματα έγκρισης εντός εύλογου χρόνου (έως 5 εργάσιμες ημέρες)\n• Χρησιμοποιεί τις υπηρεσίες αποκλειστικά για νόμιμους σκοπούς\n• Μην παραβιάζει πνευματικά δικαιώματα τρίτων\n\nΚαθυστερήσεις που οφείλονται στον πελάτη ενδέχεται να επηρεάσουν το χρονοδιάγραμμα.',
      },
      {
        title: '6. Περιορισμός Ευθύνης',
        body: 'Η Digital Footprint δεν φέρει ευθύνη για:\n\n• Έμμεσες ζημίες ή διαφυγόντα κέρδη\n• Ζημίες από τη χρήση ή αδυναμία χρήσης του παραδοτέου από τρίτους\n• Προβλήματα που οφείλονται σε υπηρεσίες τρίτων (hosting, domain, plugins)\n• Επιθέσεις hacking μετά την παράδοση, εφόσον δεν υπάρχει ενεργό πακέτο συντήρησης\n\nΗ μέγιστη ευθύνη μας δεν υπερβαίνει το ποσό που καταβλήθηκε για τη συγκεκριμένη υπηρεσία.',
      },
      {
        title: '7. Τερματισμός Συνεργασίας',
        body: 'Οποιοδήποτε μέρος μπορεί να τερματίσει τη συνεργασία με γραπτή ειδοποίηση 14 ημερών. Σε περίπτωση τερματισμού:\n\n• Ο πελάτης οφείλει να πληρώσει για εργασία που έχει ήδη παραδοθεί ή ολοκληρωθεί\n• Η Digital Footprint παραδίδει όλα τα αρχεία που έχουν δημιουργηθεί έως εκείνη τη στιγμή\n• Δεν επιστρέφεται η προκαταβολή εκτός αν υπάρχει αδυναμία εκτέλεσης από την πλευρά μας',
      },
      {
        title: '8. Τροποποιήσεις Όρων',
        body: 'Διατηρούμε το δικαίωμα τροποποίησης των παρόντων Όρων ανά πάσα στιγμή. Οι αλλαγές θα αναρτώνται στη σελίδα αυτή με ενημερωμένη ημερομηνία. Η συνέχιση χρήσης των υπηρεσιών μετά από τυχόν αλλαγές συνιστά αποδοχή των νέων όρων.',
      },
      {
        title: '9. Εφαρμοστέο Δίκαιο',
        body: 'Οι παρόντες Όροι διέπονται από το Ελληνικό Δίκαιο. Για οποιαδήποτε διαφορά αρμόδια είναι τα Δικαστήρια Αθηνών.\n\nΓια ερωτήσεις σχετικά με τους Όρους Χρήσης:\nEmail: info@digitalfootprint.gr',
      },
    ],
  },
  en: {
    label: 'LEGAL',
    title: 'Terms of Service',
    updated: 'Last updated: March 2025',
    sections: [
      {
        title: '1. Acceptance of Terms',
        body: 'By using the website www.digitalfootprint.gr or by entering into a service agreement with Digital Footprint, you fully accept these Terms of Service. If you disagree with any of the terms, please do not use our services.',
      },
      {
        title: '2. Description of Services',
        body: 'Digital Footprint provides web development and digital design services, including:\n\n• Website and e-shop development\n• UI/UX design\n• Brand identity\n• Digital marketing\n• Technical support and maintenance\n\nThe details of each project (deliverables, timeline, fee) are defined in a separate quote or agreement.',
      },
      {
        title: '3. Payment and Invoicing',
        body: 'The fee for each project is agreed upon in advance and stated in the quote. General payment terms:\n\n• 50% deposit to commence the project\n• Remaining 50% upon delivery\n• Payment within 14 days of invoice\n\nIn the event of payment delay exceeding 30 days, we reserve the right to suspend delivery of files and access. Revisions outside the original scope are charged separately at an hourly rate.',
      },
      {
        title: '4. Intellectual Property',
        body: 'Once the agreed fee is paid in full, the client acquires full intellectual property rights over the final deliverable (code, designs, content created exclusively for them).\n\nDigital Footprint retains the right to reference the project in its portfolio (website, social media) unless otherwise agreed in writing.\n\nThird-party elements (e.g. stock photos, plugins, libraries) are subject to their respective licence agreements.',
      },
      {
        title: '5. Client Obligations',
        body: 'The client undertakes to:\n\n• Provide all required materials promptly (copy, images, logo, credentials)\n• Respond to approval requests within a reasonable time (up to 5 working days)\n• Use the services solely for lawful purposes\n• Not infringe third-party intellectual property rights\n\nDelays caused by the client may affect the project timeline.',
      },
      {
        title: '6. Limitation of Liability',
        body: 'Digital Footprint is not liable for:\n\n• Indirect damages or loss of profits\n• Damages from third-party use or inability to use the deliverable\n• Issues caused by third-party services (hosting, domain, plugins)\n• Hacking incidents after delivery, where no active maintenance plan is in place\n\nOur maximum liability shall not exceed the amount paid for the specific service.',
      },
      {
        title: '7. Termination',
        body: 'Either party may terminate the agreement with 14 days written notice. Upon termination:\n\n• The client is liable to pay for work already delivered or completed\n• Digital Footprint delivers all files created up to that point\n• The deposit is non-refundable unless we are unable to perform our obligations',
      },
      {
        title: '8. Modifications to Terms',
        body: 'We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after any changes constitutes acceptance of the new terms.',
      },
      {
        title: '9. Governing Law',
        body: 'These Terms are governed by Greek Law. Any disputes shall be subject to the exclusive jurisdiction of the Courts of Athens.\n\nFor questions regarding these Terms:\nEmail: info@digitalfootprint.gr',
      },
    ],
  },
};

export default function TermsClient() {
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
