import { useState } from 'react'

export function TwitterFollowCard({children, userName, initialIsFollowing = false}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
      setIsFollowing(!isFollowing)
  }

  return (
      <div className="App">
          <article className="tw-followCard">
              <header className='tw-followCard-header'>
                  <img 
                      src={`https://unavatar.io/${userName}`}
                      alt="El avatar de ejemplo" 
                      className='tw-followCard-avatar'
                  />
                  <div className='tw-followCard-info'>
                      <strong>{children}</strong>
                      <span className='tw-followCard-infoUserName'>@{userName}</span>
                  </div>
              </header>
              <aside>
                  <button className={buttonClassName} onClick={handleClick}>  
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                  </button>
              </aside>
          </article>
      </div>
  )
}