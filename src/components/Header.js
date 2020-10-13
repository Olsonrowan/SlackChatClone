import React from 'react'
import signout from '../helpers/auth'

function Header(props){
 return(

     <div>
         <button onClick={signout()}>Sign Out</button>
     </div>

 )
}



export default Header