import React from 'react'

function Stats({profil}) {
    return (
        <div className="stats">
            <div>
                <p className="statsTitle">repos</p>
                <p className="statsContent">{profil.public_repos}</p>
            </div>
            <div>
                <p className="statsTitle">followers</p>
                <p className="statsContent">{profil.followers}</p>
            </div>
            <div>
                <p className="statsTitle">following</p>
                <p className="statsContent">{profil.following}</p>
            </div>
        </div>
    )
}

export default Stats
