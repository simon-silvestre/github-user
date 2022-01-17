import React from 'react'
import profil from '../../../Assets/background.jpg'

function Informations() {
    return (
        <div className="informations">
            <div className="profilImg">
                <img src={profil} alt="profil" />
            </div>
            <div className="right">
                <div className="profilInfos">
                    <div>
                        <p>the octocat</p>
                        <p>@octocat</p>
                    </div>
                    <p>joined 25 jan 2011</p>
                </div>
                <p>this profile has no bio</p>
            </div>
        </div>
    )
}

export default Informations
