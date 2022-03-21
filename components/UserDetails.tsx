import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import todoListState from '../atoms/userid'

interface userType {
    id: number,
    name: string,
    username: string,
    email: string,
}
const UserDetails = () => {
    // add interface to usestate

    const [userDetails, setuserDetails] = useState<userType>({
        id: 0,
        name: '',
        username: '',
        email: '',
    })
    const userId = useRecoilValue(todoListState)
    console.log(userId.value, 'userId')
    // fetch data from jsonparser.com   
    useEffect(() => {
        const fetchuserDetails = async () => {
            const fetching = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`)
            const userDetails = await fetching.json()
            setuserDetails(userDetails)
        }
        fetchuserDetails()
        console.log(userDetails)
    }, [userId])

    return (
        <div className=''>
           <h1 className='text-2xl font-bold'>
                User Details
            </h1>
            <main className='-2 h-96 '>
                {/*  */}

                <table className='flex min-w-full min-h-full items-center'>
                    <thead>
                        <tr className='flex flex-col gap-1 '>
                            <th className=' px-4 py-2'>UserID</th>
                            <th className=' px-4 py-2'>Name</th>
                            <th className=' px-4 py-2'>Title</th>
                            <th className=' px-4 py-2'>Username</th>
                            <th className=' px-4 py-2'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='flex flex-col'>
                            <td className=' px-4 py-2'>{userDetails.id}</td>
                            <td className=' px-4 py-2'>{userDetails.name}</td>
                            <td className=' px-4 py-2' >{userId.title}</td>
                            <td className=' px-4 py-2'>{userDetails.username}</td>
                            <td className=' px-4 py-2 break-words'>{userDetails.email}</td>
                        </tr>
                    </tbody>

                </table>
            </main>
        </div>
    )
}

export default UserDetails