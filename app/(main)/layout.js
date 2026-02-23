// app/(main)/layout.js
import ClientLayout from '@/components/client-layout';
import SmoothScroll from '@/components/ui/SmoothScroll';

export default function MainLayout({ children }) {
  return (
    <SmoothScroll>
      <ClientLayout>{children}</ClientLayout>
    </SmoothScroll>
  );
}