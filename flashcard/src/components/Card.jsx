import { useState, useEffect } from 'react'
import '../App.css'

function Card({ question, answer, cardIndex }) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Reset to question side when cardIndex changes
  useEffect(() => {
    setIsFlipped(false)
  }, [cardIndex])

  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          <p>{question}</p>
        </div>
        <div className="card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default Card