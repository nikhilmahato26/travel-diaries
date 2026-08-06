import './globals.css'
import { Toaster } from 'sonner'
import SmoothScroll from '@/components/SmoothScroll'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata = {
  title: 'Travel Diaries — Travel with Confidence. Experience the Difference.',
  description: 'Customized holidays, domestic tour packages, flight bookings, railway reservations, hotel bookings.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23E34836%22 stroke-width=%222.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M22 2 11 13M22 2l-7 20-4-9-9-4Z%22/></svg>',
    shortcut: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23E34836%22 stroke-width=%222.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M22 2 11 13M22 2l-7 20-4-9-9-4Z%22/></svg>',
    apple: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23E34836%22 stroke-width=%222.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M22 2 11 13M22 2l-7 20-4-9-9-4Z%22/></svg>',
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
