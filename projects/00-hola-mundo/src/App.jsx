import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
      name: 'Miguel Angel',
      userName: 'midudev',
      isFollowing: true
  },
  {
      name: 'Elon Musk',
      userName: 'elonmusk',
      isFollowing: false
  },
  {
      name: 'Bill Gates',
      userName: 'billgates',
      isFollowing: true
  }
]

export function App() {
  return (
    <section className='App'>
        {
            users.map(({ name, userName, isFollowing }) => (
                <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                  {name}
                </TwitterFollowCard>
            ))
        }
    </section>
  )
}