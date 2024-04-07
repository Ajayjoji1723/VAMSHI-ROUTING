import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import User from './User';

export default function Home() {
    const [users,setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async ()=>{
        try{
            setLoading(true);
            const response =  await axios.get("https://jsonplaceholder.typicode.com/users");
            const usersData = await response.data;
            console.log(usersData)
            setUsers(usersData)
            setLoading(false)

        }catch(e){
            console.log(e, 'failed while data fecthing')
        }
    }


    const deletedUsers=id=>{
        const deleted = users.filter(user=>id !== user.id)
        setUsers(deleted)
    }

  return (
    <div>
        <h1>All Users</h1>
        <ul style={{listStyleType:"none"}}>
            {isLoading ? <div class="spinner-border text-primary"></div>:(
                users.map(user=>(
                    <User user={user} deletedUsers={deletedUsers}/>
                ))
            )}
        </ul>
    </div>
  )
}
