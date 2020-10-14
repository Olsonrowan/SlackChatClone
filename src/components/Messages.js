import React from 'react'
import { connect } from 'react-redux'
// import { db } from '../services/firebase'
import { messageAction } from '../Redux/actionCreators'
// import firebase from 'firebase'

class Messages extends React.Component{
    state={
        messages: ''
    }
    
    // getMessages = () =>{
    //     console.log(this.props.selectedChannel)
    //     firebase.firestore().collection('Messages').where("channelId", "==", this.props.selectedChannel).get().then( response =>{
    //         let messagesArr = [];
    //         response.forEach(message => {
    //             messagesArr.push({...message.data(), id: message.id})
    //           });
    //           console.log(messagesArr)
    //           this.props.messageAction(messagesArr)

    //           return messagesArr;
    //         }, reject =>{
    //           console.log(reject)
    //         })

    //     }
    
    // componentDidMount(){
    //     this.getMessages()
    // }

   
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.messageList.map(message => <p key={message.id}>{message.messageBody}</p>)}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    messageList: state.messages.messageList,
    selectedChannel: state.channels.selectedChannel
  })
  
  const mapDispatchToProps ={
    messageAction
  }
  

export  default connect(mapStateToProps, mapDispatchToProps)(Messages)