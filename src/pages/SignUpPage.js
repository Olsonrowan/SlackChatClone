import React from 'react';

import { Register } from '../helpers/auth'

import { Link } from 'react-router-dom'
import { userAction } from '../Redux/actionCreators'
import { connect } from 'react-redux';




class SignUpPage extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            displayName: '',
            error: ''
        }
    
    }
    
    // addUser = async (signUpUser) =>{
    //    return await firebase.firestore().collection('Users').add({uid: signUpUser.user.uid, displayName: signUpUser.user.displayName})
       
    // }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignUp = async event =>{
        event.preventDefault()
        try {
            let {displayName, email, password} = this.state
            let signUpUser = await Register(displayName, email, password)
            console.log(signUpUser)

            // this.props.userAction(signUpUser)
            this.props.userAction({
                uid: signUpUser.user.uid,
                displayName: signUpUser.displayName,
                photoURL: signUpUser.photoURL
            })

            // this.addUser(signUpUser)
            console.log(signUpUser)
            this.success()
        
        } catch (err) {
            this.error(err)
        }
        
    }
    
    success = () => {
        let { state } = this.props.location
        if (state && state.from) {
            this.props.history.push(state.from.pathname)
        } else {
            this.props.history.push('/home')
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
        <div className="ui container">
            <div className="ui basic center aligned segment">
                <form className=" ui form">

                <label htmlFor="displayName">Display name:</label>
                    <input 
                    type='text' 
                    name='displayName' 
                    id="displayName" 
                    placeholder="Enter your display name" 
                    onChange={ this.handleChange } 
                    value={ this.state.displayName }/>

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
                    
                    <button className="ui blue small button" onClick={this.handleSignUp} >Create and Start Chatting!</button>
                    

                </form>
                
                <span className="ui horizontal divider">/</span>
                <div>
                    <p>Already have an account? <Link to="/login"> Sign in here</Link></p> 
                </div>
            </div>
        </div>
        )
    }
};

const mapDispatchToProps ={
  userAction
}
export default connect(null, mapDispatchToProps)(SignUpPage)