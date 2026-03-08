import { useState, useRef, useEffect } from 'react'

const CORRECT_PASSWORD = 'halfbrain'

export default function PasswordScreen({ onCorrect, onWrong }) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const inputRef = useRef(null)

    // Auto-focus the input on mount
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const checkPassword = () => {
        const input = value.trim().toLowerCase()

        if (input === '') {
            setError('❌ Please enter a password!')
            setTimeout(() => setError(''), 2000)
            return
        }

        if (input === CORRECT_PASSWORD) {
            onCorrect()
        } else {
            onWrong()
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            checkPassword()
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        if (error) setError('')
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative w-full max-w-sm mx-auto p-6 sm:p-8 bg-slate-900/85 backdrop-blur-xl rounded-3xl shadow-2xl shadow-pink-500/20 border-2 border-pink-500/40">
                {/* Glowing border blur layer */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-blue-400 rounded-3xl blur opacity-50 animate-pulse" />

                <div className="relative text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-3 text-shadow flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Guess the passkey
                    </h1>

                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                        password kottu ra firstuu..!
                    </p>

                    <input
                        ref={inputRef}
                        type="password"
                        placeholder="kotha peru kottu"
                        value={value}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        className={`w-full max-w-xs px-5 py-4 text-center text-white bg-white/10 backdrop-blur-sm border-2 rounded-full outline-none transition-all duration-300 focus:ring-2 focus:ring-pink-400/50 focus:scale-105 placeholder-white/70 ${error
                            ? 'border-red-500'
                            : 'border-pink-500/60 focus:border-pink-400'
                            }`}
                    />

                    {error && (
                        <p className="mt-4 text-sm text-red-400 bg-red-500/10 border border-red-500/30 px-3 py-2 rounded-xl">
                            {error}
                        </p>
                    )}

                    <button
                        onClick={checkPassword}
                        className="w-full max-w-[200px] mt-6 py-4 px-10 bg-gradient-to-r from-black via-pink-500 to-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-base rounded-full transition-all duration-500 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/50 hover:-translate-y-1 hover:scale-105 active:scale-95"
                    >
                        Enter
                    </button>
                </div>
            </div>
        </div>
    )
}
