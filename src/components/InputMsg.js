import React from 'react';
import { connect } from 'react-redux';
import { messageAction } from '../Redux/actionCreators'
import firebase from 'firebase'


 class InputMsg extends React.Component{
    
    
    // handleSubmit = (event) =>{
    //     event.preventDefault()
    //     firebase.firestore().collection('messages').add({messageBody: this.state.message, channelId: this.props.channelId, userId: this.props.user.uid} )
            
    // }


    addMsg = (event) =>{
        event.preventDefault()
        try{
        firebase.firestore().collection('messages').add({messageBody: this.state.message,  dateCreated: new Date() ,channelId: this.props.channelId, userId: this.props.user.uid})
        
        this.getMessages()
        }catch(err){
          console.log(err)
        }
    
    
      }


    getMessages = () =>{
        firebase.firestore().collection('messages').where("channelId", "==", this.props.channelId).orderBy('dateCreated','asc').get().then( response =>{
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

        

    
        handleChange = event => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    
    render(){
        return(
            
            <div className="ui basic  aligned segment" >
                <form className="ui form">

                    
                        <textarea 
                        style={{maxHeight: "100px", maxWidth:"600px"}} 
                        rows="3"
                        type='text' 
                        name='message' 
                        id="message" 
                        placeholder="Type a message!" 
                        onChange={ this.handleChange } 
                        value={ this.props.message }
                        />


                        
                    <button type="submit" className="ui button blue large" onClick={this.addMsg}> Send </button>

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