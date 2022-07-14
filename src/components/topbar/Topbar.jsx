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
                <img src="https://lh3.googleusercontent.com/a-/AFdZucqgo2d3mu3OzZg2GA76dMtgwMIKIHo6rsnTNHQ1WQ=s360-p-rw-no" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar