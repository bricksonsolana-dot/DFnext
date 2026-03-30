// app/escape-room/page.js
import DemoViewer from '@/components/ui/demo-viewer'

export const metadata = { title: 'Escape Room NoSignal | Digital Footprint' }

export default function EscapeRoomPage() {
  return (
    <DemoViewer
      url="https://escape-room-nosignal.vercel.app/"
      title="Escape Room - No Signal"
    />
  )
}