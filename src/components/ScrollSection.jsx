import { useEffect, useRef } from 'react'

export default function ScrollSection() {
    const messageBoxRef = useRef(null)
    const memorySectionRef = useRef(null)

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY
                    const windowHeight = window.innerHeight
                    const scrollProgress = Math.min(scrollY / windowHeight, 1)

                    const messageBox = messageBoxRef.current
                    if (messageBox) {
                        // Slide the message box from bottom to top
                        const startY = 100
                        const endY = -100
                        const range = startY - endY
                        const currentY = startY - scrollProgress * range
                        messageBox.style.transform = `translateY(${currentY}%)`

                        // Fade in/out
                        if (scrollProgress < 0.1) {
                            messageBox.style.opacity = scrollProgress * 10
                        } else if (scrollProgress > 0.8) {
                            messageBox.style.opacity = 1 - (scrollProgress - 0.8) * 5
                        } else {
                            messageBox.style.opacity = 1
                        }
                    }

                    // Reveal memory section after message passes
                    const memSection = memorySectionRef.current
                    if (memSection) {
                        memSection.style.opacity = scrollProgress > 0.9 ? 1 : 0
                        memSection.style.visibility = scrollProgress > 0.9 ? 'visible' : 'hidden'
                    }

                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="relative min-h-[200vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Main photo */}
                <img
                    src="/main.jpg"
                    alt="Raksha Bandhan"
                    className="absolute top-0 left-0 w-full h-full object-cover object-center z-10"
                />

                {/* Scrolling message box */}
                <div
                    ref={messageBoxRef}
                    className="fixed bottom-0 left-0 right-0 z-30 p-6 sm:p-10 text-center text-sm sm:text-lg leading-relaxed sm:leading-loose backdrop-blur-md border-t-2 border-pink-500/30 transition-opacity duration-300"
                    style={{ transform: 'translateY(100%)', opacity: 0 }}
                >
                    <span className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-pink-600 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg border-2 border-black/30">
                        💕
                    </span>
                    <p className="max-w-3xl mx-auto text-white/95">
                        <span className="block mb-1 sm:mb-2 font-semibold">Dear Chellamma,</span>
                        Wishing you a very happy Raksha Bandhan, ra. I'm just remembering all the moments we've
                        shared over the last few years. As I've always said, you are the only sister I feel
                        truly connected to. Yes, there were some clashes, but apart from those situations. I
                        really miss those chilling days where we all sat together, made fun of each other,
                        laughed, cried, and did all sorts of crazy things. missing those days with reminding all
                        those moments in mind. Just want to remind you that you're my one and only little, cute,
                        jelly-brain sister — and I'll never let go of the memories I have with you...!💖
                    </p>
                </div>
            </div>

            {/* Memory section reveal anchor — kept here so scroll progress can reference its position */}
            <div ref={memorySectionRef} style={{ opacity: 0, visibility: 'hidden' }} />
        </section>
    )
}
