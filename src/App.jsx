import { useState, useEffect, useCallback, useRef } from 'react'
import CoverPage from '../src/components/CoverPage'
import StorySection from '../src/components/StorySection'
import EventDetails from '../src/components/EventDetails'
import Gallery from '../src/components/Gallery'
import RSVPSection from '../src/components/RSVPSection'
import Footer from '../src/components/Footer'
import FloatingParticles from '../src/components/FloatingParticiples'
import Navbar from '../src/components/Navbar'
import CountdownTimer from '../src/components/CountdwonTimer'

function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const audioRef = useRef(null)

  const handleOpen = useCallback(() => {
    setIsOpened(true)
    document.body.style.overflow = 'auto'

    if (audioRef.current) {
      audioRef.current.volume = 0.35
      audioRef.current.play().catch(() => {
        // Autoplay may be blocked by browser until interaction.
      })
    }
  }, [])

  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpened])

  // Scroll reveal animation
  useEffect(() => {
    if (!isOpened) return

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.15,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')

          const sectionId = entry.target.getAttribute('data-section')
          if (sectionId) {
            setActiveSection(sectionId)
          }
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isOpened])

  // Parallax effect for decorative elements
  useEffect(() => {
    if (!isOpened) return

    const handleScroll = () => {
      const scrolled = window.scrollY
      const parallaxElements = document.querySelectorAll('.parallax-element')
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed')) || 0.5
        el.style.transform = `translateY(${scrolled * speed}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpened])

  return (
    <div className="min-h-screen bg-primary relative flex flex-col items-center">
      <audio
        ref={audioRef}
        className="hidden"
        src="/background-music.mp3"
        loop
        preload="auto"
      />
      {!isOpened ? (
        <CoverPage onOpen={handleOpen} />
      ) : (
        <div className="w-full flex flex-col items-center">
          <FloatingParticles />
          <Navbar activeSection={activeSection} />

          <main className="relative z-10 w-full flex flex-col items-center gap-16 md:gap-24 lg:gap-32">
            {/* Hero Section After Opening */}
            <section
              id="home"
              data-section="home"
              className="w-full min-h-screen flex items-center justify-center relative overflow-hidden reveal-on-scroll"
            >
              {/* Background decorative circles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-gold/5 animate-rotate-slow"></div>
                <div
                  className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-gold/10"
                  style={{ animation: 'rotate-slow 30s linear infinite reverse' }}
                ></div>
              </div>

              <div className="text-center px-6 py-20 relative z-10">
                <div className="reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                  <p className="font-amiri text-gold/70 text-sm md:text-base tracking-[0.3em] uppercase mb-4">
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                  </p>
                </div>

                <div className="reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
                  <h2 className="font-cormorant text-cream/60 text-lg md:text-xl font-light tracking-widest uppercase mb-6">
                    Pelepasan Santriwati
                  </h2>
                </div>

                <div className="reveal-on-scroll" style={{ transitionDelay: '0.5s' }}>
                  <h1 className="font-scheherazade text-4xl md:text-6xl lg:text-7xl text-gold mb-4 leading-tight">
                    نَسْجُ الذِّكْرَيَاتِ وَتَحْقِيقُ الآمَالِ
                  </h1>
                </div>

                <div className="reveal-on-scroll" style={{ transitionDelay: '0.7s' }}>
                  <p className="font-playfair text-xl md:text-2xl lg:text-3xl text-gold-light/80 italic mb-2">
                    Merajut Kenangan, Meraih Asa
                  </p>
                </div>

                <div className="reveal-on-scroll" style={{ transitionDelay: '0.9s' }}>
                  <div className="ornament-divider max-w-xs mx-auto my-8">
                    <span className="text-gold text-2xl">✦</span>
                  </div>
                </div>

                <div className="reveal-on-scroll" style={{ transitionDelay: '1.1s' }}>
                  <p className="font-lora text-cream/50 text-sm md:text-base tracking-wider">
                    Tingkat Akhir Tsanawiyah · Angkatan IV
                  </p>
                  <p className="font-lora text-cream/40 text-xs md:text-sm tracking-wider mt-1">
                    Tahun Ajaran 2025 – 2026
                  </p>
                </div>

                <div className="reveal-on-scroll mt-12" style={{ transitionDelay: '1.3s' }}>
                  <CountdownTimer targetDate="2026-06-16T09:00:00" />
                </div>

                {/* Scroll indicator */}
                <div className="reveal-on-scroll mt-16" style={{ transitionDelay: '1.5s' }}>
                  <div className="flex flex-col items-center gap-2 animate-float">
                    <span className="text-gold/40 text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Wrapper untuk setiap section agar full width & ada gap */}
            <div className="w-full">
              <StorySection />
            </div>

            <div className="w-full">
              <EventDetails />
            </div>

            <div className="w-full">
              <Gallery />
            </div>

            <div className="w-full">
              <RSVPSection />
            </div>

            <div className="w-full">
              <Footer />
            </div>
          </main>
        </div>
      )}
    </div>
  )
}

export default App