export default function WrongPasswordScreen({ onRetry }) {
    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative w-full max-w-sm mx-auto p-6 sm:p-8 bg-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-pink-500/30 border-2 border-pink-500/50 animate-shake">
                {/* Glowing border blur layer */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-blue-400 rounded-3xl blur opacity-75 animate-pulse" />

                <div className="relative text-center">
                    <div className="mb-6">
                        <img
                            src="/wrong-pass.jpg"
                            alt="Thoughtful face"
                            className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-pink-500 shadow-lg shadow-pink-500/40 animate-pulse"
                        />
                    </div>

                    <h1 className="text-2xl font-bold text-pink-300 mb-2">🚫 Oops! Wrong Password</h1>
                    <h2 className="text-xl font-semibold text-blue-300 mb-4">🤔 Think Again! ra chinnoda</h2>
                    <p className="text-gray-300 text-sm mb-4">just remember that what I used it to contact</p>

                    <div className="p-4 bg-gradient-to-r from-pink-500/20 to-blue-500/10 rounded-xl border-l-4 border-pink-400 italic text-left my-5 backdrop-blur-sm">
                        <p className="text-sm text-gray-200">
                            💡 <span className="font-semibold">Hint:</span> It's something I used to call you always
                        </p>
                    </div>

                    <button
                        onClick={onRetry}
                        className="w-full max-w-[200px] mt-4 py-3 px-8 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/50 hover:-translate-y-1 hover:scale-105 active:scale-95"
                    >
                        🔄 Try Again
                    </button>
                </div>
            </div>
        </div>
    )
}
