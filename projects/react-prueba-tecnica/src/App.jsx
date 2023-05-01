import { Characters } from './Characters.jsx'
import { useCharacters } from './hooks/useCharacters.js'

import './App.css'

function App() {
  const { characters, refreshCharacters } = useCharacters()

  const handleClick = () => {
    refreshCharacters()
  }

  return (
    <>
      <h1>Rick and Morty Random Characters</h1>
      <Characters characters={characters} />
      <button style={{ marginTop: '32px' }} onClick={handleClick}>
        Get new characters
      </button>
    </>
  )
}

export default App
