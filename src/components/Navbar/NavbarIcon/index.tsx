import { MdHome, MdExplore, MdFavoriteBorder, MdChatBubble } from "react-icons/md";
import ProfileIcon from "./ProfileIcon"

export default function index() {

    const navbarIconStyle = `m-36 p-5 flex flex-row items-center  justify-around w-64`

    return (
        <div className={navbarIconStyle} >

            <MdHome size={30} cursor='pointer' />
            <MdChatBubble size={27} cursor='pointer' />
            <MdExplore size={27} cursor='pointer' />
            <MdFavoriteBorder size={27} cursor='pointer' />
            <ProfileIcon />
        </div>
    )
}
