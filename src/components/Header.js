import React from 'react'
import { useDispatch } from 'react-redux'
import {auth} from 'firebase'
import {userLogout} from '../Redux/actionCreators'
// import {signout} from '../helpers/auth'

function Header(){
    const dispatch = useDispatch();

    const logout = () =>{
       auth().signOut() 
       dispatch(userLogout())
    }

 return(

     <div>
        <div className="ui menu">
            <div className="header item">Classroom Chatter!</div>
            <a href="/home" className="item">Home</a>
            <a href="/profile" className="item">Profile</a>
            <a href="/login" onClick={logout} className="item">Sign out</a>
        </div>
     </div>

 )
}



export default Header