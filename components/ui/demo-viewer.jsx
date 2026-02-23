// components/ui/demo-viewer.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Monitor, Tablet, Smartphone, X, Eye } from 'lucide-react'

export default function DemoViewer({ url, title }) {
  const [showBar, setShowBar] = useState(true)
  const [device, setDevice] = useState('desktop')

  const widths = {
    desktop: '100%',
    tablet: '768px',
    mobile: '375px',
  }

  return (
    <div className="demo-viewer-wrapper h-screen flex flex-col bg-[#0a0a0a]">
      {/* ── Toolbar ── */}
      {showBar && (
        <div className="flex-shrink-0 bg-[#111] border-b border-white/10 px-4 py-2.5">
          <div className="flex items-center justify-between gap-4">
            {/* Πίσω */}
            <Link
              href="/#work"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Πίσω στα έργα</span>
            </Link>

            {/* Τίτλος */}
            <div className="hidden md:flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-white/50">
                Live Demo: <strong className="text-white">{title}</strong>
              </span>
            </div>

            {/* Device Switcher */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-lg p-1">
              {[
                { key: 'desktop', icon: Monitor },
                { key: 'tablet', icon: Tablet },
                { key: 'mobile', icon: Smartphone },
              ].map(({ key, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setDevice(key)}
                  className={`p-2 rounded-md transition-all ${
                    device === key
                      ? 'bg-emerald-600 text-white'
                      : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Νέα καρτέλα</span>
              </a>
              <button
                onClick={() => setShowBar(false)}
                className="text-white/20 hover:text-white/60 ml-2 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating restore button */}
      {!showBar && (
        <button
          onClick={() => setShowBar(true)}
          className="fixed top-4 left-4 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}

      {/* ── iframe ── */}
      <div className="flex-1 flex justify-center overflow-hidden">
        <div
          className="h-full transition-all duration-500"
          style={{ width: widths[device], maxWidth: '100%' }}
        >
          <iframe
            src={url}
            title={title}
            className={`w-full h-full border-0 bg-white ${
              device !== 'desktop' ? 'shadow-2xl rounded-t-xl mt-2' : ''
            }`}
            style={{
              height: device !== 'desktop' ? 'calc(100% - 0.5rem)' : '100%',
            }}
          />
        </div>
      </div>
    </div>
  )
}