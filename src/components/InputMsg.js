import React from 'react';
import { connect } from 'react-redux';
import { messageAction } from '../Redux/actionCreators'


 class InputMsg extends React.Component{
    
    handleSubmit = () =>{
        let {msg, displayName} = this.state
        this.props.userAction(messageAction)
        //firestore in and out
            
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

                    <label htmlFor="msg">Text Box:</label>
                        <input 
                        type='text' 
                        name='msg' 
                        id="msg" 
                        placeholder="Type a message!" 
                        onChange={ this.handleChange } 
                        value={ this.state.msg }
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
  

 export default connect(null, mapDispatchToProps)(InputMsg)