import React from 'react';
import { connect } from 'react-redux';
import { messageAction } from '../Redux/actionCreators'


 class InputMsg extends React.Component{
    
    
    handleSubmit = () =>{
        firebase.firestore().collection('messages').add({messageBody: this.state.message, channelId: this.props.channelId, userId: this.props.user.uid} )
            
    }

    

    getMessages = () =>{
        firebase.firestore().collection('messages').where("channelId", "==", this.props.selectedChannel).get().then( response =>{
            let messagesArr = [];
            response.forEach(message => {
                messagesArr.push({...message.data(), id: message.id})
              });
              console.log(messagesArr)
              this.props.messageAction(messagesArr)
    
              return messagesArr;
            }, reject =>{
              console.log(reject)
            })
    
        }


    handleChange =(event) => {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render(){
        return(
            
            <div>
                <form onSubmit={this.handleLogin}>

                    <label htmlFor="message">Text Box:</label>
                        <input 
                        type='text' 
                        name='message' 
                        id="message" 
                        placeholder="Type a message!" 
                        onChange={ this.handleChange } 
                        value={ this.state.message }
                        />

                    
                        
                    <button type="submit" onClick={this.handleSubmit}>Sign in!</button>

                </form>
            </div>
        )
    }
 }

 const mapDispatchToProps ={
    messageAction
  }

  const mapStateToProps = state => ({
    channelId: state.channels.selectedChannel,
    user: state.user
  })

  

 export default connect(mapStateToProps, mapDispatchToProps)(InputMsg)