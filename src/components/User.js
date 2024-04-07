import React from 'react'

export default function User(props) {
    const {user,deletedUsers} = props ;
    const {name, username,email,address} = user
  return (
    <li className='bg-primary m-2 p-2' key={user.id}>
    <p>name :{name}</p>
    <p>name :{username}</p>
    <p>name :{email}</p>
    <p>name :{address.street}</p>
    <button className='btn btn-danger' onClick={()=>deletedUsers(user.id)} >Delete</button>
 </li>
  )
}
