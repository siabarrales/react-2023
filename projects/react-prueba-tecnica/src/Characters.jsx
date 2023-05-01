export function Characters({ characters }) {
  return (
    <div className="data-container">
      {characters &&
        characters.map((character) => (
          <div key={character.id}>
            <p className="character-name">{character.name}</p>
            <img
              src={character.image}
              alt="rick and morty character"
            />
          </div>
        ))}
    </div>
  )
}
