import MainContent from './mainContent'
import Sidebar from './sidebar'

export default function index() {

  const mainContentStyle = 'flex flex-row '
  return (
    <div className={mainContentStyle} >
      <MainContent />
      <Sidebar />
    </div>
  )
}
