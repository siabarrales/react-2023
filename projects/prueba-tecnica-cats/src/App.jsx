import { useEffect, useState } from 'react'
import { useFacts } from './hooks/useFacts.js'
import { useCatImage } from './hooks/useCatImage.js'
import './App.css'

function App() {
  const { fact, refreshFact } = useFacts()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <>
      <h1>Cat Facts App</h1>

      {imageUrl && (
        <img
          className="img-container"
          src={imageUrl}
          alt="fact gif"
        />
      )}
      <p className="fact-container"> {fact}</p>

      <button onClick={handleClick}>Get new fact</button>
    </>
  )
}

export default App
