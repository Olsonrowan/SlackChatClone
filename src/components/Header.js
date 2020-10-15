import React from 'react'
import { useDispatch } from 'react-redux'
import {auth} from 'firebase'
import {userLogout} from '../Redux/actionCreators'
import { Link } from 'react-router-dom';
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
            <Link to="/home" className="item">Home</Link>
            <Link to="/profile" className="item" >Profile</Link>
            <Link to="/login" onClick={logout} className="item">Sign out</Link>
        </div>
     </div>

 )
}



export default Header