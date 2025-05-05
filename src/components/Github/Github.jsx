import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export function Github() {

    //using loader instead of state to store data such that it's already loaded, doesn't take time to load info as it's loaded before
    const data = useLoaderData()

    // const[data, setData] = useState([]) 
    // //to print or get value in state

    // useEffect(() => {
    //     fetch('https://api.github.com/users/vitastasahu')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers} {data.login}
            <img src={data.avatar_url} alt="git picture profile" width={300} />
        </div>
    )
}

//logically nicely we SHOULD just make another file for exporting something like it is done below but this is also possible
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vitastasahu')
    return response.json()
}