import React from 'react';
import { signin, signInWithGoogle } from '../helpers/auth'

class LoginPage extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        }
        
        
    }
    handleLogin = () =>{
        let { email, password } = this.state
        signin(email, password)
    }

    handleGoogleLogin = () => {
        signInWithGoogle()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
        <div>
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label for="email">Email:</label>
                    <input type='email' name='email' id="email" 
                    placeholder="E.g: shrek123@gmail.com" 
                    onChange={ this.handleChange } 
                    value={ this.state.email }/>

                    <label for="password">Password:</label>
                    <input type='password' name='password' id='password' placeholder="Your Password"
                     onChange={ this.handleChange } 
                     value={ this.state.password }/>
                    
                    <button type="submit" onClick={this.handleLogin} >Sign in!</button>
                    <p>or</p>
                    <button type="submit" onClick={ this.handleGoogleLogin } >Sign in with Google</button>

                </form>
                {/* <div >
                    <p>Don't have an account? <Link to="/signup"> Sign Up!</Link></p> 
                </div> */}
            </div>
        </div>
        )
    }
};
export default LoginPage