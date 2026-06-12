export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative flex items-center justify-center py-20 md:py-28 lg:py-32"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.02] blur-3xl"></div>
      </div>

      {/* Top border line */}
      <div className="absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/15 to-transparent"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Footer Card */}
        <div className="reveal-on-scroll w-full max-w-[900px]">
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-8 sm:p-10 md:p-14 lg:p-20">
            {/* Decorative corners */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-5 top-5 h-12 w-12 rounded-tl-2xl border-l border-t border-gold/20 md:left-7 md:top-7 md:h-16 md:w-16"></div>
              <div className="absolute right-5 top-5 h-12 w-12 rounded-tr-2xl border-r border-t border-gold/20 md:right-7 md:top-7 md:h-16 md:w-16"></div>
              <div className="absolute bottom-5 left-5 h-12 w-12 rounded-bl-2xl border-b border-l border-gold/20 md:bottom-7 md:left-7 md:h-16 md:w-16"></div>
              <div className="absolute bottom-5 right-5 h-12 w-12 rounded-br-2xl border-b border-r border-gold/20 md:bottom-7 md:right-7 md:h-16 md:w-16"></div>
            </div>

            {/* Inner wrapper - centered with padding from corners */}
            <div className="relative flex w-full flex-col items-center text-center md:px-4 lg:px-8">
              {/* Top ornament */}
              <div className="mb-10 flex w-full items-center justify-center gap-3 md:mb-12">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40 md:w-16"></span>
                <span className="text-base text-gold/50 md:text-lg">❀</span>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40 md:w-16"></span>
              </div>

              {/* Closing prayer (Arabic) */}
              <div
                className="reveal-on-scroll mb-10 flex w-full flex-col items-center text-center md:mb-12"
                style={{ transitionDelay: '0.2s' }}
              >
                <p className="mb-5 w-full text-center font-scheherazade text-2xl leading-[2] text-gold/70 md:text-3xl lg:text-4xl">
                  وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ
                </p>
                <p className="mx-auto w-full max-w-lg text-center font-lora text-sm leading-relaxed italic text-cream/45 md:text-base">
                  "Dan tidaklah taufiq yang aku peroleh melainkan dari Allah"
                </p>
              </div>

              {/* Ornament divider */}
              <div className="ornament-divider mx-auto mb-10 w-full max-w-[220px] md:mb-12">
                <span className="text-xs text-gold/40">✦</span>
              </div>

              {/* Closing message */}
              <div
                className="reveal-on-scroll mb-12 flex w-full flex-col items-center text-center md:mb-14"
                style={{ transitionDelay: '0.4s' }}
              >
                <p className="mx-auto w-full max-w-xl text-center font-lora text-sm leading-[1.9] text-cream/55 md:text-base md:leading-[2]">
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami
                  apabila Ustadzah dan teman-teman berkenan hadir untuk
                  memberikan doa dan restu kepada kami.
                </p>
              </div>

              {/* Ornament divider */}
              <div className="ornament-divider mx-auto mb-10 w-full max-w-[220px] md:mb-12">
                <span className="text-xs text-gold/40">❀</span>
              </div>

              {/* Salam penutup */}
              <div
                className="reveal-on-scroll mb-12 flex w-full flex-col items-center text-center md:mb-14"
                style={{ transitionDelay: '0.6s' }}
              >
                <p className="mb-4 w-full text-center font-amiri text-xl leading-[1.9] text-gold/80 md:text-2xl lg:text-3xl">
                  وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
                </p>
                <p className="w-full text-center font-lora text-xs leading-relaxed tracking-[0.15em] text-cream/35 md:text-sm">
                  Wassalamu'alaikum Warahmatullahi Wabarakatuh
                </p>
              </div>

              {/* Bottom signature */}
              <div
                className="reveal-on-scroll flex w-full flex-col items-center text-center"
                style={{ transitionDelay: '0.8s' }}
              >
                {/* Top divider line */}
                <div className="mx-auto mb-10 h-px w-32 bg-gradient-to-r from-transparent via-gold/20 to-transparent md:mb-12 md:w-48"></div>

                {/* Signature content */}
                <div className="flex w-full flex-col items-center text-center">
                  <p className="mb-3 w-full text-center font-cormorant text-xs tracking-[0.3em] text-cream/40 uppercase md:text-sm">
                    Hormat Kami
                  </p>
                  <p className="mb-2 w-full text-center font-cormorant text-lg leading-relaxed tracking-wider text-cream/70 md:text-xl">
                    Santriwati Angkatan VI
                  </p>
                  <p className="mb-2 w-full text-center font-scheherazade text-xl leading-[1.8] text-gold/50 md:text-2xl lg:text-3xl">
                    نَسْجُ الذِّكْرَيَاتِ وَتَحْقِيقُ الآمَالِ
                  </p>
                  <p className="w-full text-center font-playfair text-sm italic leading-relaxed text-gold-light/50 md:text-base">
                    Merajut Kenangan, Meraih Asa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="reveal-on-scroll mt-10 flex w-full flex-col items-center text-center md:mt-12"
          style={{ transitionDelay: '1s' }}
        >
          <div className="mb-4 flex w-full items-center justify-center gap-3">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold/30"></span>
            <span className="text-xs text-gold/30">✦</span>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold/30"></span>
          </div>
          <p className="w-full text-center font-lora text-[11px] leading-relaxed tracking-[0.2em] text-cream/25 md:text-xs">
            © 2026 · PELEPASAN SANTRIWATI
          </p>
          <p className="mt-2 w-full text-center font-lora text-[10px] leading-relaxed tracking-wider text-cream/20 md:text-[11px]">
            Dibuat dengan ♡ untuk kenangan indah
          </p>
        </div>
      </div>
    </footer>
  )
}