// app/escape-room/page.js
import DemoViewer from '@/components/ui/demo-viewer'
export const metadata = {
  title: 'Architecture Demo',
  description: 'Demo showcase: a modern architecture firm website built by Digital Footprint. Elegant design for a Greek architecture practice.',
  alternates: { canonical: 'https://digitalfootprint.gr/Architects' },
  openGraph: { title: 'Architecture Demo | Digital Footprint', description: 'Modern architecture firm website demo.', url: 'https://digitalfootprint.gr/Architects' },
}
export default function ArchitectsPage() {
  return <DemoViewer url="https://greek-architects.vercel.app/" title="Architecture" />
}