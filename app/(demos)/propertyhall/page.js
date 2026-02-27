// app/propertyhall/page.js
import DemoViewer from '@/components/ui/demo-viewer1'
export const metadata = {
  title: 'Property Hall Demo',
  description: 'Demo showcase: Property Hall real estate platform built by Digital Footprint. Clean and trustworthy design for a Greek real estate agency.',
  alternates: { canonical: 'https://digitalfootprint.gr/propertyhall' },
  openGraph: { title: 'Property Hall Demo | Digital Footprint', description: 'Property Hall real estate platform demo.', url: 'https://digitalfootprint.gr/propertyhall' },
}
export default function clothingPage() {
  return <DemoViewer url="https://www.property-hall.com/" title="Property Hall" />
}