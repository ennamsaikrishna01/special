import { useState } from 'react'
import HomeScreen from './components/HomeScreen'
import PasswordScreen from './components/PasswordScreen'
import WrongPasswordScreen from './components/WrongPasswordScreen'
import SurpriseContent from './components/SurpriseContent'
import GenderCheckScreen from './components/GenderCheckScreen'
import SecondSurpriseContent from './components/SecondSurpriseContent'

// Screen states: 'home' | 'password' | 'wrong' | 'surprise'
const SCREENS = {
    HOME: 'home',
    PASSWORD: 'password',
    WRONG: 'wrong',
    SURPRISE: 'surprise',
    GENDER_CHECK: 'gender_check',
    SECOND_SURPRISE: 'second_surprise',
}

export default function App() {
    const [screen, setScreen] = useState(SCREENS.PASSWORD)

    const handleCorrectPassword = () => setScreen(SCREENS.HOME)
    const handleWrongPassword = () => setScreen(SCREENS.WRONG)
    const handleRetry = () => setScreen(SCREENS.PASSWORD)

    // HomeScreen navigates by page id
    const handleNavigate = (pageId) => {
        if (pageId === 'rakshabandhan') setScreen(SCREENS.SURPRISE)
        if (pageId === 'womensday') setScreen(SCREENS.GENDER_CHECK)
    }

    const handleBackToHome = () => setScreen(SCREENS.HOME)
    const handleGenderCheckSuccess = () => setScreen(SCREENS.SECOND_SURPRISE)

    return (
        <div className="bg-gradient-to-br from-[#0d0d0d] via-[#1a1a2e] to-[#16213e] text-white overflow-x-hidden min-h-screen">
            {screen === SCREENS.PASSWORD && (
                <PasswordScreen
                    onCorrect={handleCorrectPassword}
                    onWrong={handleWrongPassword}
                />
            )}
            {screen === SCREENS.HOME && (
                <HomeScreen onNavigate={handleNavigate} />
            )}
            {screen === SCREENS.WRONG && (
                <WrongPasswordScreen onRetry={handleRetry} />
            )}
            {screen === SCREENS.SURPRISE && (
                <SurpriseContent onBack={handleBackToHome} />
            )}
            {screen === SCREENS.GENDER_CHECK && (
                <GenderCheckScreen onSuccess={handleGenderCheckSuccess} onBack={handleBackToHome} />
            )}
            {screen === SCREENS.SECOND_SURPRISE && (
                <SecondSurpriseContent onBack={handleBackToHome} />
            )}
        </div>
    )
}
