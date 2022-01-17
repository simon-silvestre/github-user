import React from 'react'
import Informations from './Informations/Informations'
import Stats from './Stats/Stats'
import profil from '../../Assets/background.jpg'
import Other from './Other/Other'

function Profil() {
    return (
        <div className="profil">
             <div className="profilImg">
                <img src={profil} alt="profil" />
            </div>
            <div className="right">
                <Informations />
                <Stats />
                <Other />
            </div>
        </div>
    )
}

export default Profil
