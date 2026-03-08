export default function HomeScreen({ onNavigate }) {
    const pages = [
        {
            id: 'rakshabandhan',
            emoji: '🎀',
            title: 'Raksha Bandhan',
            subtitle: 'A special surprise for you',
            gradient: 'from-pink-600/80 to-purple-600/60',
            border: 'border-pink-500/50',
            glow: 'shadow-pink-500/30',
            available: true,
        },
        {
            id: 'womensday',
            emoji: '👑',
            title: 'Womens Day ',
            subtitle: 'Specially made for you',
            gradient: 'from-blue-600/50 to-cyan-600/40',
            border: 'border-blue-500/30',
            glow: 'shadow-blue-500/20',
            available: true,
        },
        {
            id: 'coming-soon..',
            emoji: '✨',
            title: 'Coming Soon..',
            subtitle: 'More memories loading…',
            gradient: 'from-violet-600/50 to-pink-600/40',
            border: 'border-violet-500/30',
            glow: 'shadow-violet-500/20',
            available: false,
        },
    ]

    return (
        <div className="min-h-screen flex flex-col">
            {/* ── Scrollable Landing Image ── */}
            <div className="relative w-full">
                <img
                    src="main.jpg"
                    alt="Special memories"
                    className="w-full h-[80vh] sm:h-auto object-cover object-top block"
                />
                {/* Gradient overlay for text visibility and smooth transition to bg */}
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent pointer-events-none" />

                {/* Hero text */}
                <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-shadow-md mb-2 drop-shadow-xl">
                        💖 Our Special Space
                    </h1>
                    <p className="text-pink-200/90 text-sm sm:text-base font-medium tracking-wide">
                        A collection of surprises, memories & love
                    </p>
                </div>
            </div>

            {/* ── Navigation Cards ── */}
            <div className="flex-1 px-5 pt-8 pb-12 max-w-2xl mx-auto w-full">
                <h2 className="text-center text-gray-400 text-sm uppercase tracking-widest mb-6 font-semibold">
                    Choose a Surprise
                </h2>

                <div className="flex flex-col gap-4">
                    {pages.map((page) => (
                        <button
                            key={page.id}
                            onClick={() => page.available && onNavigate(page.id)}
                            disabled={!page.available}
                            className={`
                relative w-full text-left p-5 rounded-2xl border-2 backdrop-blur-sm
                bg-gradient-to-r ${page.gradient} ${page.border}
                shadow-xl ${page.glow}
                transition-all duration-300
                ${page.available
                                    ? 'hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] cursor-pointer'
                                    : 'opacity-50 cursor-not-allowed grayscale'}
              `}
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-4xl flex-shrink-0">{page.emoji}</span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-white font-bold text-lg leading-tight">{page.title}</p>
                                    <p className="text-white/60 text-sm mt-0.5">{page.subtitle}</p>
                                </div>
                                {page.available ? (
                                    <span className="text-white/70 text-2xl">→</span>
                                ) : (
                                    <span className="text-xs text-white/40 font-semibold bg-white/10 px-2 py-1 rounded-full flex-shrink-0">
                                        Soon
                                    </span>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
