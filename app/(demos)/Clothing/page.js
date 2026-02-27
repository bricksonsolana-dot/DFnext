// app/escape-room/page.js
import DemoViewer from '@/components/ui/demo-viewer'
export const metadata = {
  title: 'Clothing Brand Demo',
  description: 'Demo showcase: a luxury clothing brand e-commerce website built by Digital Footprint. Minimalist fashion store design.',
  alternates: { canonical: 'https://digitalfootprint.gr/Clothing' },
  openGraph: { title: 'Clothing Brand Demo | Digital Footprint', description: 'Luxury clothing brand e-commerce demo.', url: 'https://digitalfootprint.gr/Clothing' },
}
export default function clothingPage() {
  return <DemoViewer url="https://clothing-1-theta.vercel.app/" title="Maison Noire" />
}