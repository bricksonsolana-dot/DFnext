// app/kaiser-omnia-tm/page.js
import DemoViewer from '@/components/ui/demo-viewer'

export const metadata = {
  title: 'Construction Company Demo',
  description: 'Demo showcase: a construction company website built by Digital Footprint. Professional and bold design for a building contractor.',
  alternates: { canonical: 'https://digitalfootprint.gr/NyConstruction' },
  openGraph: { title: 'Construction Company Demo | Digital Footprint', description: 'Construction company website demo.', url: 'https://digitalfootprint.gr/NyConstruction' },
}

export default function NyConstructionPage() {
  return (
    <DemoViewer
      url="https://kaiseromniatm.vercel.app/"
      title="NyConstruction"
    />
  )
}