import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {

    let [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/hareshvegad')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    }, [])

    // const data = useLoaderData()    

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Name :  {data.login}
    <img src={data.avatar_url} alt='avatar_url' width={300} className='my-6' />
    </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hareshvegad')
//     return response.json()
// }