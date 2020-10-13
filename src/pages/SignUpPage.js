import React from 'react';

import { signup } from '../helpers/auth'

import { Link } from 'react-router-dom'



class SignUpPage extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.error = this.error.bind(this)
    }
    

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignUp = async event =>{
        event.preventDefault()
        try {
            let {email, password} = this.state
            await signup(email, password)
            this.success()
        } catch (err) {
            this.error(err)
        }
        
    }
    
    success() {
        let { state } = this.props.location
        if (state && state.from) {
            this.props.history.push(state.from.pathname)
        } else {
            this.props.history.push('/')
        }
    }

    error(err){
        console.log(err)
        alert('Email in use or invalid password')
        this.setState({
            error: err.message
        })

    }

    render(){
        return(
        <div>
            <div>
                <form onSubmit={this.handleSubmit}>

                {/* <label htmlFor="displayName">Display name:</label>
                    <input 
                    type='text' 
                    name='displayName' 
                    id="displayName" 
                    placeholder="Enter your display name" 
                    onChange={ this.handleChange } 
                    value={ this.state.displayName }/> */}

                    <label htmlFor="email">Email:</label>
                    <input 
                    type='email' 
                    name='email' 
                    id="email" 
                    placeholder="E.g: shrek123@gmail.com" 
                    onChange={ this.handleChange } 
                    value={ this.state.email }/>

                    <label htmlFor="password">Password:</label>
                    <input 
                    type='password' 
                    name='password' id='password' 
                    placeholder="Your Password"
                    onChange={ this.handleChange } 
                    value={ this.state.password }/>
                    
                    <button type="submit" onClick={this.handleSignUp} >Sign Up!</button>
                    

                </form>
                <div >
                    <p>Already have an account? <Link to="/login"> Sign in here</Link></p> 
                </div>
            </div>
        </div>
        )
    }
};
export default SignUpPage