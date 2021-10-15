import './styles.css'
import { MdSearch } from "react-icons/md";

export default function index() {
    return (
        <div className="search-input">
            <input  className="bg-gray-100 text-center text-sm h-7 w-52 border border-gray-400" 
                    type="text" 
                    
                    placeholder="Cari" />
            <div style={{ position: 'absolute' , marginTop: -20, marginLeft: 75}}>
                <MdSearch 
                    size={15}
                    color="grey" />
            </div>
        </div>
    )
}
