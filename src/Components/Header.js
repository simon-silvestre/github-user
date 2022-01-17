import React, { useState } from 'react'
import sun from '../Assets/sun.png'
import moon from '../Assets/moon.png'

function Header() {
    const [theme, setTheme] = useState('dark')
    
    return (
        <div className="header">
            <h1>devfinder</h1>
            { theme === 'dark' ? (
                <p onClick={() => setTheme('light')}>dark <img src={moon} alt="dark button"/></p>
            ): (
                <p onClick={() => setTheme('dark')}>light <img src={sun} alt="light button"/></p>
            )}
        </div>
    )
}

export default Header
