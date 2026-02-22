import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/client-layout';
import SmoothScroll from '@/components/ui/SmoothScroll';
import { ThemeProvider } from '@/components/ui/theme-provider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'greek'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'Digital Footprint — Web Development & Design Studio | Athens, Greece',
  description: 'Premium web development & design studio based in Athens. Custom websites, e-commerce, UI/UX design, brand identity. digitalfootprint.gr',
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="el" 
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-body antialiased">
        <ThemeProvider>
          <SmoothScroll>
            <ClientLayout>{children}</ClientLayout>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}