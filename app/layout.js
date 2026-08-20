import './globals.css'
import { Toaster } from 'sonner'
import SmoothScroll from '@/components/SmoothScroll'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata = {
  title: 'Travel Diaries — Travel with Confidence. Experience the Difference.',
  description: 'Customized holidays, domestic tour packages, flight bookings, railway reservations, hotel bookings.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Playball&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  )
}
