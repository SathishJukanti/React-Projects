import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/HiteshChoudhary')
    //      .then((res) => res.json())
    //      .then((data) => {
    //         console.log(data)
    //         setData(data)
    //      })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        GitHub Followers: {data.followers}
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/HiteshChoudhary')
    return response.json()
}