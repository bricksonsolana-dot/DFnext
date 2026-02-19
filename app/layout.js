import './globals.css'

export const metadata = {
  title: 'Next.js MongoDB Template',
  description: 'A simple template with App Router, MongoDB, and shadcn/ui',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}