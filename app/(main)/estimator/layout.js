// app/(main)/estimator/layout.js
import { Manrope, DM_Mono } from 'next/font/google'

const estimatorFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-estimator',
  display: 'swap',
})

const estimatorMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-estimator-mono',
  display: 'swap',
})

export default function EstimatorLayout({ children }) {
  return (
    <div className={`${estimatorFont.variable} ${estimatorMono.variable} estimator-font-scope`}>
      {children}
    </div>
  )
}