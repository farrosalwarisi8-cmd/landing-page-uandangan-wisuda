export default function RSVPSection() {
  return (
    <section
      id="rsvp"
      data-section="rsvp"
      className="relative flex min-h-screen items-center justify-center py-20 md:py-28 lg:py-32"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/[0.02] blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-gold/[0.02] blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 flex w-full flex-col items-center text-center md:mb-16">
          <div className="reveal-on-scroll">
            <p className="mb-3 w-full text-center font-amiri text-xs tracking-[0.3em] text-gold/50 uppercase md:text-sm">
              رِسَالَةُ التَّخَرُّجِ
            </p>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <h2 className="w-full text-center font-cormorant text-3xl tracking-wider text-gold md:text-4xl lg:text-5xl">
              Pesan Kami
            </h2>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <p className="mx-auto mt-4 max-w-lg font-lora text-sm leading-relaxed text-cream/40 md:text-base">
              Sepatah kata dari hati untuk Anda yang kami cintai
            </p>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <div className="ornament-divider mx-auto mt-6 max-w-[120px]">
              <span className="text-sm text-gold">❀</span>
            </div>
          </div>
        </div>

        {/* Message Card */}
        <div
          className="reveal-on-scroll w-full max-w-[900px]"
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-8 sm:p-10 md:p-14 lg:p-20">
            {/* Decorative corners */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-5 top-5 h-12 w-12 rounded-tl-2xl border-l border-t border-gold/20 md:left-7 md:top-7 md:h-16 md:w-16"></div>
              <div className="absolute right-5 top-5 h-12 w-12 rounded-tr-2xl border-r border-t border-gold/20 md:right-7 md:top-7 md:h-16 md:w-16"></div>
              <div className="absolute bottom-5 left-5 h-12 w-12 rounded-bl-2xl border-b border-l border-gold/20 md:bottom-7 md:left-7 md:h-16 md:w-16"></div>
              <div className="absolute bottom-5 right-5 h-12 w-12 rounded-br-2xl border-b border-r border-gold/20 md:bottom-7 md:right-7 md:h-16 md:w-16"></div>
            </div>

            {/* Inner wrapper - centered */}
            <div className="relative flex w-full flex-col items-center text-center px-2 sm:px-4 md:px-10 lg:px-16">
              {/* Header */}
              <div className="mb-10 flex w-full flex-col items-center text-center md:mb-12">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/40"></span>
                  <span className="font-cormorant text-xs tracking-[0.3em] text-gold/60 uppercase">
                    Bismillah
                  </span>
                  <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/40"></span>
                </div>

                <h3 className="mb-4 w-full text-center font-scheherazade text-2xl leading-[1.8] text-gold md:text-3xl lg:text-4xl">
                  بِإِذْنِ اللَّهِ تَعَالَى
                </h3>
                <p className="w-full text-center font-cormorant text-base leading-relaxed tracking-wider text-gold-light/70 md:text-lg lg:text-xl">
                  Dengan Izin Allah Ta'ala
                </p>
              </div>

              {/* Ornament divider */}
              <div className="ornament-divider mx-auto mb-10 w-full max-w-[220px] md:mb-12">
                <span className="text-xs text-gold/40">❀</span>
              </div>

              {/* Message content */}
              <div className="mx-auto flex w-full max-w-[640px] flex-col items-center text-center">
                {/* Paragraf 1 */}
                <p className="mb-8 w-full text-center font-lora text-sm leading-[2] text-cream/70 md:mb-10 md:text-base md:leading-[2.1]">
                  Undangan sekaligus kabar gembira ini, kami haturkan kepada{' '}
                  <span className="font-semibold text-gold-light/90">
                    Orang tua Santriwati
                  </span>{' '}
                  dan{' '}
                  <span className="font-semibold text-gold-light/90">
                    Asatidzah Hafidzakumullohu
                  </span>
                  , serta teman-teman yang kami cintai.
                </p>

                {/* Paragraf 2 */}
                <p className="mb-8 w-full text-center font-lora text-sm leading-[2] text-cream/70 md:mb-10 md:text-base md:leading-[2.1]">
                  Pesan ini merupakan{' '}
                  <span className="italic text-gold-light/80">
                    maklumat kelulusan
                  </span>{' '}
                  sekaligus permohonan kami,{' '}
                  <span className="font-semibold text-gold-light/90">
                    Do'akan kami agar ilmu yang kami dapati menjadi berkah
                    dan bermanfaat.
                  </span>
                </p>

                {/* Paragraf 3 - Jazakumullohu */}
                <div className="mb-2 w-full">
                  <p className="mb-3 w-full text-center font-amiri text-lg leading-[1.8] text-gold/80 md:text-xl lg:text-2xl">
                    جَزَاكُمُ اللَّهُ خَيْرًا
                  </p>
                  <p className="w-full text-center font-lora text-sm leading-[2] text-cream/70 md:text-base md:leading-[2.1]">
                    atas segala jalinan doa, kasih sayang, dan kebersamaan
                    yang telah terukir.
                  </p>
                </div>
              </div>

              {/* Divider line before signature */}
              <div className="mx-auto my-12 h-px w-32 bg-gradient-to-r from-transparent via-gold/30 to-transparent md:my-14 md:w-48"></div>

              {/* Signature */}
              <div className="flex w-full flex-col items-center text-center">
                <p className="mb-4 w-full text-center font-cormorant text-xs tracking-[0.3em] text-cream/50 uppercase md:text-sm">
                  Hormat Kami
                </p>
                <p className="mb-2 w-full text-center font-playfair text-lg italic leading-relaxed text-gold md:text-xl lg:text-2xl">
                  Kelas XII
                </p>
                <p className="w-full text-center font-cormorant text-base leading-relaxed tracking-wider text-gold-light/70 md:text-lg lg:text-xl">
                  Angkatan IV
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}