import React,{useContext} from 'react'
import UserContext from '../contexts/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>login in first</div>
    return <div>Welcome {user}</div>
}

export default Profile