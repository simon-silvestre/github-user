import React from 'react'
import profil from '../../../Assets/background.jpg'

function Informations() {
    return (
        <div className="informations">
            <div className="informationImg">
                <img src={profil} alt="profil" />
            </div>
                <div className="profilInfos">
                    <div>
                        <p className="name">the octocat</p>
                        <p className="pseudo">@octocat</p>
                    </div>
                    <p className="date">joined 25 jan 2011</p>
                </div>
                <p className="profilBio">this profile has no bio</p>
        </div>
    )
}

export default Informations
