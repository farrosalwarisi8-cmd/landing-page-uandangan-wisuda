import { useState, useEffect } from 'react'
import CountdownTimer from './CountdwonTimer' // 👈 Import CountdownTimer

export default function CoverPage({ onOpen }) {
  const [isVisible, setIsVisible] = useState(false)
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)

    // Generate sparkle positions
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      size: 2 + Math.random() * 4,
    }))
    setSparkles(newSparkles)
  }, [])

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-primary">
      {/* Wrapper konten dengan min-height & padding */}
      <div className="relative flex min-h-screen w-full items-center justify-center px-4 py-10 sm:px-6 md:py-16">
        {/* Animated background elements - full mengikuti tinggi parent */}
        <div className="pointer-events-none absolute inset-0 h-full w-full">
          {/* Corner ornaments */}
          <svg className="absolute left-0 top-0 h-24 w-24 text-gold/10 sm:h-32 sm:w-32 md:h-48 md:w-48" viewBox="0 0 200 200">
            <path d="M0,0 Q100,20 100,100 Q20,100 0,0" fill="currentColor" />
            <path d="M10,0 C10,40 30,70 70,90 C30,90 10,70 10,0" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          </svg>
          <svg className="absolute right-0 top-0 h-24 w-24 rotate-90 text-gold/10 sm:h-32 sm:w-32 md:h-48 md:w-48" viewBox="0 0 200 200">
            <path d="M0,0 Q100,20 100,100 Q20,100 0,0" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-0 left-0 h-24 w-24 -rotate-90 text-gold/10 sm:h-32 sm:w-32 md:h-48 md:w-48" viewBox="0 0 200 200">
            <path d="M0,0 Q100,20 100,100 Q20,100 0,0" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-0 right-0 h-24 w-24 rotate-180 text-gold/10 sm:h-32 sm:w-32 md:h-48 md:w-48" viewBox="0 0 200 200">
            <path d="M0,0 Q100,20 100,100 Q20,100 0,0" fill="currentColor" />
          </svg>

          {/* Sparkle effects */}
          {sparkles.map((s) => (
            <div
              key={s.id}
              className="absolute rounded-full bg-gold/60"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                animation: `sparkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
              }}
            />
          ))}

          {/* Gradient overlays */}
          <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-gold/5 via-transparent to-gold/5"></div>
          <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]"></div>
        </div>

        {/* Main content - center sempurna dengan gap antar elemen */}
        <div
          className={`relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-10 px-2 text-center transition-all duration-[2000ms] ease-out sm:px-4 sm:gap-12 md:gap-14 lg:gap-16
                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Bismillah */}
          <div
            className={`flex w-full flex-col items-center text-center transition-all duration-1000 delay-500
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
          >
            <p className="w-full text-center font-scheherazade text-xl leading-[2] text-gold/60 md:text-2xl lg:text-3xl">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
          </div>

          {/* Ornament */}
          <div
            className={`ornament-divider mx-auto w-full max-w-[200px] transition-all duration-1000 delay-[1400ms]
                       ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="text-lg text-gold">✦</span>
          </div>

          {/* Kepada label */}
          <div
            className={`flex w-full flex-col items-center gap-3 text-center transition-all duration-1000 delay-[1500ms] md:gap-4
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <p className="w-full text-center font-lora text-xs leading-relaxed tracking-[0.3em] text-cream/40 uppercase">
              Kepada Yth.
            </p>
            <p className="w-full text-center font-playfair text-lg leading-relaxed italic text-gold md:text-xl lg:text-2xl">
              Orang tua, Para Ustadzah &amp; Teman teman
            </p>
          </div>

          {/* 🌟 COUNTDOWN TIMER - di atas button */}
          <div
            className={`flex w-full flex-col items-center gap-4 transition-all duration-1000 delay-[1600ms] md:gap-5
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <p className="w-full text-center font-cormorant text-xs tracking-[0.3em] text-gold/60 uppercase md:text-sm">
              Menuju Hari Bahagia
            </p>
            <CountdownTimer targetDate="2026-06-16T09:00:00" />
          </div>

          {/* Open button - dengan spacing dari timer */}
          <div
            className={`flex w-full flex-col items-center transition-all duration-1000 delay-[1800ms]
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <button
              onClick={onOpen}
              className="group relative inline-flex cursor-pointer items-center justify-center w-60 h-10 gap-3 rounded-lg border border-gold/50 px-8 py-3.5 font-lora text-sm tracking-[0.2em] text-gold uppercase transition-all duration-500 hover:border-gold hover:bg-gold/10 animate-pulse-gold md:px-10 md:py-4 md:text-[15px]"
            >
              <svg
                className="h-4 w-4 -translate-x-1 transition-transform group-hover:translate-x-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
              </svg>
              Buka Undangan
              <span className="absolute inset-0 -z-10 translate-x-1 translate-y-1 border border-gold/20 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}