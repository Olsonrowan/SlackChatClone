import React from 'react'
import { connect } from 'react-redux'
// import { db } from '../services/firebase'
import { messageAction } from '../Redux/actionCreators'
// import firebase from 'firebase'

class Messages extends React.Component{
    state={
        messages: ''
    }
    
    
   
    render(){
        return(
            <div>
                <div id="msgPOS" className="ui basic aligned segment">
                    <div className="event" >
                    <div className="label">   
                </div>
                <div className="content">
                        {this.props.messageList.map(message => <div className="ui aligned segment" style={{maxWidth: "600px"}}> <p id="chatName" className="summary" key={message.id}>{this.props.user.displayName}:</p><p> {message.messageBody}</p></div>)}
                </div>
                </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state =>({
    messageList: state.messages.messageList,
    selectedChannel: state.channels.selectedChannel,
    user: state.user
  })
  
  const mapDispatchToProps ={
    messageAction
  }
  

export  default connect(mapStateToProps, mapDispatchToProps)(Messages)