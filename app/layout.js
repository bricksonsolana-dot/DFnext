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
  title: 'Digital Footprint - Web Development & Design Studio | Athens, Greece',
  description: 'Premium web development & design studio based in Athens.',
  
  // Favicons
  icons: {
    icon: [
      { url: 'images/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: 'images/apple-icon.png',
  },
  
  // Open Graph (for social media previews) 👇
  openGraph: {
    title: 'Digital Footprint - Web Development & Design Studio',
    description: 'Premium web development & design studio based in Athens.',
    url: 'https://digitalfootprint.gr',
    siteName: 'Digital Footprint',
    images: [
      {
        url: 'images/ogpicture.png', // Your preview image
        width: 1200,
        height: 630,
        alt: 'Digital Footprint - Web Development Studio',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Footprint - Web Development & Design Studio',
    description: 'Premium web development & design studio based in Athens.',
    images: ['images/ogpicture.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="el"
      className={`${playfair.variable} ${montserrat.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
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
