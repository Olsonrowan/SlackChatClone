import React from 'react';
// import { Link } from 'react-router-dom'
// import { updateDisplayName } from '../helpers/auth'
//uuid

class ProfilePage extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: this.displayName,
            photoUrl: this.photoUrl,
            error: ''
        }
        this.handleChange = this.handleChange.bind(this)        
    }

   


    success(){
        let { state } = this.props.location
        if (state && state.from) {
            this.props.history.push(state.from.pathname)
        } else {
            this.props.history.push('/')
        }
    }

    // handleSubmit = async (event) =>{
    //     event.preventDefault()
    //     try {
    //         let { displayName } = this.state
    //         let updateProfile = await updateDisplayName(displayName)
    //         this.success(updateProfile)
    //     } catch (err) {
    //         this.error(err)
    //     }
    // }


    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
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
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="displayName">Display Name</label>
                        <input 
                        type='text' 
                        name='displayName' 
                        id="displayName" 
                        placeholder={this.state.displayName} 
                        onChange={ this.handleChange } 
                        value={ this.state.displayName }
                        />

                        
                    <button type="submit" onClick={this.handleSubmit}>Save</button>

                </form>
            </div>
        </div>
        )
    }
};
export default ProfilePage

//come back to