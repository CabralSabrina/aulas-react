import React from 'react'
import './AnimatedCircle.css'

interface AnimatedCircleProps {
  isAnimating: boolean
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ isAnimating }) => {
  return (
    <div 
      className={`animated-circle ${isAnimating ? 'animate' : ''}`}
    ></div>
  )
}

export default AnimatedCircle