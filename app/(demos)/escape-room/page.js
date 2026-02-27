// app/escape-room/page.js
import DemoViewer from '@/components/ui/demo-viewer'
export const metadata = {
  title: 'Escape Room Demo',
  description: 'Demo showcase: No Signal escape room website built by Digital Footprint. Immersive and atmospheric web design for an escape room business.',
  alternates: { canonical: 'https://digitalfootprint.gr/escape-room' },
  openGraph: { title: 'Escape Room Demo | Digital Footprint', description: 'No Signal escape room immersive website demo.', url: 'https://digitalfootprint.gr/escape-room' },
}
export default function EscapeRoomPage() {
  return <DemoViewer url="https://escape-room-nosignal.vercel.app/" title="Escape Room - No Signal" />
}