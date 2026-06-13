import { useState, useEffect } from 'react'

const galleryImages = [
  {
    id: 1,
    src: '/img1.png',
    alt: 'Kenangan pesantren',
    caption: 'Kebersamaan di Pesantren',
  },
  {
    id: 2,
    src: '/img2.png',
    alt: 'Persiapan acara',
    caption: 'Seragam Kebanggaan',
  },
  {
    id: 3,
    src: '/img3.png',
    alt: 'Dress code',
    caption: 'Persiapan Penuh Cinta',
  },
  {
    id: 4,
    src: '/img4.png',
    alt: 'Taman pesantren',
    caption: 'Taman yang Menjadi Saksi',
  },
  {
    id: 5,
    src: '/img5.png',
    alt: 'Suasana pesantren',
    caption: 'Suasana yang Dirindukan',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageLoaded, setImageLoaded] = useState({})

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [selectedImage])

  const handleImageLoad = (id) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section id="galeri" data-section="galeri" className="relative py-20 md:py-32 pattern-overlay">
      {/* Section header */}
      <div className="text-center px-6 mb-16">
        <div className="reveal-on-scroll">
          <p className="font-amiri text-gold/50 text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            مَعْرِضُ الصُّوَرِ
          </p>
        </div>
        <div className="reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-gold tracking-wider">
            Galeri Kenangan
          </h2>
        </div>
        <div className="reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
          <p className="font-lora text-cream/40 text-sm md:text-base mt-3 max-w-full mx-auto text-center">
            Setiap momen adalah hadiah yang tak ternilai
          </p>
        </div>
        <div className="reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
          <div className="ornament-divider max-w-full mx-auto mt-6">
            <span className="text-gold text-sm">✦</span>
          </div>
        </div>
      </div>

      {/* Gallery grid - MOBILE: 1 kolom stack vertikal, DESKTOP: grid 3 kolom */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`reveal-on-scroll group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer bg-dark-card
                         ${/* Desktop only: gambar pertama jadi besar */ ''}
                         ${index === 0 ? 'md:col-span-1 md:row-span-2' : ''}
                         ${/* Mobile: aspect ratio dinamis (tidak kepotong) */ ''}
                         ${/* Desktop: aspect square */ ''}
                         md:aspect-square
                         ${index === 0 ? 'md:aspect-auto' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Loading skeleton */}
              {!imageLoaded[image.id] && (
                <div className="absolute inset-0 bg-dark-card animate-pulse"></div>
              )}

              {/* MOBILE: gambar tampil full (tidak terpotong)
                  DESKTOP: cover dengan crop */}
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-auto md:h-full md:object-cover transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110
                           ${imageLoaded[image.id] ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(image.id)}
                loading="lazy"
              />

              {/* Overlay caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="font-cormorant text-cream text-sm md:text-lg tracking-wider">
                    {image.caption}
                  </p>
                  <div className="w-8 h-px bg-gold mt-2 group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-gold/20 md:border-gold/0 md:group-hover:border-gold/30 rounded-xl md:rounded-2xl transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-cream/60 hover:text-gold transition-colors z-10 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="max-w-4xl max-h-[85vh] relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center font-cormorant text-gold text-lg mt-4 tracking-wider">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}