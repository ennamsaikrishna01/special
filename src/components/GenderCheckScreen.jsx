import { useState, useRef, useEffect } from 'react'

export default function GenderCheckScreen({ onSuccess, onBack }) {
    const [yesPos, setYesPos] = useState({ top: 'auto', left: 'auto', absolute: false })
    const [jumpCount, setJumpCount] = useState(0)
    const [showPakka, setShowPakka] = useState(false)
    const yesBtnRef = useRef(null)
    const containerRef = useRef(null)

    const handleNoClick = () => {
        alert("Nijam cheppu!") // Tell the truth!
    }

    const handleOthersClick = () => {
        alert("Haha, nice try! But no.")
    }

    const handleYesHover = () => {
        if (jumpCount >= 3) return // Stop jumping after 3 times

        if (!containerRef.current || !yesBtnRef.current) return

        const containerRect = containerRef.current.getBoundingClientRect()
        const btnRect = yesBtnRef.current.getBoundingClientRect()

        // Generate random position within container bounds
        const maxX = containerRect.width - btnRect.width - 20
        const maxY = containerRect.height - btnRect.height - 20

        const randomX = Math.max(10, Math.floor(Math.random() * maxX))
        const randomY = Math.max(10, Math.floor(Math.random() * maxY))

        setYesPos({
            top: `${randomY}px`,
            left: `${randomX}px`,
            absolute: true
        })
        setJumpCount(prev => prev + 1)
    }

    const handleYesClick = (e) => {
        if (jumpCount < 3) {
            e.preventDefault()
            return
        }
        setShowPakka(true)
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4 relative" ref={containerRef}>
            {/* Back Button */}
            {onBack && (
                <button
                    onClick={onBack}
                    className="absolute top-5 left-5 flex items-center gap-1.5 text-white/50 hover:text-pink-300 text-sm font-medium transition-colors duration-200 z-50"
                >
                    ← Back
                </button>
            )}

            <div className="relative w-full max-w-sm mx-auto p-6 flex flex-col items-center justify-center min-h-[400px]">

                {/* The Card Background */}
                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-purple-500/30 border-2 border-purple-500/40 z-0"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-500 rounded-3xl blur opacity-30 animate-pulse z-0 -z-10"></div>

                <div className="relative z-10 text-center w-full flex flex-col items-center">

                    <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-8 drop-shadow-md">
                        Are you really a girl? 🤔
                    </h1>

                    <div className="flex flex-col gap-4 w-full relative h-[180px] items-center">

                        <button
                            onClick={handleNoClick}
                            className="w-full max-w-[200px] py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors border-2 border-white/10 hover:border-white/30"
                        >
                            No
                        </button>

                        <button
                            onClick={handleOthersClick}
                            className="w-full max-w-[200px] py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Others (kojja)
                        </button>

                        {/* The Runaway YES Button */}
                        <button
                            ref={yesBtnRef}
                            onMouseEnter={handleYesHover}
                            onClick={handleYesClick}
                            style={yesPos.absolute ? { position: 'absolute', top: yesPos.top, left: yesPos.left, margin: 0 } : {}}
                            className="w-full max-w-[200px] py-3 mt-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full transition-all duration-200 shadow-md shadow-pink-500/20 z-50 pointer-events-auto"
                        >
                            Yes
                        </button>

                    </div>
                </div>

                {/* Pakka Confirmation Popup */}
                {showPakka && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md rounded-3xl">
                        <div className="bg-slate-800 p-8 rounded-2xl border-2 border-pink-500/50 shadow-2xl flex flex-col items-center gap-6 animate-fade-in-scale">
                            <h2 className="text-2xl font-bold text-white text-center">Are you sure pakka? 👀</h2>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setShowPakka(false)}
                                    className="px-6 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={onSuccess}
                                    className="px-8 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform"
                                >
                                    Pakka
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
