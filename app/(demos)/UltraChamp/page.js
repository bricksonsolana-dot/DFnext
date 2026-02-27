import DemoViewer from '@/components/ui/demo-viewer1'
export const metadata = {
  title: 'Sports Platform Demo',
  description: 'Demo showcase: Ultra Champ football live tournament platform built by Digital Footprint. Dynamic sports web app with real-time updates.',
  alternates: { canonical: 'https://digitalfootprint.gr/UltraChamp' },
  openGraph: { title: 'Sports Platform Demo | Digital Footprint', description: 'Ultra Champ football tournament platform demo.', url: 'https://digitalfootprint.gr/UltraChamp' },
}
export default function UltraChampPage() {
  return <DemoViewer url="https://www.ultrachamp.gr" title="Ultra Champ / Football live tournament" />
}