// app/layout.js
import { Playfair_Display, Montserrat, JetBrains_Mono , Space_Grotesk} from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';

// ← Άλλαξε αυτό
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'greek'],
  weight: ['600', '700', '800', '900'],  // ← Μόνο bold weights
  variable: '--font-subheading',     // ← h2, h3
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-logo-original',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'Digital Footprint — Web Development & Design Studio | Athens, Greece',
  description: 'Premium web development & design studio based in Athens.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="el"
      className={`${playfair.variable} ${montserrat.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`} // ← Άλλαξε εδώ
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-body antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}