import React from 'react'

const Welcome = ({user}) => {
  return (
    <div>
      Welcome {user.username.toUpperCase()}
      <button>LogOut</button>
    </div>
  )
}

export default Welcome
