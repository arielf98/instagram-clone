
import FeedCard from './FeedCard'

export default function Feed() {

  const feedStyle = 'h-full w-3/5 border-r border-gray-200 rounded'



  return (
    <div className={feedStyle}>

      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />

    </div>
  )
}
