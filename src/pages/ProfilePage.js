import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header'
import {userAction, userUpdate} from '../Redux/actionCreators'
import firebase from 'firebase'

class ProfilePage extends React.Component{
    

   
    updateUser = () =>{
        try{
        firebase.firestore().collection('Users').update({displayName: this.props.displayName, email: this.state.email})
        }catch(err){
          console.log(err)
        }
    
    
      }


    handleUpdate = (event) =>{
        event.preventDefault()
        console.log(this.props.user.uid)
        firebase.firestore().collection('Users').where("uid", "==", this.props.user.uid).get().then( response =>{
              this.props.userUpdate(this.updateUser())
                console.log(this.props.user.displayName)
            }, reject =>{
              console.log(reject)
            })
    
        }


    success=()=>{
        let { state } = this.props.location
        if (state && state.from) {
            this.props.history.push(state.from.pathname)
        } else {
            this.props.history.push('/')
        }
    }

    


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    error(err){
        console.log(err)
        alert('Name unavailable')
        this.setState({
            error: err.message
        })
    }

    render(){
        return(
        <div>
            <Header></Header>
            <div className="ui container">
            <div className="ui basic center aligned segment" >
                <form className="ui form">

                    <label htmlFor="displayName">Display Name</label>
                        <input 
                        type='text' 
                        name='displayName' 
                        id="displayName" 
                        placeholder={this.props.user.displayName} 
                        onChange={ this.handleChange } 
                        value={ this.props.displayName }
                        />
                            
                        <label htmlFor="email">Email:</label>
                        <input 
                        type='email' 
                        name='email' 
                        id="email" 
                        placeholder="E.g: shrek123@gmail.com" 
                        onChange={ this.handleChange } 
                        value={ this.props.email }/>

                        
                        <button className="ui blue small button" onClick={this.handleUpdate}> Update and save. </button>
                    

                        
                        {/* <input type="file" accept="image/*" multiple = "false" /> */}
                        
                    

                </form>
            </div>


            </div>
        </div>
        )
    }
};

const mapDispatchToProps ={
   userAction,
   userUpdate
  }

const mapStateToProps = state =>({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

