import React from 'react'
import './styles.css'

export default function index() {
    return (
        <div className="search-input">
            <input  className="bg-gray-100 text-center text-sm h-7 w-52 border border-gray-400" 
                    type="text" 
                    placeholder="Cari" />
        </div>
    )
}
