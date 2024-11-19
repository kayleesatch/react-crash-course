import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
    const { id } = useParams()
    const [user, setUser] = useState({})

    async function fetchUser() {
        const { data } = await axios.get(`https://api.instagram.com/${id}`)
        console.log(data)
        setUser(data)
    }

    useEffect(() => {
        setTimeout(() => {
            fetchUser()
        }, 2000)
     }, [])

     function renderUsers() {
        return users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
            <p>{ user.id }</p>
            <p>{ user.name }</p>
            <p>{ user.email }</p>
            <p>{ user.username }</p>
            </Link>
        ))
     }

     function renderSkeletonLoading() {
        return <h1>Loading...</h1>
     }

    return (
        <div>
            {users.length ? renderUsers() : <h1>Loading...</h1>}
                </div>
    ) 
}

export default Users