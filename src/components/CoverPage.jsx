import { useState, useEffect } from 'react'

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner ornaments */}
        <svg className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 text-gold/10" viewBox="0 0 200 200">
          <path d="M0,0 Q100,20 100,100 Q20,100 0,0" fill="currentColor" />
          <path d="M10,0 C10,40 30,70 70,90 C30,90 10,70 10,0" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </svg>
        <svg className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 text-gold/10 rotate-90" viewBox="0 0 200 200">
          <path d="M0,0 Q100,20 100,100 Q20,100 0,0" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 text-gold/10 -rotate-90" viewBox="0 0 200 200">
          <path d="M0,0 Q100,20 100,100 Q20,100 0,0" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 text-gold/10 rotate-180" viewBox="0 0 200 200">
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
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-gold/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]"></div>
      </div>

      {/* Main content */}
      <div className={`text-center px-6 relative z-10 transition-all duration-[2000ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Bismillah */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          <p className="font-scheherazade text-gold/60 text-xl md:text-2xl mb-8">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
        </div>

        {/* Greeting */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-amiri text-gold text-2xl md:text-3xl lg:text-4xl mb-3">
            اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
          </p>
          <p className="font-lora text-cream/50 text-sm md:text-base tracking-wider mb-10">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
        </div>

        {/* Ornament divider */}
        <div className={`ornament-divider max-w-[200px] mx-auto mb-10 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-gold text-lg">❀</span>
        </div>

        {/* Invitation text */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-lora text-cream/70 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-3">
            Dengan kerendahan hati dan rasa syukur,
          </p>
          <p className="font-lora text-cream/70 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8">
            kami mengundang Ustadzah & seluruh santri untuk hadir dalam acara
          </p>
        </div>

        {/* Event title */}
        <div className={`transition-all duration-1000 delay-[1200ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <h1 className="font-cormorant text-xl md:text-2xl text-gold-light/80 tracking-widest uppercase mb-3">
            Pelepasan Santriwati
          </h1>
          <h2 className="font-cormorant text-lg md:text-xl text-cream/50 tracking-wider mb-2">
            Tingkat Akhir Tsanawiyah
          </h2>
          <p className="font-lora text-cream/40 text-xs md:text-sm tracking-wider">
            Angkatan VI · 2025–2026
          </p>
        </div>

        {/* Ornament */}
        <div className={`ornament-divider max-w-[200px] mx-auto my-10 transition-all duration-1000 delay-[1400ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-gold text-lg">✦</span>
        </div>

        {/* Kepada label */}
        <div className={`transition-all duration-1000 delay-[1500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-lora text-cream/40 text-xs tracking-[0.2em] uppercase mb-2">Kepada Yth.</p>
          <p className="font-playfair text-gold text-lg md:text-xl italic">
            Ustadzah & Seluruh Santri
          </p>
        </div>

        {/* Open button */}
        <div className={`mt-12 transition-all duration-1000 delay-[1800ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <button
            onClick={onOpen}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 border border-gold/50 
                       text-gold font-lora text-sm tracking-widest uppercase
                       hover:bg-gold/10 hover:border-gold transition-all duration-500
                       animate-pulse-gold cursor-pointer"
          >
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0 -translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
            </svg>
            Buka Undangan
            <span className="absolute inset-0 border border-gold/20 translate-x-1 translate-y-1 -z-10 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"></span>
          </button>
        </div>
      </div>
    </div>
  )
}