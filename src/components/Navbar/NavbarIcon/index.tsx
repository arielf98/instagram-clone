import { MdHome, MdExplore, MdFavoriteBorder, MdChatBubble } from "react-icons/md";
import ProfileIcon from "./ProfileIcon"

export default function index() {

    const navbarIconStyle = `m-36 p-5 flex flex-row items-center  justify-around w-64`

    return (
        <div className={navbarIconStyle} >

            <MdHome size={25} cursor='pointer' />
            <MdChatBubble size={24} cursor='pointer' />
            <MdExplore size={25} cursor='pointer' />
            <MdFavoriteBorder size={25} cursor='pointer' />
            <ProfileIcon />
        </div>
    )
}
