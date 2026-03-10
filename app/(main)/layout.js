// app/(main)/layout.js
import ClientLayout from '@/components/client-layout';
import SmoothScroll from '@/components/ui/SmoothScroll';

// ===========================================
// MAIN LAYOUT METADATA (Inherited by all pages in (main))
// ===========================================
export const metadata = {
  // These can be overridden by individual pages
  robots: {
    index: true,
    follow: true,
  },
};

// ===========================================
// BREADCRUMB SCHEMA (For all main pages)
// ===========================================
const mainBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Αρχική',
      item: 'https://www.digitalfootprint.gr',
    },
  ],
};

// ===========================================
// MAIN LAYOUT COMPONENT
// ===========================================
export default function MainLayout({ children }) {
  return (
    <>
      {/* ============================================= */}
      {/* BREADCRUMB STRUCTURED DATA */}
      {/* ============================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainBreadcrumbJsonLd) }}
      />
      
      {/* ============================================= */}
      {/* SMOOTH SCROLL + CLIENT LAYOUT */}
      {/* ============================================= */}
      <SmoothScroll>
        <ClientLayout>{children}</ClientLayout>
      </SmoothScroll>
    </>
  );
}