import React from 'react'
import pin from '../../../Assets/pin.png'
import twitter from '../../../Assets/twitter.png'
import link from '../../../Assets/link.png'
import appart from '../../../Assets/appartements.png'

function Other({profil}) {
    return (
        <div className="other">
            <div className="container">
                <div>
                    <img src={pin} alt="" />
                    <p>{profil.location === null ? 'not available' : profil.location}</p>
                </div>
                <div>
                    <img src={link} alt="" />
                    <a href={profil.html_url}>{profil.html_url}</a>
                </div>
            </div>
            <div className="container">
                <div>
                    <img src={twitter} alt="" />
                    <p>{profil.twitter_username === null ? 'not available' : profil.twitter_username}</p>
                </div>
                <div>
                    <img src={appart} alt="" />
                    <p>{profil.company === null ? 'not available' : profil.company}</p>
                </div>
            </div>
        </div>
    )
}

export default Other
