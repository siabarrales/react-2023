import { useEffect, useState } from 'react'

const API_KEY = '3QDml3UPMfmBIuqTeYEZU9rE6OmloJXA'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const shortFact = fact.split(' ', 3).join(' ')

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${shortFact}&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length === 0) return
        setImageUrl(data.data[0].images.original.url)
      })
  }, [fact])

  return { imageUrl }
}
