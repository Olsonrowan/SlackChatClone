import React from 'react';
import { signin, signInWithGoogle } from '../helpers/auth'
import { addNewUser } from '../helpers/db'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { userAction } from '../Redux/actionCreators'
// import firebase from 'firebase'
class LoginPage extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        }
        
    }

    // addUser = async (userResponse) =>{
    //     console.log(userResponse)
    //    return await firebase.firestore().collection('Users').add({id: userResponse.user.uid, displayName: userResponse.user.displayName})
    //    //come back to
    // }
    

    handleLogin = async (event) =>{
        event.preventDefault()
        try{
            let { email, password } = this.state
           let UserLogin = await signin(email, password)
           
           this.props.userAction({
                uid: UserLogin.user.uid,
                displayName: UserLogin.user.displayName,
                photoURL: UserLogin.user.photoURL
           })
           console.log(UserLogin)
            this.success(UserLogin)
        }catch(err){
            this.error(err)
        }
        
    }

    handleGoogleLogin = async (event) => {
        event.preventDefault()
        try {
            let userResponse = await signInWithGoogle()
            this.props.userAction({
                uid: userResponse.user.uid,
                displayName: userResponse.user.displayName,
                photoURL: userResponse.user.photoURL
            })

            this.success(userResponse)
        } catch(err) {
            this.error(err)
        }
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
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
            this.props.history.push('/home')
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
            
        <div className="ui container">
            <div className="ui basic center aligned segment">
                <form className=" ui form" onSubmit={this.handleLogin}>
                        
                    <label htmlFor="email">Email:     </label>
                        <input  
                        type='email' 
                        name='email' 
                        id="email" 
                        placeholder="E.g: shrek123@gmail.com" 
                        onChange={ this.handleChange } 
                        value={ this.state.email }
                        />
                        
                        
                    <label htmlFor="password">Password:     </label>
                        <input 
                        type='password' 
                        name='password' 
                        id='password' 
                        placeholder="Your Password"
                        onChange={ this.handleChange } 
                        value={ this.state.password }
                        />
                        
                    <button type="submit" className="ui  blue small button" onClick={this.handleLogin}>Sign in!</button>
                    <p className="ui horizontal divider">or</p>
                    <button type="submit" className="ui positive button" onClick={ this.handleGoogleLogin }>Sign in with Google</button>

                </form>
                <div >
                    <p>Don't have an account? <Link to="/signup"> Sign up here</Link></p> 
                </div>
            </div>
        </div>
        )
    }
};

// const mapStateToProps = state =>({
//     user: user.userid

//   })

const mapDispatchToProps = {
    userAction
}

export default connect(null, mapDispatchToProps)(LoginPage)
