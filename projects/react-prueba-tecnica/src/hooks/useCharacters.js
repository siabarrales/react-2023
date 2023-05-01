import { useState, useEffect } from 'react'
import { getCharactersIds } from '../services/characters.js'

export function useCharacters() {
  const BaseUrl = `https://rickandmortyapi.com/`
  const [charactersIds, setCharactersIds] = useState()
  const [characters, setCharacters] = useState()

  const refreshCharacters = () => {
    setCharactersIds(getCharactersIds())
  }

  useEffect(refreshCharacters, [])

  useEffect(() => {
    if (!charactersIds) return
    fetch(`${BaseUrl}api/character/${charactersIds}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data))
  }, [charactersIds])

  return {
    refreshCharacters,
    characters,
  }
}
