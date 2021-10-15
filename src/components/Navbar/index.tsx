import NavbarIcon from './NavbarIcon'
import Search from './Search'
import NavbarLogo from './NavbarLogo'

export default function Navbar() {
    return (
        <>
         <div className="border-b-2 w-screen h-14 bg-white flex items-center ">
            <NavbarLogo/>
            <Search/>
            <NavbarIcon/>
        </div>
        </>
    )
}
