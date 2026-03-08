import { useState } from 'react'
import GalleryGrid from './GalleryGrid'
import ImageModal from './ImageModal'
import ScrollSection from './ScrollSection'

export default function SurpriseContent({ onBack }) {
    const [modalSrc, setModalSrc] = useState(null)

    const galleryImages = [
        '/mem1.jpg',
        '/mem2.jpg',
        '/mem3.jpg',
        '/mem4.jpg',
    ]

    return (
        <div className="bg-[#0d0d0d]">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-40 p-4 sm:p-5 bg-gradient-to-r from-pink-600/80 to-pink-400/70 backdrop-blur-xl shadow-lg shadow-pink-600/20 rounded-b-3xl border-b-2 border-white/20 flex items-center justify-center min-h-[70px]">
                {/* Back Button (Absolute positioning to keep header text centered) */}
                <button
                    onClick={onBack}
                    className="absolute left-4 sm:left-6 flex items-center gap-1 sm:gap-2 text-white/90 hover:text-white text-sm sm:text-base font-semibold transition-transform hover:-translate-x-1 active:scale-95 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full"
                    aria-label="Back to home"
                >
                    <span aria-hidden="true">←</span>
                    <span className="hidden sm:inline">Back</span>
                </button>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-white text-shadow-md px-12">
                    Happy Raksha Bandhan, maa!💖
                </h1>
            </header>

            {/* Scroll Animation Section */}
            <ScrollSection />

            {/* Gallery Section */}
            <section className="relative z-20 bg-gradient-to-b from-slate-900/80 to-[#0d0d0d] backdrop-blur-lg rounded-t-3xl pt-16 pb-12 px-4">
                <h2 className="text-3xl font-bold text-center text-pink-400 mb-8">
                    Some Beautiful Memories 📸
                </h2>
                <GalleryGrid images={galleryImages} onOpen={(src) => setModalSrc(src)} />
            </section>

            {/* Full-screen Image Modal */}
            {modalSrc && (
                <ImageModal src={modalSrc} onClose={() => setModalSrc(null)} />
            )}
        </div>
    )
}
