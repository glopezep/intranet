import React from 'react'
import DirectoryHeader from './DirectoryHeader'
import Profile from './Profile'


const ProfileBox = (props) => (
  <div className="container">
    <DirectoryHeader {...props} />
    <Profile />

    <style jsx>{`
      .container {
        background-color: #fff;
        flex: 1;
        padding: 2em;
      }
    `}</style>
  </div>
)

export default ProfileBox
