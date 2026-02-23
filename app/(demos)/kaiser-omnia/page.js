// app/kaiser-omnia/page.js
import DemoViewer from '@/components/ui/demo-viewer'

export const metadata = { title: 'Kaiser Omnia | Digital Footprint' }

export default function KaiserOmniaPage() {
  return (
    <DemoViewer
      url="https://kaiser-omnia.vercel.app/"
      title="Kaiser Omnia"
    />
  )
}