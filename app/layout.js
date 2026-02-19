import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import CustomCursor from '@/components/custom-cursor';
import Footer from '@/components/footer';

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
  title: 'ETAIRIA — Web Development & Design Studio | Athens, Greece',
  description: 'Premium web development & design studio based in Athens. Custom websites, e-commerce, UI/UX design, brand identity.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="el" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0A0A0A] text-white font-body antialiased">
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
