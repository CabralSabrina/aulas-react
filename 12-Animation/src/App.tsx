import React, { useState } from 'react'

import AnimatedCircle from './components/AnimatedCircl'


import './App.css'

const App: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="app-container">
      <h1>Animação Simples com React</h1>
      <button onClick={toggleAnimation}>
        {isAnimating ? 'Parar Animação' : 'Iniciar Animação'}
      </button>
      <div className="animation-area">
        <AnimatedCircle isAnimating={isAnimating} />
      </div>
    </div>
  )
}

export default App