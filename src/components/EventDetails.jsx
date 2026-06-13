export default function EventDetails() {
  return (
    <section
      id="acara"
      data-section="acara"
      className="relative flex min-h-screen items-center justify-center py-20 md:py-28 lg:py-32"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.02] blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 text-center md:mb-16">
          <div className="reveal-on-scroll">
            <p className="mb-3 font-amiri text-xs tracking-[0.3em] text-gold/50 uppercase md:text-sm">
              تَفَاصِيلُ الحَفْلِ
            </p>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <h2 className="font-cormorant text-3xl tracking-wider text-gold md:text-4xl lg:text-5xl">
              Detail Acara
            </h2>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <div className="ornament-divider mx-auto mt-6 max-w-full">
              <span className="text-sm text-gold">✦</span>
            </div>
          </div>
        </div>

        {/* Event card */}
        <div
          className="reveal-on-scroll w-full max-w-[900px]"
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-8 sm:p-10 md:p-14 lg:p-20 animate-border-glow">
            {/* Decorative corner elements */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-5 top-5 h-12 w-12 rounded-tl-2xl border-l border-t border-gold/20 md:left-7 md:top-7 md:h-16 md:w-16"></div>
              <div className="absolute right-5 top-5 h-12 w-12 rounded-tr-2xl border-r border-t border-gold/20 md:right-7 md:top-7 md:h-16 md:w-16"></div>
              <div className="absolute bottom-5 left-5 h-12 w-12 rounded-bl-2xl border-b border-l border-gold/20 md:bottom-7 md:left-7 md:h-16 md:w-16"></div>
              <div className="absolute bottom-5 right-5 h-12 w-12 rounded-br-2xl border-b border-r border-gold/20 md:bottom-7 md:right-7 md:h-16 md:w-16"></div>
            </div>

            {/* Inner wrapper - FULL WIDTH agar judul center sempurna */}
            <div className="relative flex w-full flex-col items-center">
              {/* Event title - FULL WIDTH dan CENTER */}
              <div className="mb-12 flex w-full flex-col items-center justify-center text-center md:mb-16">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/40"></span>
                  <span className="font-cormorant text-xs tracking-[0.3em] text-gold/60 uppercase">
                    Bismillah
                  </span>
                  <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/40"></span>
                </div>

                <h3 className="mb-4 w-full text-center font-scheherazade text-3xl leading-[1.6] text-gold md:text-4xl lg:text-5xl">
                  حَفْلَةُ تَوْدِيعِ الطَّالِبَاتِ
                </h3>
                <p className="w-full text-center font-cormorant text-lg leading-relaxed tracking-wider text-gold-light/80 md:text-xl lg:text-2xl">
                  Pelepasan Santriwati
                </p>
                <p className="w-full text-center font-cormorant text-base leading-relaxed tracking-wider text-gold-light/60 md:text-lg">
                  Tingkat Akhir Tsanawiyah
                </p>
                <p className="mt-3 w-full text-center font-lora text-sm leading-relaxed text-cream/40">
                  Tahun Ajaran 2025 – 2026
                </p>
              </div>

              {/* Ornament divider */}
              <div className="ornament-divider mx-auto mb-12 w-full max-w-[220px] md:mb-14">
                <span className="text-xs text-gold/40">❀</span>
              </div>

              {/* Details list - centered dengan max-width */}
              <div className="flex w-full flex-col items-center gap-10 md:gap-12">
                {/* Date */}
                <div className="group flex w-full flex-col items-center text-center md:max-w-md md:flex-row md:items-center md:gap-6 md:text-left">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/5 transition-colors group-hover:bg-gold/10 md:h-16 md:w-16">
                    <svg className="h-5 w-5 text-gold md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <div className="mt-4 flex-1 md:mt-0">
                    <p className="mb-2 font-cormorant text-xs tracking-[0.3em] text-gold/60 uppercase md:text-sm">
                      Hari &amp; Tanggal
                    </p>
                    <p className="font-playfair text-xl leading-relaxed text-cream md:text-2xl">
                      Selasa, 16 Juni 2026
                    </p>
                    <p className="mt-2 font-amiri text-sm leading-relaxed text-gold/50 md:text-base">
                      1 Muharram 1448 H
                    </p>
                  </div>
                </div>

                {/* Divider line */}
                <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold/20 to-transparent md:w-48"></div>

                {/* Time */}
                <div className="group flex w-full flex-col items-center text-center md:max-w-md md:flex-row md:items-center md:gap-6 md:text-left">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/5 transition-colors group-hover:bg-gold/10 md:h-16 md:w-16">
                    <svg className="h-5 w-5 text-gold md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="mt-4 flex-1 md:mt-0">
                    <p className="mb-2 font-cormorant text-xs tracking-[0.3em] text-gold/60 uppercase md:text-sm">
                      Waktu
                    </p>
                    <p className="font-playfair text-xl leading-relaxed text-cream md:text-2xl">
                      Jam 09.00 WPB – Selesai
                    </p>
                    <p className="mt-2 font-lora text-sm leading-relaxed text-cream/40 md:text-base">
                      (Waktu Pondok Banat)
                    </p>
                  </div>
                </div>

                {/* Divider line */}
                <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold/20 to-transparent md:w-48"></div>

                {/* Location */}
                <div className="group flex w-full flex-col items-center text-center md:max-w-md md:flex-row md:items-center md:gap-6 md:text-left">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/5 transition-colors group-hover:bg-gold/10 md:h-16 md:w-16">
                    <svg className="h-5 w-5 text-gold md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="mt-4 flex-1 md:mt-0">
                    <p className="mb-2 font-cormorant text-xs tracking-[0.3em] text-gold/60 uppercase md:text-sm">
                      Tempat
                    </p>
                    <p className="font-playfair text-xl leading-relaxed text-cream md:text-2xl">
                      Asrama B
                    </p>
                    <p className="mt-2 font-lora text-sm leading-relaxed text-cream/40 md:text-base">
                      Pondok Pesantren
                    </p>
                  </div>
                </div>

                {/* Divider line */}
                <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold/20 to-transparent md:w-48"></div>

                {/* Dress code */}
                <div className="group flex w-full flex-col items-center text-center md:max-w-md md:flex-row md:items-center md:gap-6 md:text-left">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/5 transition-colors group-hover:bg-gold/10 md:h-16 md:w-16">
                    <svg className="h-5 w-5 text-gold md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <div className="mt-4 flex-1 md:mt-0">
                    <p className="mb-2 font-cormorant text-xs tracking-[0.3em] text-gold/60 uppercase md:text-sm">
                      Dress Code
                    </p>
                    <p className="font-playfair text-xl leading-relaxed text-cream md:text-2xl">
                      Kerudung Besar
                    </p>
                    <p className="mt-2 font-lora text-sm leading-relaxed text-cream/40 md:text-base">
                      + Baju Bebas Sopan
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-16 w-full border-t border-gold/10 pt-12 text-center md:mt-20 md:pt-14">
                <p className="mb-6 font-scheherazade text-2xl leading-[2] text-gold/70 md:text-3xl">
                  وَقُلْ رَبِّ زِدْنِي عِلْمًا
                </p>
                <p className="font-lora text-sm leading-relaxed italic text-cream/50 md:text-base">
                  "Dan katakanlah: Ya Tuhanku, tambahkanlah kepadaku ilmu."
                </p>
                <p className="mt-3 font-lora text-xs leading-normal text-cream/30 md:text-sm">
                  — QS. Thaha: 114
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 