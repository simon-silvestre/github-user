import React from 'react'
import pin from '../../../Assets/pin.png'
import twitter from '../../../Assets/twitter.png'
import link from '../../../Assets/link.png'
import appart from '../../../Assets/appartements.png'

function Other() {
    return (
        <div className="other">
            <div className="container">
                <div>
                    <img src={pin} alt="" />
                    <p>san fransisco</p>
                </div>
                <div>
                    <img src={link} alt="" />
                    <a href="https://github.blog">https://github.blog</a>
                </div>
            </div>
            <div className="container">
                <div>
                    <img src={twitter} alt="" />
                    <p>not available</p>
                </div>
                <div>
                    <img src={appart} alt="" />
                    <p>@github</p>
                </div>
            </div>
        </div>
    )
}

export default Other
