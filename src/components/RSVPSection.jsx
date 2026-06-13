import { useState } from 'react'

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: 'Ustadzah Aminah',
      message: 'Selamat untuk kalian semua, semoga ilmu yang didapat menjadi berkah di dunia dan akhirat. 💛',
      attendance: 'hadir',
      time: '2 hari yang lalu',
    },
    {
      id: 2,
      name: 'Kak Sarah',
      message: 'Bangga dengan perjuangan kalian! Tetap istiqomah di jalan kebaikan ya adik-adik 🌸',
      attendance: 'hadir',
      time: '1 hari yang lalu',
    },
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.attendance) return

    const newWish = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      attendance: formData.attendance,
      time: 'Baru saja',
    }
    setWishes([newWish, ...wishes])
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', attendance: '', message: '' })
    }, 3000)
  }

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
        <div className="mb-14 text-center md:mb-16">
          <div className="reveal-on-scroll">
            <p className="mb-3 font-amiri text-xs tracking-[0.3em] text-gold/50 uppercase md:text-sm">
              تَأْكِيدُ الحُضُورِ
            </p>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <h2 className="font-cormorant text-3xl tracking-wider text-gold md:text-4xl lg:text-5xl">
              Konfirmasi Kehadiran
            </h2>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <p className="mx-auto mt-4 max-w-lg font-lora text-sm leading-relaxed text-cream/40 md:text-base">
              Kehadiran dan doa Anda sangat berarti bagi kami
            </p>
          </div>
          <div className="reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
            <div className="ornament-divider mx-auto mt-6 max-w-full">
              <span className="text-sm text-gold">❀</span>
            </div>
          </div>
        </div>

        {/* Form Card */}
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

            {/* Inner wrapper - padding LR ditambah agar tidak nempel garis */}
            <div className="relative flex w-full flex-col items-center px-2 sm:px-4 md:px-10 lg:px-16">
              {/* Form header */}
              <div className="mb-12 flex w-full flex-col items-center text-center md:mb-14">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/40"></span>
                  <span className="font-cormorant text-xs tracking-[0.3em] text-gold/60 uppercase">
                    RSVP
                  </span>
                  <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/40"></span>
                </div>
                <h3 className="mb-3 w-full text-center font-cormorant text-2xl leading-relaxed tracking-wider text-gold md:text-3xl lg:text-4xl">
                  Kirim Konfirmasi
                </h3>
                <p className="w-full text-center font-lora text-sm leading-relaxed text-cream/40 md:text-base">
                  Mohon mengisi form di bawah ini dengan lengkap
                </p>
              </div>

              {/* Ornament divider */}
              <div className="ornament-divider mx-auto mb-12 w-full max-w-[220px] md:mb-14">
                <span className="text-xs text-gold/40">❀</span>
              </div>

              {/* Form content - dibatasi max-width agar tidak terlalu lebar */}
              <div className="mx-auto w-full max-w-[560px]">
                {isSubmitted ? (
                  <div className="animate-scale-in py-10 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                      <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="mb-3 font-cormorant text-2xl leading-relaxed text-gold md:text-3xl">
                      Jazakillah Khairan!
                    </h3>
                    <p className="font-lora text-sm leading-relaxed text-cream/50 md:text-base">
                      Konfirmasi Anda telah kami terima ♡
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7 md:space-y-9">
                    {/* Name */}
                    <div>
                      <label className="mb-3 block font-cormorant text-xs tracking-[0.25em] text-gold/70 uppercase md:text-sm">
                        Nama Lengkap <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Masukkan nama Anda"
                        className="w-full rounded-xl border border-dark-border bg-dark-card/50 px-6 py-3.5 font-lora text-sm leading-relaxed text-cream/80 placeholder:text-cream/20 transition-colors focus:border-gold/40 focus:outline-none md:pl-8 md:py-4 md:text-[15px] h-10 placeholder:pl-5"
                        required
                      />
                    </div>

                    {/* Attendance */}
                    <div>
                      <label className="mb-3 block font-cormorant text-xs tracking-[0.25em] text-gold/70 uppercase md:text-sm">
                        Konfirmasi Kehadiran <span className="text-gold">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, attendance: 'hadir' })}
                          className={`cursor-pointer rounded-xl border py-3.5 font-lora text-sm tracking-wider transition-all duration-300 md:py-4 md:text-[15px] h-10
                                     ${formData.attendance === 'hadir'
                                       ? 'border-gold/50 bg-gold/10 text-gold'
                                       : 'border-dark-border text-cream/40 hover:border-gold/20 hover:text-cream/60'
                                     }`}
                        >
                          ✦ Hadir
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, attendance: 'tidak' })}
                          className={`cursor-pointer rounded-xl border py-3.5 font-lora text-sm tracking-wider transition-all duration-300 md:py-6 md:text-[15px] h-10
                                     ${formData.attendance === 'tidak'
                                       ? 'border-gold/50 bg-gold/10 text-gold'
                                       : 'border-dark-border text-cream/40 hover:border-gold/20 hover:text-cream/60'
                                     }`}
                        >
                          Tidak Hadir
                        </button>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-3 block font-cormorant text-xs tracking-[0.25em] text-gold/70 uppercase md:text-sm">
                        Ucapan &amp; Doa
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tuliskan ucapan dan doa untuk santriwati..."
                        rows={5}
                        className="w-full resize-none rounded-xl border border-dark-border bg-dark-card/50 px-4 py-3.5 font-lora text-sm leading-[1.9] text-cream/80 placeholder:text-cream/20 placeholder:pl-5 placeholder:pt-3 transition-colors focus:border-gold/40 focus:outline-none md:px-5 md:py-4 md:text-[15px] md:leading-[1.95]"
                      />
                    </div>

                    {/* Submit - dikecilkan & dibatasi lebarnya */}
                    <div className="flex justify-center pt-2 md:pt-4">
                      <button
                        type="submit"
                        className="w-full cursor-pointer rounded-xl border border-gold/40 px-8 py-3.5 font-lora text-sm tracking-[0.3em] text-gold uppercase transition-all duration-300 hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-30 md:w-auto md:min-w-[280px] md:py-4 md:text-[15px] h-10 mt-4"
                        disabled={!formData.name || !formData.attendance}
                      >
                        Kirim Konfirmasi
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Wishes Wall */}
        <div
          className="reveal-on-scroll mt-12 w-full max-w-[900px] md:mt-16"
          style={{ transitionDelay: '0.3s' }}
        >
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-8 sm:p-10 md:p-14 lg:p-20">
            {/* Decorative corners */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-5 top-5 h-12 w-12 rounded-tl-2xl border-l border-t border-gold/20 md:left-7 md:top-7 md:h-16 md:w-16"></div>
              <div className="absolute right-5 top-5 h-12 w-12 rounded-tr-2xl border-r border-t border-gold/20 md:right-7 md:top-7 md:h-16 md:w-16"></div>
              <div className="absolute bottom-5 left-5 h-12 w-12 rounded-bl-2xl border-b border-l border-gold/20 md:bottom-7 md:left-7 md:h-16 md:w-16"></div>
              <div className="absolute bottom-5 right-5 h-12 w-12 rounded-br-2xl border-b border-r border-gold/20 md:bottom-7 md:right-7 md:h-16 md:w-16"></div>
            </div>

            <div className="relative flex w-full flex-col items-center px-2 sm:px-4 md:px-10 lg:px-16">
              {/* Wishes header */}
              <div className="mb-12 flex w-full flex-col items-center text-center md:mb-14">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/40"></span>
                  <span className="font-cormorant text-xs tracking-[0.3em] text-gold/60 uppercase">
                    Doa &amp; Harapan
                  </span>
                  <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/40"></span>
                </div>
                <h3 className="mb-3 w-full text-center font-cormorant text-2xl leading-relaxed tracking-wider text-gold md:text-3xl lg:text-4xl">
                  Ucapan &amp; Doa
                </h3>
                <p className="w-full text-center font-lora text-sm leading-relaxed text-cream/40 md:text-base">
                  {wishes.length} ucapan telah masuk dari para tamu undangan
                </p>
              </div>

              {/* Ornament divider */}
              <div className="ornament-divider mx-auto mb-10 w-full max-w-[220px] md:mb-12">
                <span className="text-xs text-gold/40">❀</span>
              </div>

              {/* Wishes list */}
              <div className="custom-scrollbar max-h-[600px] w-full space-y-4 overflow-y-auto pr-1 md:space-y-5 md:pr-2">
                {wishes.map((wish) => (
                  <div
                    key={wish.id}
                    className="rounded-2xl border border-gold/10 bg-dark-card/40 p-5 transition-all duration-300 hover:border-gold/30 md:p-6 lg:p-7"
                  >
                    <div className="flex items-start gap-4 md:gap-5">
                      {/* Avatar */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/10 md:h-12 md:w-12">
                        <span className="font-cormorant text-base font-semibold text-gold md:text-lg">
                          {wish.name.charAt(0)}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className="font-cormorant text-base leading-relaxed text-cream/85 md:text-lg">
                            {wish.name}
                          </span>
                          <span
                            className={`rounded-full border px-2.5 py-0.5 font-lora text-[10px] tracking-[0.15em] uppercase md:text-xs
                                       ${wish.attendance === 'hadir'
                                         ? 'border-gold/20 bg-gold/10 text-gold/70'
                                         : 'border-cream/10 bg-cream/5 text-cream/30'
                                       }`}
                          >
                            {wish.attendance === 'hadir' ? 'Hadir' : 'Tidak Hadir'}
                          </span>
                        </div>
                        {wish.message && (
                          <p className="font-lora text-sm leading-[1.9] text-cream/60 md:text-[15px] md:leading-[1.95]">
                            {wish.message}
                          </p>
                        )}
                        <p className="mt-3 font-lora text-xs leading-relaxed text-cream/25 md:text-sm">
                          {wish.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}