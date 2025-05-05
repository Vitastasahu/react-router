import React from 'react'
import { useParams } from 'react-router-dom'
//useParams method introduced
//gives access to whatever mentioned in url
export function User() {
    const {userid} = useParams()
    return (
        <div className='bg-gray-600 text-white text-3xl p-4'>
          User: {userid}
        </div >
    )
}

//add "/user/xyz" in the url to run this