import SidebarContent from "../../atom/SidebarContent"
import SuggestionSidebar from "../../atom/SuggestionSidebar"


export default function index() {

  const sidebarStyle: string = 'm-2 w-2/4'
  const sidebarContent: string = "pt-5 pl-2 w-full h-full mt-5 fixed"

  return (
    <div className={sidebarStyle}>
       <div className={sidebarContent}>
          <SidebarContent />
          <SuggestionSidebar />

       </div>
    </div>
  )
}
