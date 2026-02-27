// app/escape-room/page.js
import DemoViewer from '@/components/ui/demo-viewer'
export const metadata = {
  title: 'Restaurant Demo',
  description: 'Demo showcase: Foxhouse restaurant website built by Digital Footprint. Vibrant design for a modern dining experience.',
  alternates: { canonical: 'https://digitalfootprint.gr/EatPlay' },
  openGraph: { title: 'Restaurant Demo | Digital Footprint', description: 'Foxhouse restaurant website demo.', url: 'https://digitalfootprint.gr/EatPlay' },
}
export default function EatPlayPage() {
  return <DemoViewer url="https://eatandplay.vercel.app/" title="Foxhouse" />
}