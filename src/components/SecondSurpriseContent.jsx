import React, { useMemo } from 'react'

export default function SecondSurpriseContent({ onBack }) {
  // Generate random stars only once per render
  const stars = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 200}%`, // Spread them out vertically
      size: `${Math.random() * 3 + 1}px`, // 1px to 4px
      duration: `${Math.random() * 15 + 10}s`, // 10s to 25s
      delay: `${Math.random() * -20}s`, // Start staggered
    }))
  }, [])

  return (
    <div className="relative min-h-screen bg-[#050914] text-white font-sans overflow-x-hidden selection:bg-purple-500/30">

      {/* ── Galaxy Background Elements ── */}

      {/* Deep Space Gradient Overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050914] to-[#010204] z-0 pointer-events-none"></div>

      {/* Moving Stars */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {stars.map(star => (
          <div
            key={star.id}
            className="galaxy-star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDuration: star.duration,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      {/* Full Moon */}
      <div className="fixed top-12 right-12 sm:top-20 sm:right-20 w-24 h-24 sm:w-36 sm:h-36 galaxy-moon z-0 pointer-events-none opacity-90"></div>

      {/* Glowing Nebulas */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>


      {/* ── Main Content Area (Scrollable over fixed background) ── */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-40 p-4 sm:p-5 bg-[#050914]/40 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5 flex items-center justify-center min-h-[70px]">
          {/* Back Button */}
          {onBack && (
            <button
              onClick={onBack}
              className="absolute left-4 sm:left-6 flex items-center gap-1 sm:gap-2 text-blue-200 hover:text-white text-sm sm:text-base font-semibold transition-transform hover:-translate-x-1 active:scale-95 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10"
              aria-label="Back to home"
            >
              <span aria-hidden="true">←</span>
              <span className="hidden sm:inline">Back</span>
            </button>
          )}

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300 drop-shadow-md px-12 tracking-wider uppercase">
            Happy womens day ra chinnoda..!
          </h1>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 px-4 py-8 sm:py-16 max-w-4xl mx-auto w-full flex flex-col items-center gap-12 sm:gap-16 mt-[70px]">

          {/* Note Section (Glassmorphism) */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/10 w-full text-center relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-70"></div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-100 mb-4 sm:mb-6 flex items-center justify-center gap-2">
              SADUV THARVATHA VIDEO CHUDUVU✨
            </h2>

            <p className="text-blue-50/90 leading-relaxed text-base sm:text-lg font-light drop-shadow-sm max-w-2xl mx-auto">
              hey chinnoda, telsu neku roju antha special em kadu cause mens wont celeberate and obviously neku ne boy era wont allow but,
              any how you are a girl by mistake thats another thing. so happy womens day ra shelle... and thank you for being as guru, sister, friend, and  half mogudu for my mogudu in futrue!. hoping this bond may keep getting more attached and stronger with out limits.  so thats it ra this is for youuuuu.....
              urke cheyalanipinchindi ra chesa. nachindha?

            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-4">

            {/* Main Video Section (Glassmorphism container) */}
            <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md rounded-3xl p-2 sm:p-4 border border-white/10 relative">
              <div className="w-full bg-black rounded-2xl overflow-hidden shadow-inner border border-white/5 mx-auto relative z-10 aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1zk7HOGxYrO3W8RbFhpa99BApxHHG9mL0/preview"
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Special Video"
                >
                </iframe>
              </div>
            </div>
            <p className="text-white/70 italic text-sm mt-4">video kavalra....? download cheyaradu try cheyaku</p>
            <p className="text-white/70 italic text-sm mt-4">nachithe cheppu future lo me vadinaki ilage plan chesta. emanttav..?</p>
          </div>

        </div>
      </div>
    </div>
  )
}
