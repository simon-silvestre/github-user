import React from 'react'
import search from '../Assets/search.png'


function SearchBar({searchProfil, setInput, input}) {
    return (
        <div className="searchBar">
            <img src={search} alt="" />
            <input type="text" value={input} onChange={((e) => setInput(e.target.value))} onKeyPress={(e) => e.key === 'Enter' ? searchProfil() : ''} placeholder='Search GitHub username...'/>
            <button onClick={searchProfil}>Search</button>
        </div>
    )
}

export default SearchBar
