const stories = [
  {
    id: 'pertemuan',
    title: 'Pertemuan',
    arabicTitle: 'اللِّقَاءُ',
    icon: '🌸',
    content:
      'Pertemanan kami bermula pada hari-hari pertama di pesantren, saat rasa gugup dan rindu rumah masih menyelimuti hati. Berawal dari senyum dan sapaan sederhana, kami perlahan saling mengenal, belajar bersama, berbagi cerita, dan saling menguatkan, hingga tanpa terasa terjalin persahabatan yang indah dan penuh kenangan.',
  },
  {
    id: 'perjuangan',
    title: 'Perjuangan',
    arabicTitle: 'الكِفَاحُ',
    icon: '🌿',
    content:
      'Bersama teman-teman, kami menjalani hari-hari di pesantren dengan penuh perjuangan; bangun di sepertiga malam, menghafal pelajaran, menghadapi berbagai ujian, dan menahan rindu kepada keluarga. Meski tidak selalu mudah, kebersamaan, canda, dan saling menyemangati membuat setiap kesulitan terasa lebih ringan hingga akhirnya menjadi kenangan berharga yang akan selalu kami ingat.',
  },
  {
    id: 'perpisahan',
    title: 'Perpisahan',
    arabicTitle: 'الوَدَاعُ',
    icon: '🌸',
    content:
      'Tak terasa, perjalanan yang dulu diawali dengan langkah-langkah ragu kini sampai pada titik perpisahan. Di tempat yang menjadi saksi tawa, air mata, perjuangan, dan doa-doa yang dipanjatkan bersama, kami belajar bahwa setiap pertemuan pasti memiliki akhir. Meski kelak jalan kami berbeda, kenangan yang terukir di pesantren ini akan tetap hidup dalam hati, menjadi pengingat indah tentang persahabatan, ilmu, dan kebersamaan yang pernah kami miliki.',
  },
]

export default function StorySection() {
  return (
    <section
      id="kisah"
      data-section="kisah"
      className="relative flex min-h-screen items-center justify-center py-20 md:py-28 lg:py-32 pattern-overlay"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.02] blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 flex w-full flex-col items-center text-center md:mb-16">
          <div className="reveal-on-scroll">
            <p className="mb-3 w-full text-center font-amiri text-xs tracking-[0.3em] text-gold/50 uppercase md:text-sm">
              قِصَّةُ رِحْلَتِنَا
            </p>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <h2 className="w-full text-center font-cormorant text-3xl tracking-wider text-gold md:text-4xl lg:text-5xl">
              Kisah Perjalanan
            </h2>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <p className="mt-4 w-full text-center font-lora text-sm leading-relaxed text-cream/40 md:text-base">
              Santriwati Angkatan IV · 2025–2026
            </p>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <div className="ornament-divider mx-auto mt-6 max-w-full">
              <span className="text-sm text-gold">❀</span>
            </div>
          </div>
        </div>

        {/* Stories - centered, same width as EventDetails */}
        <div className="flex w-full max-w-[900px] flex-col items-center gap-10 md:gap-12 lg:gap-14">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`w-full ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="glass-card group relative overflow-hidden rounded-[2rem] p-8 sm:p-10 md:p-14 lg:p-20 transition-all duration-500 hover:border-gold/30">
                {/* Decorative corners */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-5 top-5 h-12 w-12 rounded-tl-2xl border-l border-t border-gold/20 md:left-7 md:top-7 md:h-16 md:w-16"></div>
                  <div className="absolute right-5 top-5 h-12 w-12 rounded-tr-2xl border-r border-t border-gold/20 md:right-7 md:top-7 md:h-16 md:w-16"></div>
                  <div className="absolute bottom-5 left-5 h-12 w-12 rounded-bl-2xl border-b border-l border-gold/20 md:bottom-7 md:left-7 md:h-16 md:w-16"></div>
                  <div className="absolute bottom-5 right-5 h-12 w-12 rounded-br-2xl border-b border-r border-gold/20 md:bottom-7 md:right-7 md:h-16 md:w-16"></div>
                </div>

                {/* Inner wrapper - centered */}
                <div className="relative flex w-full flex-col items-center text-center md:px-4 lg:px-8">
                  {/* Chapter label */}
                  <div className="mb-6 flex w-full items-center justify-center gap-3">
                    <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/40"></span>
                    <span className="font-cormorant text-xs tracking-[0.3em] text-gold/60 uppercase">
                      Bagian {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/40"></span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/20 bg-gold/5 transition-colors group-hover:bg-gold/10 md:h-20 md:w-20">
                    <span className="text-3xl md:text-4xl">{story.icon}</span>
                  </div>

                  {/* Arabic title */}
                  <p className="mb-3 w-full text-center font-scheherazade text-2xl leading-[1.8] text-gold/70 md:text-3xl lg:text-4xl">
                    {story.arabicTitle}
                  </p>

                  {/* Latin title */}
                  <h3 className="mb-4 w-full text-center font-cormorant text-3xl tracking-wider text-gold md:text-4xl lg:text-5xl">
                    {story.title}
                  </h3>

                  {/* Divider */}
                  <div className="mx-auto mb-8 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent transition-all duration-500 group-hover:w-24 md:mb-10"></div>

                  {/* Content */}
                  <p className="mx-auto w-full max-w-xl text-center font-lora text-sm leading-[1.9] text-cream/60 md:text-base md:leading-[2]">
                    {story.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom ornament */}
        <div className="reveal-on-scroll mt-14 flex w-full flex-col items-center text-center md:mt-20">
          <div className="ornament-divider mx-auto max-w-[200px]">
            <span className="font-scheherazade text-lg text-gold/50">۝</span>
          </div>
        </div>
      </div>
    </section>
  )
}