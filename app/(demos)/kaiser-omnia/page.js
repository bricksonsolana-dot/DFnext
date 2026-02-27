// app/kaiser-omnia/page.js
import DemoViewer from '@/components/ui/demo-viewer'

export const metadata = {
  title: 'Kaiser Omnia Demo',
  description: 'Demo showcase: Kaiser Omnia brand website built by Digital Footprint. Sleek and premium design for a luxury brand.',
  alternates: { canonical: 'https://digitalfootprint.gr/kaiser-omnia' },
  openGraph: { title: 'Kaiser Omnia Demo | Digital Footprint', description: 'Kaiser Omnia luxury brand website demo.', url: 'https://digitalfootprint.gr/kaiser-omnia' },
}

export default function KaiserOmniaPage() {
  return (
    <DemoViewer
      url="https://kaiser-omnia.vercel.app/"
      title="Kaiser Omnia"
    />
  )
}