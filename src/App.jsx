import { useState, useEffect, useCallback, useRef } from 'react'
import CoverPage from '../src/components/CoverPage'
import StorySection from '../src/components/StorySection'
import EventDetails from '../src/components/EventDetails'
import Gallery from '../src/components/Gallery'
import RSVPSection from '../src/components/RSVPSection'
import Footer from '../src/components/Footer'
import FloatingParticles from '../src/components/FloatingParticiples'
import Navbar from '../src/components/Navbar'

function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const audioRef = useRef(null)

  const handleOpen = useCallback(() => {
    setIsOpened(true)
    document.body.style.overflow = 'auto'
    if (audioRef.current) {
      audioRef.current.volume = 0.4
      audioRef.current.play().catch((err) => console.log('Audio play blocked:', err))
    }
  }, [])

  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpened])

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

  return (
    <div className="min-h-screen bg-primary relative flex flex-col items-center overflow-hidden">
      {/* 🌟 BASE BLACK BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-primary"></div>

      {/* 🌟 BACKGROUND IMAGE - FULL SELAYAR JADI BINGKAI */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/background2.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          opacity: 1,
        }}
      ></div>

      {/* 🌟 DARK OVERLAY TIPIS */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.55) 50%, transparent 90%)',
        }}
      ></div>

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
        <div className="w-full flex flex-col items-center relative z-10">
          <FloatingParticles />
          <Navbar activeSection={activeSection} />

          <main className="relative z-10 w-full flex flex-col items-center gap-16 md:gap-24 lg:gap-32">
            {/* Hero Section After Opening */}
            <section
              id="home"
              data-section="home"
              className="w-full min-h-screen flex items-center justify-center relative overflow-hidden reveal-on-scroll"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-gold/5 animate-rotate-slow"></div>
                <div
                  className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-gold/10"
                  style={{ animation: 'rotate-slow 30s linear infinite reverse' }}
                ></div>
              </div>

              {/* 🌟 KONTEN HERO */}
              <div className="text-center px-6 py-20 relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
                
                {/* Bismillah */}
                <div className="reveal-on-scroll w-full" style={{ transitionDelay: '0.1s' }}>
                  <p className="font-amiri text-gold/70 text-sm md:text-base lg:text-lg tracking-[0.3em] uppercase">
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                  </p>
                </div>

                {/* SALAM - Arab Besar */}
                <div className="reveal-on-scroll w-full flex flex-col items-center gap-3 md:gap-4" style={{ transitionDelay: '0.3s' }}>
                  <p className="font-scheherazade text-3xl md:text-4xl lg:text-5xl text-gold leading-[1.8] w-full text-center">
                    اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
                  </p>
                  <p className="font-lora text-cream/60 text-xs md:text-sm lg:text-base tracking-[0.2em] italic">
                    Assalamu'alaikum Warahmatullahi Wabarakatuh
                  </p>
                </div>

                {/* Ornament Divider */}
                <div className="reveal-on-scroll w-full flex items-center justify-center gap-3" style={{ transitionDelay: '0.5s' }}>
                  <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-gold/40"></span>
                  <span className="text-gold text-lg md:text-xl">✦</span>
                  <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-gold/40"></span>
                </div>

                {/* Pesan Syukur - Paragraf */}
                <div className="reveal-on-scroll w-full" style={{ transitionDelay: '0.7s' }}>
                  <p className="font-lora text-sm md:text-base lg:text-lg text-cream/75 leading-[2] md:leading-[2.2] max-w-2xl mx-auto text-center">
                    Puji syukur kehadirat{' '}
                    <span className="font-semibold text-gold-light/90">Allah Ta'ala</span>{' '}
                    atas segala nikmat-Nya. Melalui pesan digital ini, izinkan kami
                    membagikan kabar bahagia atas selesainya masa studi kami di
                  </p>
                </div>

                {/* Nama Pesantren - Sorot */}
                <div className="reveal-on-scroll w-full flex flex-col items-center gap-3 md:gap-4" style={{ transitionDelay: '0.9s' }}>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-gold/40"></span>
                    <span className="text-gold/60 text-xs tracking-[0.3em] uppercase font-cormorant">Ma'had</span>
                    <span className="h-px w-8 bg-gold/40"></span>
                  </div>
                  <h1 className="font-cormorant text-2xl md:text-4xl lg:text-5xl text-gold tracking-[0.15em] uppercase font-light text-center leading-tight">
                    Nurus Sunnah
                  </h1>
                  <p className="font-playfair text-base md:text-lg lg:text-xl text-gold-light/80 italic tracking-wider">
                    Tegal
                  </p>
                </div>

                {/* Info Angkatan */}
                <div className="reveal-on-scroll w-full flex flex-col items-center gap-1.5" style={{ transitionDelay: '1.1s' }}>
                  <p className="font-lora text-cream/50 text-sm md:text-base tracking-wider">
                    Tingkat Akhir Tsanawiyah · Angkatan IV
                  </p>
                  <p className="font-lora text-cream/40 text-xs md:text-sm tracking-wider">
                    Tahun Ajaran 2025 – 2026
                  </p>
                </div>

                {/* Scroll Indicator */}
                <div className="reveal-on-scroll mt-4 md:mt-6" style={{ transitionDelay: '1.3s' }}>
                  <div className="flex flex-col items-center gap-2 animate-float">
                    <span className="text-gold/40 text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </section>

            <div className="w-full">
              <EventDetails />
            </div>

            <div className="w-full">
              <StorySection />
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