import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-slate-500 text-3xl text-white text-center my-5 p-4' >User : {userid}</div>
  )
}

export default User