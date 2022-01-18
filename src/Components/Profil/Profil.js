import React from 'react'
import Informations from './Informations/Informations'
import Stats from './Stats/Stats'
import Other from './Other/Other'


function Profil({profil}) {
    return (
        <div className="profil">
             <div className="profilImg">
                <img src={profil.avatar_url} alt="profil" />
            </div>
            <div className="right">
                <Informations profil={profil} />
                <Stats profil={profil} />
                <Other profil={profil} />
            </div>
        </div>
    )
}

export default Profil
