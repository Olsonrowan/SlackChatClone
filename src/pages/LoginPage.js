import React from 'react';
import { signin, signInWithGoogle } from '../helpers/auth'
import { addNewUser } from '../helpers/db'
import { Link } from 'react-router-dom'


class LoginPage extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        
    }
    handleLogin = async (event) =>{
        event.preventDefault()
        try{
            let { email, password } = this.state
           let UserLogin = await signin(email, password)
            this.success(UserLogin)
        }catch(err){
            this.error(err)
        }
        
    }

    handleGoogleLogin = async (event) => {
        event.preventDefault()
        try {
            let userResponse = await signInWithGoogle()
            this.success(userResponse)
        } catch(err) {
            this.error(err)
        }
    }


    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    
    success({ user, additionalUserInfo }) {
        if (additionalUserInfo && additionalUserInfo.isNewUser) {
            addNewUser(user)
        }
        console.log('', user, 'this is what you look for')
        let { state } = this.props.location
        if (state && state.from) {
            this.props.history.push(state.from.pathname)
        } else {
            this.props.history.push('/')
        }
    }

    error(err){
        console.log(err)
        alert('Email or Password is not correct')
        this.setState({
            error: err.message
        })
    }

    render(){
        return(
        <div>
            <div>
                <form onSubmit={this.handleLogin}>

                    <label htmlFor="email">Email:</label>
                        <input 
                        type='email' 
                        name='email' 
                        id="email" 
                        placeholder="E.g: shrek123@gmail.com" 
                        onChange={ this.handleChange } 
                        value={ this.state.email }
                        />

                    <label htmlFor="password">Password:</label>
                        <input 
                        type='password' 
                        name='password' 
                        id='password' 
                        placeholder="Your Password"
                        onChange={ this.handleChange } 
                        value={ this.state.password }
                        />
                        
                    <button type="submit" onClick={this.handleLogin}>Sign in!</button>
                    <p>or</p>
                    <button type="submit" onClick={ this.handleGoogleLogin }>Sign in with Google</button>

                </form>
                <div >
                    <p>Don't have an account? <Link to="/signup"> Sign up here</Link></p> 
                </div>
            </div>
        </div>
        )
    }
};
export default LoginPage

//come back to