'use client'
import { MessageCircle } from 'lucide-react'
import MagneticButton from './MagneticButton'

export default function FloatingWhatsApp() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 9999
    }}>
      <MagneticButton>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
          textDecoration: 'none'
        }}>
          <MessageCircle size={32} />
        </a>
      </MagneticButton>
    </div>
  )
}
