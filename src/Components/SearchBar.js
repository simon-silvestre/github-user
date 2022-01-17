import React from 'react'
import search from '../Assets/search.png'

function SearchBar() {
    return (
        <div className="searchBar">
            <img src={search} alt="" />
            <input type="text" placeholder='Search GitHub username...'/>
            <button>Search</button>
        </div>
    )
}

export default SearchBar
