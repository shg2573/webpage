import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div className='text-center text-blue-400 p-4 text-3xl flex bg-green-300 items-center justify-center'>
      <h1>user {userid}</h1>
    </div>
  )
}

export default User
