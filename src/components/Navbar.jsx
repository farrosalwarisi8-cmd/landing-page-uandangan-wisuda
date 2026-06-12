import { useState, useEffect } from 'react'

const navItems = [
  { id: 'home', label: 'Beranda', icon: '🏠' },
  { id: 'kisah', label: 'Kisah', icon: '📖' },
  { id: 'acara', label: 'Acara', icon: '📅' },
  { id: 'galeri', label: 'Galeri', icon: '🖼' },
  { id: 'rsvp', label: 'RSVP', icon: '✉️' },
]

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
                  ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
    >
      <div className="glass-card rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl shadow-black/50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative px-3 py-2 rounded-full text-xs font-lora tracking-wider transition-all duration-300 cursor-pointer
                       ${activeSection === item.id
                         ? 'bg-gold/20 text-gold'
                         : 'text-cream/40 hover:text-cream/70 hover:bg-white/5'
                       }`}
          >
            <span className="hidden sm:inline">{item.label}</span>
            <span className="sm:hidden text-base">{item.icon}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}