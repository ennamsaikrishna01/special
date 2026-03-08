export default function GalleryGrid({ images, onOpen }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {images.map((src, index) => (
                <div
                    key={src}
                    className="aspect-square cursor-pointer group"
                    onClick={() => onOpen(src)}
                >
                    <img
                        src={src}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full object-cover rounded-xl border-2 border-pink-400/50 shadow-lg shadow-pink-500/20 transition-all duration-300 group-hover:scale-105 group-hover:rotate-[-3deg] group-hover:shadow-2xl group-hover:shadow-pink-400/40"
                    />
                </div>
            ))}
        </div>
    )
}
