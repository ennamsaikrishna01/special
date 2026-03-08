import { useEffect } from 'react'

export default function ImageModal({ src, onClose }) {
    // Lock body scroll while modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = 'auto' }
    }, [])

    // Close on ESC key
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [onClose])

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in-scale"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-5xl font-bold hover:text-pink-400 transition-colors z-10"
                onClick={onClose}
                aria-label="Close image view"
            >
                &times;
            </button>

            {/* Image — stops click from closing when clicking ON the image */}
            <img
                src={src}
                alt="Full screen memory"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    )
}
