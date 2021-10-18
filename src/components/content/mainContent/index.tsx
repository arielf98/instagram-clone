import Feed from "./Feed"
import StoryBar from "./StoryBar"


export default function index() {
  const mainContentStyle = 'flex flex-col m-2 h-full w-full items-end'
  return (
    <div className={mainContentStyle}>

      <StoryBar />
      <Feed />

    </div>
  )
}
