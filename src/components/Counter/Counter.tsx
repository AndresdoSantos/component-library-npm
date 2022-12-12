import { useState } from 'react'

import './Counter.css'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="container">
      <strong className="counter">{counter}</strong>

      <button
        type="button"
        className="button"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Adicionar
      </button>
    </div>
  )
}
