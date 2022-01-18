import React from 'react'

function Informations({profil}) {
    return (
        <div className="informations">
            <div className="informationImg">
                <img src={profil.avatar_url} alt="profil" />
            </div>
                <div className="profilInfos">
                    <div>
                        <p className="name">{profil.name}</p>
                        <p className="pseudo">@{profil.login}</p>
                    </div>
                    <p className="date">joined {profil.created_at}</p>
                </div>
                <p className="profilBio">{profil.bio === null ? 'this profile has no bio' : profil.bio}</p>
        </div>
    )
}

export default Informations
