// app/propertyhall/page.js
import DemoViewer from '@/components/ui/demo-viewer1'
export const metadata = {
  title: 'Shahin Yavari DJ',
  description: 'Shahin Yavari is an underground techno DJ based in the Netherlands',
  alternates: { canonical: 'https://digitalfootprint.gr/shahin-yavari' },
  openGraph: { title: 'Shahin Yavari DJ | Digital Footprint', description: 'Shahin Yavari is an underground techno DJ based in the Netherlands', url: 'https://digitalfootprint.gr/shahin-yavari' },
}
export default function ShahinYavariPage() {
  return <DemoViewer url="https://shahin-yavari.vercel.app/" title="Shahin Yavari DJ" />
}