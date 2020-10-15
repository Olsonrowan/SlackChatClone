import React from 'react'
import { Link, Redirect } from 'react-router-dom'


const WelcomePage = props => {
    
    return (
        <div>
            { props.authenticated ?(
                <Redirect to="/home"></Redirect>
            ) : <div className="ui basic center aligned segment">
                    <h1>Welcome to my Chat app! Please login or sign up </h1>
                </div>}

            { props.authenticated ? (
                <h1>Home</h1>
            ) : (
                <div className="ui container">
                    <div className="ui basic center aligned segment">
                        <button type="submit" className="ui inverted blue large button">
                            <Link to="/login"> Login </Link>
                        </button>
                    </div>
                    <div className="ui horizontal divider">OR</div>
                    <div className="ui basic center aligned segment">
                        <button type="submit" className="ui large inverted green button">
                            <Link to="/signup"> Sign up </Link>
                        </button>
                    </div>
                    
                
                </div>
                
            )} 
        </div>
    )
}

export default WelcomePage


//come back to