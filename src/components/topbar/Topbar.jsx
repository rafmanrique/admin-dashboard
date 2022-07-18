import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import "./topbar.css"

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Admin Dashboard</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQExE9EAdXRlgg/profile-displayphoto-shrink_800_800/0/1649088685998?e=1663804800&v=beta&t=Ou9B9N_G4RFn-aJCteiI0WHFZ2CI_3stbfvoO84Z5ok" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar