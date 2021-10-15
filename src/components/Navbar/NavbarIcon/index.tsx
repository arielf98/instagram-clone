import { MdHome, MdExplore, MdFavoriteBorder, MdChatBubble } from "react-icons/md";

export default function index() {
    return (
        <div className="m-36 p-5 flex flex-row items-center  justify-around w-64" >

            <MdHome size={30} cursor='pointer' />
            <MdChatBubble size={27} cursor='pointer' />
            <MdExplore size={27} cursor='pointer' />
            <MdFavoriteBorder size={27} cursor='pointer' />
        </div>
    )
}
